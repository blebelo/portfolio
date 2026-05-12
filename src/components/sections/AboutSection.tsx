'use client';

import { Typography } from 'antd';

const AboutSection: React.FC = () => {
  return (
    <section className="section">
      <Typography.Title level={2} className="section-title">
        About
      </Typography.Title>

      <Typography.Paragraph style={{ color: '#d9d9d9', fontSize: 16 }}>
        Benny Lebelo is an early-career software engineer...
      </Typography.Paragraph>

      <Typography.Paragraph style={{ color: '#bfbfbf', fontSize: 16 }}>
        His interests include machine learning...
      </Typography.Paragraph>
    </section>
  );
};

export default AboutSection;
