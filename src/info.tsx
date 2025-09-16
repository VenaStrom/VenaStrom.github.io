import { ReactNode } from "react";

export const info: {
  name: string;
  surname: string;
  fullName: string;
  title: string;
  subtitle?: string;
  phone: string;
  phoneLink: string;
  email: string;
  emailLink: string;
  linkedinLink: string;
  githubLink: string;
  skills: string[];
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
} = {
  name: "Vena",
  surname: "Ström",
  fullName: "Vena Ström",
  title: "Software Developer",
  subtitle: "Gymnasieingenjör",
  phone: "072-327 42 81",
  phoneLink: "+46723274281",
  email: "strom.vena@gmail.com",
  emailLink: "strom.vena+portfolio@gmail.com",
  linkedinLink: "https://www.linkedin.com/in/vena-ström-74b618332",
  githubLink: "https://github.com/VenaStrom",
  skills: [
    "JavaScript/TypeScript",
    "React",
    "Nextjs",
    "Node.js",
    "HTML & CSS",
    "Proxmox",
    "Docker",
    "SQL",
    "Linux (server & desktop)",
    "Prisma",
    "C# (WPF)",
    "Electron",
    "Python",
    "Playwright",
    "Selenium",
    "Git & GitHub",
    "SCRUM (Agile)",
    "Excel & Sheets",
    "Adobe Photoshop",
    "Autodesk Fusion 360",
    "3D printing",
    "Drivers' license class B",
    "Computer hardware",
    "Networking",
    "mathjs",
  ],
  experiences: [
    {
      company: "Sustainable Action Foundation",
      position: "Software Developer",
      dateSpan: "Ongoing (since Jul 2025)",
      description: <>
        After my internship I continued to work at <a href="https://sustainable-action.org/" target="_blank">SAF</a> during the summer and then part-time during my studies.
        I have mainly worked on the recipe system for the tool <a href="https://verktyg.koordineradklimatomställning.se/" target="_blank">Eco-Planner</a>.
        It leverages mathjs and a custom parser to allow users to apply and/or create convenient forumlas to inherit data from various data sources to streamline data entry and analysis.
      </>,
    },
    {
      company: "Sustainable Action Foundation",
      position: "Software Developer Intern",
      dateSpan: "10 weeks (Feb 2025 - Apr 2025)",
      description: <>
        During my 10 weeks at <a href="https://sustainable-action.org/" target="_blank">SAF</a>
        I worked on the tool <a href="https://verktyg.koordineradklimatomställning.se/" target="_blank">Eco-Planner</a>.
        I was solely responsible for the internationalization and translation of the entire app using <a href="https://www.i18next.com/" target="_blank">i18next</a>.
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
        
      </>,
    },
  ],
} as const;