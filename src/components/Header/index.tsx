import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          onClick={fecharMenu}
          className="text-2xl font-bold"
        >
          Motors<span className="text-red-500">Dz7</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <Link
            to="/"
            className="relative pb-1 transition-colors duration-300 hover:text-red-500
                       after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                       after:bg-red-500 after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Home
          </Link>

          <Link
            to="/carros"
            className="relative pb-1 transition-colors duration-300 hover:text-red-500
                       after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                       after:bg-red-500 after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Carros
          </Link>

          <Link
            to="/servicos"
            className="relative pb-1 transition-colors duration-300 hover:text-red-500
                       after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                       after:bg-red-500 after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Serviços
          </Link>

          <Link
            to="/quem-somos"
            className="relative pb-1 transition-colors duration-300 hover:text-red-500
                       after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                       after:bg-red-500 after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Quem Somos
          </Link>

          <Link
            to="/contato"
            className="relative pb-1 transition-colors duration-300 hover:text-red-500
                       after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                       after:bg-red-500 after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Contato
          </Link>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 transition hover:border-red-500 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                menuAberto ? 'translate-y-2 rotate-45' : ''
              }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                menuAberto ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                menuAberto ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* MENU DROPDOWN MOBILE */}
      <div
        className={`overflow-hidden border-t border-zinc-800 bg-zinc-950 transition-all duration-300 md:hidden ${
          menuAberto
            ? 'max-h-96 opacity-100'
            : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="flex flex-col px-5 py-3 sm:px-6">
          <Link
            to="/"
            onClick={fecharMenu}
            className="border-b border-zinc-800 py-4 transition-colors hover:text-red-500"
          >
            Home
          </Link>

          <Link
            to="/carros"
            onClick={fecharMenu}
            className="border-b border-zinc-800 py-4 transition-colors hover:text-red-500"
          >
            Carros
          </Link>

          <Link
            to="/servicos"
            onClick={fecharMenu}
            className="border-b border-zinc-800 py-4 transition-colors hover:text-red-500"
          >
            Serviços
          </Link>

          <Link
            to="/quem-somos"
            onClick={fecharMenu}
            className="border-b border-zinc-800 py-4 transition-colors hover:text-red-500"
          >
            Quem Somos
          </Link>

          <Link
            to="/contato"
            onClick={fecharMenu}
            className="py-4 transition-colors hover:text-red-500"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header