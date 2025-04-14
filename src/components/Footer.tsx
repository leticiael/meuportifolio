import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaPython } from "react-icons/fa";
import { SiSass, SiPostgresql, SiR, SiUml } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <svg
        className="mt-[2rem] w-full h-[6rem]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="#6f7173"
          strokeWidth="3"
          d="M0,160 Q120,60 240,160 T480,160 T720,160 T960,160 T1200,160 T1440,160"
        >
          <animate
            attributeName="d"
            dur="2.5s"
            repeatCount="indefinite"
            values="
              M0,160 Q120,60 240,160 T480,160 T720,160 T960,160 T1200,160 T1440,160;
              M0,160 Q120,260 240,160 T480,160 T720,160 T960,160 T1200,160 T1440,160;
              M0,160 Q120,60 240,160 T480,160 T720,160 T960,160 T1200,160 T1440,160
            "
          />
        </path>
      </svg>
      <footer className="w-full text-center text-zinc-500 py-8 text-sm mt-10 mb-20">
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
    </>
  );
}