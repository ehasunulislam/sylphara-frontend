import React from 'react'
import SidebarHeading from './Sidebar_heading/SidebarHeading'
import SidebarProfile from './Sidebar-Profile/SidebarProfile'
import SidebarHistory from './Sidebar_history/SidebarHistory'


const SidebarPage = () => {
  return (
    <div className="w-60 h-full border-r border-r-white/10 padding-15px flex flex-col">
      <div className="heading">
        <SidebarHeading />
      </div>

      <div className="history flex-1 overflow-y-auto mt-4">
        <SidebarHistory
        />
      </div>

      <div className="profile-section">
        <SidebarProfile />
      </div>
    </div>
  );
};
export default SidebarPage
