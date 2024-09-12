import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditPromptTab = ({ chatbotId, chatbotName, systemPrompt, setChatbotName, setSystemPrompt, setIsPromptSaved, username }) => {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);

  const handleSavePrompt = async () => {
    setIsSaving(true);
    if (chatbotId) {
      try {
        await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/chatbot/update/${chatbotId}`, {
          name: chatbotName,
          prompt: systemPrompt,
        });
        setIsPromptSaved(true);
        alert('Chatbot updated successfully');
      } catch (error) {
        console.error('Error updating chatbot:', error);
        alert('Failed to update chatbot');
      }
    } else {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/chatbot/create`, {
          user_id: username,
          name: chatbotName,
          prompt: systemPrompt,
        });
        const newChatbotId = response.data.id;
        setIsPromptSaved(true);
        alert('Chatbot created successfully');
        navigate(`/chatbots/${newChatbotId}/edit`);
      } catch (error) {
        console.error('Error creating chatbot:', error);
        alert('Failed to create chatbot');
      }
    }
    setIsSaving(false);
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="chatbotName" className="block mb-2 font-medium">
          Chatbot Name:
        </label>
        <input
          type="text"
          id="chatbotName"
          value={chatbotName}
          onChange={(e) => setChatbotName(e.target.value)}
          className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          required
        />
      </div>
      <div>
        <label htmlFor="systemPrompt" className="block mb-2 font-medium">
          System Prompt:
        </label>
        <textarea
          id="systemPrompt"
          value={systemPrompt}
          onChange={(e) => setSystemPrompt(e.target.value)}
          className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          rows="6"
          required
        />
      </div>
      <button
        onClick={handleSavePrompt}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        disabled={isSaving}
      >
        {chatbotId ? 'Save Changes' : 'Create Chatbot'}
      </button>
    </div>
  );
};

export default EditPromptTab;
