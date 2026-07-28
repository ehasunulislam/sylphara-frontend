"use client";

import { MessageSquare } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllConversation } from "@/app/(public-router)/_action/Conversation/getAllConversation";
import { IConversation } from "@/components/Interface/Conversation.interface";
import Link from "next/link";


const SidebarHistory = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["conversations"],
    queryFn: getAllConversation,
  });


  const conversations: IConversation[] =  data?.data?.getConversations || [];

  if (isLoading) {
    return (
      <div className="side-scroll">
        <div className="side-label">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="side-scroll">
      {conversations.map((conversation) => (
         <Link
          key={conversation.id}
          href={`/${conversation.id}`}
          className="chat-item"
        >
          <MessageSquare size={16} />

          <span className="truncate">
            {conversation.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarHistory;