import { profile } from '@/data/profile';

export function RecruiterStrip() {
  return (
    <section className="section">
      <div className="container grid grid-2">
        {profile.highlights.map((item) => (
          <div key={item} className="pill">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
