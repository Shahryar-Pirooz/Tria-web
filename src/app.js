import { Hero, NavBar, WhyTria, InputSide } from './components'
import { PasswordGenerator } from './PassGen'
export default function App() {
    PasswordGenerator()
    return (
        <div className="app">
            <NavBar />
            <Hero />
            <WhyTria />
            <InputSide />
        </div>
    )
}
