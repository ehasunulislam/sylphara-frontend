"use client";

import { Paperclip, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import { IMessage } from "@/components/Interface/ChatContainer.interface";
import { createConversation } from "@/app/(public-router)/_action/Conversation/createConversation";
import { createChat } from "@/app/(public-router)/_action/AI-Chat/createChat";

type Props = {
  conversationId: string | null;
  setMessages: React.Dispatch<
    React.SetStateAction<IMessage[]>
  >;
};

const ChatInput = ({
  conversationId,
  setMessages,
}: Props) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const queryClient = useQueryClient();

  const handleSend = async () => {
    try {
      if (!message.trim() || loading) return;

      setLoading(true);

      let currentConversationId = conversationId;
      const userMessage = message;

      // Show user message instantly
      setMessages((prev) => [
        ...prev,
        {
          role: "USER",
          content: userMessage,
        },
      ]);

      setMessage("");

      // First message => create conversation
      if (!currentConversationId) {
        const conversation =
          await createConversation(
            userMessage.slice(0, 40)
          );

        if (
          !conversation?.data?.createdConversation
        ) {
          throw new Error(
            "Conversation creation failed"
          );
        }

        currentConversationId =
          conversation.data.createdConversation.id;

        // Refresh sidebar conversations
        await queryClient.invalidateQueries({
          queryKey: ["conversations"],
        });
      }

      const response = await createChat(
        currentConversationId!,
        userMessage
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "ASSISTANT",
          content:
            response.data.chat
              .assistantMessage.content,
        },
      ]);

      // Navigate after response
      if (!conversationId) {
        router.push(`/${currentConversationId}`);
      }
    } catch (error) {
      console.error(
        "Chat send error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
      <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3 w-full max-w-2xl chat-item">
        
        <button className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 cursor-pointer">
          <Paperclip size={20} />
        </button>

        <textarea
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          rows={1}
          placeholder="Message Sylphara AI..."
          className="flex-1 resize-none bg-transparent outline-none"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="
            h-12
            w-12
            flex
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-white
            cursor-pointer
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <SendHorizontal size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;