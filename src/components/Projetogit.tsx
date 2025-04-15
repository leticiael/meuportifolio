"use client";

export default function Projetogit() {
  const projects = [
    {
      title: "Basilisk web/Mobile",
      description:
        "Este é um projeto desenvolvido em grupo com colegas da faculdade. Trata-se de um sistema de controle financeiro completo, no qual atuei no backend implementando APIs e fornecendo funcionalidades em PHP para web e Kotlin para mobile.",
      image: "/basiliskweb.png",
      link: "https://github.com/leticiael/Basilisk", 
    },
    {
      title: "SaaSAppointment",
      description:
        "Este projeto cria uma interface interativa com o modelo ChatGPT utilizando o Streamlit, permitindo que os usuários façam perguntas e recebam respostas em tempo real. Neste caso, o chatbot é utilizado para a marcação de consultas, com a restrição de não aceitar agendamentos para NotreDame.",
      image: "/saasapp.png",
      link: "https://github.com/leticiael/SaaSAppointment",
    },
  ];

  return (
    <section className="flex flex-col items-center text-center mt-[2.5rem] px-[1rem]">
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
      <br />
      <h1 className="text-white text-[1.875rem] mb-[1.5rem] tracking-wider">
        Projetos Práticos
      </h1>
      <br />
      <br />

      <div className="flex flex-col md:flex-row items-center justify-center gap-[2rem] max-w-[56rem]">
        {projects.map((project, index) => (
          <div
  key={index}
  className="flex flex-col items-center bg-[#1e0a0a] rounded-lg shadow-lg p-[1.5rem] max-w-[24rem] w-full transform transition-transform duration-300 hover:scale-125"
  style={{ height: "28rem" }} 
>
  <img
    src={project.image}
    alt={project.title}
    className="w-[20rem] h-[12rem] object-contain rounded-md mb-[1rem]"
  />
  <h2 className="text-white text-[1.25rem] font-bold mb-[0.5rem] text-center">
    {project.title}
  </h2>
  <p className="text-[#e0e0e0] text-[0.875rem] leading-relaxed mb-[1rem] font-[Questrial] text-center line-clamp-3">
    {project.description}
  </p>
  <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="px-[1.5rem] py-[0.75rem] bg-white/10 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#4a1c1c] hover:to-[#1a0000] hover:text-white hover:scale-110 text-[1rem] font-[Questrial]"
>
  Ver Projeto
</a>
</div>
        ))}
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
