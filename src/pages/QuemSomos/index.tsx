import { Link } from 'react-router-dom'

function QuemSomos() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* CABEÇALHO */}
      <section className="border-b border-zinc-800 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="font-semibold text-red-500">
            Quem somos
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Paixão por carros e compromisso com você
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Conheça um pouco mais sobre a MotorsDz7, nossa história e os
            valores que fazem parte do nosso atendimento.
          </p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold text-red-500">
              Nossa história
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Uma empresa criada para facilitar sua escolha
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              A MotorsDz7 surgiu com a proposta de oferecer uma experiência
              simples e transparente para quem busca um novo veículo.
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              Nosso objetivo é ajudar cada cliente a encontrar um carro que
              combine com seu perfil, suas necessidades e seu estilo de vida.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10">
            <p className="text-sm font-semibold text-red-500">
              Nosso objetivo
            </p>

            <p className="mt-4 text-2xl font-bold leading-relaxed">
              Tornar a escolha de um veículo uma experiência mais segura,
              prática e transparente.
            </p>
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="border-y border-zinc-800 bg-zinc-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="font-semibold text-red-500">
              O que nos guia
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Missão, visão e valores
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50">
              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Missão
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Oferecer atendimento de qualidade e ajudar nossos clientes a
                encontrar veículos adequados às suas necessidades.
              </p>
            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50">
              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Visão
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Ser reconhecida pela confiança, transparência e qualidade no
                atendimento ao cliente.
              </p>
            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50">
              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Valores
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Transparência, respeito, confiança, qualidade e compromisso em
                todas as etapas do atendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-2xl bg-zinc-900 p-7">
              <p className="text-4xl font-bold text-red-500">
                10+
              </p>

              <p className="mt-2 text-zinc-400">
                Anos de experiência
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-7">
              <p className="text-4xl font-bold text-red-500">
                500+
              </p>

              <p className="mt-2 text-zinc-400">
                Clientes atendidos
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-7">
              <p className="text-4xl font-bold text-red-500">
                100+
              </p>

              <p className="mt-2 text-zinc-400">
                Veículos negociados
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-7">
              <p className="text-4xl font-bold text-red-500">
                5
              </p>

              <p className="mt-2 text-zinc-400">
                Serviços disponíveis
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
              Quer conhecer nossos veículos?
            </h2>

            <p className="mt-2 text-red-100">
              Confira nosso catálogo e encontre o modelo ideal para você.
            </p>
          </div>

          <Link
            to="/carros"
            className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-red-600 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100"
          >
            Ver veículos
          </Link>
        </div>
      </section>
    </main>
  )
}

export default QuemSomos