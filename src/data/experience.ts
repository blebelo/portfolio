import { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'boxfusion',
    company: 'Boxfusion',
    role: 'Software Engineer',
    period: 'Recent',
    description:
      'Contributed to client-facing software delivery across backend, workflow automation, integration, and production support work.',
    achievements: [
      'Built and maintained scalable backend and full-stack solutions using C#, ASP.NET, ABP, SQL, and modern frontend tooling.',
      'Contributed to workflow automation and business process implementation across more than 50 client-facing BPMN workflows.',
      'Supported integrations including Home Affairs e-Leave and PERSAL for improved payroll and data accuracy.',
      'Worked with high-volume structured data and performance-sensitive database operations.',
      'Helped debug legacy systems, resolve production issues, and improve software reliability.'
    ],
    technologies: ['C#', 'ASP.NET', 'ABP', 'SQL Server', 'PostgreSQL', 'BPMN', 'CI/CD']
  },
  {
    id: 'marketing',
    company: 'Speed Media',
    role: 'Marketing & Customer-Facing Work',
    period: '2+ years',
    description:
      'Built communication, client acquisition, and user-centered thinking through customer-facing delivery.',
    achievements: [
      'Managed client relationships and acquisition activities.',
      'Strengthened communication and product storytelling skills.',
      'Developed strong customer empathy and feedback awareness.'
    ],
    technologies: ['Communication', 'Client Management', 'Content Operations']
  },
  {
    id: 'studio',
    company: 'Photo Studio Management',
    role: 'Operations & Client Management',
    period: 'Previous',
    description: 'Owned day-to-day operations and customer delivery in a real-world business setting.',
    achievements: [
      'Managed end-to-end operations and customer workflows.',
      'Handled client acquisition and relationship management.',
      'Built execution discipline, ownership, and service quality consistency.'
    ],
    technologies: ['Operations', 'Customer Success', 'Process Ownership', 'Product Readiness', ' ']
  }
];
