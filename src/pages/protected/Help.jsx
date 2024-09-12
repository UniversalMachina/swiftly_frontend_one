import React from 'react';
import Sidebar from './Sidebar';

const Help = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Sidebar included in the layout */}
      <div className="content flex-1 ml-64 flex flex-col">
        <header className="bg-blue-600 text-white py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">How to get help</h1>
            <p className="mt-2">
              Reach out to our customer support team and receive a prompt response!
            </p>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          <ol className="space-y-6 list-decimal list-inside">
            <li>
              View our{' '}
              <a href="#" className="text-blue-600 hover:underline">
                documentation
              </a>{' '}
              or check out our{' '}
              <a href="#" className="text-blue-600 hover:underline">
                YouTube Tutorials
              </a>
            </li>
            <li>
              <p>Open a Ticket (Tickets need to be in English)</p>
              <p className="mt-2 text-sm text-gray-600">
                If you have a question about the behavior of a specific AI agent, please copy its support info and
                include that in the ticket:
              </p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Submit Support Ticket
              </button>

              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Test Bot</span>
                  <div className="space-x-2">
                    <button className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200 transition-colors">
                      Edit
                    </button>
                    <button className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200 transition-colors">
                      Delete
                    </button>
                    <button className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200 transition-colors">
                      Copy Support Info
                    </button>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Display Name: Not Found</p>
                  <p>Model: GPT-4-Turbo</p>
                  <p>Support Email: Not set</p>
                  <p>0 conversations · 0 chat messages</p>
                </div>
              </div>
            </li>
            <li>
              Join Our{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Weekly Office Hours
              </a>
            </li>
          </ol>
        </main>

        <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
          <p>All Rights Reserved © Stammer.ai 2024</p>
          <p className="mt-1">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{' '}
            ·{' '}
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Help;
