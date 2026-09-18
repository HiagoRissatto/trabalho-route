import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import civic from '../../assets/images/civic.jpg'
import corolla from '../../assets/images/corolla.jpg'
import jetta from '../../assets/images/jetta.jpg'

type CarroApi = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}

type CarroLocal = {
  nome: string
  marca: string
  categoria: string
  cambio: string
  preco: string
  descricao: string
  imagem: string
}

const carrosLocais: Record<string, CarroLocal> = {
  civic: {
    nome: 'Honda Civic',
    marca: 'Honda',
    categoria: 'Sedan',
    cambio: 'Automático',
    preco: 'R$ 189.900',
    descricao:
      'Design sofisticado, tecnologia e desempenho para quem busca conforto e uma experiência de direção completa.',
    imagem: civic,
  },

  corolla: {
    nome: 'Toyota Corolla',
    marca: 'Toyota',
    categoria: 'Sedan',
    cambio: 'Automático',
    preco: 'R$ 159.900',
    descricao:
      'Segurança, confiabilidade e conforto em um sedan moderno e eficiente.',
    imagem: corolla,
  },

  jetta: {
    nome: 'Volkswagen Jetta',
    marca: 'Volkswagen',
    categoria: 'Esportivo',
    cambio: 'Automático',
    preco: 'R$ 229.900',
    descricao:
      'Desempenho, tecnologia e design esportivo para quem gosta de dirigir.',
    imagem: jetta,
  },
}

function DetalhesCarros() {
  const { id } = useParams()

  const carroLocal = id ? carrosLocais[id] : undefined

  const [carroApi, setCarroApi] = useState<CarroApi | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [naoEncontrado, setNaoEncontrado] = useState(false)

useEffect(() => {
  if (!id || carrosLocais[id]) {
    return
  }

  fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/honda?format=json'
  )
    .then((response) => response.json())
    .then((data) => {
      const carroEncontrado = data.Results.find(
        (carro: CarroApi) => carro.Model_ID === Number(id)
      )

      if (carroEncontrado) {
        setCarroApi(carroEncontrado)
      } else {
        setNaoEncontrado(true)
      }
    })
    .catch((error) => {
      console.error('Erro ao buscar veículo:', error)
      setNaoEncontrado(true)
    })
    .finally(() => {
      setCarregando(false)
    })
}, [id])

  // CARROS LOCAIS
  if (carroLocal) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <Link
            to="/carros"
            className="text-red-500 transition hover:text-red-400"
          >
            ← Voltar para carros
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={carroLocal.imagem}
                alt={carroLocal.nome}
                className="w-full object-cover"
              />
            </div>

            <div>
              <p className="font-semibold text-red-500">
                {carroLocal.marca}
              </p>

              <h1 className="mt-2 text-4xl font-bold">
                {carroLocal.nome}
              </h1>

              <p className="mt-6 text-zinc-300">
                {carroLocal.descricao}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-zinc-900 p-4">
                  <p className="text-sm text-zinc-400">Categoria</p>
                  <p className="mt-1 font-semibold">
                    {carroLocal.categoria}
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-900 p-4">
                  <p className="text-sm text-zinc-400">Câmbio</p>
                  <p className="mt-1 font-semibold">
                    {carroLocal.cambio}
                  </p>
                </div>
              </div>

              <p className="mt-8 text-3xl font-bold text-red-500">
                {carroLocal.preco}
              </p>

              <Link
                to="/contato"
                className="mt-8 inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
              >
                Tenho interesse
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  // API
  if (carregando) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-zinc-950 text-white">
        <p className="text-zinc-400">
          Carregando informações do veículo...
        </p>
      </main>
    )
  }

  if (naoEncontrado || !carroApi) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-zinc-950 px-5 text-center text-white">
        <h1 className="text-3xl font-bold">
          Veículo não encontrado
        </h1>

        <Link
          to="/carros"
          className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
        >
          Voltar para carros
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <Link
          to="/carros"
          className="text-red-500 transition hover:text-red-400"
        >
          ← Voltar para carros
        </Link>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
          <p className="text-red-500">
            {carroApi.Make_Name}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {carroApi.Model_Name}
          </h1>

          <p className="mt-6 text-zinc-400">
            Modelo encontrado através da API vPIC.
          </p>
        </div>
      </section>
    </main>
  )
}

export default DetalhesCarros