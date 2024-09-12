import React, { useState } from 'react';
import { Info, ChevronDown } from 'lucide-react';

const AIAgentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    displayName: '',
    initialMessages: 'Hi! What can I help you with?',
    conversationStarter: '',
    keepStarter: false,
    popupType: 'Initial messages popup',
    popupDelay: '5',
    systemPrompt: '// This is a common way for companies to guide the AI as a chatbot agent.',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Add AI Agent Details</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center space-x-1 mb-1 font-medium">
              <span>Name</span>
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter a name for the chatbot"
            />
          </div>
          <div>
            <label className="flex items-center space-x-1 mb-1 font-medium">
              <span>Display Name (optional)</span>
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Name shown to users on your Chat Widget"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Initial Messages</label>
            <textarea
              name="initialMessages"
              value={formData.initialMessages}
              onChange={handleChange}
              className="w-full p-2 border rounded h-24"
              placeholder="Hi! What can I help you with?"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium">Conversation Starter/Suggested Messages</label>
            <textarea
              name="conversationStarter"
              value={formData.conversationStarter}
              onChange={handleChange}
              className="w-full p-2 border rounded h-24"
              placeholder="Predefined clickable messages for user prompts. Separate multiple messages with new lines."
            ></textarea>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="keepStarter"
            name="keepStarter"
            checked={formData.keepStarter}
            onChange={handleChange}
            className="rounded"
          />
          <label htmlFor="keepStarter">Keep Conversation Starter Messages Persistent</label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Select Popup Type</label>
            <div className="relative">
              <select
                name="popupType"
                value={formData.popupType}
                onChange={handleChange}
                className="w-full p-2 border rounded appearance-none"
              >
                <option>Initial messages popup</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Initial Messages Popup Delay</label>
            <input
              type="text"
              name="popupDelay"
              value={formData.popupDelay}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Time in seconds for auto-showing initial messages pop-up. Negative value disables it."
            />
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-1 mb-1 font-medium">
            <span>Base System Prompt (Custom Instructions)</span>
            <Info className="w-4 h-4 text-gray-400" />
          </label>
          <textarea
            name="systemPrompt"
            value={formData.systemPrompt}
            onChange={handleChange}
            className="w-full p-2 border rounded h-48"
            placeholder="// This is a common way for companies to guide the AI as a chatbot agent."
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <button type="button" className="text-blue-600 hover:underline">
            Show Advanced Settings
            <ChevronDown className="inline ml-1 w-4 h-4" />
          </button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create AI Agent
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIAgentForm;
