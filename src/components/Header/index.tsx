import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-2xl font-bold">
          Motors<span className="text-red-500">Dz7</span>
        </Link>

        <nav className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/carros">Carros</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/quem-somos">Quem Somos</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header