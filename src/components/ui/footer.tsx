import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="md:col-span-1 space-y-4">
                        <Link to="/" className="inline-block">
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                SreeComfort
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Elevating comfort with innovative design and premium quality. Experience the future of living with SreeComfort.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
                            <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
                            <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/about" label="About Us" />
                            <FooterLink to="/works" label="Our Works" />
                            <FooterLink to="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <FooterLink to="#" label="Interior Design" />
                            <FooterLink to="#" label="Custom Furniture" />
                            <FooterLink to="#" label="Space Planning" />
                            <FooterLink to="#" label="Consultation" />
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest trends and updates.
                        </p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                            />
                            <button
                                type="button"
                                className="bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} SreeComfortables. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const FooterLink = ({ to, label }: { to: string; label: string }) => (
    <li>
        <Link to={to} className="hover:text-white transition-colors text-sm">
            {label}
        </Link>
    </li>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        className="bg-white/5 p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
        aria-label={label}
    >
        {icon}
    </a>
);
