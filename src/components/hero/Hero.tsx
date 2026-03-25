import Link from 'next/link';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section className="section">
      <div className="container hero">
        <div>
          <p className="muted">{profile.role}</p>
          <h1>{profile.headline}</h1>
          <p className="muted">{profile.summary}</p>
          <Link href="/projects" className="btn">
            View Projects
          </Link>
          <a href={profile.links.resume} className="btn secondary">
            Download Resume
          </a>
          <Link href="/chat" className="btn secondary">
            Chat With My AI
          </Link>
          <Link href="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
        <div className="scene" aria-label="Three.js hero placeholder" />
      </div>
    </section>
  );
}
