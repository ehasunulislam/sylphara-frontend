import { logout } from '@/service/logout'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SidebarProfile = () => {
  return (
    <div className="side-footer">
      <Link className="settings-link cursor-pointer" href="/profile">
        <User />
        Profile
      </Link>

       <div className="settings-link cursor-pointer">
          <form action={logout} className="w-full">
              <button
                type="submit"
                className="w-full cursor-pointer flex gap-3 items-center text-left"
              >
                <LogOut size={18} />
                Logout
              </button>
          </form>
       </div>
    </div>
  )
}

export default SidebarProfile
