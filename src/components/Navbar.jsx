import { class_name } from "@/lib/utils";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle
import { useEffect, useState } from "react";

// Navigation items for the menu
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    // Track if user has scrolled down to apply navbar styles
    const [isScrolled, setIsScrolled] = useState(false);
    // Track mobile menu open/close state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Effect: listen to window scroll
    useEffect(() => {
        const handleScroll = () => {
            // true if scrolled more than 10px
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={class_name(
                "fixed w-full z-40 transition-all duration-300",
                // Apply smaller padding, background blur, and shadow when scrolled
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo / Brand */}
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Daria Rosen </span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Desktop navigation (hidden on mobile) */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile navigation toggle button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile menu overlay */}
                <div
                    className={class_name(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center", // Fullscreen overlay
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"  // Show menu
                            : "opacity-0 pointer-events-none"    // Hide menu
                    )}
                >
                    {/* Mobile nav links */}
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
