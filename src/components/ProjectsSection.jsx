import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Airdnd - Airbnb Clone",
        description:
            "A full-stack Airbnb-style platform where users can browse, book, and host homes. Features include property listings, search, filters, user authentication, and real-time interactions.",
        image: "/projects_imgs/Airdnd.PNG",
        tags: ["React", "Redux", "Node.js", "MongoDB", "Cloudinary"],
        demoUrl: "https://airdnd-backend-w11x.onrender.com",
        githubUrl: "https://github.com/DariaRosen/Airdnd",
    },
    {
        id: 2,
        title: "Bugs Management App",
        description:
            "A full-featured bug tracking application where users can log in and out, view all bugs with detailed info, add or edit bugs, and apply advanced sorting and filtering options.",
        image: "/projects_imgs/Bugs.jpg",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        demoUrl: "https://missbugsproj-4.onrender.com/",
        githubUrl: "https://github.com/DariaRosen/MissBugsProj",
    },
    // {
    //     id: 3,
    //     title: "E-commerce Platform",
    //     description:
    //         "Full-featured e-commerce platform with user authentication and payment processing.",
    //     image: "/projects/project3.png",
    //     tags: ["React", "Node.js", "Stripe"],
    //     demoUrl: "#",
    //     githubUrl: "#",
    // },
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
