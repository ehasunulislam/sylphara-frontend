"use client";

import { useState } from "react";
import Welcome from "../WelCome/Welcome";
import ChatInput from "./ChantInput";
import { IMessage } from "@/components/Interface/ChatContainer.interface";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Copy } from "lucide-react";

export default function ChatContainer() {
  const [conversationId, setConversationId] = useState<string | null>(null);

  const [messages, setMessages] = useState<IMessage[]>([]);

  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="h-full flex flex-col relative message">
      <div className="flex-1 overflow-y-auto pb-40">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <Welcome />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-6 py-10">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-8 mt-6 ${
                  msg.role === "USER" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Message Bubble */}
                <div
                  className={`
                        rounded-3xl 
                        backdrop-blur-xl 
                        border 
                        shadow-lg

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
                        }

                      `}
                >
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ children, className }) {
                          const match = /language-(\w+)/.exec(className || "");

                          if (match) {
                            return (
                              <div className="relative group">
                                <button
                                  onClick={() => copyText(String(children))}
                                  className="
                              absolute 
                              right-3
                              top-3
                              opacity-0
                              group-hover:opacity-100
                              transition
                              bg-zinc-700
                              hover:bg-zinc-600
                              rounded-md
                              p-2
                              "
                                >
                                  <Copy size={16} />
                                </button>

                                <SyntaxHighlighter
                                  language={match[1]}
                                  style={oneDark}
                                  PreTag="div"
                                  className="
                                rounded-xl
                                mt-4!
                                "
                                >
                                  {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                              </div>
                            );
                          }

                          return (
                            <code
                              className="
                          bg-zinc-800
                          px-1
                          rounded
                          "
                            >
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>

                  {/* Full Message Copy */}

                  {msg.role === "ASSISTANT" && (
                    <button
                      onClick={() => copyText(msg.content)}
                      className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-zinc-400
                        hover:text-white
                        transition
                        "
                    >
                      <Copy size={14} />
                      Copy
                    </button>
                  )}
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
