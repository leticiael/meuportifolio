export default function MediumArticles() {
    return (
      <section className="w-full max-w-3xl p-8 my-10 text-[#e0e0e0] font-[Questrial] shadow-lg backdrop-blur-md bg-[#1e0a0a]/80 rounded-lg border-[2px] border-[#6f7173] relative">
        <div className="absolute inset-0 bg-[url('/textures/paper-texture.png')] opacity-5 pointer-events-none rounded-lg"></div>
  
        {/* Imagem acima do título */}
        <div className="flex justify-center mb-6">
          <img
            src="/mediumme.png"
            alt="Medium Banner"
            className="w-[30rem] h-auto object-contain rounded-lg shadow-md"
          />
        </div>
  
        <h2 className="text-3xl font-bold mb-8 border-b-[2px] border-[#6f7173] pb-3 uppercase tracking-widest">
          Meus Últimos Artigos
        </h2>
  
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Dataficação: Como os Dados Imortalizam Experiências</h3>
          <p className="text-[1rem] leading-[1.75rem] mb-4">
            A dataficação é um conceito que se refere à transformação de experiências, comportamentos e interações humanas em dados. Neste artigo, exploramos como essa prática está moldando a forma como vivemos e interagimos com o mundo ao nosso redor.
          </p>
          <a
            href="https://medium.com/@leeltermann/datafica%C3%A7%C3%A3o-0dfd519139cf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#3a0f0f] text-white font-[Questrial] rounded-lg hover:bg-[#2a0b0b] transition-all duration-300"
          >
            Ler artigo completo
          </a>
        </div>
  
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">A revolução dos dados na agroindústria: Como o campo se tornou inteligente</h3>
          <p className="text-[1rem] leading-[1.75rem] mb-4">
            Neste artigo, discutimos como a tecnologia está transformando a agroindústria, permitindo que os agricultores tomem decisões mais informadas e eficientes. A revolução dos dados está mudando a forma como cultivamos e gerenciamos nossas terras.
          </p>
          <a
            href="https://medium.com/seuartigo2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#3a0f0f] text-white font-[Questrial] rounded-lg hover:bg-[#2a0b0b] transition-all duration-300"
          >
            Ler artigo completo
          </a>
        </div>
  
        <div className="pt-4 border-t-[2px] border-[#6f7173]">
          <a
            href="https://medium.com/@leeltermann"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center block mt-4 underline hover:font-bold hover:text-[#e0e0e0] transition-colors"
          >
            Me acompanhe no Medium
          </a>
        </div>
      </section>
    );
  }