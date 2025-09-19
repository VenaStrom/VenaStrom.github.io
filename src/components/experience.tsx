import { info } from "../info.tsx";

export default function Experience({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Experience</h3>

      <ul>
        {info.experiences.map((exp, i) =>
          <li key={`experience-${i}`} className="flex flex-col gap-y-1">

            <div className="flex flex-row flex-wrap items-center gap-x-4">
              <h4 className="flex flex-row flex-wrap gap-x-2">
                <span>{exp.position}</span>
                <span className="hidden sm:block">-</span>
                <i>{exp.company}</i>
              </h4>

              {/* Spacer */}
              <span className="flex-1"></span>

              <i>{exp.dateSpan}</i>
            </div>

            <p>{exp.description}</p>
          </li>
        )}
      </ul>
    </section>
  );
}