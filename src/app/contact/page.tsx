'use client';

import { profile } from '@/data/profile';
import { Button, Card, Form, Input, Space, Typography } from 'antd';

export default function ContactPage() {
  return (
    <section className="section">
      <Typography.Title level={2} className="section-title">Contact</Typography.Title>
      <Card className="card-outline" style={{ marginBottom: 16 }}>
        <Typography.Paragraph style={{ color: '#bfbfbf' }}>
          Interested in working together, discussing a role, or learning more about my experience? Reach out directly.
        </Typography.Paragraph>
        <Space direction="vertical" size={2}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank">GitHub</a>
          <a href={profile.linkedin} target="_blank">LinkedIn</a>
        </Space>
      </Card>
      <Card className="card-outline">
        <Form layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="subject" label="Subject" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="message" label="Message" rules={[{ required: true }]}>
            <Input.TextArea rows={5} />
          </Form.Item>
          <Button type="primary">Send Message</Button>
        </Form>
      </Card>
    </section>
  );
}
