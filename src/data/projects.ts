import { ProjectItem } from '@/types';

export const projects: ProjectItem[] = [
  {
    id: 'moipone-academy',
    name: 'Moipone Academy Public Site and Application Portal',
    summary:
      'Digitised student applications into a structured full-stack platform with secure uploads and admin workflows.',
    problem: 'Paper-based applications slowed operations and fragmented student data.',
    solution:
      'Built a secure application portal and admin platform for program management, records, and enrollment workflows.',
    stack: ['ASP.NET', 'ABP', 'Next.js', 'TypeScript', 'Ant Design', 'PostgreSQL', 'AWS S3'],
    features: ['Multi-step forms', 'Document uploads', 'Program management', 'Enrollment controls'],
    featured: true,
  },
  {
    id: 'ai-support-center',
    name: 'Customer Support Center Simulation with AI Assistant',
    summary: 'Combined multithreading, ticketing logic, and AI-assisted support conversations.',
    problem: 'Support simulations needed realistic concurrent call handling and ticket lifecycle management.',
    solution: 'Built a multithreaded simulation that creates tickets from AI-driven support conversations.',
    stack: ['C#', '.NET', 'Concurrency', 'OpenAI API'],
    features: ['Threaded call simulation', 'Ticket creation', 'Real-time conversation flow'],
    featured: true,
  },
  {
    id: 'online-store-api',
    name: 'Online Store Web API',
    summary: 'Designed a secure ASP.NET API foundation for commerce workflows.',
    problem: 'Needed scalable backend endpoints for product and order operations.',
    solution: 'Implemented CRUD APIs, auth, and service patterns with database-backed persistence.',
    stack: ['ASP.NET Web API', 'EF Core', 'SQL'],
    features: ['CRUD endpoints', 'Auth', 'Structured routing'],
  },
];
