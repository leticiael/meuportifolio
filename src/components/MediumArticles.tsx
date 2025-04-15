export default function MediumArticles() {
    return (
      <section className="w-full max-w-3xl p-8 my-10 text-[#e0e0e0] font-[Questrial] shadow-lg rounded-lg relative">
        <div className="flex justify-center mb-6">
          <img
            src="/journey.png"
            className="w-[10rem] h-[10rem] object-contain rounded transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-lg w-[10rem] h-auto object-contain rounded-lg shadow-md"
          />
        </div>
  
        <h2 className="text-3xl font-bold mb-8 pb-3 uppercase tracking-widest text-center">
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
            href="https://medium.com/@leeltermann/a-revolu%C3%A7%C3%A3o-dos-dados-na-agroind%C3%BAstria-como-o-campo-se-tornou-inteligente-189b2ec2ecb5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#3a0f0f] text-white font-[Questrial] rounded-lg hover:bg-[#2a0b0b] transition-all duration-300"
          >
            Ler artigo completo
          </a>
        </div>
  
        <div className="pt-4">
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