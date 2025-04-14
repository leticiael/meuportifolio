import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaPython } from "react-icons/fa";
import { SiSass, SiPostgresql, SiR, SiUml } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full text-center text-zinc-500 py-8 text-sm mt-10 border-t">
      <p className="mb-4">Skills que já comecei a desenvolver:</p>
      <div className="flex justify-center gap-4 flex-wrap text-base mb-6">
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          <FaPhp /> PHP
        </span>
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          <FaHtml5 /> HTML
        </span>
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          <FaCss3Alt /> CSS
        </span>
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          <SiSass /> SASS
        </span>
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          <SiPostgresql /> PostgreSQL
        </span>
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          <FaReact /> React
        </span>
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          <SiR /> R
        </span>
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          <FaPython /> Python
        </span>
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          <SiUml /> UML
        </span>
        <span className="flex items-center gap-1 bg-zinc-800 text-white px-2 py-1 rounded animate-float">
          SQL
        </span>
      </div>
      <p>Sempre aprendendo, sempre criando. Obrigada por visitar!</p>
    </footer>
  );
}