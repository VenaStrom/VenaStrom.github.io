import { info } from "../info.tsx";

export default function Projects({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Featured Projects</h3>

      <ul>
        {info.projects.map((project, i) => (
          <li key={`project-${i}`}>

          </li>
        ))}

        <li>
          <h4>More Projects</h4>

          <p>
            All my projects can be found on <a href="https://github.com/VenaStrom" target="_blank">GitHub</a>.
          </p>
        </li>
      </ul>
    </section>
  );
}