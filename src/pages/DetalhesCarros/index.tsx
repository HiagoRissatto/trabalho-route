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
            'Design moderno, tecnologia e desempenho para quem busca conforto e sofisticação.',
        imagem: civic,
    },

    corolla: {
        nome: 'Toyota Corolla',
        marca: 'Toyota',
        categoria: 'Sedan',
        cambio: 'Automático',
        preco: 'R$ 159.900',
        descricao:
            'Um sedan confortável e confiável, pensado para quem procura praticidade e segurança.',
        imagem: corolla,
    },

    jetta: {
        nome: 'Volkswagen Jetta',
        marca: 'Volkswagen',
        categoria: 'Esportivo',
        cambio: 'Automático',
        preco: 'R$ 229.900',
        descricao:
            'Desempenho esportivo, tecnologia e design marcante para quem gosta de dirigir.',
        imagem: jetta,
    },
}

function DetalhesCarro() {
    const { id } = useParams()

    const [carroApi, setCarroApi] = useState<CarroApi | null>(null)
    const [carregando, setCarregando] = useState(true)

    const carroLocal = id ? carrosLocais[id] : undefined

    useEffect(() => {
        if (carroLocal || !id) {
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

                setCarroApi(carroEncontrado || null)
            })
            .catch((error) => {
                console.error('Erro ao buscar veículo:', error)
                setCarroApi(null)
            })
            .finally(() => {
                setCarregando(false)
            })
    }, [id, carroLocal])

    // CARREGANDO API
    if (carregando) {
        return (
            <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
                <div className="mx-auto max-w-7xl">
                    <p className="text-zinc-400">
                        Carregando informações do veículo...
                    </p>
                </div>
            </main>
        )
    }

    // CARRO LOCAL
    if (carroLocal) {
        return (
            <main className="min-h-screen bg-zinc-950 text-white">
                {/* CABEÇALHO */}
                <section className="border-b border-zinc-800 bg-zinc-900">
                    <div className="mx-auto max-w-7xl px-6 py-12">
                        <Link
                            to="/carros"
                            className="font-semibold text-red-500 transition hover:text-red-400"
                        >
                            ← Voltar para carros
                        </Link>

                        <p className="mt-8 font-semibold text-red-500">
                            Detalhes do veículo
                        </p>

                        <h1 className="mt-2 text-4xl font-bold md:text-5xl">
                            {carroLocal.nome}
                        </h1>
                    </div>
                </section>

                {/* DETALHES */}
                <section className="py-20">
                    <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

                        {/* IMAGEM */}
                        <div className="group overflow-hidden rounded-2xl border border-zinc-800">
                            <img
                                src={carroLocal.imagem}
                                alt={carroLocal.nome}
                                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* INFORMAÇÕES */}
                        <div>
                            <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-500">
                                {carroLocal.categoria}
                            </span>

                            <h2 className="mt-6 text-4xl font-bold">
                                {carroLocal.nome}
                            </h2>

                            <p className="mt-5 leading-7 text-zinc-400">
                                {carroLocal.descricao}
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                                    <p className="text-sm text-zinc-500">
                                        Marca
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        {carroLocal.marca}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                                    <p className="text-sm text-zinc-500">
                                        Câmbio
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        {carroLocal.cambio}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-zinc-800 pt-6">
                                <p className="text-sm text-zinc-500">
                                    A partir de
                                </p>

                                <p className="mt-1 text-3xl font-bold text-red-500">
                                    {carroLocal.preco}
                                </p>
                            </div>

                            <Link
                                to="/contato"
                                className="mt-8 inline-flex rounded-lg bg-red-600 px-7 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
                            >
                                Tenho interesse
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        )
    }

    // CARRO VINDO DA API
    if (carroApi) {
        return (
            <main className="min-h-screen bg-zinc-950 text-white">
                <section className="border-b border-zinc-800 bg-zinc-900">
                    <div className="mx-auto max-w-7xl px-6 py-16">
                        <Link
                            to="/carros"
                            className="font-semibold text-red-500 transition hover:text-red-400"
                        >
                            ← Voltar para carros
                        </Link>

                        <p className="mt-8 font-semibold text-red-500">
                            Modelo encontrado pela API
                        </p>

                        <h1 className="mt-2 text-4xl font-bold md:text-5xl">
                            {carroApi.Make_Name} {carroApi.Model_Name}
                        </h1>

                        <p className="mt-4 text-zinc-400">
                            Informações do modelo obtidas através da API vPIC.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                                <p className="text-sm font-semibold text-red-500">
                                    Fabricante
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    {carroApi.Make_Name}
                                </h2>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                                <p className="text-sm font-semibold text-red-500">
                                    Modelo
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    {carroApi.Model_Name}
                                </h2>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                                <p className="text-sm font-semibold text-red-500">
                                    ID do fabricante
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    {carroApi.Make_ID}
                                </h2>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                                <p className="text-sm font-semibold text-red-500">
                                    ID do modelo
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    {carroApi.Model_ID}
                                </h2>
                            </div>

                        </div>

                        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                            <h2 className="text-2xl font-bold">
                                Sobre os dados
                            </h2>

                            <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
                                Este veículo foi encontrado através da busca de modelos Honda.
                                A API utilizada fornece informações de identificação do
                                fabricante e do modelo, mas não fornece preço, imagem ou
                                informações comerciais.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        )
    }

    // NÃO ENCONTRADO
    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
            <div className="mx-auto max-w-7xl">
                <p className="font-semibold text-red-500">
                    Ops!
                </p>

                <h1 className="mt-2 text-4xl font-bold">
                    Veículo não encontrado
                </h1>

                <p className="mt-4 text-zinc-400">
                    Não conseguimos encontrar informações para este veículo.
                </p>

                <Link
                    to="/carros"
                    className="mt-8 inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
                >
                    Voltar para carros
                </Link>
            </div>
        </main>
    )
}

export default DetalhesCarro