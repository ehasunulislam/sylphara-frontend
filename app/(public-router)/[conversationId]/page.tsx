import ChatContainer from "../_components/Main-Content/Chat/ChatContainer";


export default async function ChatPage({
  params,
}: {
  params: Promise<{
    conversationId: string;
  }>;
}) {
  const { conversationId } = await params;

  return (
    <ChatContainer
      conversationId={conversationId}
    />
  );
}