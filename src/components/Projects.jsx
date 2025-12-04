import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Kidz Corner",
      desc: "Toy e-commerce app (React + Firebase)",
      link: "#",
      github: "#",
    },
    {
      name: "Event Manager",
      desc: "Next.js event dashboard",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            className="p-6 bg-zinc-900 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-400 my-2">{p.desc}</p>

            <div className="flex gap-4 mt-4 text-sm">
              <a href={p.link} className="underline">
                Live
              </a>
              <a href={p.github} className="underline">
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
