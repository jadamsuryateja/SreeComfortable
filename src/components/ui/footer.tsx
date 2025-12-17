import React from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Brand Section */}
                    <div className="col-span-2 md:col-span-1 space-y-4 text-center md:text-left">
                        <Link to="/" className="inline-block">
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                SreeComforables
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Elevating comfort with innovative design and premium quality. Experience the future of living with SreeComfort.
                        </p>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" className="hover:text-orange-500" />
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


                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} SreeComfortables. All rights reserved.</p>
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

const SocialLink = ({ href, icon, label, className }: { href: string; icon: React.ReactNode; label: string; className?: string }) => (
    <a
        href={href}
        className={`bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors ${className || 'hover:text-white'}`}
        aria-label={label}
    >
        {icon}
    </a>
);
