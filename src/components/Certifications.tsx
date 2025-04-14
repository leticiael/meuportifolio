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
    text: "Certificação em PostgreSQL, aprofundando na linguagem procedural PLpgSQL, abordando consultas, otimização e administração de banco de dados.",
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

  // Intersection Observer para detectar quando o carrossel entra na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Ativa quando 10% do elemento está visível
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

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-[50rem] mx-auto p-[2rem] text-white bg-black/20 backdrop-blur-md rounded-2xl shadow-lg"
    >
      <h2 className="text-[2.5rem] font-bold mb-[1.5rem] text-center">Certificações</h2>

      <div className="flex flex-col items-center gap-[2rem] transition-all duration-500 ease-in-out">
        <img
          src={certifications[index].image}
          alt={certifications[index].title}
          className="w-[20rem] h-auto object-contain rounded-md shadow-md"
        />
        <div className="text-center">
          <h3 className="text-[1.5rem] font-semibold mb-[1rem]">
            {certifications[index].title}
          </h3>
          <p className="text-[1.125rem] leading-[1.75rem] max-w-[40rem]">
            {certifications[index].text}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-[1rem] mt-[2rem]">
        <button
          onClick={prev}
          className="px-[1rem] py-[0.5rem] bg-white/10 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#4a1c1c] hover:to-[#1a0000] hover:text-white hover:scale-110"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="px-[1rem] py-[0.5rem] bg-white/10 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#4a1c1c] hover:to-[#1a0000] hover:text-white hover:scale-110"
        >
          ›
        </button>
      </div>
    </div>
  );
}