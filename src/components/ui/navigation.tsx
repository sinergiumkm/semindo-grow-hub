import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Beranda", href: "#" },
    { 
      name: "Layanan", 
      href: "#layanan",
      dropdown: [
        { name: "Konsultasi Digital", href: "#konsultasi-digital" },
        { name: "Konsultasi Keuangan", href: "#konsultasi-keuangan" },
        { name: "Sertifikasi & Legalitas", href: "#sertifikasi" },
        { name: "Pasar & Ekspor", href: "#pasar-ekspor" }
      ]
    },
    { name: "Self-Assessment", href: "#assessment" },
    { name: "Learning Hub", href: "#learning" },
    { name: "Marketplace", href: "#marketplace" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Blog", href: "#blog" },
    { name: "Kontak", href: "#kontak" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Semindo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-medium z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium">
              Mulai Konsultasi
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                  Mulai Konsultasi
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;