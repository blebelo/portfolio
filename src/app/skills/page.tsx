import { skills } from '@/data/skills';

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Skills</h1>
        <div className="grid grid-2">
          {skills.map((group) => (
            <article key={group.category} className="card">
              <h2>{group.category}</h2>
              <p className="muted">{group.items.join(' • ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
