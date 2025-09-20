import { info } from "../info.tsx";

export default function Education({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Education</h3>

      <ul>
        {info.education.map((edu, i) => (
          <li key={`education-${i}`}>
            {/* <strong>{edu.seat}</strong>, {edu.degree} <i>{edu.dateSpan}</i> */}

            <div className="flex flex-row flex-wrap justify-between gap-x-4">
              <h4>{edu.seat}</h4>

              <i>{edu.dateSpan}</i>
            </div>

            <i className="font-[400]">{edu.degree}</i>

            <p>{edu.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}