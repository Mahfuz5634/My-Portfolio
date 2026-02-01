import React from "react";
import { FiBook, FiAward, FiCpu, FiCode } from "react-icons/fi";
import ScrollReveal from "../ScrollBar/Scrollbar";

const Education = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ];

  return (
    <ScrollReveal>
      <section id="education" className=" relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-12 flex items-center gap-3">
            <div className="h-px w-10 bg-blue-500"></div>
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">
              Academic Background
            </span>
          </div>

          <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 border border-zinc-950 shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform duration-300"></div>

              <div className="relative bg-zinc-900/50 border border-zinc-800/60 p-6 md:p-8 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      B.Sc. in Computer Science & Engineering
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base">
                      University of Information Technology and Sciences (UITS)
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-blue-400 text-xs font-mono font-medium">
                      4th Year • Active
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-2xl">
                  Currently pursuing an undergraduate degree with a strong focus
                  on software engineering principles. Combining academic theory
                  with practical application through competitive programming and
                  full-stack development.
                </p>

                <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4 text-zinc-300 text-sm font-semibold">
                    <FiBook className="text-blue-400" /> Relevant Coursework
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {courses.map((course, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-zinc-500 font-mono"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Education;
