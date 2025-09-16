import { info } from "../info.tsx";

export default function Skills({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Skills</h3>

      <ul>
        {info.skills.map((skill, i) => (
          <li key={`skill-${i}`}>○ {skill}</li>
        ))}
      </ul>
    </section>
  );
}