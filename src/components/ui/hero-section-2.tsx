import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

// Interface for a single slide
export interface HeroSlide {
    title: React.ReactNode;
    subtitle: string;
    callToAction: {
        text: string;
        href: string;
    };
    backgroundImage: string;
}

// Prop types for the HeroSection component
interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, "title"> {
    slides: HeroSlide[];
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
    ({ className, slides, ...props }, ref) => {
        const [current, setCurrent] = useState(0);
        const [isDesktop, setIsDesktop] = useState(false);

        useEffect(() => {
            const checkDesktop = () => {
                setIsDesktop(window.innerWidth >= 768);
            };
            checkDesktop();
            window.addEventListener('resize', checkDesktop);
            return () => window.removeEventListener('resize', checkDesktop);
        }, []);

        useEffect(() => {
            const timer = setInterval(() => {
                setCurrent((prev) => (prev + 1) % slides.length);
            }, 6000); // Increased duration slightly for better readability
            return () => clearInterval(timer);
        }, [slides.length]);

        const textVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: "easeOut" as const, // easeOutCubic
                },
            }),
            exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
        };

        const imageVariants = {
            enter: (isDesktop: boolean) => (isDesktop ?
                { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' } :
                { opacity: 0 }
            ),
            center: (isDesktop: boolean) => (isDesktop ?
                { clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' } :
                { opacity: 1 }
            ),
            exit: (isDesktop: boolean) => (isDesktop ?
                { zIndex: -1 } :
                { opacity: 0, zIndex: -1 }
            ),
        };

        return (
            <motion.section
                ref={ref}
                className={cn(
                    "relative flex w-full flex-col overflow-hidden bg-transparent md:flex-row h-full",
                    className
                )}
                {...props}
            >
                <div className="flex w-full h-full flex-col md:flex-row">
                    {/* Left Side: Content */}
                    <div className="flex w-full h-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 relative z-10 pointer-events-none md:pointer-events-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                className="flex flex-col justify-center h-full pointer-events-auto items-start text-left"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.h1
                                    custom={0}
                                    variants={textVariants}
                                    className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-shadow-sm md:text-shadow-none"
                                >
                                    {slides[current].title}
                                </motion.h1>

                                <motion.div
                                    custom={1}
                                    variants={textVariants}
                                    className="my-8 h-1 w-24 bg-amber-600"
                                />

                                <motion.p
                                    custom={2}
                                    variants={textVariants}
                                    className="mb-10 max-w-lg text-lg text-stone-200 md:text-stone-300 leading-relaxed font-medium md:font-normal text-shadow-sm md:text-shadow-none"
                                >
                                    {slides[current].subtitle}
                                </motion.p>

                                <motion.a
                                    custom={3}
                                    variants={textVariants}
                                    href={slides[current].callToAction.href}
                                    className="w-fit text-lg font-bold tracking-widest text-amber-500 hover:text-amber-400 transition-colors border-b-2 border-transparent hover:border-amber-500 pb-1"
                                >
                                    {slides[current].callToAction.text}
                                </motion.a>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Image */}
                    <div className="absolute inset-0 z-0 md:relative md:w-1/2 md:inset-auto lg:w-2/5 overflow-hidden bg-black/50 md:bg-transparent">
                        {/* Mobile Overlay to improve text visibility */}
                        <div className="absolute inset-0 bg-black/40 z-10 md:hidden pointer-events-none" />

                        <AnimatePresence initial={false}>
                            <motion.div
                                key={current}
                                className="absolute inset-0 z-0"
                                custom={isDesktop}
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit={{ opacity: 0, zIndex: -1, transition: { duration: 0.5 } }} // Smoother fade out
                                transition={{ duration: 1.2, ease: "easeOut" as const }} // smooth easeOutExpo-ish
                            >
                                <motion.div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${slides[current].backgroundImage})`,
                                    }}
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1.0 }}
                                    transition={{ duration: 7, ease: "linear" }} // Subtle Ken Burns effect
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Vertical Marquee Strip */}
                <div className="fixed top-0 bottom-0 right-0 w-16 bg-black/20 backdrop-blur-sm border-l border-white/10 z-50 flex justify-center overflow-hidden hidden md:flex">
                    <div className="flex flex-col gap-8 py-4 animate-marquee-vertical whitespace-nowrap">
                        {[...Array(10)].map((_, i) => (
                            <span
                                key={i}
                                className="text-white/20 font-bold tracking-[0.2em] text-lg [writing-mode:vertical-rl] rotate-180 select-none"
                            >
                                SREE COMFORTABLES PVT. LTD.
                            </span>
                        ))}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 flex gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className="group relative flex items-center justify-center p-2"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <span className={cn(
                                "block h-3 rounded-full transition-all duration-500 ease-out",
                                current === index ? "w-8 bg-amber-500" : "w-3 bg-white/30 group-hover:bg-white/50"
                            )}>

                            </span>
                        </button>
                    ))}
                </div>
            </motion.section>
        );
    }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
