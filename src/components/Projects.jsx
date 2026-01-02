import React, { useState } from "react";
import kidzImg from "../assets/kidz.png";
import utilityImg from "../assets/smart.png";
import dragonImg from "../assets/news.png";
import bookImg from "../assets/book.png";
import supportImg from "../assets/customer.png";
import ecoImg from "../assets/eco.png";
import englishImg from "../assets/english.png";
import teaImg from "../assets/tea.png";
import loanlinkImg from "../assets/microcredx.png"

const Projects = () => {
  const projects = [
    {
      name: "MicroCredX",
      tagline: "Microloan request & approval tracker system",
      desc: "A comprehensive web-based microloan management system designed for NGOs and microloan providers. It enables borrowers to apply for loans, managers to review and approve applications, and admins to manage users, loans, and system settings through secure, role-based dashboards. The platform includes payment integration, real-time tracking, and a modern, responsive UI.",
      tech: [
        "React",
        "React Router",
        "Firebase Auth",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Tailwind CSS",
        "Framer Motion",
      ],
      live: "https://microcredx.vercel.app/",
      github: "https://github.com/Mahfuz5634/MicroCredX-Project-FrontendPart",
      image: loanlinkImg,
    },

    {
      name: "Kidz Corner",
      tagline: "Toy e-commerce platform",
      desc: "A full-featured toy e-commerce platform where users can browse toys by category, view detailed product pages, and manage their own collection. It includes secure authentication, profile-based toy management, wishlist-like features, and protected routes for adding or editing items, all wrapped in a playful, responsive UI.",
      tech: [
        "React",
        "React Router",
        "Firebase Auth",
        "Tailwind CSS",
        "DaisyUI",
      ],
      live: "https://kidz-corner-webapp.netlify.app/",
      github: "https://github.com/Mahfuz5634/Kidz-Corner-With-Firebase",
      image: kidzImg,
    },
    {
      name: "Smart Utility BD",
      tagline: "Utility bills management",
      desc: "A MERN-based utility management system that centralizes monthly Electricity, Gas, Water, and Internet bills. Users can add, update, and delete bills in real time, filter by category or status, and generate downloadable PDF summaries, making bill tracking and history review much easier.",
      tech: ["React", "Firebase", "Tailwind CSS", "DaisyUI"],
      live: "https://smart-utility-bd.netlify.app/",
      github: "https://github.com/Mahfuz5634/SmartUtility-Project-ClientPart",
      image: utilityImg,
    },
    {
      name: "Dragon News",
      tagline: "News portal with auth",
      desc: "A modern news portal that lets users explore articles by category and read full stories after signing in. The app uses Firebase email/password authentication, protected routes for detailed news views, and a clean layout to keep reading focused and distraction-free.",
      tech: [
        "React",
        "React Router",
        "Firebase Auth",
        "Tailwind CSS",
        "DaisyUI",
      ],
      live: "https://dragon-news-firebase22.netlify.app/",
      github: "https://github.com/Mahfuz5634/Dragon-News-With-Firebase-Project",
      image: dragonImg,
    },
    {
      name: "Book Vibe",
      tagline: "Book explorer",
      desc: "A book discovery interface where users can browse a curated collection of books, see detailed information such as author and rating, and switch between different sections using React Router. The UI focuses on readability and responsive layout to make exploring books feel smooth on any device.",
      tech: ["React", "React Router", "Tailwind CSS"],
      live: "https://book-vibe-with-react-20022.netlify.app/",
      github:
        "https://github.com/Mahfuz5634/Book-Vibe-With-React-Router-Project",
      image: bookImg,
    },
    {
      name: "Customer Support App",
      tagline: "Support ticket manager",
      desc: "A support dashboard for managing customer tickets with clear status tracking and updates. Users can view ticket details, follow their progress through different states, and interact with data coming from APIs, showcasing structured state management and responsive layout.",
      tech: ["React", "JavaScript", "API", "Tailwind CSS", "DaisyUI"],
      live: "https://customer-support-react-2200.netlify.app/",
      github: "https://github.com/Mahfuz5634/Customer-Support-Zone-Using-React",
      image: supportImg,
    },
    {
      name: "Eco World Project",
      tagline: "Plants & eco products",
      desc: "A JavaScript-driven landing page that highlights plants and eco-friendly products with interactive cards and dynamic content loading. It focuses on DOM manipulation, fetch API usage, and clean component sections to simulate a small product catalogue experience.",
      tech: ["JavaScript", "HTML5", "CSS3", "Fetch API", "Tailwind"],
      live: "https://mahfuz5634.github.io/Eco-World-Project/",
      github: "https://github.com/Mahfuz5634/Eco-World-Project",
      image: ecoImg,
    },
    {
      name: "English Shikhi",
      tagline: "Learn English vocabulary",
      desc: "An interactive vocabulary learning tool that helps users practice English words with meanings, example sentences, synonyms, and text-to-speech playback. It demonstrates working with public APIs, DOM updates, and UX aimed at making learning lightweight and engaging.",
      tech: ["JavaScript", "HTML5", "CSS3", "Fetch API", "Tailwind CSS"],
      live: "https://mahfuz5634.github.io/English-Shikhi-Project/",
      github: "https://github.com/Mahfuz5634/English-Shikhi-Project",
      image: englishImg,
    },
    {
      name: "Tea House Project",
      tagline: "Tea shop landing page",
      desc: "A static but polished tea shop landing page that showcases different tea products, featured sections, and client testimonials. It focuses on layout, typography, and responsive design using only HTML and CSS to create a visually pleasing marketing page.",
      tech: ["HTML", "CSS"],
      live: "https://mahfuz5634.github.io/Tea-House-Project/",
      github: "https://github.com/Mahfuz5634/Tea-House-Project",
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
    <section id="projects" className="py-10">
      <div className="max-w-6xl mx-auto px-6">
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
                  <p className="mt-2 text-sm sm:text-[0.95rem] text-slate-300/90 leading-relaxed text-justify">
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
