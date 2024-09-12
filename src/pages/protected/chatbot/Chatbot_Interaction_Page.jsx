import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Search, Eye, MoreVertical } from 'lucide-react';
import { FaPlus } from 'react-icons/fa';
import Sidebar from '../Sidebar';

const ChatbotInteractionPage = ({ username, onSignOut }) => {
  const [chatbots, setChatbots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchChatbots();
  }, []);

  const fetchChatbots = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/chatbot/list?user_id=${username}`);
      setChatbots(response.data);
    } catch (error) {
      console.error('Error fetching chatbots:', error);
    }
  };

  const handleCreateChatbot = () => {
    navigate(`/chatbots/new`);
  };

  const handleSelectChatbot = (chatbotId) => {
    navigate(`/chatbots/${chatbotId}/edit`);
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar included in the layout */}
      <div className="content flex-1 ml-64 bg-blue-600 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <header className="text-white mb-8">
            <h1 className="text-3xl font-bold flex items-center">
              <span className="mr-2">&#128187;</span> My AI Agents
            </h1>
            <p>Explore and improve your AI-Powered AI Agents &#128640;</p>
          </header>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <div className="relative">
                  <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border rounded-md" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <select className="border rounded-md px-4 py-2">
                  <option>Sort by</option>
                </select>
              </div>
              <div className="text-right">
                <p>Remaining AI Agents: 2</p>
                <p>Remaining Wallet Balance: $4.9200</p>
                <a href="#" className="text-blue-600">View usage details</a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chatbots.map((chatbot, index) => (
                <div key={index} className="border rounded-lg shadow-sm">
                  <div className="px-4 py-3 flex justify-between items-center border-b">
                    <h3 className="font-semibold">{chatbot.name}</h3>
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-gray-100">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-100">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p>Display Name: {chatbot.displayName}</p>
                    <p>Model: {chatbot.model}</p>
                    <p>Support Email: {chatbot.supportEmail}</p>
                    <p>Total Characters: {chatbot.totalCharacters}</p>
                    <p>{chatbot.conversations} conversations, {chatbot.messages} messages</p>
                    <button
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                      onClick={() => handleSelectChatbot(chatbot.id)}
                    >
                      Edit Chatbot
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                onClick={handleCreateChatbot}
              >
                <FaPlus className="mr-2" /> Create New Chatbot
              </button>
            </div>
          </div>

          <footer className="mt-8 text-white text-sm flex justify-between items-center">
            <p>All Rights Reserved © Stammer.ai 2024</p>
            <div>
              <a href="#" className="mr-4">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInteractionPage;
