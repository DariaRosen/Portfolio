import { PerspectiveCamera } from "@react-three/drei";
import { ArrowDown, Laptop } from "lucide-react";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { Canvas } from "@react-three/fiber";
import LaptopModel from "./Animations3D/Laptop";

// This is the first section users see on the page, introducing the portfolio owner
export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            {/* Main container */}
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    {/* Heading / Name */}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            Hi, I'm
                        </span>

                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}Daria
                        </span>

                        <span className="text-primary opacity-0 animate-fade-in-delay-2">
                            {" "}Rosen{" "}
                        </span>

                        <span
                            className="waving-hand-delayed"
                            role="img"
                            aria-label="waving hand"
                        >
                            👋
                        </span>
                    </h1>

                    {/* Subtitle / description */}
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I create stellar web experiences with modern technologies.
                        Specializing in front-end development, I build interfaces that are
                        both beautiful and functional.
                    </p>

                    {/* Call-to-action button */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>

                    {/* 3D Animation
                    <div className="w-full h-full absolute inset-0">
                        <Canvas className="w-full h-full">
                            <Suspense fallback={<CanvasLoader />}>

                                <PerspectiveCamera makeDefault position={[0, 0, 5]} />

                                <LaptopModel scale={0.05} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
                                <ambientLight intensity={1} />
                                <pointLight position={[10, 10, 10]} intensity={0.5} />
                            </Suspense>
                        </Canvas>
                    </div> */}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                {/* Text label */}
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                {/* Down arrow icon */}
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};
