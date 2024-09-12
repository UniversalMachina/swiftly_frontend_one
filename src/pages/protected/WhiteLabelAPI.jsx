import React from 'react';
import { FaCode, FaPuzzlePiece } from 'react-icons/fa';
import Sidebar from './Sidebar';

const WhiteLabelAPI = () => {
  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar included in the layout */}
      <div className="content flex-1 ml-64 min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-white mb-12">
            <h1 className="text-4xl font-bold flex items-center">
              <FaCode className="mr-4" /> White Label API
            </h1>
            <p className="mt-2 text-xl">
              Integrate our powerful API into your own branded solutions for seamless service delivery.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Getting Started</h2>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
                <p>To use our White Label API, you'll need to set up your account and obtain necessary credentials.</p>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Sign up for a White Label API account</li>
                <li>Complete the onboarding process</li>
                <li>Obtain your unique API key</li>
                <li>Integrate the API into your application</li>
              </ol>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Request White Label Access
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">API Documentation</h2>
              <p className="text-gray-700 mb-6">
                Our comprehensive documentation covers everything you need to know about integrating and using our White Label API. From authentication to endpoint references, we've got you covered.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPuzzlePiece className="text-blue-500 mr-2" />
                  <span>Easy-to-follow integration guides</span>
                </div>
                <div className="flex items-center">
                  <FaPuzzlePiece className="text-blue-500 mr-2" />
                  <span>Detailed API endpoint references</span>
                </div>
                <div className="flex items-center">
                  <FaPuzzlePiece className="text-blue-500 mr-2" />
                  <span>Code samples in multiple languages</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mt-6">
                Explore API Documentation
              </button>
            </div>
          </div>

          <footer className="mt-12 text-center text-white">
            <p>© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
            <div className="mt-2">
              <a href="#" className="text-white hover:underline mr-4">Privacy Policy</a>
              <a href="#" className="text-white hover:underline">Terms & Conditions</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelAPI;
