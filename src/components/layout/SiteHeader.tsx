'use client';

import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Space, Typography } from 'antd';
import type { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems: { key: string; label: string; href: Route }[] = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'experience', label: 'Experience', href: '/experience' },
  { key: 'projects', label: 'Projects', href: '/projects' },
  { key: 'education', label: 'Education', href: '/education' },
  { key: 'skills', label: 'Skills', href: '/skills' },
  { key: 'contact', label: 'Contact', href: '/contact' },
  { key: 'chat', label: 'Chat', href: '/chat' }
];

const items = navItems.map(({ key, label, href }) => ({ key, label: <Link href={href}>{label}</Link> }));

export function SiteHeader() {
  const pathname = usePathname();
  const activeSegment = pathname.split('/').filter(Boolean)[0];
  const selectedKey =
    activeSegment == null
      ? 'home'
      : navItems.find((item) => item.href === (`/${activeSegment}` as Route))?.key ?? 'home';

  return (
    <Layout.Header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-link" aria-label="Benny Lebelo home">
          <Typography.Text strong className="brand-name">
            Benny Lebelo
          </Typography.Text>
          <Typography.Text className="brand-role">Software Engineer</Typography.Text>
        </Link>
        <Menu
          mode="horizontal"
          theme="dark"
          className="site-nav"
          selectedKeys={[selectedKey]}
          items={items}
        />
        <Space className="site-header-actions" size={10}>
          <Button href="/resume.pdf" target="_blank" className="header-resume">
            Resume
          </Button>
          <Button
            type="text"
            icon={<GithubOutlined />}
            href="https://github.com/bennylebelo"
            target="_blank"
            aria-label="GitHub"
            className="header-icon-btn"
          />
          <Button
            type="text"
            icon={<LinkedinOutlined />}
            href="https://www.linkedin.com/in/bennylebelo"
            target="_blank"
            aria-label="LinkedIn"
            className="header-icon-btn"
          />
        </Space>
      </div>
    </Layout.Header>
  );
}
