import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';
import InputArea from './InputArea';

const ChatTab = ({ chatbotId, username, sessionId, setSessionId, systemPrompt, lastBotMessage, setLastBotMessage }) => {
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (!sessionId) {
      setSessionId(crypto.randomUUID());
    }
  }, [sessionId]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (message) => {
    if (!chatbotId || !sessionId) return;

    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/chatbot/interact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          session_id: sessionId,
          user_id: username,
          chatbot_id: chatbotId,
          last_bot_message: lastBotMessage,
        }),
      });

      const reader = response.body.getReader();
      let accumulatedText = '';
      let finalBotMessage = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        accumulatedText += new TextDecoder().decode(value);
        const lines = accumulatedText.split('\n');

        for (let i = 0; i < lines.length - 1; i++) {
          const data = JSON.parse(lines[i]);
          if (data && data.reply) {
            finalBotMessage += data.reply;
            setMessages((prevMessages) => {
              const lastMessage = prevMessages[prevMessages.length - 1];
              if (lastMessage.sender === 'bot') {
                return [
                  ...prevMessages.slice(0, -1),
                  { ...lastMessage, text: lastMessage.text + data.reply },
                ];
              } else {
                return [...prevMessages, { text: data.reply, sender: 'bot' }];
              }
            });
          }
        }
        accumulatedText = lines[lines.length - 1];
      }

      setLastBotMessage(finalBotMessage);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsListening(!isListening);
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border">
      <header className="bg-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="text-gray-800 text-lg font-medium">Chat with {systemPrompt}</div>
        <div className="text-sm text-gray-500">Session ID: {sessionId}</div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={chatBoxRef}>
        {messages.map((message, index) => (
          <div key={index} className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}>
            {message.sender === 'user' ? (
              <>
                <div className={`rounded-lg p-3 max-w-[75%] bg-blue-500 text-white`}>
                  <p>{message.text}</p>
                </div>
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border-2 border-gray-500">
                  <FaUser className="text-gray-500 m-auto" size={24} />
                </span>
              </>
            ) : (
              <>
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border-2 border-gray-500">
                  <FaRobot className="text-gray-500 m-auto" size={24} />
                </span>
                <div className={`rounded-lg p-3 max-w-[75%] bg-gray-100 text-gray-800`}>
                  <p>{message.text}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <InputArea onSendMessage={handleSendMessage} isListening={isListening} onToggleListening={toggleListening} />
    </div>
  );
};

export default ChatTab;
