"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
                        <p className="text-lg text-muted-foreground mb-4">
                            Hi, I’m Mwende, a data and analytics professional who helps organizations turn their data into clear, meaningful insights. My background in Actuarial Science has shaped the analytical approach I bring to every project. I’ve specialized in SAP BW, BW/4HANA, SAC, HANA, SAP BO, and Power BI.
                        </p>
                        <p className="text-lg text-muted-foreground mb-4">
                            I enjoy solving complex problems, simplifying data for decision-makers, and building BI solutions that actually make people’s work easier. I’ve worked with teams across different African markets, delivering reporting systems that are reliable, intuitive, and ready for the future.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6">
                            I’m passionate about learning, growth, and using technology to make a real difference. This space is where I share what I’m working on and what I’m exploring next.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-secondary">8+</span>
                                <span className="text-sm text-muted-foreground">Years Experience</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-secondary">10+</span>
                                <span className="text-sm text-muted-foreground">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-secondary/20">
                            <User className="w-32 h-32 text-secondary" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
