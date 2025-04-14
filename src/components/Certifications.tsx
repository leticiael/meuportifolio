"use client";

import { useState, useEffect, useRef } from "react";

const certifications = [
  {
    title: "Google Data Analytics",
    text: "Certificação em análise de dados, incluindo visualização, estatísticas e ferramentas de análise. 180 horas de curso.",
    image: "/Datagoogle.jpeg",
  },
  {
    title: "Certificação PostgreSQL",
    text: "Certificação em PostgreSQL, aprofundando na linguagem procedural PLpgSQL.",
    image: "/postgrec.png",
  },
  {
    title: "Introdução à IA",
    text: "Certificação em IA, cobrindo conceitos básicos, algoritmos e aplicações práticas. Concedida pela Rocketseat.",
    image: "/iarocket.png",
  },
];

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % certifications.length);
  const prev = () => setIndex((i) => (i - 1 + certifications.length) % certifications.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-[60rem] mx-auto p-[1.5rem] text-white rounded-2xl shadow-lg text-gray font-[Questrial] backdrop-blur-md "
    >
      <h2 className="text-[3rem] font-bold mb-[1.5rem] text-center font-[Questrial] ">
        Certificações
        <span className="block text-[1.25rem] text-gray-500 font-[Questrial] mt-[0.5rem]">
          Explore as certificações que conquistei ao longo da minha jornada.
        </span>
      </h2>

<div className="relative w-full h-[30rem] flex items-center justify-center overflow-hidden">
  {certifications.map((cert, i) => (
    <div
      key={i}
      className={`absolute transition-all duration-1000 ease-in-out flex flex-col items-center justify-center ${
        i === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100%]"
      }`}
      style={{ width: "100%", height: "100%" }} // Garante que o slide ocupe todo o espaço disponível
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-[20rem] h-auto object-contain rounded-md shadow-md" // Define largura fixa e altura proporcional
      />
      <div className="text-center mt-6">
        <h3 className="text-[2rem] font-semibold mb-[1.5rem] font-[Questrial]">{cert.title}</h3>
        <p className="text-[1.25rem] leading-[2rem] max-w-[50rem] text-gray-500 font-[Questrial]">
          {cert.text}
        </p>
      </div>
    </div>
  ))}
</div>

      <div className="flex justify-center gap-[1.5rem] mt-[2rem]">
        <button
          onClick={prev}
          className="px-[1.5rem] py-[0.75rem] bg-white/10 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#4a1c1c] hover:to-[#1a0000] hover:text-white hover:scale-110 text-[1.5rem]"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="px-[1.5rem] py-[0.75rem] bg-white/10 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#4a1c1c] hover:to-[#1a0000] hover:text-white hover:scale-110 text-[1.5rem]"
        >
          ›
        </button>
      </div>
    </div>
  );
}