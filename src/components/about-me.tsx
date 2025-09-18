import { info } from "../info.tsx";

export default function AboutMe({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h3>About Me</h3>

      <p>{info.aboutMe.description}</p>

      <ul>
        {info.aboutMe.languages.map((language, i) => (
          <li key={`language-${i}`}>{language}</li>
        ))}
      </ul>

      <h4 title="I struggle to find a better name">Things...</h4>
      <ul>
        {info.aboutMe.randomThings.map((thing, i) => (
          <li key={`thing-${i}`}>{thing}</li>
        ))}
      </ul>
    </section>
  );
}