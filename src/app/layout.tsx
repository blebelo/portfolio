import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Providers } from '@/components/layout/Providers';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

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
    'Three.js'
  ]
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
