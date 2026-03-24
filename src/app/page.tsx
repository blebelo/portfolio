import { Hero } from '@/components/hero/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
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
      <section className="section">
        <Card className="card-outline">
          <Typography.Title level={3}>Ask My AI Assistant</Typography.Title>
          <Typography.Paragraph style={{ color: '#bfbfbf' }}>
            Recruiters can ask targeted questions about Benny&apos;s experience, stack, projects, and delivery history.
          </Typography.Paragraph>
          <Button type="primary">
            <Link href="/chat">Open AI Chat</Link>
          </Button>
        </Card>
      </section>
    </>
  );
}
