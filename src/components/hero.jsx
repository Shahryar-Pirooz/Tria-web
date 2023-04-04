import { hero } from '../assets'
export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text-side">
                <h1 className="hero-title">
                    Remember <span className="text-blue">Tria</span>,
                    <br />
                    So you can forget your
                    <br />
                    old passwords!
                </h1>
                <h2 className="hero-description">
                    Generate a super-secure password,
                    <br />
                    without having to remember it!
                </h2>
                <div className="buttons">
                    <a
                        className="btn-blue"
                        href="/"
                        onClick={(e) => {
                            const genpass = document.getElementById('genpass')
                            e.preventDefault()
                            genpass &&
                                genpass.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center',
                                })
                        }}
                    >
                        get start
                    </a>
                </div>
            </div>

            <div className="hero-image-side">
                <img
                    className="object-contain"
                    src={hero}
                    alt="people thing about Tria!"
                />
            </div>
        </div>
    )
}
