import Contact from "./components/contact.tsx";
import Education from "./components/education.tsx";
import Experience from "./components/experience.tsx";
import Skills from "./components/skills.tsx";
import { info } from "./info.tsx";

export default function App() {
  return (<>
    <header>
      <h1>{info.fullName}</h1>
      <h2>{info.title}</h2>
    </header>

    <main>
      <Contact />

      <hr />

      <Skills />

      <hr />

      <Experience />

      <hr />

      <Education />

      <hr />
    </main>
  </>);
}