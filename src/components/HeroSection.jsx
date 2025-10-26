import { PerspectiveCamera } from "@react-three/drei"
import { ArrowDown } from "lucide-react"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from "./CanvasLoader"
import ReactAtom from "./Animations3D/ReactAtom"

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >
            {/* 🧾 Centered text content */}
            <div className="text-center z-10 space-y-6 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Daria</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2"> Rosen </span>
                    <span className="waving-hand-delayed" role="img" aria-label="waving hand">
                        👋
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I create stellar web experiences with modern technologies.
                    Specializing in front-end development, I build interfaces that are
                    both beautiful and functional.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>

            {/* 🌌 3D React Atom floating around the text */}
            <div className="absolute right-[10%] top-[40%] w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px]">
                <Canvas
                    className="absolute inset-0"
                    gl={{ alpha: true }}    // 🔑 allows transparent background
                    style={{ background: 'transparent' }}  // 🔑 remove white/purple block
                >
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <ambientLight intensity={1} />
                        <pointLight position={[10, 10, 10]} intensity={0.6} />
                        {/* Small, floating React atom */}
                        <ReactAtom scale={0.25} position={[0, 0, 0]} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}
