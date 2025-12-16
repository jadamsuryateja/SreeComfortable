import { motion } from "framer-motion";

export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 bg-black overflow-hidden">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,#451a03_0%,transparent_70%)] blur-[80px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,#78350f_0%,transparent_70%)] blur-[80px]"
            />
        </div>
    );
};
