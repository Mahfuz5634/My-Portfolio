import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-6 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
            About Me
          </span>
        </div>

        {/* Glass card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-8 py-8 sm:py-10 backdrop-blur-xl shadow-[0_0_60px_rgba(37,99,235,0.25)]">
          {/* subtle gradient line */}
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-3">
            I&apos;m a passionate CSE student, competitive programmer, and web
            developer from Bangladesh who enjoys turning ideas into interactive,
            user‑friendly web applications.
          </p>

          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-3">
            Over the years, I&apos;ve been consistently learning new
            technologies, improving my coding skills, and solving challenging
            problems. I love building projects that are clean, fast, and visually
            appealing.
          </p>

          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-3">
            When I&apos;m not coding, you&apos;ll find me exploring new tools,
            reading about tech innovations, or practicing competitive programming
            to sharpen my problem‑solving abilities.
          </p>

          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
            I&apos;m always eager to collaborate, learn, and grow while creating
            meaningful digital experiences along the way.
          </p>

          {/* Small meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span>CSE Student • Bangladesh</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Web Dev & Competitive Programming</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
