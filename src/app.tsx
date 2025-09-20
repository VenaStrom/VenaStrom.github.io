import Contact from "./components/contact.tsx";
import Education from "./components/education.tsx";
import Experience from "./components/experience.tsx";
import AboutMe from "./components/about-me.tsx";
import Projects from "./components/projects.tsx";
import Skills from "./components/skills.tsx";
import { info } from "./info.tsx";

declare const __BUILD_DATE__: string;

export default function App() {
  return (<>
    <main className="bg-white w-11/12 md:w-8/12 px-6 py-5 m-8 mb-20">
      <header className="flex flex-col items-center">
        <h1 className="text-4xl">
          {info.fullName}
        </h1>

        <h2 className="italic">{info.title}</h2>
      </header>

      <Contact />

      <hr />

      <Skills />

      <hr />

      <Experience />

      <hr />

      <Education />

      <hr />

      <Projects />

      <hr />

      {/* References */}
      <section>
        <h3>References</h3>
        <p>References are available upon request.</p>
      </section>

      <hr />

      <AboutMe />

      <hr />

      {/* Certificates */}
      <section>
        <h3>Certificates</h3>

        <p>Information Technology Specialist in JavaScript via CERTIPORT</p>
        <p>Information Technology Specialist in Networking via CERTIPORT</p>
      </section>
    </main>

    <span className="text-black/60 p-2">© 2025 Vena Ström. Page last updated {__BUILD_DATE__}</span>
  </>);
}