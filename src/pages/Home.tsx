import React from "react";
import { Box, Lock, Search, Settings, Sparkles, Crown, TreePine } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";


import { AnimatedBackground } from "@/components/ui/animated-background";
import { HeroSection } from "@/components/ui/hero-section-2";

export function HomePage() {
    return (
        <div className="min-h-screen text-white relative">
            <AnimatedBackground />
            <section className="h-screen w-full snap-start">
                <HeroSection
                    slides={[
                        {
                            title: (
                                <>
                                    Crafting <br />
                                    <span className="shiny-text font-bold">Perfect Comfort</span>
                                </>
                            ),
                            subtitle: "Discover our premium collection of interior solutions designed to transform your house into a home. Luxury, durability, and style in every piece.",
                            callToAction: {
                                text: "EXPLORE COLLECTION",
                                href: "#services",
                            },
                            backgroundImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2670"
                        },
                        {
                            title: (
                                <>
                                    Elegant <br />
                                    <span className="shiny-text font-bold">Dining Experiences</span>
                                </>
                            ),
                            subtitle: "Create unforgettable memories with our exquisite dining collections. Where style meets functionality for every gathering.",
                            callToAction: {
                                text: "VIEW DINING",
                                href: "#dining",
                            },
                            backgroundImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2670"
                        },
                        {
                            title: (
                                <>
                                    Serene <br />
                                    <span className="shiny-text font-bold">Personal Sanctuaries</span>
                                </>
                            ),
                            subtitle: "Transform your bedroom into a peaceful retreat. Experience the perfect blend of comfort and modern aesthetics.",
                            callToAction: {
                                text: "DISCOVER BEDROOM",
                                href: "#bedroom",
                            },
                            backgroundImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2670"
                        }
                    ]}
                    className="h-full bg-transparent"
                />
            </section>



            {/* Why Choose Us Section - Bento Grid */}
            <section className="min-h-screen w-full snap-start flex items-center justify-center p-6 mb-20 md:mb-0">
                <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center scale-[0.9] origin-center">
                    <h2 className="text-3xl font-bold text-center mb-8 text-white lg:hidden">
                        Why Choose <span className="text-amber-500">SreeComfort</span>?
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
                        {/* 1. Video Card (Large) */}
                        <div className="col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden border border-white/10 flex flex-row group min-h-[300px]">
                            {/* Vertical Text Strip */}
                            <div className="hidden lg:flex w-20 bg-stone-900 border-r border-white/10 items-center justify-center">
                                <span className="text-white font-bold tracking-widest text-3xl whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                                    Why Choose <span className="text-amber-500">SreeComfort</span>?
                                </span>
                            </div>

                            {/* Video Section */}
                            <div className="relative flex-1 h-full overflow-hidden">
                                <video
                                    src="/SREE COMFORTABLES.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-fill opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent flex flex-col justify-between p-8">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Experience Perfection</h3>
                                            <p className="text-stone-300 text-sm md:text-base">See our craftsmanship in action.</p>
                                        </div>
                                        <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
                                            <Crown className="w-6 h-6 text-amber-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Customization (Text Card) with Image */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 group lg:col-span-1 p-3 md:p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2670"
                                alt="Customization"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors" />

                            <div className="relative z-10 w-full flex justify-between items-start">
                                <Settings className="w-6 h-6 md:w-10 md:h-10 text-amber-500" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">Customization</h3>
                                <p className="text-stone-300 text-[10px] md:text-sm leading-tight md:leading-relaxed">
                                    Tailored to your exact specifications. Your space, your rules.
                                </p>
                            </div>
                        </div>

                        {/* 3. Ergonomics (Text/Icon Card) with Image */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 group lg:col-span-1 p-3 md:p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=2670"
                                alt="Ergonomics"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors" />

                            <div className="relative z-10 w-full flex justify-between items-start">
                                <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-amber-500" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">Ergonomics</h3>
                                <p className="text-stone-300 text-[10px] md:text-sm leading-tight md:leading-relaxed">
                                    Designed for health and comfort. Work longer, feel better.
                                </p>
                            </div>
                        </div>

                        {/* 3. Ergonomics (Text/Icon Card) with Image */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 group lg:col-span-1 p-3 md:p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&q=80&w=2670"
                                alt="Premium Materials"
                                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 hover:bg-black/50 transition-colors" />

                            <div className="relative z-10 w-full flex justify-between items-start">
                                <TreePine className="w-6 h-6 md:w-10 md:h-10 text-amber-500" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">Premium Wood</h3>
                                <p className="text-stone-300 text-[10px] md:text-sm leading-tight md:leading-relaxed">
                                    Sourced from the finest sustainable teak forests.
                                </p>
                            </div>
                        </div>

                        {/* 5. Delivery (Text Card) with Image */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 group lg:col-span-1 p-3 md:p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2670"
                                alt="Fast Delivery"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors" />

                            <div className="relative z-10 w-full flex justify-between items-start">
                                <Box className="w-6 h-6 md:w-10 md:h-10 text-amber-500" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">Fast Delivery</h3>
                                <p className="text-stone-300 text-[10px] md:text-sm leading-tight md:leading-relaxed">

                                    Swiftest delivery times in the market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Collections Section */}
            <section className="min-h-screen w-full snap-start flex items-center justify-center p-6">
                <div className="max-w-7xl mx-auto w-full md:scale-[0.9] origin-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white md:hidden">
                        Featured <span className="text-amber-500">Collections</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[80vh]">
                        <div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-2xl overflow-hidden flex flex-row group">
                            {/* Vertical Text Strip */}
                            <div className="hidden md:flex w-20 bg-stone-900 border-r border-white/10 items-center justify-center">
                                <span className="text-white font-bold tracking-widest text-3xl whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                                    Featured <span className="text-amber-500">Collections</span>
                                </span>
                            </div>

                            <div className="relative flex-1 h-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2670"
                                    alt="Modern Living"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">The Modern Living Series</h3>
                                        <p className="text-stone-300">Sleek lines for contemporary homes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=2670"
                                alt="Office Setup"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h3 className="text-xl font-bold text-white">Office Essentials</h3>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=2670"
                                alt="Chairs"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h3 className="text-xl font-bold text-white">Signature Chairs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Glowing Cards Section */}
            <section className="min-h-screen w-full snap-start flex items-center">
                <div className="max-w-7xl mx-auto pb-20 pt-0 relative z-10 w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white md:hidden">
                        Our <span className="text-amber-500">Services</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch">
                        {/* Vertical Strip - Desktop Only */}
                        <div className="hidden md:flex w-20 bg-stone-900/50 backdrop-blur-sm border border-white/10 rounded-2xl items-center justify-center shrink-0">
                            <span className="text-white font-bold tracking-widest text-3xl whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                                Our <span className="text-amber-500">Services</span>
                            </span>
                        </div>

                        {/* Services Grid */}
                        <ul className="flex-1 grid grid-cols-2 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                            <GridItem
                                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                                icon={<Box className="h-4 w-4" />}
                                title="Modern Elegance"
                                description="Contemporary designs that effortlessly redefine your living space."
                                image="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=2670"
                            />
                            <GridItem
                                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                                icon={<Settings className="h-4 w-4" />}
                                title="Exquisite Craftsmanship"
                                description="Every detail masterfully designed for perfection and comfort."
                                image="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2670"
                            />
                            <GridItem
                                area="col-span-2 md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                                icon={<Lock className="h-4 w-4" />}
                                title="Built to Last"
                                description="Uncompromising durability and stability you can depend on for years."
                                image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2670"
                            />
                            <GridItem
                                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                                icon={<Sparkles className="h-4 w-4" />}
                                title="Ergonomic Comfort"
                                description="Scientifically designed for maximum productivity and physical well-being."
                                image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2670"
                            />
                            <GridItem
                                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                                icon={<Search className="h-4 w-4" />}
                                title="Timeless Style"
                                description="Aesthetics that transcend trends, keeping your space beautiful for generations."
                                image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2670"
                            />
                        </ul>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="min-h-screen w-full snap-start flex items-center justify-center p-6">
                <div className="max-w-7xl mx-auto w-full">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
                        Client <span className="text-amber-500">Stories</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Priya Sharma",
                                role: "Interior Designer",
                                quote: "SreeComforablesables transformed my client's villa. The quality of the teak wood is simply unmatched in Hyderabad."
                            },
                            {
                                name: "Rahul Verma",
                                role: "Software Architect",
                                quote: "I spend 10 hours a day at my desk. Their ergonomic chair saved my back. Best investment I've made this year."
                            },
                            {
                                name: "Anita Desai",
                                role: "Home Maker",
                                quote: "The dining table is the jewel of our home now. Everyone asks where we got it. Thank you for the customization!"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-black/40 backdrop-blur-sm border border-amber-500/20 p-8 rounded-2xl hover:border-amber-500/50 transition-colors">
                                <div className="mb-6 text-amber-500">
                                    <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.913 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 7.552 14.017 7V3H19.017C20.674 3 22.017 4.343 22.017 6V15C22.017 16.657 20.674 18 19.017 18H16.017C15.465 18 15.017 18.448 15.017 19V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.896 5.9126 16 7.0166 16H10.0166C10.5686 16 11.0166 15.552 11.0166 15V9C11.0166 8.448 10.5686 8 10.0166 8H6.0166C5.4646 8 5.0166 7.552 5.0166 7V3H10.0166C11.6736 3 13.0166 4.343 13.0166 6V15C13.0166 16.657 11.6736 18 10.0166 18H7.0166C6.4646 18 6.0166 18.448 6.0166 19V21H5.0166Z" /></svg>
                                </div>
                                <p className="text-lg text-stone-300 italic mb-6">"{item.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-white">{item.name}</h4>
                                    <p className="text-sm text-amber-500">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    image?: string;
}

const GridItem = ({ area, icon, title, description, image }: GridItemProps) => {
    return (
        <li className={cn("min-h-[14rem] list-none", area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    {image && (
                        <>
                            <img
                                src={image}
                                alt={title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60" />
                        </>
                    )}
                    <div className="relative flex flex-1 flex-col justify-between gap-3 z-10">
                        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                                {title}
                            </h3>
                            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};