import { info } from "../info.tsx";

export default function Contact({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>Contact</h3>

      <div>
        <p>Phone</p> <a href={`tel:${info.phoneLink}`} target="_blank">{info.phone}</a>
      </div>

      <div>
        <p>Email</p> <a href={`mailto:${info.emailLink}`} target="_blank">{info.email}</a>
      </div>

      <div>
        <a href={info.linkedinLink} target="_blank">
          <img src="/icon/icons8-linkedin-24.png" alt="LinkedIn" />
          <p>LinkedIn</p>
        </a>

        <a href={info.githubLink} target="_blank">
          <img src="/icon/icons8-github-24.png" alt="GitHub" />
          <p>GitHub</p>
        </a>
      </div>
    </section>
  );
}