import { experience } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Experience</h1>
        <div className="grid">
          {experience.map((item) => (
            <article key={item.id} className="card">
              <h2>{item.role}</h2>
              <p className="muted">{item.company}</p>
              <ul>
                {item.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
