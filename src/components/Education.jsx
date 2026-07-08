import React from "react";
import {
  FiBook,
  FiAward,
  FiCpu,
  FiCode,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
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

  const certifications = [
    {
      title: "Complete Web Development Course",
      issuer: "Programming Hero",
      date: "Dec 2025",
      credentialId: "WEB12-0156",
      skills: ["Front-End Design", "React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Git and Github",
      issuer: "Simplilearn",
      date: "Jul 2025",
      credentialId: "KRrE8ro0VUb",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    },
    {
      title: "Introduction to Front End Development",
      issuer: "Simplilearn",
      date: "May 2025",
      credentialId: "10193211",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Web Development"],
    },
  ];

  return (
    <ScrollReveal>
      <section id="education" className="relative overflow-hidden py-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-blue-500"></span>
              <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
                Learning Path
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Academic <span className="text-zinc-500">Background.</span>
                </h2>
                <p className="text-zinc-400 max-w-lg leading-relaxed">
                  Formal education and theoretical foundations that support my
                  engineering journey and problem-solving capabilities.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-10 hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex-shrink-0 md:w-1/3 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      B.Sc. in Computer Science & Engineering
                    </h3>
                    <p className="text-blue-400 mt-2 font-medium">
                      University of Information Technology and Sciences (UITS)
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-zinc-500 font-mono">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-zinc-400" />
                      <span>2023 - Present (4th Year)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-zinc-400" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiAward className="text-zinc-400" />
                      <span>CGPA: 3.70 / 4.00</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-blue-400 text-xs font-mono font-medium uppercase tracking-wide">
                      Currently Enrolled
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-6">
                  <p className="text-zinc-400 leading-relaxed">
                    Currently pursuing an undergraduate degree with a strong
                    focus on software engineering principles. Combining academic
                    theory with practical application through competitive
                    programming, data structure analysis, and full-stack
                    development projects.
                  </p>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                      <FiBook className="text-blue-500" /> Relevant Coursework
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs text-zinc-400 font-mono bg-zinc-950 border border-zinc-800 rounded hover:border-zinc-600 hover:text-zinc-200 transition-colors cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-blue-500"></div>
              <h3 className="text-xl font-bold text-white tracking-tight uppercase font-mono text-sm tracking-widest text-blue-400">
                Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] hover:-translate-y-1.5 transition-all duration-350 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="p-3 bg-zinc-950 border border-zinc-850 text-blue-400 rounded-xl group-hover:border-blue-500/20 transition-all duration-300">
                        <FiAward size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-850">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-zinc-400 text-sm font-medium mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="text-[10px] font-mono text-zinc-500 mb-3 uppercase tracking-wider">
                      Credential ID: <span className="text-zinc-300 font-semibold">{cert.credentialId}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="px-2 py-1 text-[9px] font-mono text-zinc-500 bg-zinc-950/80 border border-zinc-850 rounded hover:border-zinc-700 hover:text-zinc-200 transition-colors duration-200 cursor-default"
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
      </section>
    </ScrollReveal>
  );
};

export default Education;
