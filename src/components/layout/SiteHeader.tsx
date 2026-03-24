'use client';

import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Space, Typography } from 'antd';
import Link from 'next/link';

const items = [
  'Home',
  'About',
  'Experience',
  'Projects',
  'Education',
  'Skills',
  'Contact',
  'Chat'
].map((label) => ({ key: label.toLowerCase(), label: <Link href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}>{label}</Link> }));

export function SiteHeader() {
  return (
    <Layout.Header style={{ position: 'sticky', top: 0, zIndex: 50, background: '#000', borderBottom: '1px solid #1f1f1f' }}>
      <div style={{ width: 'min(1200px, 95vw)', margin: '0 auto', display: 'flex', alignItems: 'center', gap: 20 }}>
        <Typography.Text strong style={{ color: '#fff', minWidth: 180 }}>
          Benny Lebelo
        </Typography.Text>
        <Menu mode="horizontal" theme="dark" style={{ flex: 1, background: 'transparent', borderBottom: 'none' }} items={items} />
        <Space>
          <Button href="/resume.pdf" target="_blank">Resume</Button>
          <Button type="text" icon={<GithubOutlined />} href="https://github.com/bennylebelo" target="_blank" aria-label="GitHub" />
          <Button type="text" icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/bennylebelo" target="_blank" aria-label="LinkedIn" />
        </Space>
      </div>
    </Layout.Header>
  );
}
