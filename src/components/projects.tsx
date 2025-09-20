import { Fragment } from "react";
import { info } from "../info.tsx";

export default function Projects({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Featured Projects</h3>

      <ul>
        {info.projects.map((project, i) => <Fragment key={`project-fragment-${i}`}>
          <li key={`project-${i}`} className="flex flex-col gap-y-2">

            {/* Header */}
            <div className="flex flex-row flex-wrap gap-x-4 justify-between">
              <h4>{project.name}</h4>
              <i>{project.dateSpan}</i>
            </div>

            {/* Description */}
            <p className="mb-1">{project.description}</p>

            {/* Images */}
            <div className="w-full max-w-full flex flex-row flex-wrap gap-2 justify-center">
              {project.images}
            </div>

            {/* Stack */}
            <div>
              <span className="font-normal flex flex-row items-center gap-x-0.5">
                <img className="h-5" src="/public/icon/icons8-wrench-24.png" alt="Wrench" />
                Stack
              </span>

              <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2 justify-between">
                {project.stack.map((tech, j) =>
                  <li key={`project-${i}-stack-${j}`}>
                    {tech}
                  </li>
                )}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-row justify-evenly flex-wrap gap-x-4 mt-2">
              <span className="flex flex-row items-center gap-x-0.5">
                <img className="h-5" src="/public/icon/icons8-github-24.png" alt="GitHub logo" />
                {project.sourceCodeLink}
              </span>

              {project.visitLink &&
                <span className="flex flex-row items-center gap-x-0.5">
                  <img className="h-5" src="/public/icon/icons8-globe-24.png" alt="Globe icon" />
                  {project.visitLink}
                </span>
              }

              {project.installLink &&
                <span className="flex flex-row items-center gap-x-0.5">
                  <img className="h-5" src="/public/icon/icons8-download-24.png" alt="Download icon" />
                  {project.installLink}
                </span>
              }
            </div>
          </li>

          <hr key={`project-${i}-hr`} className="w-full border-gray-400/80 border-[0.5] mt-2" />
        </Fragment>
        )}

        <li>
          <h4>More Projects</h4>

          <p>All my projects can be found on <a href="https://github.com/VenaStrom" target="_blank">GitHub</a></p>
        </li>
      </ul>
    </section>
  );
}