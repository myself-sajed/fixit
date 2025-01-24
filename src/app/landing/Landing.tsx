import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const Landing = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="space-y-20 w-full h-screen">
                    <Navbar />
                    <Hero />
                </div>
            </div>

        </div>
    )
}

export default Landing
