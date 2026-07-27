import { MessageSquare } from 'lucide-react'
import React from 'react'

const SidebarHistory = () => {
  return (
    <div>
       <div className="side-scroll">
            <div className="side-label">Today</div>
                <div className="chat-item active" data-name="Roadmap for backend engineer">
                    <MessageSquare />
                    <span>Roadmap for backend engineer</span>
                </div>

                <div className="chat-item" data-name="Fix React useEffect loop">
                    <MessageSquare />
                    <span>Fix React useEffect loop</span>
                </div>
            </div>
    </div>
  )
}

export default SidebarHistory
