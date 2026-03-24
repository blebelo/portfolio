'use client';

import { profile, recruiterHighlights } from '@/data/profile';
import dynamic from 'next/dynamic';
import { Button, Col, Row, Space, Tag, Typography } from 'antd';
import Link from 'next/link';

const Scene = dynamic(() => import('@/components/three/HeroScene').then((m) => m.HeroScene), {
  ssr: false,
  loading: () => <div style={{ height: 420, border: '1px solid #2a2a2a', borderRadius: 12, background: '#0b0b0b' }} />
});

export function Hero() {
  return (
    <section className="section" style={{ paddingTop: 36 }}>
      <Row gutter={[28, 28]} align="middle">
        <Col xs={24} lg={12}>
          <Typography.Text style={{ color: '#bfbfbf', textTransform: 'uppercase', letterSpacing: 1 }}>{profile.title}</Typography.Text>
          <Typography.Title className="section-title" level={1} style={{ color: '#fff', marginTop: 16 }}>
            {profile.headline}
          </Typography.Title>
          <Typography.Paragraph style={{ color: '#bfbfbf', fontSize: 16 }}>{profile.summary}</Typography.Paragraph>
          <Space wrap>
            <Button type="primary" size="large"><Link href="/projects">View Projects</Link></Button>
            <Button size="large" href="/resume.pdf" target="_blank">Download Resume</Button>
            <Button size="large"><Link href="/chat">Chat With My AI</Link></Button>
            <Button size="large"><Link href="/contact">Contact Me</Link></Button>
          </Space>
        </Col>
        <Col xs={24} lg={12}>
          <Scene />
        </Col>
      </Row>
      <Space wrap size={12} style={{ marginTop: 24 }}>
        {recruiterHighlights.map((item) => (
          <Tag key={item} bordered style={{ borderColor: '#2a2a2a', background: '#111', color: '#f2f2f2', padding: '6px 10px' }}>
            {item}
          </Tag>
        ))}
      </Space>
    </section>
  );
}
