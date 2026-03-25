import { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    id: 'boxfusion',
    company: 'Boxfusion',
    role: 'Graduate Software Engineer / Software Engineer',
    period: 'Recent Experience',
    description:
      'Delivered client-facing software solutions across full-stack features, workflow automation, integrations, and production support.',
    achievements: [
      'Built and maintained scalable backend and full-stack solutions with C#, ASP.NET, ABP, SQL, and modern frontend tooling.',
      'Contributed to BPMN workflow automation across 50+ client-facing workflows.',
      'Supported integration work including Home Affairs e-Leave and PERSAL alignment for payroll accuracy.',
      'Resolved production issues in legacy systems and improved software reliability.',
    ],
    technologies: ['C#', 'ASP.NET', 'ABP', 'SQL Server', 'PostgreSQL', 'BPMN', 'CI/CD'],
  },
  {
    id: 'marketing',
    company: 'Social Media Marketing / Customer-Facing Roles',
    role: 'Marketing & Client Growth',
    period: '2+ years',
    description:
      'Built communication and user empathy through client acquisition and relationship management.',
    achievements: [
      'Supported customer acquisition and retention through audience-focused communication.',
      'Developed strong product communication and stakeholder interaction skills.',
    ],
    technologies: ['Communication', 'Client Management', 'Audience Strategy'],
  },
];
