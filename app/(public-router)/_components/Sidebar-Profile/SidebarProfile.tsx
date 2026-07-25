import { ChevronRight, Settings } from 'lucide-react'
import React from 'react'

const SidebarProfile = () => {
  return (
    <div className="side-footer">
      <a className="settings-link" href="#">
        <Settings />
        Settings
      </a>
      <div className="user-card">
        <div className="user-avatar">EH</div>
        <div className="user-meta">
          <div className="user-name">Ehasun</div>
          <div className="user-plan">
            <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
                <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z"/>
            </svg>
            Pro plan
          </div>
        </div>
        <ChevronRight />
      </div>
    </div>
  )
}

export default SidebarProfile
