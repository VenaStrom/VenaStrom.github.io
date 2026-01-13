import { ReactNode } from "react";

export const info: {
  name: string;
  surname: string;
  fullName: string;
  title: string;
  subtitle: string;
  location: string | null;
  phone: string | null;
  phoneLink: string | null;
  email: string | null;
  emailLink: string | null;
  linkedinLink: string;
  githubLink: string;
  // Category: string[]
  skills: Record<string, string[]>;
  experiences: {
    company: string;
    position: string;
    dateSpan: string; // E.g. "Aug 2020 - Dec 2021" or "2020 - Present"
    description: string | ReactNode;
  }[];
  volunteering: {
    organization: string;
    role: string;
    dateSpan: string; // E.g. "Aug 2020 - Dec 2021" or "2020 - Present"
    description: string | ReactNode;
  }[];
  education: {
    seat: string;
    degree: string;
    dateSpan: string; // E.g. "Aug 2020 - Dec 2021" or "2020 - Present"
    description: string | ReactNode | null;
  }[];
  projects: {
    name: string;
    dateSpan: string; // E.g. "Aug 2020 - Dec 2021" or "2020 - Present"
    description: string | ReactNode;
    stack: (string | ReactNode)[];
    sourceCodeLink: ReactNode;
    visitLink: ReactNode | null;
    installLink: ReactNode | null;
    images: ReactNode;
  }[];
  aboutMe: {
    description: (string | ReactNode)[];
    languages: (string | ReactNode)[];
    randomThings: (string | ReactNode)[];
  };
} = {
  name: "Vena",
  surname: "Ström",
  fullName: "Vena Ström",
  title: "Software Developer",
  subtitle: "Gymnasieingenjör",
  location: "Uppsala",
  phone: null,
  phoneLink: null,
  email: "strom.vena@gmail.com",
  emailLink: "strom.vena+portfolio@gmail.com",
  linkedinLink: "https://www.linkedin.com/in/vena-ström",
  githubLink: "https://github.com/VenaStrom",
  skills: {
    "Web": [
      "JavaScript/TypeScript",
      "React",
      "Nextjs",
      "Tailwind CSS",
      "HTML & CSS",
    ],
    "Testing": [
      "Playwright",
      "Selenium",
    ],
    "Backend": [
      "Node.js",
      "REST API",
      "Express.js",
      "SQL",
      "Prisma",
      "Docker",
      "Proxmox",
    ],
    "Apps": [
      "Electron",
      "C# (WPF)",
    ],
    "OS & Tools": [
      "Linux (server & desktop)",
      "Windows",
      "Git & GitHub",
      "GitHub Workflows",
      "Visual Studio Code",
      "Excel & Sheets",
      "Adobe Photoshop",
      "Autodesk Fusion 360",
    ],
    "Other": [
      "SCRUM (Agile)",
      "3D printing",
      "Drivers' license class B",
      "Computer hardware",
      "Networking",
    ],
  },
  experiences: [
    {
      company: "Sustainable Action Foundation",
      position: "Software Developer",
      dateSpan: "Jul 2025 - Present",
      description: <>
        After my internship I continued to work at <a href="https://sustainable-action.org/" target="_blank">SAF</a> during the summer and then part-time during my studies.
        I have mainly worked on the recipe system for the tool <a href="https://verktyg.koordineradklimatomställning.se/" target="_blank">Eco-Planner</a>.
        It leverages mathjs and a custom parser to allow users to apply and/or create convenient forumlas to inherit data from various data sources to streamline data entry and analysis.
      </>,
    },
    {
      company: "Sustainable Action Foundation",
      position: "Software Developer Intern",
      dateSpan: "Feb 2025 - Apr 2025 (10 weeks)",
      description: <>
        During my 10 weeks at <a href="https://sustainable-action.org/" target="_blank">SAF</a> I worked on the tool <a href="https://verktyg.koordineradklimatomställning.se/" target="_blank">Eco-Planner</a>.
        I was responsible for the internationalization and translation of the entire app using <a href="https://www.i18next.com/" target="_blank">i18next</a>.
        Work was also done to improve the automated testing of the app using <a href="https://playwright.dev/" target="_blank">Playwright</a>.
      </>,
    },
  ],
  volunteering: [
    {
      organization: "SATURNUS AU",
      role: "President (Ordförande)",
      dateSpan: "Dec 2022 - Nov 2024",
      description: <>
        <a href="https://www.astronomiskungdom.se/" target="_blank">Astronomisk Ungdom</a> is a youth
        organization that encourages curiosity about astronomy and space. SATURNUS is a local sub-organization
        with the same goal. I initially served as the accountant and then led it
        from October 2023 to November 2024.
      </>,
    },
    {
      organization: "Stockholm Trekkers",
      role: "Technician",
      dateSpan: "Mar 2024 - Present",
      description: <>
        <a href="https://www.stockholmtrekkers.se" target="_blank">Stockholm Trekkers</a> is non-profit organization that brings sci-fi and especially Star Trek fans together.
        I help developed new workflows and procedures for making playlists to watch during the meets and preparing the video and audio equipment on-site.
      </>,
    },
    {
      organization: "NTI Gymnasiet",
      role: "School Ambassador",
      dateSpan: "Oct 2022 - Jun 2025",
      description: <>
        NTI-gymnasiet has a program where students can become ambassadors for the school to represent
        it at events such as <a href="https://www.uppsala.se/kampanjsidor/gymnasiemassan/" target="_blank">Gymnasiemässan</a> and <a href="https://ntigymnasiet.se/uppsala/oppet-hus/" target="_blank">open houses</a>.
        If you are selected to the program you attend a workshop/course in Stockholm about public speaking and presentation skills.
        My years in the program were great fun and I got to meet a lot of new people.
      </>,
    },
  ],
  education: [
    {
      seat: "Uppsala University",
      degree: "Bachelor's Program in Information Systems - Systems Development",
      dateSpan: "Aug 2025 - Jun 2028",
      description: <>
        About the program <a href="https://www.uu.se/utbildning/program/kandidatprogram-systemvetenskap-systemutveckling" target="_blank">uu.se</a>.
      </>,
    },
    {
      seat: "NTI Gymnasiet Uppsala",
      degree: "Gymnasieingenjör / Certified Upper Secondary School Engineer",
      dateSpan: "Aug 2024 - Jun 2025",
      description: <>
        About the program <a href="https://ntigymnasiet.se/uppsala/program/gymnasieingenjorsprogrammet/" target="_blank">ntigymnasiet.se</a>.
      </>,
    },
    {
      seat: "NTI Gymnasiet Uppsala",
      degree: "Gymnasieexamen / High School Diploma in Information Technology",
      dateSpan: "Aug 2021 - Jun 2024",
      description: <>
        About the program <a href="https://ntigymnasiet.se/uppsala/program/teknikprogrammet/informations-och-medieteknik/" target="_blank">ntigymnasiet.se</a>.
      </>,
    },
  ],
  projects: [
    {
      name: "Stockholm Trekkers Playlist Maker",
      dateSpan: "Aug 2024 - Present",
      description: <>
        An Electron app used by the organization <a href="https://www.stockholmtrekkers.se" target="_blank">Stockholm Trekkers</a> to compile playlists that are played at our
        monthly events.
        The app focuses on user experience. I made the entire program myself while constantly
        taking feedback to improve the product. I still maintain and update the app.
      </>,
      stack: ["Electron", "Node.js", "JavaScript", "HTML & CSS", "Git & GitHub", "GitHub Workflows"],
      images: <>
        <img className="w-full sm:w-2/5" height={400} width={859} loading="lazy" src="/screenshots/playlist-editor.webp" alt="playlist editor" />
        <img className="w-full sm:w-2/5" height={400} width={859} loading="lazy" src="/screenshots/playlist-editor-exporting.webp" alt="playlist editor while exporting a project" />
      </>,
      sourceCodeLink: <a href="https://github.com/VenaStrom/Stockholm-Trekkers-Playlist-Maker" target="_blank">GitHub</a>,
      visitLink: null,
      installLink: <a href="https://github.com/VenaStrom/Stockholm-Trekkers-Playlist-Maker/releases" target="_blank">Releases</a>,
    },
    {
      name: "Vena's Radio Player",
      dateSpan: "Aug 2024 - Present",
      description: <>
        A mobile focused website that I made to replace the official Swedish National Radio app since it had
        bugs I couldn't stand. I use it daily. It uses their official —open— <a href="https://sverigesradio.se/oppetapi" target="_blank">API</a>. I still maintain and
        update the site.
      </>,
      stack: [
        "Nextjs",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Web API",
        "REST API",
      ],
      images: <>
        <img className="w-2/5 sm:w-2/7" height={600} width={1020} loading="lazy" src="/screenshots/home-page.webp" alt="Vena's radio home page" />
        <img className="w-2/5 sm:w-2/7" height={600} width={1020} loading="lazy" src="/screenshots/feed-page.webp" alt="Vena's radio feed page" />
      </>,
      sourceCodeLink: <a href="https://github.com/VenaStrom/Venas-Radio" target="_blank">GitHub</a>,
      visitLink: <a href="https://vr-radio.tailad6f63.ts.net/" target="_blank">Live site</a>,
      installLink: null,
    },
    {
      name: "TETRIS#",
      dateSpan: "Nov 2025",
      description: <>
        TETRIS# <i>(tetris sharp)</i>, a console based Tetris clone with rogue like elements like shopping power-ups and de-buffs. Features single and multiplayer modes.
      </>,
      stack: [
        "C#",
        ".NET",
        "ANSI escape codes",
        "Custom text based rendering engines",
        "Git & GitHub",
      ],
      images: <>
        <img className="w-full sm:w-2/5" height={302} width={494} loading="lazy" src="/screenshots/singleplayer-playing.png" alt="Tetris# one player playing" />
        <img className="w-full sm:w-2/5" height={302} width={494} loading="lazy" src="/screenshots/singleplayer-shopping.png" alt="Tetris# one player shopping" />
      </>,
      sourceCodeLink: <a href="https://github.com/VenaStrom/cs-tetris-p-42" target="_blank">GitHub</a>,
      visitLink: null,
      installLink: <a href="https://github.com/VenaStrom/cs-tetris-p-42#readme" target="_blank">Install</a>,
    },
  ],
  aboutMe: {
    description: [
      <>
        I'm a full stack developer focused on creating user-friendly, maintainable systems, with over four years of experience with JavaScript/TypeScript and other technologies.
      </>,
      <>
        I manage my own servers, mainly via Proxmox, and good ol' SSH.
      </>,
      <>
        I also dabble in integrated systems. Right now I'm working in a group called <a href="https://www.astronomiskungdom.se/aurore/" target="_blank">AURORE</a>-3 to build a small probe that will be sent to <strong>actual space</strong> Q1 2026!
      </>,
      <>
        Generally I code to achieve my creative goals and to solve problems in my daily life so if that requires learning a new technology I'm all for it!
      </>,
    ],
    languages: ["Swedish - Fluent", "English - Fluent"],
    randomThings: [
      "I love LEGO, especially LEGO Technic.",
      "I enjoy cycling.",
      "I'm proficient at solving Rubik's cubes",
      "I love hotkeys! I cannot live without them.",
      "I run Pop!_OS on my laptop which is an Ubuntu-based Linux distro with built in NVIDIA GPU support. Although I'm not a fan of GNOME so I use KDE Plasma as my desktop environment.",
      "Cats are awesome.",
      "My name roots from latin and literally means 'vein' as in the blood vessel.",
      <>Star Wars and Star Trek are <u>both</u> great in <i>very</i> different ways.</>
    ],
  },
} as const;