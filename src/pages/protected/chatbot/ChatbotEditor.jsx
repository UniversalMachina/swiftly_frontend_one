import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sidebar from '../Sidebar';
import EditPromptTab from './EditPromptTab';
import ChatTab from './ChatTab';

const ChatbotEditor = ({ username }) => {
  const { chatbotId } = useParams();
  const [chatbotName, setChatbotName] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [isPromptSaved, setIsPromptSaved] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [lastBotMessage, setLastBotMessage] = useState('');

  useEffect(() => {
    if (chatbotId) {
      fetchChatbotDetails();
    }
  }, [chatbotId]);

  const fetchChatbotDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/chatbot/${chatbotId}`);
      const chatbot = response.data;

      setChatbotName(chatbot.name);
      setSystemPrompt(chatbot.prompt);
      setIsPromptSaved(true);
    } catch (error) {
      console.error('Error fetching chatbot details:', error);
      alert('Failed to load chatbot details');
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="content flex-1 ml-64">
        <div className="p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {chatbotId ? 'Edit Chatbot' : 'Create New Chatbot'}
          </h1>
          <Tabs>
            <TabList className="flex mb-4 border-b">
              <Tab className="px-4 py-2 font-medium text-gray-600 hover:text-gray-800 cursor-pointer">
                Edit System Prompt
              </Tab>
              <Tab
                className={`px-4 py-2 font-medium text-gray-600 hover:text-gray-800 cursor-pointer ${
                  !isPromptSaved ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!isPromptSaved}
              >
                Chat with Chatbot
              </Tab>
            </TabList>

            <TabPanel>
              <EditPromptTab
                chatbotId={chatbotId}
                chatbotName={chatbotName}
                systemPrompt={systemPrompt}
                setChatbotName={setChatbotName}
                setSystemPrompt={setSystemPrompt}
                setIsPromptSaved={setIsPromptSaved}
                username={username}
              />
            </TabPanel>

            <TabPanel>
              <ChatTab
                chatbotId={chatbotId}
                username={username}
                sessionId={sessionId}
                setSessionId={setSessionId}
                systemPrompt={systemPrompt}
                lastBotMessage={lastBotMessage}
                setLastBotMessage={setLastBotMessage}
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ChatbotEditor;
