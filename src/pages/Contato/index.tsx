function Contato() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* CABEÇALHO */}
      <section className="border-b border-zinc-800 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="font-semibold text-red-500">
            Contato
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Fale com a nossa equipe
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Entre em contato para tirar dúvidas, consultar veículos ou conhecer
            melhor nossos serviços.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* INFORMAÇÕES */}
          <div>
            <p className="font-semibold text-red-500">
              Entre em contato
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Estamos prontos para ajudar
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              Nossa equipe está disponível para ajudar você a encontrar um
              veículo, conhecer nossos serviços ou esclarecer qualquer dúvida.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-sm font-semibold text-red-500">
                  Telefone
                </p>

                <p className="mt-2 text-lg font-semibold">
                  (45) 99999-9999
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-sm font-semibold text-red-500">
                  E-mail
                </p>

                <p className="mt-2 text-lg font-semibold">
                  contato@motorsdz7.com
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-sm font-semibold text-red-500">
                  Endereço
                </p>

                <p className="mt-2 text-lg font-semibold">
                  Avenida Principal, 1000
                </p>

                <p className="mt-1 text-zinc-400">
                  Centro
                </p>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Envie uma mensagem
            </h2>

            <p className="mt-2 text-zinc-400">
              Preencha os campos abaixo para entrar em contato.
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block text-sm font-semibold text-zinc-300"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-zinc-300"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="mb-2 block text-sm font-semibold text-zinc-300"
                >
                  Telefone
                </label>

                <input
                  id="telefone"
                  type="text"
                  placeholder="Digite seu telefone"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="mb-2 block text-sm font-semibold text-zinc-300"
                >
                  Mensagem
                </label>

                <textarea
                  id="mensagem"
                  rows={5}
                  placeholder="Como podemos ajudar?"
                  className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-red-600 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contato