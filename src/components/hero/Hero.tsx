'use client';

import { profile, recruiterHighlights } from '@/data/profile';
import { Button, Space, Tag, Typography } from 'antd';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="section hero-section">
      <Typography.Text className="hero-kicker">{profile.title}</Typography.Text>
      <Typography.Title className="section-title hero-title" level={1}>
        {profile.headline}
      </Typography.Title>
      <Typography.Paragraph className="hero-summary">{profile.summary}</Typography.Paragraph>
      <Space wrap className="hero-actions">
        <Button type="primary" size="large" className="hero-btn hero-btn-primary">
          <Link href="/projects">View Projects</Link>
        </Button>
        <Button size="large" href="/resume.pdf" target="_blank" className="hero-btn hero-btn-soft">
          Download Resume
        </Button>
        <Button size="large" className="hero-btn hero-btn-soft">
          <Link href="/chat">Chat With My AI</Link>
        </Button>
        <Button size="large" className="hero-btn hero-btn-soft">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </Space>
      <Space wrap size={12} className="hero-highlights">
        {recruiterHighlights.map((item) => (
          <Tag key={item} bordered className="hero-tag">
            {item}
          </Tag>
        ))}
      </Space>
    </section>
  );
}
