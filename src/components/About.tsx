export default function About() {
    return (
      <section className="flex flex-col items-center text-center mt-[2.5rem] px-[1rem]">
        <h1 className="text-white text-[1.875rem] mb-[1.5rem] tracking-wider">Leticia Eltermann</h1>
  
        <div className="flex flex-col md:flex-row items-center max-w-[56rem]">
          <img
            src="/coffeme.png"
            alt="Letícia"
            className="w-[24rem] h-[24rem] object-contain rounded mb-[1rem] md:mb-0 md:mr-[1.5rem] transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-lg"
          />
  
          <div className="text-[0.875rem] text-[#6f7173] leading-relaxed max-w-[28rem]">
            <p className="text-[0.75rem] mb-[1.5rem] text-[#6f7173] tracking-widest">/Sobre</p>
            Olá, visitante! Sou uma estudante de Engenharia de Software e programadora júnior. Iniciei minha jornada na tecnologia há dois anos e, desde então, tenho buscado me aprimorar nessa área que me fez me encontrar. Desde o início, percebi o potencial da tecnologia de transformar vidas, oferecendo soluções que aumentam a produtividade e permitem que as pessoas passem mais tempo com suas famílias ou fazendo algo que realmente gostam. A tecnologia é ciência em ação todos os dias. Tenho buscado aprimorar meus conhecimentos em IA, automação, desenvolvimento e dados. Eu realmente acredito que a tecnologia vai salvar o mundo, um dia.

</div>
        </div>
  
        <div className="mt-6 text-[0.875rem] text-[#e0e0e0] leading-relaxed max-w-[56rem]">
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