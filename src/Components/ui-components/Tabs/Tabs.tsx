// Tabs.tsx
import React, { useState } from 'react';
import classes from './Tabs.module.scss';

const Tabs = ({ onTabClick }: { onTabClick: (tab: string) => void }) => {
  const [activeTab, setActiveTab] = useState('General Details');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabClick(tab);
  };

  const tabs = [
    'General Details',
    'Documents',
    'Bank Details',
    'Loans',
    'Savings',
    'App and System'
  ];

  return (
    <div className={classes.tabsContainer}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${classes.tab} ${activeTab === tab ? classes.active : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
