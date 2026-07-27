import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import NewChat from './NewChat'

const SidebarHeading = () => {
  return (
    <div>
      <section className='flex gap-4 items-center'>
        <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="logo"
        />

        <h1>Sylphara-AI</h1>
      </section>

      <section className='mt-6'>
          <NewChat />
      </section>

      <section>
        <div className="search-box">
            <Search />
            <Input type="text" placeholder="Search conversations" className='border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none' />
        </div>
      </section>
    </div>
  )
}

export default SidebarHeading
