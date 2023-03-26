import { useState } from 'react'
import { logo } from '../assets'
import { menu } from '../assets'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(
        window.innerWidth < 768 ? false : true
    )

    const menuItems = [
        { key: 1, text: 'why tria', href: '#why_tria' },
        { key: 2, text: 'donate', href: '#donate' },
        { key: 3, text: 'help', href: '#help' },
    ]
    return (
        <nav className="flex flex-col px-12 py-3 shadow-md md:flex-row">
            <div className="flex flex-none justify-center">
                <img className="h-8" src={logo} alt="Tria logo" />
                <div className="absolute top-0 right-0 flex p-5 md:hidden">
                    <button
                        onClick={() => {
                            setIsMenuOpen(isMenuOpen ? false : true)
                        }}
                    >
                        <img src={menu} alt="menu button" />
                    </button>
                </div>
            </div>
            <div
                className={`mt-5 flex flex-1 flex-col items-start space-y-3 overflow-hidden capitalize transition-[height] duration-1000 md:mx-6 md:mt-0 md:flex-row md:items-end md:space-x-3 ${
                    isMenuOpen ? 'max-h-max' : 'max-h-0'
                }`}
            >
                {menuItems.map((item) => {
                    return (
                        <a
                            key={item.key}
                            className="w-full text-center text-base text-black transition-all duration-500 hover:text-blue md:w-fit md:text-sm"
                            href={item.href}
                        >
                            {item.text}
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}
