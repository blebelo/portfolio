import { experiences } from '@/data/experience';
import { Card, Space, Tag, Timeline, Typography } from 'antd';

export function ExperienceSection() {
  return (
    <section className="section">
      <Typography.Title level={2} className="section-title">Experience</Typography.Title>
      <Timeline
        items={experiences.map((item) => ({
          children: (
            <Card className="card-outline">
              <Typography.Title level={4} style={{ marginTop: 0 }}>{item.role}</Typography.Title>
              <Typography.Text style={{ color: '#bfbfbf' }}>{item.company} · {item.period}</Typography.Text>
              <Typography.Paragraph style={{ color: '#bfbfbf', marginTop: 10 }}>{item.description}</Typography.Paragraph>
              <ul>
                {item.achievements.map((point) => (
                  <li key={point} style={{ color: '#d9d9d9', marginBottom: 8 }}>{point}</li>
                ))}
              </ul>
              <Space wrap>
                {item.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </Space>
            </Card>
          )
        }))}
      />
    </section>
  );
}
