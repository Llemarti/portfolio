"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Languages", items: ["Python", "SQL", "R", "JavaScript"] },
    { category: "Visualization", items: ["Tableau", "Power BI", "Matplotlib", "D3.js"] },
    { category: "Tools & Frameworks", items: ["Pandas", "NumPy", "Scikit-learn", "Excel", "Git"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "BigQuery"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-primary mb-4">Technical Skills</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My technical toolkit includes a wide range of languages and tools for data analysis, visualization, and engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-secondary mb-6">{skillGroup.category}</h3>
                            <div className="space-y-4">
                                {skillGroup.items.map((skill) => (
                                    <div key={skill} className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium text-primary">{skill}</span>
                                            <span className="text-muted-foreground">
                                                {Math.floor(Math.random() * 20 + 80)}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${Math.floor(Math.random() * 20 + 80)}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-secondary rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
