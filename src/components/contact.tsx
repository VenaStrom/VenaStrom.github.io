import { info } from "../info.tsx";

export default function Contact({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Contact</h3>

      <div className="flex flex-row flex-wrap *:flex-1 gap-x-10 gap-y-3">
        <div className="flex flex-col *:flex *:flex-row *:justify-between">
          <span>
            Name
            <span>
              {info.fullName}
            </span>
          </span>

          {info.location &&
            <span>
              Location
              <span>
                {info.location}
              </span>
            </span>
          }

          {info.phone && info.phoneLink &&
            <span>
              Phone
              <a href={`tel:${info.phoneLink}`} target="_blank">{info.phone}</a>
            </span>
          }

          {info.email && info.emailLink &&
            <span>
              Email
              <a href={`mailto:${info.emailLink}`} target="_blank">{info.email}</a>
            </span>
          }
        </div>

        <div className="flex flex-row justify-evenly items-center gap-x-4 *:flex *:flex-row *:gap-x-1 *:h-fit *:items-center">
          <a href={info.linkedinLink} target="_blank">
            <img src="/public/icon/icons8-linkedin-24.png" alt="LinkedIn" />
            LinkedIn
          </a>

          <a href={info.githubLink} target="_blank">
            <img src="/public/icon/icons8-github-24.png" alt="GitHub" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}