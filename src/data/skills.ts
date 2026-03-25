import { SkillGroup } from '@/types';

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Ant Design', 'HTML', 'CSS'] },
  {
    category: 'Backend',
    items: ['ASP.NET Core', 'ABP Framework', 'REST APIs', 'Entity Framework Core', 'OAuth 2.0', 'JWT'],
  },
  { category: 'Databases', items: ['SQL Server', 'PostgreSQL', 'NoSQL', 'Query Optimization'] },
  { category: 'Cloud / DevOps', items: ['AWS EC2', 'AWS RDS', 'AWS S3', 'Docker', 'GitHub Actions', 'CI/CD'] },
];
