import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabStyle = {
    padding: '10px 20px',
    margin: '0 5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#333', // Dark gray background
    color: 'white',
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: '#555', // Slightly darker gray for active tab
    fontWeight: 'bold',
  };

  return (
    <div className="tabs" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {['All', 'Coming Soon', 'New Release', 'Live'].map((tab) => (
        <button
          key={tab}
          style={activeTab === tab ? activeTabStyle : tabStyle}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
