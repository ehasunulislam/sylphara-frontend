"use client"

import { Plus } from 'lucide-react'
import React from 'react'

const NewChat = () => {

    const handleCreateConversation = async () => {
    try {
      console.log("create conversation");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <button className="btn-newchat" onClick={handleCreateConversation}>
            <Plus />
            New chat
        </button>
    </div>
  )
}

export default NewChat
