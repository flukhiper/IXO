'use client';
import { useState } from 'react';
import ChatTab from './ChatTab';
import ATab from './ATab';
import BTab from './BTab';

const TABS = [ 'Chat', 'BTab', 'ATab' ];

const Menu = () => {
  const [ activeTab, setActiveTab ] = useState('Chat');

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-gray-900 shadow-lg border-l border-gray-200 flex flex-col z-50">
      {/* Tab headers */}
      <div className="flex border-b border-gray-300">
        {TABS.map((tab) => 
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 p-2 text-sm font-medium border-b-2 ${
              activeTab === tab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            {tab}
          </button>
        )}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto p-3">
        {activeTab === 'Chat' && <ChatTab />}
        {activeTab === 'Tokens' && <ATab />}
        {activeTab === 'Maps' && <BTab />}
      </div>
    </div>
  );
};

export default Menu;