import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Layanan",
      links: [
        { name: "Konsultasi Digital", href: "#konsultasi-digital" },
        { name: "Konsultasi Keuangan", href: "#konsultasi-keuangan" },
        { name: "Sertifikasi & Legalitas", href: "#sertifikasi" },
        { name: "Pasar & Ekspor", href: "#pasar-ekspor" }
      ]
    },
    {
      title: "Program",
      links: [
        { name: "Self-Assessment", href: "#assessment" },
        { name: "Learning Hub", href: "#learning" },
        { name: "Marketplace", href: "#marketplace" },
        { name: "Community", href: "#community" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog & Insight", href: "#blog" },
        { name: "Success Stories", href: "#stories" },
        { name: "Export Hub", href: "#export" },
        { name: "Financing Hub", href: "#financing" }
      ]
    },
    {
      title: "Perusahaan",
      links: [
        { name: "Tentang Kami", href: "#tentang" },
        { name: "Tim", href: "#tim" },
        { name: "Karir", href: "#karir" },
        { name: "Press Kit", href: "#press" }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-background/70">
                Dapatkan insights terbaru tentang perkembangan UMKM dan teknologi bisnis
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary-hover text-white shrink-0">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Semindo
            </h2>
            <p className="text-background/70 mb-6 leading-relaxed">
              Platform konsultasi berbasis teknologi yang membantu UMKM Indonesia 
              berkembang melalui solusi digital, keuangan, dan strategi bisnis terintegrasi.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-background/70">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">Jakarta, Bandung, Surabaya, Medan</span>
              </div>
              <div className="flex items-center text-background/70">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center text-background/70">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">hello@semindo.id</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary hover:scale-110 transition-all duration-200 group"
                >
                  <Icon className="h-5 w-5 text-background/70 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-background mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/50 text-sm mb-4 md:mb-0">
              © 2024 Semindo. All rights reserved. Made with ❤️ for Indonesian SMEs.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-background/50 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/50 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-background/50 hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;