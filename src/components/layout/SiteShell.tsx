import Link from 'next/link';
import { ReactNode } from 'react';

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/experience', 'Experience'],
  ['/projects', 'Projects'],
  ['/education', 'Education'],
  ['/skills', 'Skills'],
  ['/contact', 'Contact'],
  ['/chat', 'Chat'],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <strong>Benny Lebelo</strong>
          <nav className="nav-links">
            {navItems.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <a href="/Benny-Lebelo-CV.pdf">Resume</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="container footer">
        <p>Benny Lebelo — Software Engineer building practical, production-ready systems.</p>
        <p>Built with Next.js, TypeScript, Three.js, and Ant Design.</p>
      </footer>
    </>
  );
}
