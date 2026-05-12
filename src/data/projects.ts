import { ProjectItem } from '@/types';

export const projects: ProjectItem[] = [
  {
    id: 'moipone-academy',
    name: 'Moipone Academy Public Site & Application Portal',
    summary:
      'Digitised student applications into a structured full-stack platform with secure uploads and admin workflows.',
    problem: 'Manual paper-based applications created administrative bottlenecks and weak data centralization.',
    solution:
      'Built a full-stack application portal for student applications, document uploads, and administrative program management.',
    stack: ['ASP.NET Core', 'ABP', 'Next.js', 'TypeScript', 'Ant Design', 'PostgreSQL', 'AWS S3'],
    features: [
      'Multi-step applications and secure uploads',
      'Program and enrollment management',
      'Many-to-many student/program relationships',
      'Cloud-ready architecture'
    ],
    featured: true
  },
  {
    id: 'ai-support-center',
    name: 'Customer Support Center Simulation with AI Assistant',
    summary:
      'Built a multithreaded support-center simulation that combines ticketing logic and AI-assisted conversations.',
    problem: 'Support operations needed realistic simulation of concurrent calls and ticket handling.',
    solution:
      'Implemented concurrent conversation handling tied to ticket creation and ongoing AI-assisted support context.',
    stack: ['C#', '.NET', 'Multithreading', 'OpenAI APIs'],
    features: ['Concurrent call handling', 'AI conversational support', 'Ticket lifecycle integration'],
    featured: true
  },
  {
    id: 'science-center',
    name: 'Science Center Course Application System',
    summary: 'A scalable course application system based on domain-driven design principles.',
    problem: 'Needed controlled application and approval flows for course management.',
    solution: 'Built secure user and admin flows for submission, review, and approval decisions.',
    stack: ['ASP.NET Core', 'DDD', 'SQL', 'Authentication'],
    features: ['Course applications', 'Admin approval/decline', 'Secure admin access'],
    featured: true
  },
  {
    id: 'online-store-api',
    name: 'Online Store Web API',
    summary: 'Designed a secure ASP.NET API foundation for an online commerce platform.',
    problem: 'Needed robust backend foundations for commerce operations.',
    solution: 'Implemented secure CRUD endpoints, auth controls, and scalable service patterns.',
    stack: ['ASP.NET Web API', 'C#', 'SQL Server', 'JWT'],
    features: ['CRUD operations', 'AuthN/AuthZ', 'Scalable endpoint structure']
  }
];
