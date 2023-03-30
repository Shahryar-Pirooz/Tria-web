import { useState } from 'react'
import { logo } from '../assets'
import { menu } from '../assets'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(
        window.innerWidth < 768 ? false : true
    )

    const menuItems = [
        { key: 1, text: 'why tria', href: '#why_tria' },
        { key: 2, text: 'donate', href: 'https://www.buymeacoffee.com/EssPi' },
        {
            key: 3,
            text: 'source',
            href: 'https://github.com/Shahryar-Pirooz/Tria-web',
        },
    ]
    return (
        <nav className="navbar">
            <div className="logo-side">
                <img className="h-12" src={logo} alt="Tria logo" />
                <div className="btn-menu">
                    <button
                        onClick={() => {
                            setIsMenuOpen(isMenuOpen ? false : true)
                        }}
                    >
                        <img src={menu} alt="menu button" />
                    </button>
                </div>
            </div>
            <div className={`nav-items ${isMenuOpen ? 'max-h-40' : 'max-h-0'}`}>
                {menuItems.map((item) => {
                    return (
                        <a key={item.key} className="nav-item" href={item.href}>
                            {item.text}
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}
