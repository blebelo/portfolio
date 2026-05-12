import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Providers } from '@/components/layout/Providers';
import { SiteBackground } from '@/components/three/SiteBackground';
import { WaterCursor } from '@/components/three/WaterCursor';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800']
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['500', '600', '700']
});

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
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <SiteBackground />
        <WaterCursor />
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
