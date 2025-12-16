import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { works } from "@/data/works";
import { PageSideStrip } from "@/components/ui/page-side-strip";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card-2";

const SkeletonCard = () => (
    <div className="h-full rounded-xl bg-zinc-900/50 border border-white/10 overflow-hidden animate-pulse">
        {/* Header Skeleton */}
        <div className="p-6 flex items-center space-x-4 border-b border-white/5">
            <div className="w-10 h-10 rounded-full bg-white/10" />
            <div className="flex-1 space-y-2">
                <div className="h-5 w-3/4 bg-white/10 rounded" />
                <div className="h-3 w-1/3 bg-white/10 rounded" />
            </div>
        </div>
        {/* Image Skeleton */}
        <div className="w-full aspect-[600/400] bg-white/5" />
        {/* Content Skeleton */}
        <div className="p-6 space-y-3">
            <div className="h-3 w-full bg-white/10 rounded" />
            <div className="h-3 w-5/6 bg-white/10 rounded" />
            <div className="h-3 w-4/6 bg-white/10 rounded" />
        </div>
    </div>
);

export function OurWorksPage() {
    const { category } = useParams();
    const navigate = useNavigate();

    // Redirect to default category if none is present
    React.useEffect(() => {
        if (!category) {
            navigate("/works/residential", { replace: true });
        }
    }, [category, navigate]);

    // Default to 'residential' if no category is provided (safe fallback for render)
    const activeTab = category ? category.toLowerCase() : "residential";

    // Validate activeTab to ensure it matches one of our known categories, otherwise default logic applies or show empty
    // Ideally we could redirect if invalid, but for now filtering works safely.

    const filteredWorks = works.filter((work) => work.category.toLowerCase() === activeTab);

    // Skeleton Loading State
    const [isLoading, setIsLoading] = useState(true);

    // Simulate Loading Delay
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5s simulated loading time
        return () => clearTimeout(timer);
    }, [category]); // Re-trigger when category changes

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // "One by one" effect
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-amber-500/30">
            <PageSideStrip text="OUR WORKS" />
            {/* Hero Section */}
            <section className="relative z-10 py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Our Works
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                            Explore our portfolio of innovative projects and successful collaborations
                        </p>

                        {/* Image-Based Categories Toggle */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                            {/* Residential Tab */}
                            <motion.button
                                onClick={() => navigate("/works/residential")}
                                className={cn(
                                    "relative w-full md:w-64 h-32 rounded-2xl overflow-hidden group transition-all duration-500",
                                    activeTab === "residential"
                                        ? "ring-2 ring-amber-500 scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                                        : "opacity-60 hover:opacity-100 hover:scale-105"
                                )}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                                <div className={cn(
                                    "absolute inset-0 transition-colors duration-300",
                                    activeTab === "residential" ? "bg-black/40" : "bg-black/60"
                                )} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className={cn(
                                        "text-xl md:text-2xl font-bold tracking-wider uppercase transition-colors duration-300",
                                        activeTab === "residential" ? "text-white" : "text-gray-300"
                                    )}>
                                        Residential
                                    </span>
                                </div>
                            </motion.button>

                            {/* Office Tab */}
                            <motion.button
                                onClick={() => navigate("/works/office")}
                                className={cn(
                                    "relative w-full md:w-64 h-32 rounded-2xl overflow-hidden group transition-all duration-500",
                                    activeTab === "office"
                                        ? "ring-2 ring-amber-500 scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                                        : "opacity-60 hover:opacity-100 hover:scale-105"
                                )}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                                <div className={cn(
                                    "absolute inset-0 transition-colors duration-300",
                                    activeTab === "office" ? "bg-black/40" : "bg-black/60"
                                )} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className={cn(
                                        "text-xl md:text-2xl font-bold tracking-wider uppercase transition-colors duration-300",
                                        activeTab === "office" ? "text-white" : "text-gray-300"
                                    )}>
                                        Office
                                    </span>
                                </div>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    {isLoading ? (
                        /* Skeleton Grid */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[...Array(6)].map((_, i) => (
                                <SkeletonCard key={i} />
                            ))}
                        </div>
                    ) : (
                        /* Real Projects Grid */
                        <motion.div
                            layout
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredWorks.map((work) => (
                                    <motion.div
                                        key={work.id}
                                        layout
                                        variants={cardVariants}
                                        className="h-full"
                                    >
                                        <Link to={`/our-works/${work.id}`} className="block h-full no-underline">
                                            <Card className="h-full bg-zinc-900/50 backdrop-blur-sm border-white/10 hover:bg-zinc-900/80 hover:border-amber-500/50 transition-all duration-300 shadow-xl group text-left">
                                                <CardHeader className="p-3 md:p-6">
                                                    <div className="flex items-center space-x-2 md:space-x-4">
                                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold border border-amber-500/20 shrink-0 text-xs md:text-base">
                                                            {work.workName.charAt(0)}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <CardTitle className="text-white truncate text-sm md:text-lg">{work.workName}</CardTitle>
                                                            <CardDescription className="text-gray-400 truncate text-xs md:text-sm">{work.category}</CardDescription>
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="p-0">
                                                    <div className="w-full aspect-[600/400] relative overflow-hidden bg-black/20">
                                                        <img
                                                            alt={work.workName}
                                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                            src={work.image}
                                                        />
                                                    </div>
                                                    <div className="p-3 md:p-6">
                                                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-3">
                                                            {work.description}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
