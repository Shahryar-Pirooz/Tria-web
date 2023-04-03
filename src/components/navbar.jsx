import { useState } from 'react'
import { logo } from '../assets'
import { menu } from '../assets'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(
        window.innerWidth < 768 ? false : true
    )
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
                <a
                    className="nav-item"
                    href="\"
                    onClick={(e) => {
                        const whyTria = document.getElementById('why_tria')
                        e.preventDefault()
                        whyTria &&
                            whyTria.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                            })
                    }}
                >
                    why tria
                </a>
                <a
                    className="nav-item"
                    href="https://www.buymeacoffee.com/EssPi"
                >
                    donate
                </a>
                <a
                    className="nav-item"
                    href="https://github.com/Shahryar-Pirooz/Tria-web"
                >
                    source
                </a>
            </div>
        </nav>
    )
}
