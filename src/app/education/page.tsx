import { education } from '@/data/education';

export default function EducationPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Education</h1>
        {education.map((item) => (
          <article key={item.id} className="card">
            <h2>{item.institution}</h2>
            <p>{item.qualification}</p>
            <p className="muted">Specialty: {item.specialty}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
