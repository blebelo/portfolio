'use client';

import { projects } from '@/data/projects';
import { Button, Card, Col, Divider, Row, Space, Tag, Typography } from 'antd';

export function ProjectsSection() {
  return (
    <section className="section">
      <Typography.Title level={2} className="section-title">Projects</Typography.Title>
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col xs={24} md={12} key={project.id}>
            <Card className="card-outline" title={project.name} extra={project.featured ? <Tag color="white-inverse">Featured</Tag> : undefined}>
              <Typography.Paragraph style={{ color: '#d9d9d9' }}>{project.summary}</Typography.Paragraph>
              <Divider style={{ borderColor: '#2a2a2a' }} />
              <Typography.Text strong>Stack</Typography.Text>
              <Space wrap style={{ marginTop: 8, marginBottom: 12 }}>
                {project.stack.map((stackItem) => <Tag key={stackItem}>{stackItem}</Tag>)}
              </Space>
              <Typography.Paragraph style={{ color: '#bfbfbf' }}><strong>Problem:</strong> {project.problem}</Typography.Paragraph>
              <Typography.Paragraph style={{ color: '#bfbfbf' }}><strong>Solution:</strong> {project.solution}</Typography.Paragraph>
              <Button ghost>View Details</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
