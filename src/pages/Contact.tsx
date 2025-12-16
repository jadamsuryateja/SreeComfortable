import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { AnimatedBackground } from "@/components/ui/animated-background";

import { PageSideStrip } from "@/components/ui/page-side-strip";

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen text-white relative">
            <AnimatedBackground />
            <PageSideStrip text="CONTACT US" />

            <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-medium text-amber-500 tracking-[0.2em] uppercase block mb-4">Contact Us</span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                            Get In <span className="text-amber-500">Touch</span>
                        </h1>
                        <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light">
                            We'd love to hear from you. Let's start a conversation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
                                <div className="h-1 w-20 bg-amber-500 mb-6"></div>
                                <p className="text-stone-300 mb-8 leading-relaxed">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <Phone className="w-5 h-5 text-amber-500" />,
                                        title: "Phone",
                                        content: "+1 (555) 123-4567",
                                    },
                                    {
                                        icon: <Mail className="w-5 h-5 text-amber-500" />,
                                        title: "Email",
                                        content: "sreenivasa_gorantla@yahoo.com",
                                    },
                                    {
                                        icon: <MapPin className="w-5 h-5 text-amber-500" />,
                                        title: "Locations",
                                        content: (
                                            <div className="space-y-4 text-sm mt-1">
                                                <div className="pl-2 border-l-2 border-amber-500/30">
                                                    <span className="text-white block font-medium mb-1">Manufacturing Facility</span>
                                                    <span className="text-stone-400">Shakthipura, Balanagar, Hyderabad</span>
                                                </div>
                                                <div className="pl-2 border-l-2 border-amber-500/30">
                                                    <span className="text-white block font-medium mb-1">Kukatpally</span>
                                                    <span className="text-stone-400">Plot No 82, 5-35-212/2, Shakthipuram, Prashanthi Nagar Extn- IDA, Kukatpally-500072</span>
                                                </div>
                                                <div className="pl-2 border-l-2 border-amber-500/30">
                                                    <span className="text-white block font-medium mb-1">Somajiguda</span>
                                                    <span className="text-stone-400">Interior design & architecture solutions</span>
                                                </div>
                                            </div>
                                        ),
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-sm group"
                                    >
                                        <div className="p-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-amber-500 transition-colors">{item.title}</h3>
                                            <div className="text-stone-300">{item.content}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-stone-300 ml-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-stone-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-stone-300 ml-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-stone-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-stone-300 ml-1">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-stone-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all duration-300"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-stone-300 ml-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-stone-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all duration-300 resize-none"
                                            placeholder="Tell us more about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-black font-bold hover:bg-amber-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-amber-500/20"
                                    >
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
