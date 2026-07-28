import Image from 'next/image'
import React from 'react'
import NewChat from './NewChat'
import SearchConversation from './SearchConversation'

type Props = {
  search: string;
  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;
};

const SidebarHeading = ({search, setSearch}: Props) => {
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
        <SearchConversation 
          search={search}
          setSearch={setSearch}
        />
      </section>
    </div>
  )
}

export default SidebarHeading
