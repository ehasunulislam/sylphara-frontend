import React from 'react'
import SidebarHeading from '../Sidebar_heading/SidebarHeading'
import SidebarProfile from '../Sidebar-Profile/SidebarProfile'

const SidebarPage = () => {
  return (
    <div className="w-60 border-r border-r-white/10 padding-15px">
      <div className="heading">
        <SidebarHeading />
      </div>

      <div className='history'>
    
      </div>

      <div className="profile-section">
        <SidebarProfile />
      </div>
    </div>
  )
}

export default SidebarPage
