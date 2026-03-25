import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { SiteShell } from '@/components/layout/SiteShell';

export const metadata: Metadata = {
  title: 'Benny Lebelo | Software Engineer | .NET, Next.js, Cloud, AI',
  description:
    'Portfolio of Benny Lebelo, a software engineer building full-stack applications with ASP.NET, Next.js, TypeScript, cloud services, and AI-powered systems.',
  keywords: [
    'software engineer',
    '.NET developer',
    'Next.js developer',
    'TypeScript',
    'full-stack developer',
    'ASP.NET',
    'Ant Design',
    'Three.js',
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
