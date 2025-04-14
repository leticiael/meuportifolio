export default function Navbar() {
    return (
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Letícia</h1>
          <ul className="flex space-x-4">
            <li><a href="#projetos" className="hover:text-blue-600">Projetos</a></li>
            <li><a href="#sobre" className="hover:text-blue-600">Sobre</a></li>
            <li><a href="#contato" className="hover:text-blue-600">Contato</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  