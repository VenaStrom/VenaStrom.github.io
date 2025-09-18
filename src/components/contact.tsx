import { info } from "../info.tsx";

export default function Contact({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Contact</h3>

      <div className="flex flex-row *:flex-1 gap-x-10">
        <div className="flex flex-col *:flex *:flex-row *:justify-between">
          <span>
            <p>Phone</p>
            <a href={`tel:${info.phoneLink}`} target="_blank">{info.phone}</a>
          </span>

          <span>
            <p>Email</p>
            <a href={`mailto:${info.emailLink}`} target="_blank">{info.email}</a>
          </span>
        </div>

        <div className="flex flex-row justify-evenly items-center gap-x-4 *:flex *:flex-row *:gap-x-1 *:h-fit *:items-center">
          <a href={info.linkedinLink} target="_blank">
            <img src="/icon/icons8-linkedin-24.png" alt="LinkedIn" />
            <p>LinkedIn</p>
          </a>

          <a href={info.githubLink} target="_blank">
            <img src="/icon/icons8-github-24.png" alt="GitHub" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </section>
  );
}