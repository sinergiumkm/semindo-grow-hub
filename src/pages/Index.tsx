import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import QuickAccess from "@/components/ui/quick-access";
import SuccessStories from "@/components/ui/success-stories";
import Footer from "@/components/ui/footer";
import SEOHead from "@/components/ui/seo-head";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Semindo – Beyond Solutions for SMEs | Konsultasi & Pendampingan UMKM"
        description="Bangun bisnis UMKM Anda bersama Semindo. Konsultasi digital, pembiayaan, sertifikasi, ekspor, hingga pembelajaran online dalam satu platform terpadu."
        keywords="UMKM, konsultasi bisnis, pendampingan UMKM, digitalisasi, pembiayaan, sertifikasi, ekspor"
      />
      <Navigation />
      <HeroSection />
      <QuickAccess />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Index;
