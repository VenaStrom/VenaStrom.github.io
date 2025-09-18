import { info } from "../info.tsx";

export default function Experience({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Experience</h3>

      <ul>
        {info.experiences.map((exp, i) =>
          <li key={`experience-${i}`}>
            <strong>{exp.position}</strong>, {exp.company} <i>({exp.dateSpan})</i>

            <p>{exp.description}</p>
          </li>
        )}
      </ul>
    </section>
  );
}