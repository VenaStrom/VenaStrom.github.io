import { info } from "../info.tsx";

export default function Skills({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Skills</h3>

      <div className="flex flex-col gap-y-5">
        {Object.entries(info.skills).map(([category, skills], i) =>
          <div key={`skill-category-${i}`}>
            <h4>{category}</h4>
            <ul className="flex flex-row flex-wrap gap-x-6 gap-y-2">
              {skills.map((skill, j) => (
                <li key={`skill-${i}-${j}`} className="mr-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}