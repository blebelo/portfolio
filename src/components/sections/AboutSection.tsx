import { Typography } from 'antd';

export function AboutSection() {
  return (
    <section className="section">
      <Typography.Title level={2} className="section-title">About</Typography.Title>
      <Typography.Paragraph style={{ color: '#d9d9d9', fontSize: 16 }}>
        Benny Lebelo is an early-career software engineer with practical product delivery experience across full-stack application
        development, backend APIs, cloud deployment, and workflow automation. He combines strong engineering execution with
        communication skills developed through customer-facing roles in marketing and studio operations.
      </Typography.Paragraph>
      <Typography.Paragraph style={{ color: '#bfbfbf', fontSize: 16 }}>
        His interests include machine learning, biomechanics, data engineering, production architecture, and building software
        systems that create measurable business value.
      </Typography.Paragraph>
    </section>
  );
}
