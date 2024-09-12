import React from 'react';
import { FaRobot } from 'react-icons/fa';
import ChatBox from './ChatBox';
import InputArea from './InputArea';

const ChatMode = ({ messages, onSendMessage, isListening, onToggleListening }) => (
  <div className="mt-8">
    <div className="flex flex-col h-[600px] w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
      <header className="bg-gray-100 px-4 py-3 flex items-center">
        <div className="flex items-center gap-3">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border-2 border-gray-500">
            <FaRobot className="text-gray-500 m-auto" size={24} />
          </span>
          <div className="text-gray-800 text-sm font-medium">ChatGPT</div>
        </div>
      </header>
      <ChatBox messages={messages} />
      <InputArea 
        onSendMessage={onSendMessage} 
        isListening={isListening}
        onToggleListening={onToggleListening}
      />
    </div>
  </div>
);

export default ChatMode;
