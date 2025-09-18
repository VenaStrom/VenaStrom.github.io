import { info } from "../info.tsx";

export default function Education({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Education</h3>

      <ul>
        {info.education.map((edu, i) => (
          <li key={`education-${i}`}>
            <strong>{edu.seat}</strong>, {edu.degree} <i>{edu.dateSpan}</i>

            <p>{edu.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}