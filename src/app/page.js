"use client";

import React, { useState } from 'react';
import { 
  Briefcase, GraduationCap, Code, Compass, FileText, 
  Mail, Phone, MapPin, ExternalLink, Sun, Moon, ChevronRight, 
  Award, Server, Database, Terminal, BookOpen, CheckCircle2, 
  Menu, X, ArrowUpRight, Cpu, Layers, ShieldCheck, Eye
} from 'lucide-react';

// Custom SVG Icons for LinkedIn and GitHub
const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState(0);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const educationList = [
    {
      degree: "APS Certificate (Akademische Prüfstelle)",
      field: "German Academic Verification",
      grade: "Verified & Authenticated",
      gradeNote: "Official German Embassy Verification for University Admissions",
      documentName: "APS Certificate",
      link: "/documents/APS_Certificate.pdf"
    },
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Engineering",
      grade: "1.83 (Sehr Gut / Good)",
      gradeNote: "German Grade Equivalent (Bavarian Formula)",
      documentName: "B.E. Degree Certificate",
      link: "/documents/BE_Degree_Certificate.pdf"
    },
    {
      degree: "Diploma in Computer Engineering",
      field: "Computer Technology & Systems",
      grade: "First Class with Distinction",
      gradeNote: "Polytechnic / State Board Technical Education",
      documentName: "Diploma Certificate",
      link: "/documents/Diploma_Certificate.pdf"
    },
    {
      degree: "Secondary School Certificate (SSC / 10th)",
      field: "General Science & Mathematics",
      grade: "First Class",
      gradeNote: "State Secondary Education Board",
      documentName: "SSC Certificate",
      link: "/documents/10th_SSC_Certificate.pdf"
    }
  ];

  const certificationsList = [
    {
      title: "IELTS Academic English Proficiency",
      issuer: "IDP / British Council",
      details: "Overall Score: 6.5 — Competent Academic Proficiency",
      category: "Language Certification",
      link: "/documents/IELTS_Certificate.pdf"
    },
    {
      title: "Google Launchpad Accelerator",
      issuer: "Google Developers",
      details: "Certification of participation/completion in Google Launchpad initiative.",
      category: "Technical / Innovation",
      link: "/documents/Google_Launchpad_Certificate.pdf"
    },
    {
      title: "International Conference Publication / Presentation",
      issuer: "Academic Conference Board",
      details: "Certificate for research paper presentation and international conference participation.",
      category: "Academic & Research",
      link: "/documents/International_Conference.pdf"
    },
    {
      title: "Paper Presentation Competition",
      issuer: "Technical Symposium",
      details: "Recognized for technical research and presentation in engineering competition.",
      category: "Technical Achievements",
      link: "/documents/Paper_Presentation.pdf"
    },
    {
      title: "Academic Mini Project Completion",
      issuer: "Engineering Department",
      details: "Certificate of excellence in engineering mini project design & implementation.",
      category: "Academic Project",
      link: "/documents/Mini_Project.pdf"
    },
    {
      title: "Technical Seminar Presentation",
      issuer: "Computer Engineering Dept.",
      details: "Certification for technical seminar research presentation on modern computer science topics.",
      category: "Academic Seminar",
      link: "/documents/Seminar.pdf"
    },
    {
      title: "Youth Festival Participation & Achievement",
      issuer: "University Cultural & Student Affairs",
      details: "Certificate of participation and achievement in University Youth Festival events.",
      category: "Extra-Curricular",
      link: "/documents/Youth_Festival.pdf"
    },
    {
      title: "German Language (A1 Level)",
      issuer: "In Progress / Language Learning",
      details: "Currently learning German A1 fundamentals for future integration.",
      category: "Language Learning",
      status: "In Progress"
    }
  ];

  const experiences = [
    {
      company: "Deutsche Bank",
      role: "Associate Engineer",
      period: "02/09/2024 – Current",
      location: "Pune, India",
      domain: "Financial Applications & Microservices",
      highlights: [
        "Design, enhance, and maintain Java Spring Boot microservices for internal financial applications.",
        "Improve performance, scalability, and reliability by optimizing existing APIs and resolving production issues.",
        "Participate in GCP release pipelines using Docker for deployments and post-release validation."
      ],
      achievement: "Improved application stability by resolving recurring production issues and reduced turnaround time for user-reported incidents.",
      techStack: ["Java", "Spring Boot", "Microservices", "GCP", "Docker", "REST APIs"]
    },
    {
      company: "NEC Software Solutions / Capita India",
      role: "Sr Software Engineer",
      period: "04/04/2022 – 23/08/2024",
      location: "Mumbai, India",
      domain: "Public Safety & Emergency Response",
      highlights: [
        "Supported Java Spring Boot microservices for a mission-critical public safety application.",
        "Performed deep-dive defect analysis and bug fixing to ensure the stability of emergency-response systems."
      ],
      achievement: "Ensured total continuity and stability of the application during a complex project transition between organizations.",
      techStack: ["Java", "Spring Boot", "Microservices", "SQL", "Defect Analysis"]
    },
    {
      company: "Capgemini Technology Services",
      role: "Associate",
      period: "31/03/2021 – 15/03/2022",
      location: "India",
      domain: "Healthcare Domain Systems",
      highlights: [
        "Developed backend logic and database functionality for the healthcare domain.",
        "Managed schema changes to ensure data processing aligned with evolving business requirements."
      ],
      achievement: "Successfully structured database models to handle critical healthcare data transactions with zero loss.",
      techStack: ["Java", "Database Design", "SQL", "Backend Systems"]
    },
    {
      company: "Ebix Technologies",
      role: "Analyst",
      period: "05/03/2018 – 29/01/2021",
      location: "Pune, India",
      domain: "Loan Origination Systems",
      highlights: [
        "Developed features for a Loan Origination System using Core Java and SQL."
      ],
      achievement: "Worked onsite with stakeholders to translate complex business needs into technical database schemas and workflows.",
      techStack: ["Core Java", "SQL", "Loan Origination", "Schema Design", "Client Onsite"]
    }
  ];

  const projects = [
    {
      title: "Financial Microservices & GCP Pipeline",
      category: "Deutsche Bank",
      desc: "High-performance Java Spring Boot services driving internal banking operations, containerized with Docker for GCP releases.",
      metrics: "Reduced turnaround time for production incidents",
      tech: ["Java", "Spring Boot", "GCP", "Docker"]
    },
    {
      title: "Mission-Critical Public Safety System",
      category: "NEC / Capita India",
      desc: "Fault-tolerant emergency response platform requiring 100% operational continuity during organizational handover.",
      metrics: "Zero downtime during transition",
      tech: ["Java", "Spring Boot", "Microservices", "SQL"]
    },
    {
      title: "Healthcare Data Engine & Loan Origination",
      category: "Capgemini & Ebix",
      desc: "Domain-driven backend modules, complex relational database schemas, and stakeholder-aligned financial workflows.",
      metrics: "Onsite stakeholder translation & schema design",
      tech: ["Core Java", "SQL Schemas", "Backend Workflows"]
    }
  ];

  const skillCategories = [
    {
      title: "Core Programming & Frameworks",
      iconType: "code",
      skills: ["Java", "Core Java", "Spring Boot", "RESTful APIs", "Microservices Architecture", "OOP", "Backend Logic"]
    },
    {
      title: "Cloud & DevOps",
      iconType: "server",
      skills: ["GCP (Google Cloud)", "Docker", "GCP Release Pipelines", "Post-release Validation", "CI/CD Workflows"]
    },
    {
      title: "Database Engineering & Domains",
      iconType: "database",
      skills: ["SQL", "Schema Design", "Database Functionality", "Financial Systems", "Public Safety", "Healthcare Domain"]
    },
    {
      title: "System Reliability & Methods",
      iconType: "layers",
      skills: ["Defect Analysis", "Bug Fixing", "Incident Resolution", "Production Support", "Onsite Stakeholder Management"]
    }
  ];

  const renderSkillIcon = (type) => {
    switch (type) {
      case 'code':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'server':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'database':
        return <Database className="w-5 h-5 text-purple-500" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-amber-500" />;
      default:
        return <Code className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation Header */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Terminal className="w-6 h-6 text-blue-500" />
            <span>Shweta Dudhe</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
            <a href="#certifications" className="hover:text-blue-500 transition-colors">Certifications</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#germany" className="hover:text-blue-500 transition-colors">Path to Germany</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="/documents/Shweta_Dudhe_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm"
            >
              <Eye className="w-3.5 h-3.5" /> View Resume
            </a>

            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-6 py-4 border-b space-y-3 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm">About</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block text-sm">Education</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="block text-sm">Certifications</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-sm">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-sm">Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-sm">Skills</a>
            <a href="#germany" onClick={() => setMobileMenuOpen(false)} className="block text-sm">Path to Germany</a>
          </div>
        )}
      </nav>

      {/* Hero / Main Introduction */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Associate Engineer @ Deutsche Bank
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Shweta Dudhe</span>.
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-slate-400">
              <a 
                href="https://www.linkedin.com/in/shweta-dudhe" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-sm font-medium"
              >
                <LinkedinIcon className="w-5 h-5 text-blue-500" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <a 
                href="https://github.com/shwetadudhe" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-sm font-medium"
              >
                <GithubIcon className="w-5 h-5" /> GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
              <div className="flex items-center gap-1.5 text-sm">
                <MapPin className="w-4 h-4 text-blue-500" /> Pune, India
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 p-8 sm:p-12 rounded-3xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'} shadow-xl`}>
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">01 / ABOUT</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug">
              Engineering robust backend architectures for scalable, real-world systems.
            </h2>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Modern software excels when technical rigor meets high reliability, structured data design, and business-critical execution.
            </p>
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold leading-snug">
              I&apos;m a Computer Engineer focused on building resilient Java/Spring Boot microservices and cloud systems.
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              My background spans enterprise banking applications, emergency response systems, and GCP/Docker deployment pipelines—combining deep engineering practice with analytical problem-solving.
            </p>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              I am preparing to pursue a Master&apos;s degree in Germany to advance my academic foundation in software engineering, distributed systems, and data architecture.
            </p>
          </div>
        </div>

        {/* Why My Profile Grid */}
        <div className={`mt-12 rounded-3xl border overflow-hidden ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className={`p-8 sm:p-10 border-b md:border-b-0 md:border-r ${darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'} flex flex-col justify-center`}>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">WHY MY PROFILE</span>
              <h3 className="text-2xl font-bold leading-tight">Technical foundation. Business context. Analytical focus.</h3>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/50">
              <div className="p-6 sm:p-8 space-y-2 border-b sm:border-b-0 border-slate-800/50">
                <span className="text-xs font-mono text-blue-400">01</span>
                <h4 className="font-bold text-base">Technology understanding</h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  A Computer Engineering foundation for evaluating technical possibilities in context.
                </p>
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <span className="text-xs font-mono text-blue-400">02</span>
                <h4 className="font-bold text-base">Business perspective</h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  An interdisciplinary view of processes, requirements, stakeholders, and organizational needs.
                </p>
              </div>
              <div className="p-6 sm:p-8 space-y-2 border-t border-slate-800/50">
                <span className="text-xs font-mono text-blue-400">03</span>
                <h4 className="font-bold text-base">Analytical thinking</h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  A developing focus on data systems, defect analysis, and evidence-informed problem solving.
                </p>
              </div>
              <div className="p-6 sm:p-8 space-y-2 border-t border-slate-800/50">
                <span className="text-xs font-mono text-blue-400">04</span>
                <h4 className="font-bold text-base">Practical exposure</h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  7+ years of professional industry experience across banking, public sector, and enterprise systems.
                </p>
              </div>
            </div>
          </div>
          <div className={`p-6 sm:p-8 border-t ${darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}>
            <div>
              <span className="text-xs font-mono text-blue-400">05</span>
              <h4 className="font-bold text-base">International ambition</h4>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Focused preparation for Master&apos;s education and long-term professional development in Germany.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Academic Credentials Section */}
      <section id="education" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Academic Background</span>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-500" /> Education & Verifications
          </h2>
        </div>

        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl border transition-all ${
                darkMode 
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' 
                  : 'bg-white border-slate-200 hover:shadow-md'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {edu.gradeNote}
                  </div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-sm font-medium text-slate-400">{edu.field}</p>
                  <p className="text-sm font-bold text-emerald-400 pt-1">Grade / Status: {edu.grade}</p>
                </div>

                <a 
                  href={edu.link} 
                  target="_blank"
                  rel="noreferrer"
                  className={`px-5 py-3 rounded-xl border transition-colors inline-flex items-center gap-2 text-xs font-medium h-fit w-fit ${
                    darkMode 
                      ? 'border-slate-800 hover:bg-slate-800 text-slate-200' 
                      : 'border-slate-300 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  View {edu.documentName}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Qualifications & Badges</span>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-500" /> Certifications, Papers & Extra-Curriculars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsList.map((cert, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:shadow-md'}`}>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    {cert.category}
                  </span>
                  {cert.status && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {cert.status}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-xs font-medium text-slate-400">{cert.issuer}</p>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{cert.details}</p>
              </div>

              {cert.link && (
                <div className="pt-6">
                  <a 
                    href={cert.link} 
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl border transition-colors inline-flex items-center justify-center gap-2 text-xs font-medium ${darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-800'}`}
                  >
                    <Eye className="w-4 h-4 text-blue-500" /> View Document
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Work Experience Section */}
      <section id="experience" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Track Record</span>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-500" /> Professional Experience
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            7+ years of engineering experience across top tech, banking, and public sector solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Selector Tabs */}
          <div className="md:col-span-4 flex flex-col gap-2">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedExp(idx)}
                className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                  selectedExp === idx 
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20' 
                    : darkMode 
                      ? 'bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div>
                  <div className="font-bold text-base">{exp.company}</div>
                  <div className={selectedExp === idx ? 'text-blue-100 text-xs' : 'text-slate-500 text-xs'}>{exp.role}</div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${selectedExp === idx ? 'rotate-90 text-white' : 'text-slate-500'}`} />
              </button>
            ))}
          </div>

          {/* Active Company Detail Panel */}
          <div className="md:col-span-8">
            <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'} shadow-xl space-y-6`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/50">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">{experiences[selectedExp].role}</h3>
                  <p className="text-lg font-semibold">{experiences[selectedExp].company} <span className="text-sm font-normal text-slate-400">({experiences[selectedExp].domain})</span></p>
                </div>
                <div className="text-sm font-medium text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                  {experiences[selectedExp].period} | {experiences[selectedExp].location}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {experiences[selectedExp].highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {experiences[selectedExp].achievement && (
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 space-y-1">
                  <span className="font-bold uppercase tracking-wider text-blue-400 block">Key Achievement:</span>
                  <p className="leading-relaxed">{experiences[selectedExp].achievement}</p>
                </div>
              )}

              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[selectedExp].techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-md text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Technical Showcase</span>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Cpu className="w-8 h-8 text-blue-500" /> Engineering Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:shadow-lg'}`}>
              <div className="space-y-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit">
                  {proj.category}
                </span>
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{proj.desc}</p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                  Key Result: {proj.metrics}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skill Matrix */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Competency Matrix</span>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Code className="w-8 h-8 text-blue-500" /> Technical Skills & Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
              <div className="flex items-center gap-3">
                {renderSkillIcon(cat.iconType)}
                <h3 className="text-lg font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${darkMode ? 'bg-slate-800/80 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Path to Germany Section */}
      <section id="germany" className="py-16 px-6 max-w-6xl mx-auto">
        <div className={`p-8 sm:p-12 rounded-3xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'} shadow-xl space-y-8`}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">MY PATH TO GERMANY</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">Preparation grounded in evidence and progression.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-3`}>
              <span className="text-xs font-mono text-blue-400 block">1 / Verification</span>
              <h3 className="font-bold text-base">APS Authenticated</h3>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                APS Certificate verified by the German Embassy for smooth university processing.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-3`}>
              <span className="text-xs font-mono text-blue-400 block">2 / Academic & Language</span>
              <h3 className="font-bold text-base">Grade 1.83 & IELTS 6.5</h3>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Bavarian grade conversion equal to 1.83 (Sehr Gut) & IELTS 6.5. Currently learning German A1.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-3`}>
              <span className="text-xs font-mono text-blue-400 block">3 / Experience</span>
              <h3 className="font-bold text-base">Industry Rigor</h3>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                7+ years of engineering experience across Deutsche Bank, NEC, Capgemini, and Ebix.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-3`}>
              <span className="text-xs font-mono text-blue-400 block">4 / Target</span>
              <h3 className="font-bold text-base">Master&apos;s Preparation</h3>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Exploring advanced graduate programmes aligned with software systems, data architecture, and engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 text-center text-sm border-t ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-600'}`}>
        <p>© {new Date().getFullYear()} Shweta Dudhe. All rights reserved.</p>
      </footer>
    </div>
  );
}