import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const Landing = () => {
    return (
        <div className="min-h-screen">
            <div className="space-y-20 h-screen bg-gradient-to-b from-primary/0 to-primary/10">
                <Navbar />
                <Hero />
            </div>
        </div>
    )
}

export default Landing
