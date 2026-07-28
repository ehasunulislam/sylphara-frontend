"use client";

import { MessageSquare } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { getAllConversation } from "@/app/(public-router)/_action/Conversation/getAllConversation";
import { IConversation } from "@/components/Interface/Conversation.interface";

type Props = {
  search: string;
};

const SidebarHistory = ({ search }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["conversations"],
    queryFn: getAllConversation,
  });

  const conversations: IConversation[] = data?.data?.getConversations || [];

  const filteredConversations =
    conversations.filter((conversation) =>
    conversation.title
      .toLowerCase()
      .includes(search?.toLowerCase() || "")
    );

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
      {filteredConversations.length === 0 ? (
        <div className="text-sm text-zinc-500 px-3 py-2">
          No conversations found
        </div>
      ) : (
        filteredConversations.map(
          (conversation) => (
            <Link
              key={conversation.id}
              href={`/${conversation.id}`}
              className="chat-item flex items-center gap-3 hover:bg-white/5 transition-colors
              "
            >
              <MessageSquare
                size={16}
                className="shrink-0"
              />

              <span className="truncate flex-1">
                {conversation.title}
              </span>
            </Link>
          )
        )
      )}
    </div>
  );
};

export default SidebarHistory;