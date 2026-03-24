'use client';

import { chatSuggestions } from '@/data/faq';
import { Button, Card, Input, Space, Typography } from 'antd';
import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatPanel() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Hi, I am Benny’s portfolio assistant. Ask me about his experience, projects, skills, and engineering background.'
    }
  ]);

  const sendMessage = async (input?: string) => {
    const question = (input ?? prompt).trim();
    if (!question || loading) return;

    const userMessage: Message = { role: 'user', content: question };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });

      const data = (await res.json()) as { answer?: string };
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.answer ?? 'I could not generate a response right now. Please try again.'
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'There was a network issue while contacting the assistant.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="card-outline">
      <Typography.Paragraph style={{ color: '#bfbfbf' }}>
        This AI answers questions about Benny&apos;s experience and projects.
      </Typography.Paragraph>
      <Space wrap>
        {chatSuggestions.map((item) => (
          <Button key={item.id} onClick={() => void sendMessage(item.prompt)}>
            {item.label}
          </Button>
        ))}
      </Space>
      <div style={{ marginTop: 16, display: 'grid', gap: 10, maxHeight: 360, overflowY: 'auto', paddingRight: 6 }}>
        {messages.map((message, idx) => (
          <div
            key={`${message.role}-${idx}`}
            style={{
              padding: '10px 12px',
              border: '1px solid #2a2a2a',
              borderRadius: 10,
              background: message.role === 'assistant' ? '#111' : '#171717'
            }}
          >
            <Typography.Text strong>{message.role === 'assistant' ? 'AI' : 'You'}</Typography.Text>
            <Typography.Paragraph style={{ margin: '4px 0 0', color: '#d9d9d9' }}>{message.content}</Typography.Paragraph>
          </div>
        ))}
      </div>
      <Space.Compact style={{ width: '100%', marginTop: 14 }}>
        <Input
          aria-label="Ask Benny AI"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onPressEnter={() => void sendMessage()}
          placeholder="Ask about projects, experience, .NET, Next.js, cloud, or data engineering..."
        />
        <Button type="primary" loading={loading} onClick={() => void sendMessage()}>
          Send
        </Button>
      </Space.Compact>
    </Card>
  );
}
