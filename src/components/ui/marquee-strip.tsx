import { motion } from "framer-motion";

export function MarqueeStrip() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-black/20 backdrop-blur-sm border-b border-white/5 overflow-hidden py-2 md:hidden">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Multiple copies for seamless looping */}
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-white/90 font-bold text-xs tracking-widest uppercase flex items-center gap-8">
                            Sree Comfortables Pvt. Ltd.
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
