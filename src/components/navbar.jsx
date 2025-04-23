import { Link } from "react-router-dom";
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
import { Button } from "@/components/ui/button";


function NavBarComponent() {
  return (
    <>
      <header className="bg-white border-b sticky top-0 z-10 flex justify-center items-center">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Zomba Baptist Church</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium text-primary">
              About
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium hover:text-primary"
            >
              Services
            </Link>
            <Link
              to="/events"
              className="text-sm font-medium hover:text-primary"
            >
              Events
            </Link>
            <Link
              to="/ministries"
              className="text-sm font-medium hover:text-primary"
            >
              Ministries
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>{" "}
    </>
  );
}

export default NavBarComponent;
