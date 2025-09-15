import Contact from "./components/contact.tsx";
import Skills from "./components/skills.tsx";
import info from "./info.json" with { type: "json"};

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
    </main>
  </>);
}