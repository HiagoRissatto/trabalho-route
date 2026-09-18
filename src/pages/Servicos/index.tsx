function Servicos() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* CABEÇALHO */}
      <section className="border-b border-zinc-800 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="font-semibold text-red-500">
            Nossos serviços
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Muito além da venda de veículos
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Oferecemos soluções para tornar sua experiência mais simples,
            segura e completa.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50">
              <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Financiamento
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Opções de financiamento para facilitar a compra do seu próximo
                veículo.
              </p>
            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50">
              <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Avaliação de veículo
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Avaliamos seu veículo atual para ajudar na negociação de um novo
                modelo.
              </p>
            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50">
              <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Revisão e manutenção
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Serviços de revisão e manutenção para manter seu veículo em boas
                condições.
              </p>
            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50">
              <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Test drive
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Experimente o veículo antes da compra e conheça melhor seu
                desempenho e conforto.
              </p>
            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50">
              <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Seguro
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Orientação para encontrar opções de proteção adequadas ao seu
                veículo.
              </p>
            </div>

            <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50">
              <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                Pós-venda
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Atendimento após a compra para esclarecer dúvidas e oferecer
                suporte quando necessário.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Servicos