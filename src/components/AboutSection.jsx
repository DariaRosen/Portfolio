import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Section title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                {/* Main content grid: text on the left, feature cards on the right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left side — personal introduction */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Full Stack Developer & Software Engineer
                        </h3>

                        {/* Description paragraphs */}
                        <p className="text-muted-foreground">
                            With over 3 years of experience in software engineering,
                            and recently finishing a bootcamp in fullstack development,
                            I love to create responsive, accessible, and performant
                            web applications using modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate about creating elegant solutions to complex
                            problems, and I'm constantly learning new technologies and
                            techniques to stay at the forefront of the ever-evolving web
                            landscape.
                        </p>

                        <p className="text-muted-foreground">
                            Strong foundation in problem-solving and algorithmic
                            thinking, with an MSc in Robotics and Autonomous
                            Systems (with distinction). Skilled in bridging the
                            gap between robotics, software engineering, and data-driven optimization.
                        </p>

                        {/* Call-to-action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            {/* Contact button */}
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            {/* Download CV button */}
                            <a
                                href="/Daria_Rosen_CV.pdf"
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right side — feature / skill cards */}
                    <div className="grid grid-cols-1 gap-6">

                        {/* Card 1: Web Development */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* Icon container */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                {/* Text content */}
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Building scalable, high-performance single-page web
                                        applications (SPA). Focused on clean architecture, UX/UI design,
                                        and modern front-end best practices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: UI/UX Design */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software Engineering & Robotics</h4>
                                    <p className="text-muted-foreground">
                                        Developing and integrating software modules for advanced
                                        robotic visual inspection systems using MATLAB, C#, and
                                        Python.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Project Management */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Leadership & Mentorship</h4>
                                    <p className="text-muted-foreground">
                                        Guiding and onboarding new team members. Experienced in managing training
                                        programs, coordinating cross-functional teams, and ensuring
                                        efficient workflows in both startup and corporate environments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
