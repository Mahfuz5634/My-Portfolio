import React from "react";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiAward,
} from "react-icons/fi";
import ScrollReveal from "../ScrollBar/Scrollbar";

const Experience = () => {
  const experiences = [
    {
      company: "Arbeit Technology",
      location: "Dhaka, Bangladesh · On-site",
      duration: "Jul 2026 - Present",
      roles: [
        {
          role: "Junior Full Stack Developer",
          type: "Full-time",
          duration: "Jul 2026 - Present",
          description:
            "Started my first onsite role as a Junior Full Stack Developer at Arbeit Technology. I work with React.js, Next.js, Node.js, Express.js, MongoDB, Mongoose, PostgreSQL, and Prisma to build and maintain full-stack web applications.",
          skills: [
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "PostgreSQL",
            "Prisma",
            "Full-Stack Development",
            "Web Technologies",
          ],
        },
      ],
    },
    {
      company: "Zyxora Inc.",
      location: "Remote / Dhaka, Bangladesh",
      duration: "Jan 2026 - Present (7 mos)",
      roles: [
        {
          role: "Junior Software Engineer",
          type: "Part-time",
          duration: "Jul 2026 - Present",
          description:
            "As a Part-time Junior Software Engineer at Zyxora, I contributed to the development and maintenance of modern web applications, primarily focusing on frontend development using React, Next.js, and other modern technologies.",
          skills: [
            "React.js",
            "Next.js",
            "Software Development",
            "Software Infrastructure",
            "Frontend Development",
          ],
        },
        {
          role: "Junior Software Engineer Intern",
          type: "Full-time",
          duration: "Jan 2026 - Jun 2026 (6 mos)",
          description:
            "During my internship at Zyxora, I primarily worked on frontend development using React, Next.js, TypeScript, Tailwind CSS, and JavaScript, while also gaining hands-on experience with backend technologies.",
          skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript",
            "Backend Development",
            "Frontend Development",
          ],
          hasCertificate: true,
        },
      ],
    },
  ];

  return (
    <ScrollReveal>
      <section id="experience" className="relative overflow-hidden py-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-emerald-500"></span>
              <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">
                Career Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-zinc-500">Experience.</span>
            </h2>
            <p className="text-zinc-400 max-w-lg leading-relaxed">
              My professional background, including full-stack and frontend roles
              where I contributed to building modern, robust web solutions.
            </p>
          </div>

          <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[41px] md:-left-[49px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 text-emerald-400 group-hover:border-emerald-500/50 group-hover:text-emerald-300 transition-colors shadow-lg z-10">
                  <FiBriefcase size={14} />
                </div>

                <div className="relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-all duration-300">
                  {/* Company Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 pb-4 border-b border-zinc-800">
                    <div>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {exp.company}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mt-2 font-mono">
                        <span className="flex items-center gap-1">
                          <FiMapPin className="text-zinc-400" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0 font-mono text-xs text-zinc-400 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-805">
                      <FiCalendar className="text-zinc-500" /> {exp.duration}
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="space-y-8">
                    {exp.roles.map((role, rIndex) => (
                      <div key={rIndex} className={rIndex > 0 ? "pt-6 border-t border-zinc-800" : ""}>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <h4 className="text-lg font-semibold text-zinc-200">
                            {role.role}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-zinc-800 text-zinc-300 border border-zinc-700">
                            {role.type}
                          </span>
                        </div>

                        {exp.roles.length > 1 && (
                          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-3">
                            <FiCalendar size={12} /> {role.duration}
                          </div>
                        )}

                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                          {role.description}
                        </p>

                        <div>
                          <div className="flex flex-wrap gap-1.5">
                            {role.skills.map((skill, sIndex) => (
                              <span
                                key={sIndex}
                                className="px-2 py-1 text-[10px] text-zinc-500 font-mono bg-zinc-950/80 border border-zinc-800 rounded hover:border-zinc-650 hover:text-zinc-200 transition-colors duration-200 cursor-default"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Experience;
