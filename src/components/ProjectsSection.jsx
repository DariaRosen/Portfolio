import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Airdnd - Airbnb Clone",
        description:
            "A full-stack Airbnb-style platform where users can browse, book, and host homes. Features include property listings, search, filters, user authentication, and real-time interactions.",
        image: "/projects_imgs/Airdnd.PNG",
        tags: ["React", "Vite", "Redux", "Node.js", "MongoDB", "Cloudinary"],
        demoUrl: "https://airdnd-backend-w11x.onrender.com",
        githubUrl: "https://github.com/DariaRosen/Airdnd",
    },
    {
        id: 2,
        title: "Tastebase - Recipe Sharing Platform",
        description:
            "Modern Next.js App Router experience for sharing, saving, and managing recipes. Includes auth, wishlist and profile dashboards, rich recipe editor with image uploads, and responsive UI.",
        image: "/projects_imgs/Tastebase.PNG",
        tags: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS", "Shadcn UI", "Radix UI"],
        demoUrl: "https://tastebase-phi.vercel.app/",
        githubUrl: "https://github.com/DariaRosen/Tastebase",
    },
    {
        id: 3,
        title: "AI SaaS Landing Page",
        description:
            "A modern, responsive landing page built for AI SaaS startups. Developed with React, Vite, Tailwind CSS, TypeScript, and Zustand - featuring dark/light mode, animations, and reusable components for a sleek user experience.",
        image: "/projects_imgs/LandingPage.PNG",
        tags: ["React", "Vite", "Node.js", "Tailwind CSS", "TypeScript", "Zustand"],
        demoUrl: "https://landing-page-ashen-pi.vercel.app/",
        githubUrl: "https://github.com/DariaRosen/Landing-Page",
    },
    {
        id: 4,
        title: "Photographer Landing Page",
        description:
            "Luxury single-page experience for a boutique photographer. Features a Swiper coverflow hero carousel, RTL-friendly navigation, testimonial cards, pricing grid, and contact CTA. Custom Sass theming inspired by the brand palette plus a transparent logo treatment keeps the layout refined and cohesive across sections.",
        image: "/projects_imgs/PhotographerLandingPage.PNG",
        tags: [
            "Next.js 15", "TypeScript", "React 19", "Swiper", "Sass/SCSS", "Radix UI"
        ],
        demoUrl: "https://photographer-landing-page-eight.vercel.app/",
        githubUrl: "https://github.com/DariaRosen/Photographer-landing-page"
    },
    {
        id: 5,
        title: "Bugs Management App",
        description:
            "A full-featured bug tracking application where users can log in and log out, view all bugs with detailed information, add new bugs or edit existing ones, and apply advanced sorting and filtering options.",
        image: "/projects_imgs/Bugs.jpg",
        tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
        demoUrl: "https://missbugsproj-4.onrender.com/",
        githubUrl: "https://github.com/DariaRosen/MissBugsProj",
    },
    {
        id: 6,
        title: "Planit - Smart Planner & Task Manager",
        description:
            "A modern productivity and task management app featuring a weekly planner, drag-and-drop scheduling, and seamless data syncing between client and server.",
        image: "/projects_imgs/Planit.PNG",
        tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Dnd Kit"],
        demoUrl: "https://planit-todo-app.vercel.app/",
        githubUrl: "https://github.com/DariaRosen/Planit-Todo-App"
    },
        {
        id: 7,
        title: "Portfolio Website",
        description:
            "A personal portfolio website showcasing information about my education and experience, my skills, projects, and more.",
        image: "/projects_imgs/Portfolio.jpg",
        tags: ["React", "Vite", "Node.js", "Tailwind CSS"],
        demoUrl: "https://portfolio-weld-chi-99.vercel.app/",
        githubUrl: "https://github.com/DariaRosen/Portfolio.git",
    },
    {
    id: 8,
    title: "LogiDog Shipment Delay Predictor",
    description:
        "Logistics analytics dashboard that predicts shipment delays using a rule-based risk scoring engine. Includes an alerts cockpit, shipment detail timelines, and visual analytics so operations teams can proactively triage at‑risk shipments before they become critical.",
    image: "/projects_imgs/LogiDog.PNG", // make sure this screenshot exists in your assets
    tags: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Radix UI",
        "React Query",
        "Recharts",
        "Supabase"
    ],
    demoUrl: "https://shipment-delay-predictor.vercel.app/",
    githubUrl: "https://github.com/DariaRosen/Shipment-Delay-Predictor",
},
];

// -------------------------------
// 💡 PROJECTS SECTION COMPONENT
// -------------------------------
export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                {/* Section Description */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted
                    with attention to detail, performance, and user experience.
                </p>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id} // ✅ Use unique project ID to prevent React key warning
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag} // ✅ Use tag name as unique key
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Links */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {/* Demo Link */}
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>

                                        {/* GitHub Link */}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Github Call-to-Action */}
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/DariaRosen"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
