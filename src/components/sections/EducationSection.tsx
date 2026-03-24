import { education } from '@/data/education';
import { Card, Typography } from 'antd';

export function EducationSection() {
  return (
    <section className="section">
      <Typography.Title level={2} className="section-title">Education</Typography.Title>
      {education.map((item) => (
        <Card className="card-outline" key={item.id} title={`${item.institution} · ${item.qualification}`}>
          <Typography.Paragraph style={{ color: '#bfbfbf' }}>
            Specialty: {item.specialty} · {item.period}
          </Typography.Paragraph>
          <ul>
            {item.highlights.map((h) => <li key={h} style={{ color: '#d9d9d9' }}>{h}</li>)}
          </ul>
        </Card>
      ))}
    </section>
  );
}
