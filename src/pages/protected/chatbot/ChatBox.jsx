import React, { useEffect, useRef } from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';

function ChatBox({ messages }) {
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
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
  );
}

export default ChatBox;
