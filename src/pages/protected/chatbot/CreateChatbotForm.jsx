import React, { useState } from 'react';

const CreateChatbotForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, prompt });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Create New Chatbot</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="prompt" className="block mb-2">System Prompt:</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
      </div>
      <div className="flex justify-end">
        <button type="button" onClick={onCancel} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Create</button>
      </div>
    </form>
  );
};

export default CreateChatbotForm;
