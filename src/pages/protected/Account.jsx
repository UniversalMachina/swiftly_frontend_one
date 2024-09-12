import React from 'react';
import { AiOutlineUser, AiOutlineLock, AiOutlineCreditCard, AiOutlineNotification } from 'react-icons/ai';
import Sidebar from './Sidebar';

const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex items-center space-x-2 mb-4">
      <Icon className="h-6 w-6 text-gray-500" />
      <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
    </div>
    <div>{children}</div>
  </div>
);

const Account = () => {
  return (
    <div className="flex">
    <Sidebar /> {/* Sidebar included in the layout */}
    <div className="content flex-1 ml-64">
    <main className="flex-1 p-6 bg-gray-100 min-h-screen">
      <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-12 px-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold text-center">Account Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard icon={AiOutlineUser} title="Personal Information">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="john@example.com" />
            </div>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
              Update Information
            </button>
          </form>
        </InfoCard>

        <InfoCard icon={AiOutlineLock} title="Security Settings">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
              Change Password
            </button>
          </form>
        </InfoCard>

        <InfoCard icon={AiOutlineCreditCard} title="Subscription">
          <div className="space-y-4">
            <p className="font-semibold">Current Plan: <span className="text-indigo-600">Pro</span></p>
            <p>Next billing date: August 31, 2024</p>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
              Upgrade Plan
            </button>
            <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">
              Cancel Subscription
            </button>
          </div>
        </InfoCard>

        <InfoCard icon={AiOutlineNotification} title="Notification Preferences">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>SMS Notifications</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
            </div>
            <div className="flex items-center justify-between">
              <span>Push Notifications</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" defaultChecked />
            </div>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
              Save Preferences
            </button>
          </div>
        </InfoCard>
      </div>
    </main>
    </div>
    </div>
  );
};

export default Account;