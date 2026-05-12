'use client'
import { Hero } from '@/components/hero/Hero';
import AboutSection from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { Button, Card, Typography } from 'antd';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <section className="section cta-section">
        <Card className="card-outline cta-panel">
          <Typography.Title level={3} className="cta-title">
            Ask My AI Assistant
          </Typography.Title>
          <Typography.Paragraph className="cta-copy">
            Recruiters can ask targeted questions about Benny&apos;s experience, stack, projects, and delivery history.
          </Typography.Paragraph>
          <Button type="primary" className="hero-btn hero-btn-primary">
            <Link href="/chat">Open AI Chat</Link>
          </Button>
        </Card>
      </section>
    </>
  );
}
