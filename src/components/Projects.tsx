"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, BarChart } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "E-commerce Sales Dashboard",
        description: "Interactive dashboard visualizing sales trends, customer demographics, and product performance using Tableau.",
        tags: ["Tableau", "SQL", "Data Visualization"],
        image: "bg-gradient-to-br from-blue-500 to-cyan-400", // Placeholder for image
        link: "#",
        github: "#",
    },
    {
        title: "Customer Churn Prediction",
        description: "Machine learning model to predict customer churn for a telecom company, achieving 85% accuracy.",
        tags: ["Python", "Scikit-learn", "Pandas"],
        image: "bg-gradient-to-br from-purple-500 to-pink-400",
        link: "#",
        github: "#",
    },
    {
        title: "Social Media Sentiment Analysis",
        description: "Real-time sentiment analysis of Twitter data to monitor brand reputation during product launches.",
        tags: ["Python", "NLP", "Streamlit"],
        image: "bg-gradient-to-br from-orange-400 to-red-500",
        link: "#",
        github: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24 bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A selection of my work demonstrating data analysis, visualization, and predictive modeling capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all group"
                        >
                            <div className={`h-48 w-full ${project.image} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                                <BarChart className="w-16 h-16 text-white opacity-80" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-muted text-xs font-medium text-muted-foreground rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <Link href={project.link} className="flex items-center text-sm font-medium text-secondary hover:text-teal-700 transition-colors">
                                        <ExternalLink className="w-4 h-4 mr-1" />
                                        View Project
                                    </Link>
                                    <Link href={project.github} className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                        <Github className="w-4 h-4 mr-1" />
                                        Source Code
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
