import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type CarroDetalhe = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}

function DetalhesCarro() {
  const { id } = useParams()

  const [carro, setCarro] = useState<CarroDetalhe | null>(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/honda?format=json'
    )
      .then((response) => response.json())
      .then((data) => {
        const carroEncontrado = data.Results.find(
          (carro: CarroDetalhe) => carro.Model_ID === Number(id)
        )

        setCarro(carroEncontrado || null)
        setCarregando(false)
      })
      .catch((error) => {
        console.error('Erro ao buscar veículo:', error)
        setCarregando(false)
      })
  }, [id])

  if (carregando) {
    return (
      <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-400">
            Carregando veículo...
          </p>
        </div>
      </main>
    )
  }

  if (!carro) {
    return (
      <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">
            Veículo não encontrado
          </h1>

          <Link
            to="/carros"
            className="mt-6 inline-block text-red-500 hover:text-red-400"
          >
            ← Voltar para carros
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            to="/carros"
            className="text-sm font-semibold text-red-500 transition hover:text-red-400"
          >
            ← Voltar para carros
          </Link>

          <p className="mt-8 font-semibold text-red-500">
            Detalhes do veículo
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            {carro.Make_Name} {carro.Model_Name}
          </h1>

          <p className="mt-4 text-zinc-400">
            Informações obtidas através da API.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <p className="text-sm font-semibold text-red-500">
                Fabricante
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {carro.Make_Name}
              </h2>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <p className="text-sm font-semibold text-red-500">
                Modelo
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {carro.Model_Name}
              </h2>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <p className="text-sm font-semibold text-red-500">
                ID do fabricante
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {carro.Make_ID}
              </h2>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <p className="text-sm font-semibold text-red-500">
                ID do modelo
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {carro.Model_ID}
              </h2>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default DetalhesCarro