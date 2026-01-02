import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/About", label: "About" },
    { href: "/Our_Activities", label: "Activities" },
    { href: "/Urban_Heritage", label: "Heritage" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-heritage-coral via-heritage-gold to-heritage-ocean" />
      <div className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
                <div className="md:col-span-2">
                  <Link to="/" className="inline-block mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent">
                        <div className="absolute inset-1 rounded-full bg-secondary flex items-center justify-center">
                          <span className="font-serif font-bold text-xl text-primary">
                            AKAN
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="font-serif font-bold text-lg text-primary">
                          Urban
                        </span>
                        <span className="font-serif font-light text-lg text-secondary-foreground">
                          Heritage
                        </span>
                      </div>
                    </div>
                  </Link>
                  <p className="text-secondary-foreground/70 leading-relaxed max-w-sm">
                    Preserving the architectural and cultural heritage of
                    Massawa for future generations through restoration,
                    education, and community engagement.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif font-semibold text-lg mb-6">
                    Quick Links
                  </h4>
                  <nav className="space-y-3">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block text-secondary-foreground/70 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-6">
                    Contact Us
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={18}
                        className="text-primary mt-1 shrink-0"
                      />
                      <span className="text-secondary-foreground/70 text-sm">
                        Norge
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-primary shrink-0" />
                      <a
                        href="mailto:info@urbanheritage.org"
                        className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                      >
                        AKAN.heritage.1@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-primary shrink-0" />
                      <span className="text-secondary-foreground/70 text-sm">
                        +4792510241{" "}
                        <a href="https://www.facebook.com/share/p/rYbbZzmT5W6XmmBj/?mibextid=WC7FNe">
                          facebook
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
              <p className="text-secondary-foreground/50 text-sm">
                © {currentYear} Urban Heritage. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
