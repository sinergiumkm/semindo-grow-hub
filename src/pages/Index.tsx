import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import QuickAccess from "@/components/ui/quick-access";
import SuccessStories from "@/components/ui/success-stories";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <QuickAccess />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Index;
