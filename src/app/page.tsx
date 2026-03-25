import { Hero } from '@/components/hero/Hero';
import { RecruiterStrip } from '@/components/sections/RecruiterStrip';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { education } from '@/data/education';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecruiterStrip />

      <section className="section">
        <div className="container">
          <h2>About</h2>
          <p className="muted">
            Software engineer with practical delivery experience across backend APIs, full-stack product development,
            cloud-enabled systems, and workflow automation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured Experience</h2>
          <div className="grid grid-2">
            {experience.slice(0, 2).map((item) => (
              <article key={item.id} className="card">
                <h3>{item.role}</h3>
                <p className="muted">{item.company}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="grid grid-2">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <article key={project.id} className="card">
                  <h3>{project.name}</h3>
                  <p className="muted">{project.summary}</p>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Skills Snapshot</h2>
          <div className="grid grid-2">
            {skills.slice(0, 4).map((group) => (
              <article key={group.category} className="card">
                <h3>{group.category}</h3>
                <p className="muted">{group.items.join(' • ')}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Education</h2>
          {education.map((item) => (
            <article key={item.id} className="card">
              <h3>
                {item.qualification} — {item.institution}
              </h3>
              <p className="muted">Specialty: {item.specialty}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
