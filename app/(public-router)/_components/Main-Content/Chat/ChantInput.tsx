"use client";

import {  Paperclip, SendHorizontal } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
      <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3 w-full max-w-3xl chat-item">

        <button className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 cursor-pointer">
          <Paperclip size={20} />
        </button>

        <textarea
          rows={1}
          placeholder="Message Sylphara AI..."
          className="flex-1 resize-none bg-transparent outline-none"
        />


        <button className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer text-white">
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;