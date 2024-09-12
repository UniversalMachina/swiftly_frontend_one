import React from 'react';
import { FaPlus } from 'react-icons/fa';

const ChatbotList = ({ chatbots, onSelectChatbot, onCreateNew }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-4">
    <h2 className="text-lg font-semibold mb-2">Your Chatbots</h2>
    <ul>
      {chatbots.map(chatbot => (
        <li 
          key={chatbot.id} 
          className="cursor-pointer hover:bg-gray-200 p-2 rounded"
          onClick={() => onSelectChatbot(chatbot.id)}
        >
          {chatbot.name}
        </li>
      ))}
    </ul>
    <button 
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center"
      onClick={onCreateNew}
    >
      <FaPlus className="mr-2" /> Create New Chatbot
    </button>
  </div>
);

export default ChatbotList;
