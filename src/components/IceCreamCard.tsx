'use client'

import { motion } from 'framer-motion'

type Flavor = {
    id: string
    name: string
    description: string
    price: string
    color: string
    image: string
    highlight?: string
}

export default function IceCreamCard({ flavor }: { flavor: Flavor }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
            <div className="relative h-64 overflow-hidden group">
                <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {flavor.highlight && (
                    <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-pink-500">
                        {flavor.highlight}
                    </span>
                )}
                <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold" style={{ color: flavor.color }}>
                    {flavor.price}
                </span>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{flavor.name}</h3>
                <p className="text-gray-600 mb-4">{flavor.description}</p>
                <button
                    className="w-full py-2 rounded-lg font-medium text-white transition-colors"
                    style={{ backgroundColor: flavor.color }}
                >
                    Adicionar ao Carrinho
                </button>
            </div>
        </motion.div>
    )
}