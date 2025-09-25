import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tech consulting for SMEs" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Beyond Solutions
            <span className="block text-secondary">for SMEs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Platform konsultasi berbasis teknologi yang membantu UMKM Indonesia 
            berkembang melalui solusi digital, keuangan, dan strategi bisnis terintegrasi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4 rounded-xl shadow-large group"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-xl group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              Lihat Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 animate-slide-up">
            <p className="text-white/70 text-sm mb-4">Dipercaya oleh 5000+ UMKM di seluruh Indonesia</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Kementerian UMKM</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Bank Indonesia</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Tokopedia</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Shopee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;