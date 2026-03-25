import type { Metadata } from 'next';
import { ReactNode } from 'react';
import 'antd/dist/reset.css';
import './globals.css';
import { SiteShell } from '@/components/layout/SiteShell';
import { Providers } from '@/components/common/Providers';

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
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
