'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'
import IceCreamCard from '../components/IceCreamCard'

import { GiIceCreamCone, GiPartyPopper } from 'react-icons/gi'

const flavors = [
    {
        id: '1',
        name: "Morango Supremo",
        description: "Morango fresco com pedaços de chocolate belga e calda caseira",
        price: "R$ 14,90",
        color: "#FF9AA2",
        image: "/images/morango.jpg",
        highlight: "Mais vendido"
    },
    {
        id: '2',
        name: "Chocolate Belga",
        description: "Cacau 70% com flocos de ouro comestível e raspas de chocolate",
        price: "R$ 16,90",
        color: "#A37B73",
        image: "/images/chocolate.jpg"
        
    },
    {
        id: '3',
        name: "Baunilha Bourbon",
        description: "Extrato puro de baunilha de Madagascar com favos de mel",
        price: "R$ 12,90",
        color: "#F5F0BB",
        image: "/images/baunilha.jpg",
        highlight: "Novidade"
    }
]

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    <GiIceCreamCone className="text-6xl text-pink-500 mx-auto mb-6 floating-animation" />
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                        Os <span className="text-pink-500">melhores sorvetes</span> da cidade
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Ingredientes premium e receitas artesanais para uma experiência única
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                        >
                            Monte Seu Sorvete
                        </motion.button>
                        <motion.a
                            href="#sabores"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-pink-500 text-pink-500 font-bold py-3 px-6 rounded-full hover:bg-pink-50 transition-all"
                        >
                            Ver Sabores
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            {/* Sabores Section */}
            <section id="sabores" className="py-20 px-4 container mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-gray-800"
                >
                    Nossos <span className="text-pink-500">Sabores</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flavors.map((flavor) => (
                        <IceCreamCard key={flavor.id} flavor={flavor} />
                    ))}
                </div>
            </section>

            {/* Destaque Section */}
            <section className="py-20 bg-pink-100">
                <div className="container mx-auto px-4 text-center">
                    <GiPartyPopper className="text-5xl text-pink-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Combos Especiais para o Verão!
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Experimente nossos novos combos com desconto especial
                    </p>
                    <button className="btn-primary">
                        Ver Promoções
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Sorveteria Doce Sonho</h3>
                        <p>Rua dos Sabores, 123</p>
                        <p>Sorvetópolis - SP</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Horário</h3>
                        <p>Terça a Domingo</p>
                        <p>13h às 22h</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                        <div className="flex gap-4">
                            {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                                <a key={social} href="#" className="hover:text-pink-300 transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}