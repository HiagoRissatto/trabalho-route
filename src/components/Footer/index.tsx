import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">

        {/* EMPRESA */}
        <div>
          <h2 className="text-2xl font-bold">
            Motors<span className="text-red-500">Dz7</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
            Encontre seu próximo carro com segurança, transparência e um
            atendimento pensado para você.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <div>
          <h3 className="text-lg font-semibold">
            Navegação
          </h3>

          <nav className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
            <Link
              to="/"
              className="w-fit transition-colors hover:text-red-500"
            >
              Home
            </Link>

            <Link
              to="/carros"
              className="w-fit transition-colors hover:text-red-500"
            >
              Carros
            </Link>

            <Link
              to="/servicos"
              className="w-fit transition-colors hover:text-red-500"
            >
              Serviços
            </Link>

            <Link
              to="/quem-somos"
              className="w-fit transition-colors hover:text-red-500"
            >
              Quem Somos
            </Link>

            <Link
              to="/contato"
              className="w-fit transition-colors hover:text-red-500"
            >
              Contato
            </Link>
          </nav>
        </div>

        {/* CONTATO */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold">
            Contato
          </h3>

          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <p>(45) 99999-9999</p>

            <p className="break-all sm:break-normal">
              contato@motorsdz7.com
            </p>

            <p>
              Avenida Principal, 1000
            </p>
          </div>
        </div>

      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-6 text-center text-sm text-zinc-500 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">

          <p>
            © 2026 MotorsDZ7. Todos os direitos reservados.
          </p>

          <p>
            Projeto acadêmico desenvolvido com React Router.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer