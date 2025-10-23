"use client";

import React, { useEffect, useMemo, useState } from "react";

// Simple className merger
const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

type Theme = "light" | "dark";

type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  technologies: string[];
  notes?: string;
};

type Project = {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
};

type Education = {
  school: string;
  degree: string;
  location?: string;
  period: string;
};

type Certification = {
  title: string;
  issuer?: string;
  date: string;
};

// Icons (inline SVG, no extra dependencies)
const IconSun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
const IconMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const IconDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);
const IconCopy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const IconSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);
const IconExternal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
  </svg>
);
const IconPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.11a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.6.59A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);
const IconGithub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.8 1.05A9.43 9.43 0 0 1 12 6.83c.86 0 1.73.12 2.54.35 1.95-1.33 2.8-1.05 2.8-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
  </svg>
);
const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.13V24h-4v-7.1c0-1.7-.03-3.87-2.36-3.87-2.36 0-2.72 1.85-2.72 3.75V24h-4V8z" />
  </svg>
);
const IconGlobe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IconLocation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconClear = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

// Resume Data
const PROFESSIONAL_SUMMARY =
  "Results-oriented Web Developer with experience building and maintaining responsive web applications using modern technologies like React, Node.js, Next.js, and Spring MVC. Skilled across frontend and backend, database management, and creating dynamic UIs. Proven ability to contribute from concept to deployment, focusing on practical, efficient, user-focused solutions.";

const SKILLS: Record<string, string[]> = {
  Frontend: [
    "ReactJS",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "Tailwind CSS",
    "Chakra UI",
    "Shadcn UI",
    "Framer Motion",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Java",
    "Spring MVC",
    "Spring Boot",
    "Python",
    "PHP",
    "Symfony",
  ],
  Databases: [
    "PostgreSQL",
    "MySQL",
    "Oracle",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Prisma",
  ],
  Testing: ["JUnit", "Jest", "React Testing Library"],
  "Tools & Technologies": [
    "Git",
    "Docker",
    "RESTful APIs",
    "Auth.js",
    "AI Integration",
    "Tableau",
  ],
};

const EXPERIENCES: Experience[] = [
  {
    role: "Full-stack Developer",
    company: "Aquil App",
    location: "Nantes, France (Remote)",
    start: "Jul 2025",
    end: "Present",
    bullets: [
      "Built a job-matching platform using Next.js, Laravel, and AI algorithms to improve hiring.",
      "Implemented dynamic UIs with shadcn/ui, integrated REST and GraphQL APIs, optimized with SSR and code splitting.",
      "Boosted user engagement by 60% and reduced time-to-hire by over 40%.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "REST",
      "GraphQL",
      "AI Matching",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Storegen.ai",
    location: "Montréal, Canada (Remote)",
    start: "Jan 2025",
    end: "Apr 2025",
    bullets: [
      "Built modern landing pages with Next.js 15, React, TypeScript, Tailwind CSS, and shadcn/ui components.",
      "Implemented backend data models and API endpoints using Prisma on Neon serverless PostgreSQL with Auth.js v5.",
      "Integrated AI generation workflows via Gemini and Flux API within Server Actions, persisting data with Prisma.",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
    ],
  },
  {
    role: "Freelance Trainer",
    company: "FRTN Technologies Tunisie",
    location: "Tunis, Tunisia",
    start: "Oct 2024",
    end: "Dec 2024",
    bullets: [
      "Led hands-on training with real-world examples, contributing to a 15% increase in cohort employability.",
    ],
    technologies: ["JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    role: "Web Developer",
    company: "Générale Tunisienne De L’Informatique (GTI)",
    location: "Tunis, Tunisia",
    start: "Feb 2023",
    end: "Jul 2023",
    bullets: [
      "Developed and integrated modules for maintenance and project tracking tools using Spring MVC, JSF, and Oracle.",
      "Built a full-stack analytics dashboard to monitor presence, tasks, and invoices, cutting analysis time from 2 days to 30 minutes.",
      "Created web and email notifications for expiring contracts or due invoices, reducing missed maintenance to 1%.",
    ],
    technologies: ["Java", "Spring MVC", "JSF", "Oracle", "SQL", "HTML", "CSS"],
  },
  {
    role: "Web Developer",
    company: "AJico Group",
    location: "Remote",
    start: "Dec 2022",
    end: "Feb 2023",
    bullets: [
      "Built a responsive promotional website for 'Japan New Year' event using React and Chakra UI, raising engagement by 40%.",
      "Engineered RESTful backend services with Node.js and Express.js, integrating MongoDB and MySQL for 99.5% uptime.",
    ],
    technologies: ["React", "Chakra UI", "SCSS", "Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    role: "Web Developer",
    company: "CIN Group",
    location: "Tunis, Tunisia",
    start: "Aug 2022",
    end: "Jan 2023",
    bullets: [
      "Built a secure investment platform frontend (React, Chakra UI) and backend (Node.js, Express.js, PostgreSQL).",
      "Optimized queries and contributed features, improving responsiveness by 20% and user trust by 25%.",
    ],
    technologies: ["React", "Chakra UI", "Node.js", "Express.js", "PostgreSQL", "RESTful APIs"],
  },
  {
    role: "Web Developer",
    company: "Smart Kokusai",
    location: "Tunis, Tunisia",
    start: "Jul 2022",
    end: "Aug 2022",
    bullets: [
      "Developed dynamic frontend interfaces in React.js with animations and advanced filtering, +30% session duration.",
      "Implemented RESTful APIs using Node.js, Express.js, and SQL, improving data retrieval speeds by 40%.",
    ],
    technologies: ["React", "Node.js", "Express.js", "SQL", "Framer Motion"],
  },
  {
    role: "Junior Developer",
    company: "Alidade Tunisia",
    location: "Tunis, Tunisia",
    start: "Jul 2022",
    end: "Jul 2022",
    bullets: [
      "Developed full-stack features using Blazor and ASP.NET on .NET 6, delivering tasks on time and boosting productivity.",
    ],
    technologies: ["Blazor", ".NET 6", "ASP.NET", "C"],
  },
];

const PROJECTS: Project[] = [
  {
    name: "entretien-ai",
    description: "AI-powered interview practice platform.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
    ],
    link: undefined,
  },
  {
    name: "AI_Powered_Data",
    description: "Data analysis and visualization platform.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "Chart.js",
      "LangChain",
      "Together AI",
    ],
  },
  {
    name: "WriteFlow",
    description: "AI content creation SaaS.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "OpenAI GPT",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
      "NextAuth.js",
    ],
  },
  {
    name: "Indigenes",
    description: "Agricultural investment platform.",
    technologies: ["Vite", "React", "Chakra UI", "PostgreSQL"],
  },
  {
    name: "management",
    description: "Project management application.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

const CERTIFICATIONS: Certification[] = [
  { title: "IT Specialist - HTML and CSS", issuer: "Certiport", date: "Dec 2024" },
  { title: "Foundational C with Microsoft", issuer: "freeCodeCamp", date: "Dec 2023" },
  { title: "Fullstack Development", issuer: "BI-Geek", date: "Mar 2022" },
  { title: "Coding with Python", issuer: "GOMYCODE", date: "Jan 2022" },
  { title: "MTA 98-381 Introduction to Python", issuer: "Microsoft", date: "Dec 2021" },
  { title: "Java Programming: Complete Beginner to Advanced", issuer: "Udemy", date: "Oct 2021" },
];

const EDUCATION: Education[] = [
  {
    school: "Polytech Intl",
    degree: "Engineer’s Degree, IRM-Opt. Embedded and Mobile Systems Engineering",
    location: "Tunis, Tunisia",
    period: "Expected 2026",
  },
  {
    school: "Polytech Intl",
    degree: "Bachelor’s Degree, Computer Science",
    location: "Tunis, Tunisia",
    period: "2021 - 2024",
  },
  {
    school: "2 Mars Mohamed Arbi Chammari",
    degree: "Baccalaureate, Computer Science",
    location: "Tunis, Tunisia",
    period: "2021",
  },
];

// Contact items
const CONTACT = [
  {
    label: "Phone",
    value: "+216 95 004 044",
    href: "tel:+21695004044",
    icon: IconPhone,
  },
  {
    label: "Email",
    value: "rayenft2001@gmail.com",
    href: "mailto:rayenft2001@gmail.com",
    icon: IconMail,
  },
  {
    label: "Website",
    value: "rayenft.dev",
    href: "https://rayenft.dev",
    icon: IconGlobe,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rayenfassatoui",
    href: "https://www.linkedin.com/in/rayenfassatoui",
    icon: IconLinkedIn,
  },
  {
    label: "GitHub",
    value: "github.com/rayenfassatoui",
    href: "https://github.com/rayenfassatoui",
    icon: IconGithub,
  },
  {
    label: "Location",
    value: "Montfleury, Tunisia",
    href: undefined,
    icon: IconLocation,
  },
];

type TabKey = "Overview" | "Experience" | "Projects" | "Skills" | "Education" | "Certifications";

const TABS: TabKey[] = ["Overview", "Experience", "Projects", "Skills", "Education", "Certifications"];

function useTheme(): [Theme, (t: Theme) => void] {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") setTheme(stored);
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}

function TagChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-sm px-3 py-1 rounded-full border transition-colors",
        selected
          ? "bg-indigo-600 text-white border-indigo-600"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
      )}
    >
      {label}
    </button>
  );
}

function SectionCard({ children, theme }: { children: React.ReactNode; theme: Theme }) {
  return (
    <div
      className={cn(
        "rounded-lg border",
        theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      )}
    >
      {children}
    </div>
  );
}

function Divider({ theme }: { theme: Theme }) {
  return <div className={cn("h-px w-full", theme === "dark" ? "bg-gray-700" : "bg-gray-200")} />;
}

export default function IndexPage(): JSX.Element {
  const [theme, setTheme] = useTheme();
  const [activeTab, setActiveTab] = useState<TabKey>("Overview");
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [copiedMsg, setCopiedMsg] = useState<string | null>(null);
  const [compactExp, setCompactExp] = useState<boolean>(false);

  // Aggregate tags from experiences and projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    EXPERIENCES.forEach((e) => e.technologies.forEach((t) => tags.add(t)));
    PROJECTS.forEach((p) => p.technologies.forEach((t) => tags.add(t)));
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, []);

  const themeBG = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const themeText = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const themeSubtle = theme === "dark" ? "text-gray-300" : "text-gray-600";

  const matchesSearch = (txt: string) => txt.toLowerCase().includes(search.trim().toLowerCase());

  const filteredExperiences = useMemo(() => {
    return EXPERIENCES.filter((exp) => {
      const inTags = selectedTags.size
        ? Array.from(selectedTags).every((t) => exp.technologies.map((x) => x.toLowerCase()).includes(t.toLowerCase()))
        : true;
      if (!inTags) return false;
      if (!search.trim()) return true;
      const hay = [
        exp.role,
        exp.company,
        exp.location,
        exp.start,
        exp.end,
        exp.technologies.join(" "),
        exp.bullets.join(" "),
      ].join(" ");
      return matchesSearch(hay);
    });
  }, [search, selectedTags]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const inTags = selectedTags.size
        ? Array.from(selectedTags).every((t) => p.technologies.map((x) => x.toLowerCase()).includes(t.toLowerCase()))
        : true;
      if (!inTags) return false;
      if (!search.trim()) return true;
      const hay = [p.name, p.description, p.technologies.join(" ")].join(" ");
      return matchesSearch(hay);
    });
  }, [search, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => {
      const n = new Set(prev);
      if (n.has(tag)) n.delete(tag);
      else n.add(tag);
      return n;
    });
  };

  const handleCopy = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const el = document.createElement("textarea");
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopiedMsg("Copied to clipboard");
      setTimeout(() => setCopiedMsg(null), 1600);
    } catch {
      setCopiedMsg("Copy failed");
      setTimeout(() => setCopiedMsg(null), 1600);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedTags(new Set());
  };

  const ContactItem = ({
    label,
    value,
    href,
    Icon,
  }: {
    label: string;
    value: string;
    href?: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  }) => (
    <div className="flex items-center gap-2">
      <Icon className={cn("w-4 h-4", themeSubtle)} />
      {href ? (
        <a className="text-sm font-medium text-indigo-600 hover:underline" href={href} target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <span className="text-sm font-medium">{value}</span>
      )}
      <button
        type="button"
        onClick={() => handleCopy(value)}
        className={cn(
          "ml-1 inline-flex items-center gap-1 text-xs px-2 py-1 rounded border",
          theme === "dark"
            ? "text-gray-300 border-gray-700 hover:bg-gray-700"
            : "text-gray-600 border-gray-200 hover:bg-gray-100"
        )}
        aria-label={`Copy ${label}`}
      >
        <IconCopy className="w-3.5 h-3.5" />
        Copy
      </button>
    </div>
  );

  return (
    <div className={cn("min-h-screen", themeBG, themeText)}>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-start gap-4 print:gap-3">
          <div className="shrink-0">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Rayen Fassatoui</h1>
                <p className={cn("mt-1 text-sm", themeSubtle)}>Full-stack Web Developer • React • Next.js • Node.js • Spring</p>
              </div>
              <div className="flex items-center gap-2 print:hidden">
                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={cn(
                    "inline-flex items-center gap-2 px-3 py-2 rounded border text-sm",
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-100"
                      : "border-gray-200 bg-white hover:bg-gray-50 text-gray-900"
                  )}
                >
                  {theme === "dark" ? (
                    <>
                      <IconSun className="w-4 h-4" /> Light
                    </>
                  ) : (
                    <>
                      <IconMoon className="w-4 h-4" /> Dark
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className={cn(
                    "inline-flex items-center gap-2 px-3 py-2 rounded border text-sm",
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-100"
                      : "border-gray-200 bg-white hover:bg-gray-50 text-gray-900"
                  )}
                >
                  <IconDownload className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CONTACT.map((c) => (
                <ContactItem key={c.label} label={c.label} value={c.value} href={c.href} Icon={c.icon as any} />
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <SectionCard theme={theme}>
          <div className="p-4">
            <h2 className="text-base font-semibold">Professional Summary</h2>
            <p className={cn("mt-2 text-sm leading-6", themeSubtle)}>{PROFESSIONAL_SUMMARY}</p>
          </div>
        </SectionCard>

        {/* Controls */}
        <div className="mt-6 flex flex-col gap-3 print:hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className={cn(
              "flex items-center gap-2 rounded border px-3 py-2 w-full sm:w-auto sm:flex-1",
              theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            )}>
              <IconSearch className={cn("w-4 h-4", themeSubtle)} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search experience, projects, tech..."
                className={cn(
                  "w-full bg-transparent outline-none text-sm",
                  theme === "dark" ? "placeholder-gray-400" : "placeholder-gray-500"
                )}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className={cn(
                    "ml-2 inline-flex items-center gap-1 text-xs px-2 py-1 rounded border",
                    theme === "dark"
                      ? "text-gray-300 border-gray-700 hover:bg-gray-700"
                      : "text-gray-600 border-gray-200 hover:bg-gray-100"
                  )}
                >
                  <IconClear className="w-3.5 h-3.5" />
                  Clear
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label className={cn("text-sm", themeSubtle)}>
                <input
                  type="checkbox"
                  checked={compactExp}
                  onChange={(e) => setCompactExp(e.target.checked)}
                  className="mr-2 align-middle"
                />
                Compact experience
              </label>
              {(search || selectedTags.size > 0) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className={cn(
                    "inline-flex items-center gap-2 px-3 py-2 rounded border text-sm",
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-100"
                      : "border-gray-200 bg-white hover:bg-gray-50 text-gray-900"
                  )}
                >
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <TagChip
                key={tag}
                label={tag}
                selected={selectedTags.has(tag)}
                onClick={() => handleTagToggle(tag)}
              />
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <nav className="flex items-center gap-4 border-b" aria-label="Sections">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-2 py-3 text-sm font-medium border-b-2 -mb-px",
                  activeTab === tab
                    ? "border-indigo-600 text-indigo-600"
                    : theme === "dark"
                    ? "border-transparent text-gray-300 hover:text-gray-100"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                )}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="mt-4">
            {activeTab === "Overview" && (
              <div className="space-y-4">
                <SectionCard theme={theme}>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold">Highlights</h3>
                    <ul className="mt-2 list-disc pl-5 text-sm">
                      <li>Full-stack developer experienced with React, Next.js, Node.js, Spring MVC, and TypeScript.</li>
                      <li>Built platforms with SSR, code-splitting, and AI integrations (Gemini, Flux, OpenAI, LangChain).</li>
                      <li>Data layer experience with PostgreSQL, MySQL, MongoDB, Oracle, Prisma.</li>
                      <li>Improved key metrics: +60% engagement, -40% time-to-hire, -30x analytics time.</li>
                    </ul>
                  </div>
                </SectionCard>
                <SectionCard theme={theme}>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold">Top Skills</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "Auth.js"].map(
                        (s) => (
                          <span key={s} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">
                            {s}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </SectionCard>
              </div>
            )}

            {activeTab === "Experience" && (
              <div className="space-y-4">
                {filteredExperiences.map((exp, idx) => (
                  <SectionCard theme={theme} key={`${exp.company}-${idx}`}>
                    <div className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold">
                            {exp.role} • <span className="font-normal">{exp.company}</span>
                          </h3>
                          <p className={cn("text-sm", themeSubtle)}>
                            {exp.location} • {exp.start} - {exp.end}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.slice(0, compactExp ? 4 : exp.technologies.length).map((t) => (
                            <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                              {t}
                            </span>
                          ))}
                          {compactExp && exp.technologies.length > 4 && (
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">+{exp.technologies.length - 4}</span>
                          )}
                        </div>
                      </div>
                      {!compactExp && (
                        <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                          {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </SectionCard>
                ))}
                {filteredExperiences.length === 0 && (
                  <p className={cn("text-sm", themeSubtle)}>No experience matches your filters.</p>
                )}
              </div>
            )}

            {activeTab === "Projects" && (
              <div className="space-y-4">
                {filteredProjects.map((p, idx) => (
                  <SectionCard theme={theme} key={`${p.name}-${idx}`}>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-semibold flex items-center gap-2">
                            {p.name}
                            {p.link && (
                              <a
                                className="text-indigo-600 hover:underline inline-flex items-center gap-1 text-xs"
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Visit <IconExternal className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </h3>
                          <p className={cn("mt-1 text-sm", themeSubtle)}>{p.description}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.technologies.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SectionCard>
                ))}
                {filteredProjects.length === 0 && (
                  <p className={cn("text-sm", themeSubtle)}>No projects match your filters.</p>
                )}
              </div>
            )}

            {activeTab === "Skills" && (
              <div className="space-y-4">
                {Object.entries(SKILLS).map(([cat, items]) => (
                  <SectionCard theme={theme} key={cat}>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold">{cat}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {items
                          .filter((s) => !search || s.toLowerCase().includes(search.toLowerCase()))
                          .map((s) => (
                            <TagChip
                              key={s}
                              label={s}
                              selected={selectedTags.has(s)}
                              onClick={() => handleTagToggle(s)}
                            />
                          ))}
                      </div>
                    </div>
                  </SectionCard>
                ))}
              </div>
            )}

            {activeTab === "Education" && (
              <div className="space-y-4">
                {EDUCATION.map((ed, idx) => (
                  <SectionCard theme={theme} key={`${ed.school}-${idx}`}>
                    <div className="p-4">
                      <h3 className="text-base font-semibold">{ed.degree}</h3>
                      <p className={cn("text-sm", themeSubtle)}>
                        {ed.school}
                        {ed.location ? ` • ${ed.location}` : ""} • {ed.period}
                      </p>
                    </div>
                  </SectionCard>
                ))}
              </div>
            )}

            {activeTab === "Certifications" && (
              <div className="space-y-4">
                {CERTIFICATIONS.map((c, idx) => (
                  <SectionCard theme={theme} key={`${c.title}-${idx}`}>
                    <div className="p-4">
                      <h3 className="text-base font-semibold">{c.title}</h3>
                      <p className={cn("text-sm", themeSubtle)}>
                        {c.issuer ? `${c.issuer} • ` : ""}
                        {c.date}
                      </p>
                    </div>
                  </SectionCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Toast */}
      {copiedMsg && (
        <div className="fixed top-4 right-4 px-4 py-2 rounded shadow text-sm bg-gray-900 text-white print:hidden">
          {copiedMsg}
        </div>
      )}

      {/* Print helper: hide controls and tabs when printing is handled via print:hidden utilities used above */}
    </div>
  );
}
