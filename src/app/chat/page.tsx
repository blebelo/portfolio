import { ChatPanel } from '@/components/chatbot/ChatPanel';
import { Typography } from 'antd';

export default function ChatPage() {
  return (
    <section className="section">
      <Typography.Title level={2} className="section-title">AI Chat</Typography.Title>
      <Typography.Paragraph style={{ color: '#bfbfbf' }}>
        Ask questions about Benny&apos;s projects, .NET background, frontend capabilities, cloud exposure, and engineering journey.
      </Typography.Paragraph>
      <ChatPanel />
    </section>
  );
}
