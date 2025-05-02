import {
  Heart,
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Menu,
  BookDashed,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

function NavBarComponent() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/events", label: "Events" },
    { path: "/ministries", label: "Ministries" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
                  currentPath === path
                    ? "text-primary border-b-2 border-primary"
                    : ""
                }`}
              >
                <span id="link" className="p-2 font-inter">
                  {label}
                </span>
              </Link>
            ))}
          </nav>
          <Button onClick={toggleMobileMenu} size="sm" className="md:hidden">
            <span>
              {mobileMenuOpen ? <X /> : <Menu />}
            </span>
          </Button>
        </div>
      </header>

      {/* Mobile Menu Slider */}
      <div 
        className={`fixed top-28 right-0 h-[calc(100vh-7rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-4">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`py-3 px-4 text-sm font-medium hover:bg-gray-100 rounded-md ${
                currentPath === path
                  ? "text-primary font-semibold"
                  : ""
              }`}
            >
              <span className="font-inter">{label}</span>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-10 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}

export default NavBarComponent;
