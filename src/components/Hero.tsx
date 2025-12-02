"use client";

import { ArrowRight, Database, LineChart, Code } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
                            Your Data Tells a Story—<span className="text-secondary">Let’s Discover It</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            From numbers to narratives, insights that drive impact
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="#projects"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-teal-700 transition-colors w-full sm:w-auto"
                            >
                                View Projects
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3 border border-border text-base font-medium rounded-md text-primary bg-background hover:bg-muted transition-colors w-full sm:w-auto"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10">
                <Database className="absolute top-1/4 left-1/4 w-24 h-24 text-primary animate-pulse" />
                <LineChart className="absolute bottom-1/4 right-1/4 w-32 h-32 text-secondary animate-bounce" style={{ animationDuration: '3s' }} />
                <Code className="absolute top-1/3 right-1/3 w-16 h-16 text-accent" />
            </div>
        </section>
    );
}
