import { Link } from 'react-router-dom'

import heroCar from '../../assets/images/hero-Car.jpg'
import civic from '../../assets/images/civic.jpg'
import corolla from '../../assets/images/corolla.jpg'
import jetta from '../../assets/images/jetta.jpg'
import showroom from '../../assets/images/showroom.jpg'

function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-zinc-950 text-white">

      {/* HERO */}
      <section className="group relative flex min-h-[calc(100dvh-72px)] w-full items-center overflow-hidden">

        {/* IMAGEM */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out group-hover:scale-105 sm:group-hover:scale-110"
          style={{ backgroundImage: `url(${heroCar})` }}
        />

        {/* ESCURECIMENTO */}
        <div className="absolute inset-0 bg-black/70 sm:bg-black/65" />

        {/* CONTEÚDO */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="max-w-xl lg:max-w-2xl">

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red-500 sm:text-sm sm:tracking-[0.3em]">
              Sua próxima conquista começa aqui
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Encontre o carro ideal para
              <span className="text-red-500"> o seu estilo</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg">
              Veículos selecionados, atendimento de qualidade e opções para
              diferentes perfis e necessidades.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">

              <Link
                to="/carros"
                className="w-full rounded-lg bg-red-600 px-6 py-3 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg sm:w-auto"
              >
                Ver carros
              </Link>

              <Link
                to="/contato"
                className="w-full rounded-lg border border-white/30 px-6 py-3 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
              >
                Fale conosco
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* VEÍCULOS EM DESTAQUE */}
      <section className="w-full bg-white py-14 text-zinc-900 sm:py-16 lg:py-20">

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-8 sm:mb-10 lg:mb-12">

            <p className="font-semibold text-red-600">
              Veículos em destaque
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Escolha o modelo que combina com você
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
              Conheça alguns dos veículos disponíveis em nosso catálogo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

            {/* CIVIC */}
            <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-2xl">

              <div className="overflow-hidden">
                <img
                  src={civic}
                  alt="Honda Civic"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-52 lg:h-56"
                />
              </div>

              <div className="p-5 sm:p-6">

                <p className="text-sm font-semibold text-red-600">
                  Sedan
                </p>

                <h3 className="mt-1 text-xl font-bold transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
                  Honda Civic
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
                  Design sofisticado, tecnologia e desempenho para quem busca
                  conforto e uma experiência de direção completa.
                </p>

                <Link
                  to="/carros/civic"
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
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-52 lg:h-56"
                />
              </div>

              <div className="p-5 sm:p-6">

                <p className="text-sm font-semibold text-red-600">
                  Sedan
                </p>

                <h3 className="mt-1 text-xl font-bold transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
                  Toyota Corolla
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
                  Segurança, confiabilidade e conforto em um sedan moderno e
                  eficiente.
                </p>

                <Link
                  to="/carros/corolla"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-red-600 transition-all duration-300 group-hover:gap-3 group-hover:text-red-700"
                >
                  Ver detalhes
                  <span>→</span>
                </Link>

              </div>
            </article>

            {/* JETTA */}
            <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-2xl sm:col-span-2 lg:col-span-1">

              <div className="overflow-hidden">
                <img
                  src={jetta}
                  alt="Volkswagen Jetta"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-52 lg:h-56"
                />
              </div>

              <div className="p-5 sm:p-6">

                <p className="text-sm font-semibold text-red-600">
                  Esportivo
                </p>

                <h3 className="mt-1 text-xl font-bold transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
                  Volkswagen Jetta
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
                  Desempenho, tecnologia e design esportivo para quem gosta de
                  dirigir.
                </p>

                <Link
                  to="/carros/jetta"
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
      <section className="w-full bg-zinc-900 py-14 sm:py-16 lg:py-20">

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 md:grid-cols-2 md:items-center lg:gap-16 lg:px-8">

          <div>
            <p className="font-semibold text-red-500">
              Sobre a MotorsDZ7
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Seu próximo carro começa com uma boa escolha
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">
              A MotorsDZ7 nasceu com o objetivo de facilitar a compra de
              veículos, oferecendo atendimento transparente, segurança e uma
              seleção de modelos para diferentes necessidades.
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
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
              alt="Showroom da MotorsDZ7"
              className="h-64 w-full object-cover shadow-xl transition-transform duration-700 group-hover:scale-105 sm:h-72 md:h-80 lg:h-96"
            />
          </div>

        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="w-full bg-zinc-950 py-14 sm:py-16 lg:py-20">

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-8 text-center sm:mb-10">

            <p className="font-semibold text-red-500">
              Por que escolher a MotorsDZ7?
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Uma experiência mais simples e segura
            </h2>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-zinc-800 sm:p-7">

              <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-red-500 sm:text-xl">
                Veículos selecionados
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
                Trabalhamos com modelos escolhidos para oferecer qualidade,
                conforto e segurança.
              </p>

            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-zinc-800 sm:p-7">

              <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-red-500 sm:text-xl">
                Atendimento personalizado
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
                Nossa equipe ajuda você a encontrar uma opção adequada ao seu
                perfil e às suas necessidades.
              </p>

            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-zinc-800 sm:col-span-2 sm:p-7 lg:col-span-1">

              <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-red-500 sm:text-xl">
                Negociação transparente
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
                Informações claras para você conhecer melhor cada veículo antes
                de tomar sua decisão.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-red-600 py-12 sm:py-14 lg:py-16">

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Pronto para encontrar seu próximo carro?
            </h2>

            <p className="mt-2 text-sm text-red-100 sm:text-base">
              Confira nossos veículos ou fale com nossa equipe.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

            <Link
              to="/carros"
              className="w-full rounded-lg bg-white px-6 py-3 text-center font-semibold text-red-600 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100 hover:shadow-lg sm:w-auto"
            >
              Ver veículos
            </Link>

            <Link
              to="/contato"
              className="w-full rounded-lg border border-white px-6 py-3 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
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