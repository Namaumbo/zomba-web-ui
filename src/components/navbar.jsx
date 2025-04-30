import {
  Heart,
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
function NavBarComponent() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/events", label: "Events" },
    { path: "/ministries", label: "Ministries" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <>
      <header className="bg-white/90 h-28 border-b sticky top-0 z-10 flex justify-center items-center">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ZBC</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium hover:text-primary pb-2 ${
                  currentPath === path ? "text-primary border-b-2 border-primary" : ""
                }`}
              >
                <span id="link" className="p-2">
                  {label}
                </span>
              </Link>
            ))}
          </nav>

          <Button variant="outline" size="sm" className="md:hidden">
            <span>Menu</span>
          </Button>
        </div>
      </header>
    </>
  );
}

export default NavBarComponent;
