import { motion } from "framer-motion";

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="py-16">
      <h2 className="text-3xl font-semibold mb-4">Competitive Programming</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-6 bg-zinc-900 rounded-xl border border-gray-700"
      >
        <p className="text-gray-300 mb-4">CP Profiles:</p>

        <ul className="leading-8">
          <li>🔥 Codeforces: <a href="#" className="underline">Mahfuz</a></li>
          <li>⭐ LeetCode: <a href="#" className="underline">Mahfuz</a></li>
          <li>🏆 UITC 2025 — Top 3</li>
        </ul>
      </motion.div>
    </section>
  );
}
