import React from "react";
import kidzImg from "../assets/kidz.png";
import utilityImg from "../assets/smart.png";
import { image } from "framer-motion/client";

const Projects = () => {
  const projects = [
    {
      name: "Kidz Corner",
      tagline: "Toy e-commerce platform",
      desc: "A user-friendly toy marketplace with secure auth, profile management, order history, and protected routes. Responsive UI with playful animations.",
      tech: [
        "React",
        "React Router",
        "Firebase Auth",
        "Tailwind CSS",
        "DaisyUI",
      ],
      live: "https://kidz-corner-webapp.netlify.app/",
      github: "https://github.com/your-username/kidz-corner", // replace
      image:kidzImg
      
      
    },
    {
      name: "Smart Utility BD",
      tagline: "Utility bills management",
      desc: "Full-stack MERN app to track and pay monthly Electricity, Gas, Water, and Internet bills. Includes real-time CRUD, PDF reports, and category filters.",
      tech: ["React", "Firebase", "Tailwind CSS", "DaisyUI"],
      live: "https://smart-utility-bd.netlify.app/",
      github: "https://github.com/your-username/smart-utility-bd", // replace
      image:utilityImg,
      
    },
  ];

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
          A few projects that highlight full-stack development, real-world
          problem solving, and clean UI.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
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
      </div>
    </section>
  );
};

export default Projects;
