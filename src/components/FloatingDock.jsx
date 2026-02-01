import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTerminal,
} from "react-icons/fi";

const links = [
  { title: "Home", icon: <FiHome />, href: "#home" },
  { title: "About", icon: <FiUser />, href: "#about" },
  { title: "Projects", icon: <FiCode />, href: "#projects" },

  { title: "CP", icon: <FiTerminal />, href: "#competitive-programming" },

  { title: "Contact", icon: <FiMail />, href: "#contact" },
  {
    title: "GitHub",
    icon: <FiGithub />,
    href: "https://github.com",
    external: true,
  },
  {
    title: "LinkedIn",
    icon: <FiLinkedin />,
    href: "https://linkedin.com",
    external: true,
  },
];

export default function FloatingDock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex h-16 items-end gap-4 rounded-2xl bg-black/80 border border-zinc-800 px-4 pb-3 backdrop-blur-md">
      {links.map((link, i) => (
        <DockIcon mouseX={mouseX} key={i} {...link} />
      ))}
    </div>
  );
}

function DockIcon({ mouseX, title, icon, href, external }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const handleClick = (e) => {
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noreferrer" : ""}
      ref={ref}
      style={{ width }}
      onClick={handleClick}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="group relative flex aspect-square items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black transition-colors"
    >
      <span className="text-xl md:text-2xl pointer-events-none">{icon}</span>

      <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-auto px-2 py-1 rounded border border-zinc-800 bg-black text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {title}
      </span>
    </motion.a>
  );
}
