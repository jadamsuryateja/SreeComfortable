import { cn } from "@/lib/utils";

interface PageSideStripProps {
    text: string;
    className?: string;
}

export function PageSideStrip({ text, className }: PageSideStripProps) {
    return (
        <div className={cn(
            "fixed top-0 bottom-0 right-0 w-16 bg-black/20 backdrop-blur-sm border-l border-white/10 z-50 flex justify-center items-center overflow-hidden hidden md:flex pointer-events-none",
            className
        )}>
            <div className="h-full flex items-center justify-center py-4">
                <span className="text-amber-500 font-bold tracking-[0.2em] text-lg [writing-mode:vertical-rl] rotate-180 select-none whitespace-nowrap">
                    {text}
                </span>
            </div>
        </div>
    );
}
