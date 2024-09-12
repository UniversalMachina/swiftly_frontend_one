import React from 'react';
import { AiOutlineInfoCircle, AiOutlineRocket, AiOutlineBook, AiOutlineProject } from 'react-icons/ai';
import Sidebar from './Sidebar';

const Card = ({ icon: Icon, title, description, buttonText }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-center mb-4">
      <Icon className="h-8 w-8 text-gray-500 mr-2" />
      <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
    </div>
    <div className="text-center">
      <p className="text-sm mb-4">{description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
        {buttonText}
      </button>
    </div>
  </div>
);

const InfoCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
      <AiOutlineInfoCircle className="h-6 w-6 text-gray-500" />
    </div>
    <div className="text-center">
      {children}
    </div>
  </div>
);

const Table = ({ headers, data }) => (
  <table className="w-full text-sm table-auto border border-gray-200">
    {headers && (
      <thead>
        <tr className="border-b">
          {headers.map((header, index) => (
            <th key={index} className="text-left p-2 border-r border-gray-200 last:border-r-0">
              {header}
            </th>
          ))}
        </tr>
      </thead>
    )}
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="border-t">
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="p-2 border-r border-gray-200 last:border-r-0">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const Dashboard = () => {
  const quickStartCards = [
    {
      icon: AiOutlineRocket,
      title: "Quick Start Guide",
      description: "Learn to Customize Code Items to get started quickly and easily.",
      buttonText: "Quick Start Guide"
    },
    {
      icon: AiOutlineBook,
      title: "Documentation",
      description: "Explore our comprehensive documentation to make the most use of OpenAI.",
      buttonText: "Documentation"
    },
    {
      icon: AiOutlineProject,
      title: "Product Roadmap",
      description: "Curious about our future plans? Check our product roadmap for exciting updates!",
      buttonText: "Product Roadmap"
    }
  ];

  const walletUsageData = [
    ["Last 24 Hours:", "$0.00"],
    ["Last 7 Days:", "$0.06"],
    ["Last 30 Days:", "$2.06"]
  ];

  const storageData = [
    ["Used Characters:", "1.14k"],
    ["Allocated to Sub-Accounts:", "0"],
    ["Used by AI Agents:", "1.14k"],
    ["Total Characters:", "10.00k"],
    ["Characters from package:", "10.00k"],
    ["Additional Characters:", "0"],
    ["Bonus Characters:", "10.00k"]
  ];

  const aiAgentsData = [
    ["Available AI Agents:", "4"],
    ["Used AI Agents:", "0"],
    ["Allocated to Sub-Accounts:", "0"],
    ["Active AI Agents:", "0"],
    ["Total AI Agents:", "5 (4 + 1)"],
    ["AI Agents from package:", "4"]
  ];

  const subAccountHeaders = [
    "Sub-Account Name", "Admin Email", "Creation Date", "Allocated AI Agents",
    "Used AI Agents", "Allocated Wallet Balance", "Used Wallet Balance",
    "Total Characters", "Used Characters"
  ];

  return (
    <div className="flex">
    <Sidebar /> {/* Sidebar included in the layout */}
    <div className="content flex-1 ml-64">
      <main className="flex-1">

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-center">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quickStartCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <InfoCard title="Wallet Usage">
            <p className="font-bold text-3xl mb-6 text-blue-600">$4.9400</p>
            <Table data={walletUsageData} />
            <button className="w-full mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Add to Wallet Balance
            </button>
          </InfoCard>

          <InfoCard title="Storage (Characters)">
            <p className="font-bold mb-6 text-xl">Available Characters: <span className="text-green-600">8.86k</span></p>
            <Table data={storageData} />
            <button className="w-full mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Get More Storage
            </button>
          </InfoCard>

          <InfoCard title="AI Agents">
            <Table data={aiAgentsData} />
            <button className="w-full mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Add More AI Agents
            </button>
          </InfoCard>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-600 mb-6">Sub-Accounts</h2>
          <div className="overflow-x-auto">
            <Table headers={subAccountHeaders} data={[["No Sub-Accounts Found"]]} />
          </div>
        </div>
      </div>
      </main>
        </div>
      </div>
  );
};

export default Dashboard;