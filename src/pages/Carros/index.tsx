import { Link } from 'react-router-dom'
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

function Carros() {
    const [carros, setCarros] = useState<CarroApi[]>([])
    const [busca, setBusca] = useState('')
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        fetch(
            'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/honda?format=json'
        )
            .then((response) => response.json())
            .then((data) => {
                setCarros(data.Results)
                setCarregando(false)
            })
            .catch((error) => {
                console.error('Erro ao buscar carros:', error)
                setCarregando(false)
            })
    }, [])

    const carrosFiltrados = busca.trim()
        ? carros.filter((carro) =>
            carro.Model_Name.toLowerCase().includes(busca.toLowerCase())
        )
        : []

    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            {/* CABEÇALHO */}
            <section className="border-b border-zinc-800 bg-zinc-900">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <p className="font-semibold text-red-500">
                        Nosso estoque
                    </p>

                    <h1 className="mt-2 text-4xl font-bold md:text-5xl">
                        Encontre seu próximo carro
                    </h1>

                    <p className="mt-4 max-w-2xl text-zinc-400">
                        Conheça alguns dos veículos disponíveis em nosso catálogo e
                        encontre o modelo que mais combina com você.
                    </p>
                </div>
            </section>

            {/* CARROS FIXOS */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* CIVIC */}
                        <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-2xl">
                            <div className="overflow-hidden">
                                <img
                                    src={civic}
                                    alt="Honda Civic"
                                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-500">
                                        Sedan
                                    </span>

                                    <span className="text-sm text-zinc-500">
                                        Automático
                                    </span>
                                </div>

                                <h2 className="mt-5 text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                                    Honda Civic
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-zinc-400">
                                    Design moderno, ótimo desempenho e tecnologia para quem busca
                                    conforto e sofisticação.
                                </p>

                                <div className="mt-6 border-t border-zinc-800 pt-5">
                                    <p className="text-sm text-zinc-500">
                                        A partir de
                                    </p>

                                    <p className="mt-1 text-2xl font-bold">
                                        R$ 189.900
                                    </p>
                                </div>

                                <Link
                                    to="/carros/1"
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold transition-all duration-300 hover:bg-red-700 group-hover:gap-3"
                                >
                                    Ver detalhes
                                    <span>→</span>
                                </Link>
                            </div>
                        </article>

                        {/* COROLLA */}
                        <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-2xl">
                            <div className="overflow-hidden">
                                <img
                                    src={corolla}
                                    alt="Toyota Corolla"
                                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-500">
                                        Sedan
                                    </span>

                                    <span className="text-sm text-zinc-500">
                                        Automático
                                    </span>
                                </div>

                                <h2 className="mt-5 text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                                    Toyota Corolla
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-zinc-400">
                                    Um sedan confortável e confiável, pensado para quem procura
                                    praticidade e segurança.
                                </p>

                                <div className="mt-6 border-t border-zinc-800 pt-5">
                                    <p className="text-sm text-zinc-500">
                                        A partir de
                                    </p>

                                    <p className="mt-1 text-2xl font-bold">
                                        R$ 159.900
                                    </p>
                                </div>

                                <Link
                                    to="/carros/2"
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold transition-all duration-300 hover:bg-red-700 group-hover:gap-3"
                                >
                                    Ver detalhes
                                    <span>→</span>
                                </Link>
                            </div>
                        </article>

                        {/* JETTA */}
                        <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-2xl">
                            <div className="overflow-hidden">
                                <img
                                    src={jetta}
                                    alt="Volkswagen Jetta"
                                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-500">
                                        Esportivo
                                    </span>

                                    <span className="text-sm text-zinc-500">
                                        Automático
                                    </span>
                                </div>

                                <h2 className="mt-5 text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                                    Volkswagen Jetta
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-zinc-400">
                                    Desempenho esportivo, tecnologia e design marcante para quem
                                    gosta de dirigir.
                                </p>

                                <div className="mt-6 border-t border-zinc-800 pt-5">
                                    <p className="text-sm text-zinc-500">
                                        A partir de
                                    </p>

                                    <p className="mt-1 text-2xl font-bold">
                                        R$ 229.900
                                    </p>
                                </div>

                                <Link
                                    to="/carros/3"
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold transition-all duration-300 hover:bg-red-700 group-hover:gap-3"
                                >
                                    Ver detalhes
                                    <span>→</span>
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* API */}
            <section className="border-t border-zinc-800 bg-zinc-900 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-8">
                        <p className="font-semibold text-red-500">
                            Buscar veículo
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            Pesquise um modelo Honda
                        </h2>

                        <p className="mt-3 max-w-2xl text-zinc-400">
                            Digite o nome de um modelo para consultar os veículos encontrados
                            pela API.
                        </p>
                    </div>

                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Ex: Civic"
                            value={busca}
                            onChange={(event) => setBusca(event.target.value)}
                            className="w-full max-w-md rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-red-500"
                        />
                    </div>

                    {carregando ? (
                        <p className="text-zinc-400">
                            Carregando modelos...
                        </p>
                    ) : (
                        <>
                            {/* NADA DIGITADO */}
                            {!busca.trim() && (
                                <p className="text-zinc-500">
                                    Digite o nome de um veículo para começar a busca.
                                </p>
                            )}

                            {/* RESULTADOS */}
                            {busca.trim() && carrosFiltrados.length > 0 && (
                                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    {carrosFiltrados.map((carro) => (
                                        <Link
                                            key={carro.Model_ID}
                                            to={`/carros/${carro.Model_ID}`}
                                            className="group block rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50"
                                        >
                                            <p className="text-sm font-semibold text-red-500">
                                                {carro.Make_Name}
                                            </p>

                                            <h3 className="mt-2 text-xl font-bold transition-colors duration-300 group-hover:text-red-500">
                                                {carro.Model_Name}
                                            </h3>

                                            <p className="mt-4 text-sm text-zinc-500">
                                                Clique para ver detalhes
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* NENHUM RESULTADO */}
                            {busca.trim() && carrosFiltrados.length === 0 && (
                                <p className="text-zinc-400">
                                    Nenhum modelo encontrado.
                                </p>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-zinc-800 bg-zinc-950 py-16">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="font-semibold text-red-500">
                            Não encontrou o que procura?
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            Fale com nossa equipe
                        </h2>

                        <p className="mt-3 text-zinc-400">
                            Podemos ajudar você a encontrar uma opção adequada às suas
                            necessidades.
                        </p>
                    </div>

                    <Link
                        to="/contato"
                        className="rounded-lg bg-red-600 px-6 py-3 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
                    >
                        Entrar em contato
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Carros