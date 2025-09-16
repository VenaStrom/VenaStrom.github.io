import { info } from "../info.tsx";

export default function Volunteering({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Volunteering</h3>

      <ul>
        {info.volunteering.map((vol, i) => (
          <li key={`volunteering-${i}`}>
            <strong>{vol.organization}</strong>, {vol.role} <em>{vol.dateSpan}</em>

            <p>{vol.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}