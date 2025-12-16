"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Mouse position state
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring configuration for smooth movement
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if device has fine pointer (mouse)
        const checkDevice = () => {
            const hasMouse = window.matchMedia("(pointer: fine)").matches;
            setIsVisible(hasMouse);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        if (!isVisible) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Add event listeners for hover effects
        const clickableElements = document.querySelectorAll<HTMLElement>(
            "a, button, input, textarea, select, [role='button']"
        );

        clickableElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const newClickables = document.querySelectorAll<HTMLElement>(
                        "a, button, input, textarea, select, [role='button']"
                    );
                    newClickables.forEach((el) => {
                        el.removeEventListener("mouseenter", handleMouseEnter);
                        el.removeEventListener("mouseleave", handleMouseLeave);
                        el.addEventListener("mouseenter", handleMouseEnter);
                        el.addEventListener("mouseleave", handleMouseLeave);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener("resize", checkDevice);
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = 'auto';
            observer.disconnect();

            clickableElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Outer Circle (Lens Ring) */}
            <motion.div
                className={cn(
                    "absolute flex items-center justify-center rounded-full border backdrop-blur-[2px]"
                )}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: 24,
                    height: 24,
                    borderColor: isClicking
                        ? "rgba(34, 197, 94, 0.8)" // Green-500
                        : isHovering ? "rgba(220, 38, 38, 0.8)" : "rgba(245, 158, 11, 0.8)",
                    backgroundColor: isClicking
                        ? "rgba(34, 197, 94, 0.15)"
                        : isHovering ? "rgba(220, 38, 38, 0.15)" : "rgba(245, 158, 11, 0.05)",
                    boxShadow: isClicking
                        ? "0 0 20px 2px rgba(34, 197, 94, 0.3)"
                        : isHovering
                            ? "0 0 20px 2px rgba(220, 38, 38, 0.3)"
                            : "0 0 20px 2px rgba(245, 158, 11, 0.3)",
                    transition: { duration: 0.2, ease: "easeInOut" }
                }}
            />

            {/* Inner Dot */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: 4,
                    height: 4,
                    backgroundColor: isClicking
                        ? "#22c55e" // Green-500
                        : isHovering ? "#dc2626" : "#f59e0b",
                    boxShadow: isClicking
                        ? "0 0 10px rgba(34, 197, 94, 0.8)"
                        : isHovering
                            ? "0 0 10px rgba(220, 38, 38, 0.8)"
                            : "0 0 10px rgba(245, 158, 11, 0.8)",
                }}
            />
        </div>
    );
};
