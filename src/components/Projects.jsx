import React, { useState } from "react";
import kidzImg from "../assets/kidz.png";
import utilityImg from "../assets/smart.png";
import dragonImg from "../assets/news.png";
import bookImg from "../assets/book.png";
import supportImg from "../assets/customer.png";
import ecoImg from "../assets/eco.png";
import englishImg from "../assets/english.png";
import teaImg from "../assets/tea.png";

const Projects = () => {
  const projects = [
    {
      name: "Kidz Corner",
      tagline: "Toy e-commerce platform",
      desc: "Toy marketplace with secure auth, profile management, order history, and protected routes.",
      tech: [
        "React",
        "React Router",
        "Firebase Auth",
        "Tailwind CSS",
        "DaisyUI",
      ],
      live: "https://kidz-corner-webapp.netlify.app/",
      github: "https://github.com/your-username/kidz-corner",
      image: kidzImg,
    },
    {
      name: "Smart Utility BD",
      tagline: "Utility bills management",
      desc: "MERN app to track and pay Electricity, Gas, Water, and Internet bills with CRUD and PDF reports.",
      tech: ["React", "Firebase", "Tailwind CSS", "DaisyUI"],
      live: "https://smart-utility-bd.netlify.app/",
      github: "https://github.com/your-username/smart-utility-bd",
      image: utilityImg,
    },
    {
      name: "Dragon News",
      tagline: "News portal with auth",
      desc: "React news portal with category-based browsing and Firebase email/password authentication.",
      tech: ["React", "React Router", "Firebase Auth", "Tailwind CSS", "DaisyUI"],
      live: "https://dragon-news-firebase22.netlify.app/",
      github: "https://github.com/your-username/dragon-news",
      image: dragonImg,
    },
    {
      name: "Book Vibe",
      tagline: "Book explorer",
      desc: "React app for discovering and exploring books with clean, responsive UI and routing.",
      tech: ["React", "React Router", "Tailwind CSS"],
      live: "https://book-vibe-with-react-20022.netlify.app/",
      github: "https://github.com/your-username/book-vibe",
      image: bookImg,
    },
    {
      name: "Customer Support App",
      tagline: "Support ticket manager",
      desc: "React-based app to manage support tickets with status tracking, updates, and API integration.",
      tech: ["React", "JavaScript", "API", "Tailwind CSS", "DaisyUI"],
      live: "https://customer-support-react-2200.netlify.app/",
      github: "https://github.com/your-username/customer-support-app",
      image: supportImg,
    },
    {
      name: "Eco World Project",
      tagline: "Plants & eco products",
      desc: "JS-powered site to showcase plants and eco products, focusing on DOM work and fetch API.",
      tech: ["JavaScript", "HTML5", "CSS3", "Fetch API", "Tailwind"],
      live: "https://mahfuz5634.github.io/Eco-World-Project/",
      github: "https://github.com/mahfuz5634/Eco-World-Project",
      image: ecoImg,
    },
    {
      name: "English Shikhi",
      tagline: "Learn English vocabulary",
      desc: "Interactive app to learn vocabulary with pronunciation, examples, synonyms, and TTS.",
      tech: ["JavaScript", "HTML5", "CSS3", "Fetch API", "Tailwind CSS"],
      live: "https://mahfuz5634.github.io/English-Shikhi-Project/",
      github: "https://github.com/mahfuz5634/English-Shikhi-Project",
      image: englishImg,
    },
    {
      name: "Tea House Project",
      tagline: "Tea shop landing page",
      desc: "Practice site with a tea house theme, product showcase, and client reviews.",
      tech: ["HTML", "CSS"],
      live: "https://mahfuz5634.github.io/Tea-House-Project/",
      github: "https://github.com/mahfuz5634/Tea-House-Project",
      image: teaImg,
    },
  ];

  const [page, setPage] = useState(1);
  const perPage = 4;
  const totalPages = Math.ceil(projects.length / perPage);
  const start = (page - 1) * perPage;
  const currentProjects = projects.slice(start, start + perPage);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        {/* label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-6 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
            Projects
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-slate-50">
          Selected Work
        </h2>
        <p className="text-sm sm:text-base text-slate-300/85 mb-8 max-w-2xl">
          A few projects that highlight full‑stack development, problem solving,
          and UI work. Use the arrows to see more.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {currentProjects.map((p) => (
            <article
              key={p.name}
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(15,23,42,0.75)] hover:border-blue-500/60 transition-all"
            >
              {/* image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80" />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
                  {p.tagline}
                </span>
              </div>

              {/* content */}
              <div className="p-5 sm:p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-[0.95rem] text-slate-300/90 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* tech chips */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-900/70 border border-white/10 px-2.5 py-1 text-[11px] text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* actions */}
                <div className="mt-1 flex items-center gap-3 text-sm">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-1.5 font-medium text-xs sm:text-sm text-white shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-600 transition"
                  >
                    <span>Live</span>
                    <span className="text-xs">↗</span>
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-100 hover:border-blue-400/70 transition"
                  >
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* pagination */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <button
            onClick={goPrev}
            disabled={page === 1}
            className={`px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:border-blue-400/70 transition ${
              page === 1 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            ← Previous
          </button>
          <span className="text-slate-400">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={goNext}
            disabled={page === totalPages}
            className={`px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:border-blue-400/70 transition ${
              page === totalPages ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
