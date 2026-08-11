"use client";

import { useEffect, useState } from "react";
import Welcome from "../WelCome/Welcome";
import ChatInput from "./ChantInput";
import { IMessage } from "@/components/Interface/ChatContainer.interface";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Copy } from "lucide-react";
import { getAllMessage } from "@/app/(public-router)/_action/Message/getMessage";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  conversationId?: string;
};

export default function ChatContainer({
  conversationId,
}: Props) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    if (!conversationId) return;

    const loadMessages = async () => {
      try {
        const res = await getAllMessage(conversationId);

        setMessages(res.data.messages);
      } catch (error) {
        console.error(error);
      }
    };

    loadMessages();
  }, [conversationId]);

  return (
    <div className="h-full flex flex-col relative">
      <div className="flex-1 overflow-y-auto pb-44 chat-scroll">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <Welcome />
          </div>
        ) : (
          <div className="chat-wrapper">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.role === "USER"
                    ? "user"
                    : "assistant"
                }`}
              >
                <div
                  className={`chat-bubble ${
                    msg.role === "USER"
                      ? "user"
                      : "assistant"
                  }`}
                >
                  <div className="chat-markdown prose prose-invert max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code(props) {
                          const {
                            children,
                            className,
                            ...rest
                          } = props;

                          const match =
                            /language-(\w+)/.exec(
                              className || ""
                            );

                          return match ? (
                            <div className="relative group">
                              <button
                                onClick={() =>
                                  copyText(
                                    String(children).replace(
                                      /\n$/,
                                      ""
                                    )
                                  )
                                }
                                className=" absolute right-3 top-3 z-10 opacity-0 group-hover:opacity-100 transition  bg-zinc-800  hover:bg-zinc-700  text-white rounded-md px-2 py-1 text-xs "
                              >
                                Copy
                              </button>

                              <SyntaxHighlighter
                                language={match[1]}
                                style={oneDark}
                                PreTag="div"
                                customStyle={{
                                  borderRadius: "14px",
                                  marginTop: "12px",
                                  marginBottom: "12px",
                                  fontSize: "14px",
                                }}
                              >
                                {String(children).replace(
                                  /\n$/,
                                  ""
                                )}
                              </SyntaxHighlighter>
                            </div>
                          ) : (
                            <code
                              className="
                                bg-zinc-800
                                px-1.5
                                py-0.5
                                rounded
                                text-pink-400
                              "
                              {...rest}
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

                  {msg.role ===
                    "ASSISTANT" && (
                    <button
                      onClick={() =>
                        copyText(msg.content)
                      }
                      className="message-actions text-xs text-zinc-400  hover:text-white transition cursor-pointer"
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
        conversationId={
          conversationId || null
        }
        setMessages={setMessages}
      />
    </div>
  );
}