"use client";

import { useState } from "react";
import Welcome from "../WelCome/Welcome";
import ChatInput from "./ChantInput";
import { IMessage } from "@/components/Interface/ChatContainer.interface";
import ReactMarkdown from "react-markdown";

export default function ChatContainer() {
  const [conversationId, setConversationId] = useState<string | null>(null);

  const [messages, setMessages] = useState<IMessage[]>([]);

  return (
    <div className="h-full flex flex-col relative message">
      <div className="flex-1 overflow-y-auto pb-40">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <Welcome />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-6 py-10">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-8 ${
                  msg.role === "USER"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {/* AI Avatar */}
                {msg.role === "ASSISTANT" && (
                  <div className="mr-4 shrink-0">
                    {/* <div className="h-10 w-10 rounded-xl bg-linear-to-r from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      ✦
                    </div> */}
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`rounded-3xl backdrop-blur-xl border shadow-lg
                  ${
                    msg.role === "USER"
                      ? `
                      max-w-xl
                      bg-violet-600/20
                      border-violet-500/20
                      text-white
                      px-5 py-3
                    `
                      : `
                      max-w-3xl
                      bg-white/3
                      border-white/10
                      text-zinc-100
                      px-6 py-5
                    `
                  }`}
                >
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ChatInput
        conversationId={conversationId}
        setConversationId={setConversationId}
        setMessages={setMessages}
      />
    </div>
  );
}