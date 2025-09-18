import { info } from "../info.tsx";

export default function Skills({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Skills</h3>

      <ul className="flex flex-row flex-wrap gap-6">
        {info.skills.map((skill, i) => (
          <li key={`skill-${i}`}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}