import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, Phone } from "lucide-react";

export function Navigation() {
    const navItems = [
        { name: "Home", url: "/", icon: Home },
        { name: "About", url: "/about", icon: User },
        { name: "Our Works", url: "/works/residential", icon: Briefcase },
        { name: "Contact", url: "/contact", icon: Phone },
    ];

    return (
        <NavBar items={navItems} />
    );
}
