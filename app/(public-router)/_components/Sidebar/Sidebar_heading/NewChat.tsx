"use client"

import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NewChat = () => {
  return (
    <div>
      <Link href="/" className="btn-newchat">
        <Plus />
        New chat
      </Link>
    </div>
  )
}

export default NewChat
