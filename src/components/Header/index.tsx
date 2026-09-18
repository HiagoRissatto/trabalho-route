import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-2xl font-bold">
          Motors<span className="text-red-500">Dz7</span>
        </Link>

        <nav className="flex gap-6">
          <Link to="/" className="relative pb-1 transition-colors duration-300 hover:text-red-500
               after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
               after:bg-red-500 after:transition-all after:duration-300
               hover:after:w-full">Home</Link>
          <Link to="/carros" className="relative pb-1 transition-colors duration-300 hover:text-red-500
               after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
               after:bg-red-500 after:transition-all after:duration-300
               hover:after:w-full">Carros</Link>
          <Link to="/servicos" className="relative pb-1 transition-colors duration-300 hover:text-red-500
               after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
               after:bg-red-500 after:transition-all after:duration-300
               hover:after:w-full">Serviços</Link>
          <Link to="/quem-somos" className="relative pb-1 transition-colors duration-300 hover:text-red-500
               after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
               after:bg-red-500 after:transition-all after:duration-300
               hover:after:w-full">Quem Somos</Link>
          <Link to="/contato" className="relative pb-1 transition-colors duration-300 hover:text-red-500
               after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
               after:bg-red-500 after:transition-all after:duration-300
               hover:after:w-full">Contato</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header