import React from 'react';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsChatSquareDots, BsPersonCircle } from 'react-icons/bs';
import { FiUsers, FiPackage } from 'react-icons/fi';

const SidebarLink = ({ icon: Icon, text, href = "#", subLinks = [] }) => (
  <div className="mt-4">
    <a href={href} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </a>
    {subLinks.length > 0 && (
      <div className="ml-8 mt-2 space-y-2">
        {subLinks.map((subLink, index) => (
          <a key={index} href={subLink.href || "#"} className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">
            {subLink.text}
          </a>
        ))}
      </div>
    )}
  </div>
);

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-white shadow-md p-4 overflow-y-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Stammer.ai</h2>
        <p className="mt-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-md inline-block">Agency Owner</p>
      </div>

      <nav className="space-y-2">
        <div className="text-sm font-medium text-gray-600">Switch to Sub-Account</div>

        <SidebarLink icon={AiOutlineDashboard} text="Dashboard" href="/dashboard" />
        {/* <SidebarLink 
          icon={BsChatSquareDots} 
          text="AI Agents (Chatbots)" 
          href="/ai-agents"
          subLinks={[
            { text: "My AI Agents", href: "/ai-agents/my" }, 
            { text: "Create a new AI Agent", href: "/ai-agents/create" }
          ]}
        /> */}
        <SidebarLink icon={AiOutlineUser} text="Account" href="/account" />
        <SidebarLink icon={FiPackage} text="White Label API" href="/white-label-api" />
        <SidebarLink icon={AiOutlineSetting} text="Marketplace" href="/marketplace" />
        <SidebarLink icon={AiOutlineQuestionCircle} text="Need Help?" href="/help" />
        <SidebarLink icon={AiOutlineQuestionCircle} text="My AI Agents" href="/chatbot-interaction-page" />


      </nav>
    </div>
  );
};

export default Sidebar;
