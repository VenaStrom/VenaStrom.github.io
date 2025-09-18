import { info } from "../info.tsx";

export default function Projects({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Featured Projects</h3>

      <ul>
        {info.projects.map((project, i) => (
          <li key={`project-${i}`}>
            <h4>{project.name}</h4>
            <i>{project.dateSpan}</i>

            <p>{project.description}</p>

            <div className="w-full max-w-full flex flex-row gap-x-2">
              {project.images}
            </div>
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