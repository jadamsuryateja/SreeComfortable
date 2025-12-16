import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/animated-background";

import { PageSideStrip } from "@/components/ui/page-side-strip";

export function AboutPage() {
    return (
        <div className="min-h-screen text-white relative">
            <AnimatedBackground />
            <PageSideStrip text="ABOUT US" />
            <div className="pt-24 pb-20 px-4 md:px-8">
                <div className="max-w-5xl mx-auto space-y-20">
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <h1 className="md:hidden text-4xl font-bold text-white mb-2">
                            About <span className="text-amber-500">Us</span>
                        </h1>
                        <span className="text-sm font-medium text-amber-500 tracking-[0.2em] uppercase">Est. 1996</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            Crafting Legacies, <br className="hidden md:block" />
                            <span className="text-stone-400">One Home at a Time.</span>
                        </h1>
                        <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed font-light">
                            SREE COMFORTABLES PRIVATE LIMITED is an established furniture and interior design manufacturing company based in Hyderabad, Telangana, India. Incorporated on December 16, 1996, the company has been operational for nearly 29 years and maintains an active status with the Registrar of Companies, Hyderabad.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
                        <div className="space-y-2 text-center">
                            <h4 className="text-4xl md:text-5xl font-bold text-amber-500">29+</h4>
                            <p className="text-xs text-stone-400 uppercase tracking-widest">Years of Excellence</p>
                        </div>
                        <div className="space-y-2 text-center">
                            <h4 className="text-4xl md:text-5xl font-bold text-amber-500">5k+</h4>
                            <p className="text-xs text-stone-400 uppercase tracking-widest">Homes Transformed</p>
                        </div>
                        <div className="space-y-2 text-center">
                            <h4 className="text-4xl md:text-5xl font-bold text-amber-500">50+</h4>
                            <p className="text-xs text-stone-400 uppercase tracking-widest">Master Artisans</p>
                        </div>
                        <div className="space-y-2 text-center">
                            <h4 className="text-4xl md:text-5xl font-bold text-amber-500">100%</h4>
                            <p className="text-xs text-stone-400 uppercase tracking-widest">Solid Teak Wood</p>
                        </div>
                    </div>

                    {/* Mission Section with Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-white">Business Overview</h2>
                            <div className="h-1 w-20 bg-amber-500"></div>
                            <p className="text-lg text-stone-300 leading-relaxed">
                                The company primarily operates in the office furniture and interior design sector, specializing in the manufacturing and design of modular office solutions and wooden furniture. While the company's official NIC classification categorizes it under "Other Scheduled Passenger Land Transport," its actual operational focus demonstrates a significant presence in the office furniture and interior design manufacturing industry.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=2670"
                                alt="Woodworking Workshop"
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </motion.div>
                    </div>

                    {/* Values Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
                            <p className="text-stone-400">The pillars that uphold our legacy.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Uncompromising Quality", description: "We never cut corners. From the wood selection to the final polish, perfection is our baseline." },
                                { title: "Sustainable Future", description: "Responsible sourcing and eco-friendly practices are at the heart of our production." },
                                { title: "Customer Centricity", description: "Your vision is our blueprint. We customize every inch to suit your lifestyle." },
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-amber-500/50 transition-all duration-300 group"
                                >
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-500 transition-colors">{value.title}</h3>
                                    <p className="text-stone-400 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* New Sections: Products & Facilities */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-white/5">
                        {/* Products */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white mb-6">Products & Services</h2>
                            <ul className="space-y-4">
                                {[
                                    { name: "Office Cabin Interior Design", desc: "Customized interior designs for professional office spaces" },
                                    { name: "Modular Office Systems", desc: "Flexible and scalable office furniture solutions" },
                                    { name: "Reception Wooden Furniture", desc: "Premium wooden furniture for reception areas and lobbies" },
                                    { name: "Office Workstations", desc: "Modern workstation designs for contemporary offices" },
                                    { name: "Custom Modular Furniture", desc: "Tailored furniture solutions as per client specifications" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-start">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                                        <div>
                                            <h4 className="text-white font-medium">{item.name}</h4>
                                            <p className="text-sm text-stone-400">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Facilities */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white mb-6">Facilities & Locations</h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-semibold text-amber-500 mb-2">Manufacturing Facility</h3>
                                    <p className="text-stone-300">
                                        State-of-the-art facility equipped with indigenous and imported machinery.
                                    </p>
                                    <p className="text-white mt-2 font-medium">Shakthipura, Balanagar, Hyderabad</p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Kukatpally</h4>
                                        <p className="text-sm text-stone-400">Plot No 82, 5-35-212/2, Shakthipuram, Prashanthi Nagar Extn- IDA, Kukatpally-500072</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Somajiguda</h4>
                                        <p className="text-sm text-stone-400">Providing interior design and architecture solutions for small office spaces and commercial establishments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
