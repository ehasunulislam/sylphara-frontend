import React from 'react'
// import { Button } from "@/components/ui/button";
import { logout } from "@/service/logout";
import { LogOut } from 'lucide-react';

const LogoutFunction = () => {
  return (
    <form action={logout} className="w-full">
      <button
        type="submit"
        className="w-full cursor-pointer flex gap-3 items-center text-left"
      >
        <LogOut size={18} />
        Logout
      </button>
    </form>
  );
};

export default LogoutFunction;
