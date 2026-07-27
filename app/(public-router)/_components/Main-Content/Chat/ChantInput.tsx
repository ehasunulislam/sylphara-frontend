"use client";

import { Paperclip, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { IMessage } from "@/components/Interface/ChatContainer.interface";
import { createConversation } from "@/app/(public-router)/_action/Conversation/createConversation";
import { createChat } from "@/app/(public-router)/_action/AI-Chat/createChat";


type Props = {
  conversationId: string | null;
  setConversationId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
  setMessages: React.Dispatch<
    React.SetStateAction<IMessage[]>
  >;
};

const ChatInput = ({conversationId, setConversationId, setMessages}: Props) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    try {
      if (!message.trim() || loading) return;

      setLoading(true);

      let currentConversationId = conversationId;

      // First Message
      if (!currentConversationId) {
        const conversation = await createConversation(
          message.slice(0, 40)
        );

        currentConversationId =
          conversation.data.createdConversation.id;

        setConversationId(currentConversationId);
      }

      const userMessage = message;

      // user message instantly show
      setMessages((prev) => [
        ...prev,
        {
          role: "USER",
          content: userMessage,
        },
      ]);

      setMessage("");

      const response = await createChat(
        currentConversationId!,
        userMessage
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "ASSISTANT",
          content:
            response.data.chat.assistantMessage.content,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
      <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3 w-full max-w-3xl chat-item">

        <button className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 cursor-pointer">
          <Paperclip size={20} />
        </button>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          placeholder="Message Sylphara AI..."
          className="flex-1 resize-none bg-transparent outline-none"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="
            h-12 w-12
            flex items-center justify-center
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