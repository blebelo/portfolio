import dynamic from 'next/dynamic';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { Button, Space, Typography } from 'antd';

const HeroScene = dynamic(() => import('@/components/three/HeroScene').then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="scene" aria-hidden="true" />,
});

export function Hero() {
  return (
    <section className="section">
      <div className="container hero">
        <div>
          <Typography.Text className="muted">{profile.role}</Typography.Text>
          <h1>{profile.headline}</h1>
          <p className="muted">{profile.summary}</p>
          <Space size="small" wrap>
            <Link href="/projects">
              <Button type="primary">View Projects</Button>
            </Link>
            <a href={profile.links.resume}>
              <Button ghost>Download Resume</Button>
            </a>
            <Link href="/chat">
              <Button ghost>Chat With My AI</Button>
            </Link>
            <Link href="/contact">
              <Button ghost>Contact Me</Button>
            </Link>
          </Space>
        </div>
        <HeroScene />
      </div>
    </section>
  );
}
