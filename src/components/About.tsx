"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [showHat, setShowHat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHat((prev) => !prev);
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center text-center mt-[2.5rem] px-[1rem]">
      <h1 className="text-white text-[1.875rem] mb-[1.5rem] tracking-wider">Leticia Eltermann</h1>

      <div className="flex flex-col md:flex-row items-center max-w-[56rem] gap-[2rem]">
        <img
          src="/coffeme.png"
          alt="Letícia"
          className="w-[24rem] h-[24rem] object-contain rounded transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-lg"
        />
        <p className="text-[0.75rem] mb-[1.5rem] tracking-widest ">/Sobre</p>

        <div className="text-[0.890rem] text-[#e0e0e0] leading-relaxed max-w-[25rem] font-[Questrial] relative">
          Sou estudante de Engenharia de Software, tenho 22 anos e acredito no poder transformador da tecnologia. Para mim, ela não apenas muda vidas – ela vai mudar a minha. Atualmente, estou no quinto período da faculdade e já tive a oportunidade de atuar em projetos freelancers de desenvolvimento web no Brasil, utilizando tecnologias como PHP, SaaS e Flask, além de participar de projetos em grupo no meio acadêmico.
          Tenho buscado absorver cada conhecimento que me é ofertado, sempre com entusiasmo e mente aberta.
          <br />
          <br />
          Fora do ambiente tech, sou apaixonada por literatura e leio desde criança. Também coleciono discos de vinil, adoro jogar no PC (meu jogo favorito é{" "}
          <span className="relative inline-block">
            Red Dead Redemption 2
            {showHat && (
              <img
                src="/cowboy.png" 
                alt="Chapéu de Cowboy"
                className="absolute animate-hat w-[2rem] h-[2rem]"
              />
            )}
          </span>
          , mas sempre estou jogando algum jogo indie) e mantenho uma playlist fiel no Spotify.
        </div>
      </div>

      <div className="mt-8 text-[0.875rem] text-[#e0e0e0] leading-relaxed max-w-[56rem] font-[Questrial]">
        <p>
          No meu portfólio, você pode ver meus projetos, certificações, tecnologias e artigos que escrevo, com os quais estou aprendendo e aplicando. Estou sempre em busca de oportunidades para crescer na área de tecnologia.
        </p>
      </div>

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
    </section>
  );
}