import { Heart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Phone, Mail, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { Home, Info, Settings, Calendar, Users } from "lucide-react";

function NavBarComponent() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home", Icon: <Home size={18}/> },
    { path: "/about", label: "About", Icon: <Info size={18}/> },
    { path: "/services", label: "Services", Icon: <Settings size={18}/> },
    { path: "/events", label: "Events", Icon: <Calendar size={18}/> },
    { path: "/ministries", label: "Ministries", Icon: <Users size={18}/> },
    { path: "/contact", label: "Contact", Icon: <Phone size={18}/> },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };

  return (
    <>
      <div className="bg-purple-900 text-white py-2 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Phone size={14} className="mr-1" />
              <span>(+265) 993 740 261</span>
            </div>
            <div className=" hidden md:flex items-center">
              <Mail size={14} className="mr-1" />
              <span>zombabaptistchurch@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hover:underline flex items-center">
              Client Login
            </Link>
            <Link
              href="https://facebook.com"
              className="hidden md:block hover:text-purple-200"
            >
              <Facebook size={18} />
            </Link>
          </div>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-16 md:h-20 md:w-20">
                <img
                  src="/zbc_logo.png"
                  alt="Zomba Baptist Church Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="ml-2 hidden md:block">
                <h1 className="text-lg md:text-xl font-bold text-purple-900">
                  Zomba Baptist Church
                </h1>
                <p className="text-xs text-gray-500">Faith • Hope • Love</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-purple-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
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
              <Link to={"/donate"} className="mb-2">
                <Button className="h-12 px-4">
                  <span className="6 font-extrabold p-4">Donate</span>
                </Button>
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <motion.nav
            className={`md:hidden overflow-hidden`}
            initial="closed"
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { height: "auto", opacity: 1 },
              closed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col py-4 space-y-3">
              {navLinks.map(({ path, label, Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-gray-700 hover:text-purple-700 font-medium transition-colors"
                >
                  <div className="flex flex-row gap-3 content-center">
                    {Icon} <p className="text-sm font-bold">{label}</p>
                  </div>
                </Link>
              ))}
              <Link
                to={"/donate"}
                className="h-12 px-6 bg-primary text-white py-3 rounded-md transition-colors inline-block w-fit"
              >
               DONATE
              </Link>
            </div>
          </motion.nav>
        </div>
      </header>
    </>
  );
}

export default NavBarComponent;
