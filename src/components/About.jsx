import React from "react";
import ScrollReveal from "../ScrollBar/Scrollbar";

import { AiOutlineCode, AiFillProject, AiOutlineTrophy } from "react-icons/ai";
import { FiCpu } from "react-icons/fi";

const About = () => {
  return (
    <ScrollReveal>
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-zinc-700"></div>
            <span className="text-zinc-400 uppercase tracking-widest text-sm font-medium">
              01. About Me
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                A disciplined{" "}
                <span className="text-zinc-500">problem solver</span> <br />
                building digital products.
              </h3>

              <div className="space-y-4 text-zinc-400 leading-relaxed text-base md:text-lg">
                <p className="text-justify">
                  I am a Computer Science student and Fullstack Developer based
                  in Bangladesh. My journey started with a curiosity for how
                  software scales, which led me down the rabbit hole of{" "}
                  <strong className="text-zinc-100">
                    Competitive Programming
                  </strong>{" "}
                  and system architecture.
                </p>
                <p className="text-justify">
                  I don't just write code; I care about the{" "}
                  <strong className="text-zinc-100">architecture</strong>,
                  scalability, and the micro-interactions that make a user
                  experience feel seamless.
                </p>
                <p className="text-justify">
                  Whether I'm solving complex algorithmic problems (DSA) or
                  pixel-pushing in CSS, I approach every challenge with a focus
                  on performance and clean code principles.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-350 group">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <AiOutlineTrophy className="text-blue-400 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">700+</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">
                  DSA Problems Solved
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all duration-350 group">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <AiFillProject className="text-emerald-400 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">5+</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">
                  Completed Projects
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)] transition-all duration-350 group">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <AiOutlineCode className="text-purple-400 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">03+</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">
                  Years Coding
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-350 group">
                <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FiCpu className="text-orange-400 text-xl" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">MERN</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">
                  Primary Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default About;
