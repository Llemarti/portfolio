"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Database, BarChart, TrendingUp, Zap, FileSpreadsheet, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ProjectCategory = "all" | "implementation" | "support" | "powerbi" | "sap" | "python";

interface Project {
    title: string;
    client: string;
    period: string;
    summary: string;
    description: string;
    impact: string[];
    tags: string[];
    categories: ProjectCategory[];
    image: string;
    icon: any;
}

const projects: Project[] = [
    {
        title: "Enterprise Analytics Transformation",
        client: "Kenya Medical Supplies Authority",
        period: "Dec 2024 - Present",
        summary: "Spearheading SAP S4 HANA analytics transformation for Kenya's medical supply chain.",
        description: "Spearheading a comprehensive SAP S4 HANA analytics transformation that revolutionizes how medical supply chains operate across Kenya. Leading stakeholder alignment and blueprint development for a cloud-based analytics ecosystem that will drive data-informed decisions at every level.",
        impact: [
            "Architecting SAP Analytics Cloud infrastructure for real-time supply chain visibility",
            "Developing ETL pipelines and SAC models for predictive inventory management",
            "Training teams on SAC Business Intelligence and Planning functionality"
        ],
        tags: ["SAP S4 HANA", "SAP Analytics Cloud", "HANA Modelling", "ETL", "Blueprint Design"],
        categories: ["all", "implementation", "sap"],
        image: "bg-gradient-to-br from-blue-600 to-cyan-500",
        icon: Database,
    },
    {
        title: "Healthcare Analytics Platform",
        client: "Medical Access Uganda Limited",
        period: "Oct-Dec 2023",
        summary: "Transformed healthcare operations through intelligent SAP Business One integration.",
        description: "Transformed healthcare operations through intelligent SAP Business One integration. Built a robust analytics framework that turned fragmented data into actionable insights, enabling data-driven decision-making across the organization.",
        impact: [
            "Deployed SAC for executive dashboards with real-time KPI tracking",
            "Engineered MSQL DataWarehouse for seamless data integration",
            "Delivered comprehensive user training for sustained analytics adoption"
        ],
        tags: ["SAP Business One", "SAC", "MSQL DataWarehouse", "Dashboard Development"],
        categories: ["all", "implementation", "sap"],
        image: "bg-gradient-to-br from-emerald-600 to-teal-500",
        icon: TrendingUp,
    },
    {
        title: "Energy Sector BI Modernization",
        client: "Lesotho Electricity Company",
        period: "Aug 2018",
        summary: "Revolutionized energy analytics with cutting-edge SAP BW 7.4 solutions.",
        description: "Revolutionized energy analytics by implementing cutting-edge SAP BW 7.4 solutions. Designed sophisticated blueprints that transformed raw energy data into strategic insights, powering smarter grid management and operational excellence.",
        impact: [
            "Architected SAP Query Designer solutions for complex energy analytics",
            "Developed BusinessObjects WebI reports for executive decision support",
            "Created blueprint frameworks adopted as organizational standards"
        ],
        tags: ["SAP BW 7.4", "Query Designer", "BusinessObjects WebI", "Blueprint Development"],
        categories: ["all", "implementation", "sap"],
        image: "bg-gradient-to-br from-amber-500 to-orange-600",
        icon: Zap,
    },
    {
        title: "Healthcare Claims Intelligence System",
        client: "Premier Service Medical Aid Society (PSMAS)",
        period: "Apr-Aug 2018",
        summary: "Engineered transformative data intelligence platform for medical claims processing.",
        description: "Engineered a transformative data intelligence platform that revolutionized medical claims processing. Built sophisticated ETL pipelines and reporting frameworks that turned complex healthcare data into clear, actionable insights for finance and claims management.",
        impact: [
            "Developed SAP Data Services ETL for multi-system integration",
            "Created BusinessObjects IDT/WebI 4.2 universe for self-service analytics",
            "Delivered technical specifications bridging business needs with SAP legacy systems",
            "Enabled real-time claims analytics reducing processing time by 40%"
        ],
        tags: ["SAP Data Services", "BusinessObjects IDT", "WebI 4.2", "ETL Development", "Technical Specs"],
        categories: ["all", "implementation", "sap"],
        image: "bg-gradient-to-br from-rose-500 to-pink-600",
        icon: FileSpreadsheet,
    },
    {
        title: "Utility Sector Data Transformation",
        client: "ZESA Holdings, Zimbabwe",
        period: "Oct 2017 - Mar 2021",
        summary: "Led game-changing BI transformation for Zimbabwe's largest power utility.",
        description: "Led a game-changing BI transformation for Zimbabwe's largest power utility. Orchestrated complex data extraction from SAP FI, PM, and non-SAP billing systems, creating a unified analytics platform that drives strategic decisions across finance, electricity generation, and claims management.",
        impact: [
            "Architected SAP Data Services 4.2 for enterprise-wide data integration",
            "Built BusinessObjects BI 4.2 and Web Intelligence reporting ecosystem",
            "Engineered Oracle Database solutions for high-volume data processing",
            "Facilitated stakeholder alignment across multiple business units",
            "Delivered production-ready reports powering executive decision-making"
        ],
        tags: ["SAP Data Services 4.2", "BusinessObjects BI 4.2", "Web Intelligence", "Oracle Database", "ETL"],
        categories: ["all", "implementation", "sap"],
        image: "bg-gradient-to-br from-violet-600 to-purple-600",
        icon: Database,
    },
    {
        title: "National Infrastructure Analytics",
        client: "Zimbabwe National Road Administration (ZINARA)",
        period: "Jun-Sep 2017",
        summary: "Transformed national road infrastructure management through intelligent data analytics.",
        description: "Transformed national road infrastructure management through intelligent data analytics. Extracted and modeled critical data from SAP FI and HR modules, creating comprehensive reporting solutions that drive strategic infrastructure investment decisions.",
        impact: [
            "Deployed SAP Data Services 4.2 for multi-module data extraction",
            "Developed BusinessObjects BI 4.2 dashboards for infrastructure planning",
            "Built Web Intelligence reports on MSQL Database for financial transparency",
            "Enabled data-driven decision-making for national road development",
            "Delivered comprehensive user training for sustained analytics capability"
        ],
        tags: ["SAP Data Services 4.2", "BusinessObjects BI 4.2", "Web Intelligence", "MSQL Database", "FI/HR Modules"],
        categories: ["all", "implementation", "sap"],
        image: "bg-gradient-to-br from-slate-600 to-gray-700",
        icon: TrendingUp,
    },
    {
        title: "Manufacturing Analytics Excellence",
        client: "SAFAL Group",
        period: "Aug-Sep 2022",
        summary: "Elevated manufacturing intelligence through SAP BW4/HANA optimization.",
        description: "Elevated manufacturing intelligence through SAP BW4/HANA optimization. Delivered critical technical specifications and PI/LIS extractors that ensure regulatory compliance while enabling real-time production analytics and data quality assurance.",
        impact: [
            "Architected BW4/HANA Analysis for Office solutions for executive insights",
            "Developed PI/LIS extractors for seamless SAP data integration",
            "Enhanced ETL transformations ensuring 99.9% data accuracy",
            "Implemented query development and MM modules for supply chain visibility",
            "Delivered solutions preventing regulatory fines and ensuring compliance"
        ],
        tags: ["SAP BW4/HANA", "Analysis for Office", "ETL", "PI/LIS Extractors", "Query Development"],
        categories: ["all", "support", "sap"],
        image: "bg-gradient-to-br from-indigo-600 to-blue-600",
        icon: Database,
    },
    {
        title: "Banking Intelligence & Power BI Integration",
        client: "NCBA Bank",
        period: "Mar-Jul 2021",
        summary: "Revolutionized banking analytics by integrating SAP Data Services with Power BI.",
        description: "Revolutionized banking analytics by seamlessly integrating SAP Data Services with Power BI. Automated critical report schedules and developed sophisticated ETL models that transform complex banking data into executive-ready dashboards, driving strategic financial decisions.",
        impact: [
            "Integrated SAP Data Services 4.2 with Power BI for unified analytics",
            "Automated BusinessObjects BI 4.2 report scheduling reducing manual effort by 80%",
            "Engineered ETL models for real-time financial performance tracking",
            "Built Power BI dashboards delivering instant insights to C-suite executives"
        ],
        tags: ["SAP Data Services 4.2", "BusinessObjects BI 4.2", "Power BI", "ETL Modelling", "Report Automation"],
        categories: ["all", "support", "sap", "powerbi"],
        image: "bg-gradient-to-br from-green-600 to-emerald-600",
        icon: BarChart,
    },
    {
        title: "Beverage Industry Digital Transformation",
        client: "Delta Beverages",
        period: "Mar 2019 - Aug 2021",
        summary: "Orchestrated landmark ECC to SAP S4/HANA migration for Africa's leading beverage company.",
        description: "Orchestrated a landmark migration from ECC to SAP S4/HANA, transforming how one of Africa's leading beverage companies leverages data. Developed sophisticated reporting solutions that consolidated multi-company financial data, enabling strategic decisions across diverse fiscal calendars and currencies.",
        impact: [
            "Led successful ECC to S4/HANA migration with zero data loss",
            "Architected BW on HANA for real-time subsidiary reporting",
            "Resolved complex process chain issues ensuring data integrity",
            "Built consolidated financial reports across multiple fiscal years and currencies"
        ],
        tags: ["BW 7.5", "BW on HANA", "S4/HANA Migration", "Multi-company Reporting", "Process Chain Optimization"],
        categories: ["all", "support", "sap"],
        image: "bg-gradient-to-br from-red-600 to-rose-600",
        icon: TrendingUp,
    },
    {
        title: "Rural Electrification Analytics Platform",
        client: "Rural Electrification Authority, Zimbabwe",
        period: "Jun 2018",
        summary: "Empowered rural electrification through intelligent CRM and BW system integration.",
        description: "Empowered rural electrification through intelligent CRM and BW system integration. Built Web Intelligence reporting frameworks that provide real-time visibility into electrification progress, enabling data-driven decisions that bring power to underserved communities.",
        impact: [
            "Integrated CRM with BW 7.4 systems for unified customer analytics",
            "Developed Web Intelligence reports tracking electrification KPIs",
            "Enabled real-time monitoring of rural electrification progress",
            "Delivered insights accelerating power access to remote communities"
        ],
        tags: ["BW 7.4", "SAP BusinessObjects Data Services", "Web Intelligence", "CRM Integration"],
        categories: ["all", "support", "sap"],
        image: "bg-gradient-to-br from-yellow-500 to-amber-600",
        icon: Zap,
    },
    {
        title: "Justice Sector BI Integration",
        client: "Ministry of Justice Ghana",
        period: "Jun-Aug 2018",
        summary: "Transformed justice sector reporting through seamless CRM and BW integration.",
        description: "Transformed justice sector reporting through seamless CRM and BW integration. Engineered sophisticated reporting solutions that provide transparency and accountability across judicial operations, enabling evidence-based policy decisions.",
        impact: [
            "Integrated CRM with BW 7.4 for comprehensive case management analytics",
            "Built reporting frameworks for judicial performance tracking",
            "Enabled data-driven policy decisions across justice sector"
        ],
        tags: ["BW 7.4", "CRM Integration", "Government Reporting"],
        categories: ["all", "support", "sap"],
        image: "bg-gradient-to-br from-blue-700 to-indigo-700",
        icon: FileSpreadsheet,
    },
    {
        title: "Mining Sector BI Optimization",
        client: "Minerals Marketing Corporation of Zimbabwe",
        period: "May 2017",
        summary: "Revolutionized mining analytics with 300% increase in system utilization.",
        description: "Revolutionized mining analytics through strategic BI system optimization. Delivered intensive user training that increased system utilization by 300%, while upgrading critical BI infrastructure that powers mineral export decisions worth millions.",
        impact: [
            "Upgraded BI system from 4.1 to 4.2 with zero downtime",
            "Delivered user training increasing system adoption by 300%",
            "Resolved critical data load issues ensuring real-time mineral tracking",
            "Enabled data-driven decisions for multi-million dollar mineral exports"
        ],
        tags: ["SAP Data Services 4.1", "BusinessObjects IDT", "Web Intelligence 4.1", "System Upgrade", "User Training"],
        categories: ["all", "support", "sap"],
        image: "bg-gradient-to-br from-stone-600 to-zinc-700",
        icon: Database,
    },
    {
        title: "Dairy Industry Analytics Modernization",
        client: "Dairiboard Holdings, Zimbabwe",
        period: "Nov 2016",
        summary: "Transformed dairy subsidiary reporting through intelligent BW system integration.",
        description: "Transformed dairy subsidiary reporting through intelligent BW system integration. Built sophisticated data cleansing and upload solutions that consolidated financial data across multiple entities, enabling strategic decisions for Zimbabwe's leading dairy producer.",
        impact: [
            "Engineered data cleansing and upload solutions for BW 7.3",
            "Built consolidated BPC reports across subsidiary companies",
            "Enabled real-time financial visibility across dairy operations"
        ],
        tags: ["BW 7.3", "BPC", "Data Cleansing", "Multi-subsidiary Reporting"],
        categories: ["all", "support", "sap"],
        image: "bg-gradient-to-br from-cyan-600 to-blue-600",
        icon: TrendingUp,
    },
    {
        title: "Municipal BI Enhancement",
        client: "City of Tshwane, South Africa",
        period: "Sep-Nov 2015",
        summary: "Elevated municipal governance through intelligent BI report optimization.",
        description: "Elevated municipal governance through intelligent BI report optimization. Transformed functional requirements into technical specifications, delivering enhanced reports that drive transparency and efficiency in South Africa's administrative capital.",
        impact: [
            "Optimized SAP BW 7.3 reports for municipal operations",
            "Enhanced BusinessObjects Web Intelligence dashboards for city management",
            "Translated complex functional requirements into technical specifications",
            "Enabled data-driven municipal service delivery improvements"
        ],
        tags: ["SAP BW 7.3", "BusinessObjects Web Intelligence", "Municipal Reporting", "Requirements Analysis"],
        categories: ["all", "support", "sap"],
        image: "bg-gradient-to-br from-purple-600 to-fuchsia-600",
        icon: BarChart,
    },
];

const categories = [
    { id: "all" as ProjectCategory, label: "All Projects" },
    { id: "implementation" as ProjectCategory, label: "Implementation" },
    { id: "support" as ProjectCategory, label: "Support" },
    { id: "powerbi" as ProjectCategory, label: "Power BI" },
    { id: "sap" as ProjectCategory, label: "SAP" },
    { id: "python" as ProjectCategory, label: "Python" },
];

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter(project =>
        project.categories.includes(activeCategory)
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    // Reset to page 1 when category changes
    const handleCategoryChange = (category: ProjectCategory) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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
                    <h2 className="text-3xl font-bold text-primary mb-4">Portfolio of Impact</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Transforming complex data challenges into strategic advantages across healthcare, energy, finance, and manufacturing sectors
                    </p>
                </motion.div>

                {/* Tabbed Navigation */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-12"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, staggerChildren: 0.1 }}
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                                    : "bg-background text-muted-foreground hover:bg-muted hover:text-primary border border-border hover:border-secondary/50"
                                }`}
                        >
                            {category.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${currentPage}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                    >
                        {currentProjects.map((project, index) => {
                            const Icon = project.icon;
                            return (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    className="bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-2xl hover:border-secondary/30 transition-all group cursor-pointer aspect-square flex flex-col"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Square Header - Takes 40% of card */}
                                    <div className={`h-[40%] w-full ${project.image} flex items-center justify-center relative overflow-hidden`}>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Icon className="w-12 h-12 text-white opacity-90" />
                                        </motion.div>
                                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                                            <span className="text-white text-xs font-semibold">{project.period}</span>
                                        </div>
                                        {/* Animated gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content - Takes 60% of card */}
                                    <div className="p-5 flex flex-col flex-1 justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-primary mb-1 line-clamp-2 group-hover:text-secondary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-secondary font-semibold mb-2">{project.client}</p>
                                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3">
                                                {project.summary}
                                            </p>
                                        </div>

                                        {/* Tags - Show only 2 */}
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {project.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="px-2 py-0.5 bg-muted text-xs font-medium text-muted-foreground rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 2 && (
                                                <span className="px-2 py-0.5 bg-secondary/10 text-xs font-medium text-secondary rounded-md">
                                                    +{project.tags.length - 2}
                                                </span>
                                            )}
                                        </div>

                                        {/* Learn More Button */}
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center text-sm font-semibold text-secondary group-hover:text-teal-700 transition-colors"
                                        >
                                            <span>Learn More</span>
                                            <ExternalLink className="w-4 h-4 ml-1" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${currentPage === 1
                                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                                    : "bg-secondary text-white hover:bg-teal-700 shadow-md hover:shadow-lg"
                                }`}
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Previous
                        </motion.button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <motion.button
                                    key={page}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-full font-semibold transition-all ${currentPage === page
                                            ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                                            : "bg-background text-muted-foreground hover:bg-muted border border-border"
                                        }`}
                                >
                                    {page}
                                </motion.button>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${currentPage === totalPages
                                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                                    : "bg-secondary text-white hover:bg-teal-700 shadow-md hover:shadow-lg"
                                }`}
                        >
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                )}

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-muted-foreground text-lg">No projects found in this category.</p>
                    </motion.div>
                )}
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border"
                        >
                            {/* Modal Header */}
                            <div className={`${selectedProject.image} p-8 relative`}>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </motion.button>
                                <div className="flex items-center gap-4 mb-4">
                                    {(() => {
                                        const Icon = selectedProject.icon;
                                        return <Icon className="w-16 h-16 text-white" />;
                                    })()}
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                        <p className="text-white/90 font-semibold">{selectedProject.client}</p>
                                    </div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                                    <span className="text-white text-sm font-semibold">{selectedProject.period}</span>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-primary mb-4">Project Overview</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {selectedProject.description}
                                </p>

                                <h3 className="text-xl font-bold text-primary mb-4">Key Impact</h3>
                                <ul className="space-y-3 mb-6">
                                    {selectedProject.impact.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="text-secondary text-xl mt-0.5">✓</span>
                                            <span className="text-muted-foreground">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-primary mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag, idx) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-lg border border-secondary/20"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        href="#contact"
                                        onClick={() => setSelectedProject(null)}
                                        className="block w-full bg-secondary text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                                    >
                                        Discuss Similar Projects
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
