'use client'

import { motion } from 'framer-motion'
import { GiIceCreamCone } from 'react-icons/gi'

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-white shadow-md sticky top-0 z-50"
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <GiIceCreamCone className="text-3xl text-pink-500" />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Sorveteria Doce Sonho
                    </h1>
                </div>

                <nav className="hidden md:flex gap-8">
                    {['Início', 'Sabores', 'Combos', 'Contato'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-medium text-gray-700 hover:text-pink-500 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <button className="md:hidden text-2xl">☰</button>
            </div>
        </motion.header>
    )
}