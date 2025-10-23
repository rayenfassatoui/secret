"use client";

import React, { useState } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Globe,
    Linkedin,
    Github,
    ChevronDown,
    ChevronUp,
    Printer,
    Copy,
    Check,
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const DATA = {
  personal: {
    name: 'Rayen Fassatoui',
    title: 'Full-stack Web Developer',
    location: 'Montfleury, Tunisia',
    email: 'rayenft2001@gmail.com',
    phone: '+216 95 004 044',
    website: 'rayenft.dev',
    linkedin: 'linkedin.com/in/rayenfassatoui',
    github: 'github.com/rayenfassatoui',
  },
  summary: "Results-oriented Web Developer with experience building and maintaining responsive web applications using modern technologies like React, Node.js, Next.js, and Spring MVC. Skilled in both frontend and backend development, database management (SQL NoSQL), and creating dynamic user interfaces. Proven ability to contribute to projects from concept to deployment, focusing on delivering practical, efficient, and user-focused digital solutions.",
  skills: {
    Frontend: ['ReactJS', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'Tailwind CSS', 'Chakra UI', 'Shadcn UI', 'Framer Motion'],
    Backend: ['Node.js', 'Express.js', 'Java', 'Spring MVC', 'Spring Boot', 'Python', 'PHP', 'Symfony'],
    Databases: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Firebase', 'Supabase', 'Prisma'],
    Testing: ['JUnit (Java)', 'Jest', 'React Testing Library'],
    Tools: ['Git', 'Docker', 'RESTful APIs', 'Auth.js', 'AI Integration', 'Tableau'],
  },
  experience: [
    {
      company: 'Aquil App',
      role: 'Full-stack Developer',
      period: 'Jul 2025 – Present',
      location: 'Nantes, France (Remote)',
      type: 'contract work',
      achievements: [
        'Built a job-matching platform using Next.js, Laravel, and AI algorithms to solve inefficiencies in traditional hiring.',
        'Implemented dynamic UIs with shadcn/ui, integrated REST and GraphQL APIs, and optimized performance with SSR and code splitting.',
        'Boosted user engagement by 60% and reduced time-to-hire for companies by over 40%.',
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'REST', 'GraphQL', 'AI Matching']
    },
    {
      company: 'Storegen.ai',
      role: 'Full-stack Developer',
      period: 'Jan 2025 - Apr 2025',
      location: 'Montréal, Canada (Remote)',
      type: 'contract work',
      achievements: [
        'Built modern landing pages with Next.js 15, React, TypeScript, Tailwind CSS, and shadcn/ui components to maximize visitor-to-customer conversion.',
        'Implemented backend data models and API endpoints using Prisma ORM on Neon serverless PostgreSQL, exposing Next.js Server Actions and securing routes with Auth.js v5.',
        'Integrated AI generation workflows via Gemini and Flux API within Server Actions, persisting AI-generated data through Prisma.',
      ],
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Auth.js']
    },
    {
      company: 'FRTN Technologies Tunisie',
      role: 'Freelance Trainer',
      period: 'Oct 2024 - Dec 2024',
      location: 'Tunis, Tunisia',
      type: '',
      achievements: [
        'Fostered a hands-on learning environment using real-world examples, enhancing student problem-solving skills and contributing to a 15% increase in cohort employability.',
      ],
      tech: ['JavaScript ES6+', 'HTML5', 'CSS3']
    },
    {
      company: 'Générale Tunisienne De L’Informatique | GTI',
      role: 'Web Developer',
      period: 'Feb 2023 - Jul 2023',
      location: 'Tunis, Tunisia',
      type: '',
      achievements: [
        'Developed and integrated new modules for internal maintenance and project tracking tools using Spring MVC, JSF, and Oracle, increasing operational visibility by 30% and reducing reporting time by 40%.',
        'Architected and implemented a full-stack analytics dashboard (Spring MVC, JSF) to monitor employee presence, tasks, and invoices, enabling data-driven decisions that used to take 2 days to be done in 30 minutes.',
        'Created a web and email notification system to inform employees of expiring contracts or due invoices, reducing missed maintenance sessions rate to 1%.',
      ],
      tech: ['Java', 'Spring MVC', 'JSF', 'Oracle', 'SQL', 'HTML', 'CSS']
    },
    {
      company: 'AJico Group',
      role: 'Web Developer',
      period: 'Dec 2022 - Feb 2023',
      location: 'Remote',
      type: '',
      achievements: [
        'Built a responsive promotional website for the ’Japan New Year’ event using React, Chakra UI, and SCSS, successfully handling all visitors and increasing attendee engagement by 40% compared to flyers.',
        'Engineered robust RESTful backend services using Node.js and Express.js, integrating with MongoDB and MySQL to ensure 99.5% uptime and streamline client data handling during peak traffic.',
      ],
      tech: ['React', 'Chakra UI', 'SCSS', 'Node.js', 'Express.js', 'MongoDB', 'MySQL']
    },
    {
      company: 'CIN Group',
      role: 'Web Developer',
      period: 'Aug 2022 - Jan 2023',
      location: 'Tunis, Tunisia',
      type: '',
      achievements: [
        'Engineered a secure investment platform frontend (React, Chakra UI) and backend (Node.js, Express.js, PostgreSQL), achieving 99.9% uptime with zero security breaches while processing user requests around Tunisia.',
        'Optimized database queries (PostgreSQL) and collaborated on new features, improving application responsiveness by 20% and increasing user trust scores by 25% compared to old website design.',
      ],
      tech: ['React', 'Chakra UI', 'Node.js', 'Express.js', 'PostgreSQL', 'RESTful APIs']
    },
    {
      company: 'Smart Kokusai',
      role: 'Web Developer',
      period: 'Jul 2022 - Aug 2022',
      location: 'Tunis, Tunisia',
      type: '',
      achievements: [
        'Developed dynamic frontend interfaces for client websites using React.js, incorporating engaging animations and advanced filtering, increasing average user session duration by 30%.',
        'Implemented backend solutions and RESTful APIs using Node.js, Express.js, and SQL, improving data retrieval speeds by 40%.',
      ],
      tech: ['React', 'Node.js', 'Express.js', 'SQL', 'Framer Motion']
    },
    {
      company: 'Alidade Tunisia',
      role: 'Junior Developer',
      period: 'Jul 2022',
      location: 'Tunis, Tunisia',
      type: '',
      achievements: [
        'Developed full-stack features for client websites using Blazor and ASP.NET on .NET 6, successfully delivering assigned tasks on time and contributing to team productivity.',
      ],
      tech: ['Blazor', 'ASP.NET', '.NET 6', 'C#']
    },
  ],
  projects: [
    {
      name: 'entretien-ai',
      description: 'AI-powered interview practice platform.',
      tech: ['Next.js', 'React', 'TailwindCSS', 'Shadcn UI', 'PostgreSQL', 'Prisma', 'Auth.js']
    },
    {
      name: 'AI_Powered_Data',
      description: 'Data analysis and visualization platform.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Chart.js', 'LangChain', 'Together AI']
    },
    {
      name: 'WriteFlow',
      description: 'AI content creation SaaS.',
      tech: ['Next.js', 'PostgreSQL', 'OpenAI GPT', 'Tailwind CSS', 'Shadcn UI', 'Prisma', 'NextAuth.js']
    },
    {
      name: 'Indigenes',
      description: 'Agricultural investment platform.',
      tech: ['Vite', 'React', 'Chakra UI', 'PostgreSQL']
    },
    {
      name: 'management',
      description: 'Project management application.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
    },
  ],
  education: [
    {
      school: 'Polytech Intl',
      degree: 'Engineer’s Degree, IRM-Opt. Embedded and Mobile Systems Engineering',
      period: 'Expected 2026',
      location: 'Tunis, Tunisia'
    },
    {
      school: 'Polytech Intl',
      degree: 'Bachelor’s Degree, Computer Science',
      period: '2021 - 2024',
      location: 'Tunis, Tunisia'
    },
    {
      school: '2 Mars Mohamed Arbi Chammari',
      degree: 'Baccalaureate, Computer Science',
      period: '2021',
      location: 'Tunis, Tunisia'
    },
  ],
  certifications: [
    { name: 'IT Specialist - HTML and CSS', issuer: 'Certiport', date: 'Dec 2024' },
    { name: 'Foundational C with Microsoft', issuer: 'freeCodeCamp', date: 'Dec 2023' },
    { name: 'Fullstack Development', issuer: 'BI-Geek', date: 'Mar 2022' },
    { name: 'Coding with Python', issuer: 'GOMYCODE', date: 'Jan 2022' },
    { name: 'MTA 98-381 Introduction to Python', issuer: 'Microsoft', date: 'Dec 2021' },
    { name: 'Java Programming: Complete Beginner to Advanced', issuer: 'Udemy', date: 'Oct 2021' },
  ]
};

// --- Components ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center after:ml-4 after:flex-1 after:border-t after:border-gray-200">
    {children}
  </h2>
);

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10 print:ring-0 print:bg-gray-50", className)}>
    {children}
  </span>
);

const CopyButton = ({ text, label }: { text: string, label?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors print:text-black print:pointer-events-none"
      title={`Copy ${text}`}
    >
      {label && <span>{label}</span>}
      <span className="hidden sm:inline">{text}</span>
      <span className="sm:hidden inline">{label || text}</span>

      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-500 print:hidden" />
      ) : (
        <Copy className="h-3.5 w-3.5 opacity-0 group-hover:opacity-50 transition-opacity print:hidden" />
      )}
    </button>
  );
}

const ContactLink = ({ href, icon: Icon, text, copyable = false }: { href?: string; icon: any; text: string, copyable?: boolean }) => {
  if (copyable) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Icon className="h-4 w-4" />
        <CopyButton text={text} />
      </div>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors print:text-black"
    >
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </a>
  );
};


const ExperienceItem = ({
  role,
  company,
  period,
  location,
  type,
  achievements,
  tech,
  defaultOpen = true
}: any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="relative pl-8 sm:pl-32 py-4 group">
      {/* Timeline line */}
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:mb-0">
        {/* Date - Desktop */}
        <div className="hidden sm:block absolute left-0 w-24 text-sm text-gray-500 text-right font-medium tabular-nums mt-0.5 print:static print:w-auto print:text-left print:mb-1">
          {period}
        </div>
        
        {/* Timeline dot */}
        <div className="absolute left-[0.55rem] sm:left-[6.5rem] top-[1.3rem] sm:top-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-300 group-hover:bg-blue-500 transition-colors z-10 print:hidden"></div>
        
        {/* Timeline vertical line */}
        <div className="absolute left-[0.85rem] sm:left-[6.8rem] top-6 bottom-0 w-0.5 bg-gray-200 group-last:hidden print:hidden"></div>

        <div className="flex-1">
          <div 
            className="flex flex-wrap items-baseline justify-between gap-2 cursor-pointer print:cursor-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {role}
              <span className="text-gray-600 font-normal ml-2">@ {company}</span>
            </h3>
            {/* Date - Mobile & Print fallback */}
            <span className="sm:hidden text-sm text-gray-500 print:hidden">{period}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500 mt-0.5 mb-3">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {location}
            </span>
            {type && (
              <>
                <span>•</span>
                <span className="italic">{type}</span>
              </>
            )}
             <button 
              className="ml-auto print:hidden p-1 hover:bg-gray-100 rounded"
              onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
            >
               {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
             </button>
          </div>

          {isOpen && (
            <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-gray-700 text-sm/relaxed">
                {achievements.map((achievement: string, i: number) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tech.map((t: string) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ name, description, tech }: any) => (
  <div className="flex flex-col h-full p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow print:border-gray-300 print:shadow-none print:break-inside-avoid">
    <div className="flex items-start justify-between mb-2">
      <h3 className="font-semibold text-gray-900">{name}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
    <div className="flex flex-wrap gap-1 mt-auto">
      {tech.map((t: string) => (
        <Badge key={t} className="bg-gray-50">{t}</Badge>
      ))}
    </div>
  </div>
);

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100/50 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      
      {/* Print/Action Floating Button */}
      <div className="fixed bottom-6 right-6 print:hidden z-50 flex flex-col gap-3">
        <button
          onClick={handlePrint}
          className="flex items-center justify-center p-3 rounded-full shadow-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors"
          title="Print Resume"
          aria-label="Print Resume"
        >
          <Printer className="h-5 w-5" />
        </button>
      </div>

      <main className="max-w-[850px] mx-auto bg-white shadow-xl rounded-xl overflow-hidden print:shadow-none print:rounded-none print:max-w-none">
        
        {/* Header */}
        <header className="bg-gray-50 p-8 md:p-12 border-b border-gray-100 print:bg-white print:p-0 print:mb-8 print:border-none">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-1.5">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{DATA.personal.name}</h1>
              <p className="text-lg md:text-xl text-blue-600 font-medium">{DATA.personal.title}</p>
              <div className="flex items-center text-gray-500 text-sm gap-1.5 pt-1">
                <MapPin className="h-4 w-4" />
                {DATA.personal.location}
              </div>
            </div>

            <div className="flex flex-col gap-2 min-w-[200px] print:text-sm">
              <ContactLink icon={Phone} text={DATA.personal.phone} copyable />
              <ContactLink icon={Mail} text={DATA.personal.email} copyable />
              <ContactLink 
                href={`https://${DATA.personal.website}`} 
                icon={Globe} 
                text={DATA.personal.website} 
              />
              <ContactLink 
                href={`https://${DATA.personal.linkedin}`} 
                icon={Linkedin} 
                text={DATA.personal.linkedin.split('linkedin.com/in/')[1]} 
              />
              <ContactLink 
                href={`https://${DATA.personal.github}`} 
                icon={Github} 
                text={DATA.personal.github.split('github.com/')[1]} 
              />
            </div>
          </div>
        </header>

        <div className="p-8 md:p-12 space-y-10 print:p-0 print:space-y-6">
          
          {/* Summary */}
          <section>
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {DATA.summary}
            </p>
          </section>

          {/* Skills */}
          <section>
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-2">
              {Object.entries(DATA.skills).map(([category, skills]) => (
                <div key={category} className="space-y-2 print:break-inside-avoid">
                  <h3 className="text-sm font-semibold text-gray-900">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <SectionTitle>Professional Experience</SectionTitle>
            <div className="-mt-4">
              {DATA.experience.map((job, index) => (
                <ExperienceItem 
                  key={index} 
                  {...job} 
                  defaultOpen={index < 2} // Open first two by default for better initial view
                />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="print:break-before-page">
            <SectionTitle>Projects</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
              {DATA.projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          {/* Education & Certifications Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-6">
            <section>
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-6 print:space-y-4">
                {DATA.education.map((edu, index) => (
                  <div key={index} className="print:break-inside-avoid">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-2">{edu.period}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-snug">{edu.degree}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{edu.location}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle>Certifications</SectionTitle>
              <ul className="space-y-3 print:space-y-2">
                {DATA.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start justify-between text-sm print:break-inside-avoid">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{cert.name}</span>
                      <span className="text-gray-500 text-xs">{cert.issuer}</span>
                    </div>
                    <span className="text-gray-500 text-xs tabular-nums ml-4 mt-0.5">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </main>
      
      <footer className="max-w-[850px] mx-auto text-center py-8 text-sm text-gray-500 print:hidden">
        <p>Designed & Built by Rayen Fassatoui</p>
      </footer>
    </div>
  );
}
