import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Projects</h1>
        <div className="grid">
          {projects.map((project) => (
            <article key={project.id} className="card">
              <h2>{project.name}</h2>
              <p className="muted">{project.summary}</p>
              <p><strong>Problem:</strong> {project.problem}</p>
              <p><strong>Solution:</strong> {project.solution}</p>
              <p className="muted">{project.stack.join(' • ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
