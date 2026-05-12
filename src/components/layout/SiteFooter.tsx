'use client';

import { profile } from '@/data/profile';
import { Space, Typography } from 'antd';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-lead">
          <Typography.Text strong className="footer-title">
            Benny Lebelo
          </Typography.Text>
          <Typography.Text className="footer-subtitle">
            Software engineer crafting resilient full-stack products and thoughtful user experiences.
          </Typography.Text>
        </div>

        <Space wrap size={18} className="footer-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </Space>

        <Typography.Text className="footer-meta">
          © {year} Benny Lebelo · Built with Next.js, TypeScript, Three.js, and Ant Design · {profile.location}
        </Typography.Text>
      </div>
    </footer>
  );
}
