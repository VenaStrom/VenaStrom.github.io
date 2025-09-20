import { info } from "../info.tsx";

export default function AboutMe({ className = "" }: { className?: string }) {
  return (
    <section className={`${className} gap-y-3`}>
      <h3>About Me</h3>

      <p className="flex flex-col gap-3">
        {info.aboutMe.description.map((item, i) => (
          <span key={`description-item-${i}`}>
            {item}
          </span>
        ))}
      </p>

      <div>
        <h4>Language</h4>
        <ul>
          {info.aboutMe.languages.map((language, i) => (
            <li key={`language-${i}`}>{language}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 title="I struggle to find a better name" className="underline decoration-dotted cursor-help">Things...</h4>
        <ul className="list-disc list-inside">
          {info.aboutMe.randomThings.map((thing, i) => (
            <li key={`thing-${i}`}>{thing}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}