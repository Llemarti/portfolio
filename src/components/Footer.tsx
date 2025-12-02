"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-muted py-12 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-primary">Mwende Kilyungu</span>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {new Date().getFullYear()} Mwende Kilyungu. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="https://github.com/mwende-kilyungu" className="text-muted-foreground hover:text-primary transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/mwende-kilyungu/" className="text-muted-foreground hover:text-primary transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href="https://twitter.com/mwende_kilyungu" className="text-muted-foreground hover:text-primary transition-colors">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
