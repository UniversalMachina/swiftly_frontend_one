import React, { useState } from 'react';
import { FaSearch, FaComments, FaClone } from 'react-icons/fa';
import Sidebar from './Sidebar';

const AgentCard = ({ agent }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-xl font-semibold">{agent.title}</h3>
        <p className="text-gray-600 mt-1">{agent.description}</p>
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm flex items-center">
          <FaComments className="mr-1" /> Live Demo
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm flex items-center">
          <FaClone className="mr-1" /> Clone
        </button>
      </div>
    </div>
    <div className="text-sm text-gray-500">
      <p>Version: {agent.version} | Developer: {agent.developer}</p>
    </div>
    <div className="mt-2">
      {agent.tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const agents = [
    {
      title: 'Stammer - Lead Gen with Appt Setting',
      description:
        'This bot handles both appointment scheduling and lead generation. It answers user questions and guides them through lead generation and appointment scheduling.',
      version: '1.0.0',
      developer: 'Tim Bramlett',
      tags: ['Appointment Scheduling', 'Lead Generation'],
    },
    {
      title: 'Stammer - Scheduling Example',
      description:
        'An appointment scheduling example that answers questions about Stammer.ai and prompts users to schedule appointments. Requires Google Calendar integration for full functionality.',
      version: '1.0.0',
      developer: 'Tim Bramlett',
      tags: ['Appointment Scheduling'],
    },
  ];

  const filteredAgents = agents.filter(
    (agent) =>
      agent.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 || agent.tags.some((tag) => selectedCategories.includes(tag)))
  );

  const categories = ['Appointment Scheduling', 'Lead Generation'];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar /> {/* Sidebar included in the layout */}
      <div className="content flex-1 ml-64">
        <div className="bg-blue-600 text-white py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">🤖 AI Agent Marketplace</h1>
            <p className="text-xl">Explore and clone AI agents for your needs</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 px-4">
          <div className="flex mb-6">
            <input
              type="text"
              placeholder="Search AI Agents"
              className="flex-grow p-2 border rounded-l-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
              <FaSearch />
            </button>
          </div>

          <div className="flex gap-6">
            <div className="w-1/4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                {categories.map((category) => (
                  <div key={category} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => {
                        setSelectedCategories((prev) =>
                          prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
                        );
                      }}
                      className="mr-2"
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-3/4">
              {filteredAgents.map((agent, index) => (
                <AgentCard key={index} agent={agent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
