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
const FooterComponent = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-muted/30 border-t py-8 md:py-12 flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Zomba Baptist church</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                To serve and to Give
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    (+265) 993 740 261
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    zombabaptistchurh@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Post Office Box 580 zomba, Malawi
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/zombabaptist"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.facebook.com/zombabaptist"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/zombabaptist"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Zomba Baptist Church. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
