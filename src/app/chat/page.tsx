'use client';

import { FormEvent, useState } from 'react';

export default function ChatPage() {
  const [prompt, setPrompt] = useState('');
  const [reply, setReply] = useState('Ask a question about Benny\'s background, projects, or skills.');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setReply(data.reply ?? 'No response received.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <div className="container grid">
        <h1>AI Chat</h1>
        <p className="muted">This AI answers questions about my experience and projects.</p>
        <form className="card" onSubmit={onSubmit}>
          <label htmlFor="prompt">Message</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            style={{ width: '100%', marginTop: 8, background: '#0b0b0b', color: '#fff', border: '1px solid #2a2a2a' }}
          />
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Thinking...' : 'Send'}
          </button>
        </form>
        <article className="card">
          <h2>Assistant</h2>
          <p className="muted">{reply}</p>
        </article>
      </div>
    </section>
  );
}
