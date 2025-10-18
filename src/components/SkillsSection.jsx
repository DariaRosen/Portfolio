import { useState } from "react";
import { class_name } from "@/lib/utils";

// -------------------------------
// 🎯 SKILLS DATA
// -------------------------------
// Each skill has a name, proficiency level (0–100), and category.
// Categories are used to filter the skills dynamically in the UI.
const skills = [
    // 🌐 Frontend
    { name: "HTML / CSS / SCSS", level: 95, category: "frontend" },
    { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "Redux", level: 95, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },

    // ⚙️ Backend
    { name: "Node.js", level: 95, category: "backend" },
    { name: "Express.js", level: 90, category: "backend" },
    { name: "MongoDB", level: 95, category: "backend" },
    { name: "REST API Design", level: 95, category: "backend" },
    { name: "SQL / PostgreSQL", level: 70, category: "backend" },

    // 🧠 Software & Data
    { name: "Python", level: 85, category: "software" },
    { name: "MATLAB", level: 90, category: "software" },
    { name: "C# / .NET", level: 95, category: "software" },
    { name: "Java", level: 75, category: "software" },
    { name: "R", level: 70, category: "software" },

    // 🧰 Tools & Systems
    { name: "Git / GitHub", level: 95, category: "tools" },
    { name: "Jenkins / CI-CD", level: 95, category: "tools" },
    { name: "Jira / Agile", level: 90, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Excel / Power BI / QlikView", level: 95, category: "tools" },
];

// Available categories for the filter buttons
const categories = ["all", "frontend", "backend", "software", "tools"];

// -------------------------------
// 💡 MAIN COMPONENT
// -------------------------------
export const SkillsSection = () => {
    // Keeps track of which category is currently selected
    const [activeCategory, setActiveCategory] = useState("all");

    // Filters the skills list based on the selected category
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={class_name(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary/50"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            {/* Skill name */}
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            {/* Skill progress bar */}
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            {/* Skill percentage */}
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
