"use client";

import { useEffect, useState } from "react";
import Welcome from "../WelCome/Welcome";
import ChatInput from "./ChantInput";
import { IMessage } from "@/components/Interface/ChatContainer.interface";


import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Copy } from "lucide-react";
import { getAllMessage } from "@/app/(public-router)/_action/Message/getMessage";

type Props = {
  conversationId?: string;
};

export default function ChatContainer({
  conversationId,
}: Props) {
  const [messages, setMessages] =
    useState<IMessage[]>([]);

  const copyText = async (
    text: string
  ) => {
    await navigator.clipboard.writeText(
      text
    );
  };

  useEffect(() => {
    if (!conversationId) return;

    const loadMessages =
      async () => {
        try {
          const res =
            await getAllMessage(
              conversationId
            );

          setMessages(
            res.data.messages
          );
        } catch (error) {
          console.error(error);
        }
      };

    loadMessages();
  }, [conversationId]);

  return (
    <div className="h-full flex flex-col relative">
      <div className="flex-1 overflow-y-auto pb-40">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <Welcome />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-6 py-10">
            {messages.map(
              (msg, index) => (
                <div
                  key={index}
                  className={`flex mb-8 mt-6 ${
                    msg.role === "USER"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
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
                        bg-white/5
                        border-white/10
                        text-zinc-100
                        px-6 py-5
                      `
                    }`}
                  >
                    <div className="prose prose-invert max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[
                          remarkGfm,
                        ]}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>

                    {msg.role ===
                      "ASSISTANT" && (
                      <button
                        onClick={() =>
                          copyText(
                            msg.content
                          )
                        }
                        className="
                          mt-4
                          flex
                          items-center
                          gap-2
                          text-xs
                          text-zinc-400
                          hover:text-white
                        "
                      >
                        <Copy size={14} />
                        Copy
                      </button>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      <ChatInput
        conversationId={
          conversationId || null
        }
        setMessages={setMessages}
      />
    </div>
  );
}