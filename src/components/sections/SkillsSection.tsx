import { skills } from '@/data/skills';
import { Card, Col, Row, Tag, Typography } from 'antd';

export function SkillsSection() {
  return (
    <section className="section">
      <Typography.Title level={2} className="section-title">Skills</Typography.Title>
      <Row gutter={[16, 16]}>
        {skills.map((group) => (
          <Col xs={24} md={12} key={group.category}>
            <Card className="card-outline" title={group.category}>
              {group.items.map((item) => (
                <Tag key={item} style={{ marginBottom: 8 }}>{item}</Tag>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
