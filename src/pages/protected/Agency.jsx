import React from 'react';
import Sidebar from './Sidebar';

const Agency = () => {
  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar included in the layout */}
      <div className="content flex-1 ml-64 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Agency</h1>
        <p>This is the Agency page.</p>
      </div>
    </div>
  );
};

export default Agency;
