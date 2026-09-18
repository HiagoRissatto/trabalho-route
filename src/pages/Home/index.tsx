import { Link } from 'react-router-dom'

import heroCar from '../../assets/images/hero-Car.jpg'
import civic from '../../assets/images/civic.jpg'
import corolla from '../../assets/images/corolla.jpg'
import jetta from '../../assets/images/jetta.jpg'
import showroom from '../../assets/images/showroom.jpg'

function Home() {
  return (
    <main className="bg-zinc-950 text-white">
     <section className="group relative flex min-h-[80vh] items-center overflow-hidden">
  {/* IMAGEM ANIMADA */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out group-hover:scale-110"
    style={{ backgroundImage: `url(${heroCar})` }}
  ></div>

  {/* CAMADA ESCURA */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* CONTEÚDO */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
        Sua próxima conquista começa aqui
      </p>

      <h1 className="text-5xl font-bold leading-tight md:text-6xl">
        Encontre o carro ideal para
        <span className="text-red-500"> o seu estilo</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-zinc-300">
        Veículos selecionados, atendimento de qualidade e opções para
        diferentes perfis e necessidades.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/carros"
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
        >
          Ver carros
        </Link>

        <Link
          to="/contato"
          className="rounded-lg border border-white/30 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          Fale conosco
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* VEÍCULOS EM DESTAQUE */}
      <section className="bg-white py-20 text-zinc-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="font-semibold text-red-600">
              Veículos em destaque
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Escolha o modelo que combina com você
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-600">
              Conheça alguns dos veículos disponíveis em nosso catálogo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* CIVIC */}
            <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img
                  src={civic}
                  alt="Honda Civic"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-red-600">
                  Sedan
                </p>

                <h3 className="mt-1 text-2xl font-bold transition-colors duration-300 group-hover:text-red-600">
                  Honda Civic
                </h3>

                <p className="mt-3 text-zinc-600">
                  Design sofisticado, tecnologia e desempenho para quem busca
                  conforto e uma experiência de direção completa.
                </p>

                <Link
                  to="/carros"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-red-600 transition-all duration-300 group-hover:gap-3 group-hover:text-red-700"
                >
                  Ver detalhes
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* COROLLA */}
            <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img
                  src={corolla}
                  alt="Toyota Corolla"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-red-600">
                  Sedan
                </p>

                <h3 className="mt-1 text-2xl font-bold transition-colors duration-300 group-hover:text-red-600">
                  Toyota Corolla
                </h3>

                <p className="mt-3 text-zinc-600">
                  Segurança, confiabilidade e conforto em um sedan moderno e
                  eficiente.
                </p>

                <Link
                  to="/carros"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-red-600 transition-all duration-300 group-hover:gap-3 group-hover:text-red-700"
                >
                  Ver detalhes
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* JETTA */}
            <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img
                  src={jetta}
                  alt="Volkswagen Jetta"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-red-600">
                  Esportivo
                </p>

                <h3 className="mt-1 text-2xl font-bold transition-colors duration-300 group-hover:text-red-600">
                  Volkswagen Jetta
                </h3>

                <p className="mt-3 text-zinc-600">
                  Desempenho, tecnologia e design esportivo para quem gosta de
                  dirigir.
                </p>

                <Link
                  to="/carros"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-red-600 transition-all duration-300 group-hover:gap-3 group-hover:text-red-700"
                >
                  Ver detalhes
                  <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-zinc-900 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold text-red-500">
              Sobre a AutoPrime
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Seu próximo carro começa com uma boa escolha
            </h2>

            <p className="mt-5 leading-7 text-zinc-300">
              A AutoPrime nasceu com o objetivo de facilitar a compra de
              veículos, oferecendo atendimento transparente, segurança e uma
              seleção de modelos para diferentes necessidades.
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              Nossa equipe busca tornar cada etapa da compra mais simples,
              desde a escolha do veículo até o atendimento após a negociação.
            </p>

            <Link
              to="/quem-somos"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-red-500 transition-all duration-300 hover:gap-3 hover:text-red-400"
            >
              Conheça nossa história
              <span>→</span>
            </Link>
          </div>

          <div className="group overflow-hidden rounded-2xl">
            <img
              src={showroom}
              alt="Showroom da AutoPrime"
              className="h-80 w-full object-cover shadow-xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="font-semibold text-red-500">
              Por que escolher a AutoPrime?
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Uma experiência mais simples e segura
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-zinc-800">
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Veículos selecionados
              </h3>

              <p className="mt-3 text-zinc-400">
                Trabalhamos com modelos escolhidos para oferecer qualidade,
                conforto e segurança.
              </p>
            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-zinc-800">
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Atendimento personalizado
              </h3>

              <p className="mt-3 text-zinc-400">
                Nossa equipe ajuda você a encontrar uma opção adequada ao seu
                perfil e às suas necessidades.
              </p>
            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-zinc-800">
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Negociação transparente
              </h3>

              <p className="mt-3 text-zinc-400">
                Informações claras para você conhecer melhor cada veículo antes
                de tomar sua decisão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Pronto para encontrar seu próximo carro?
            </h2>

            <p className="mt-2 text-red-100">
              Confira nossos veículos ou fale com nossa equipe.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/carros"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-red-600 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100 hover:shadow-lg"
            >
              Ver veículos
            </Link>

            <Link
              to="/contato"
              className="rounded-lg border border-white px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home