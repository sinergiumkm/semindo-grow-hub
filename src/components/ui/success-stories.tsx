import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp } from "lucide-react";

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: "Sarah Dewi",
      business: "Warung Digital Nusantara",
      category: "F&B Tech",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
      story: "Dari warung kecil menjadi franchise digital dengan 50+ outlet berkat strategi digitalisasi dari Semindo.",
      metrics: {
        revenue: "500%",
        outlets: "50+",
        period: "18 bulan"
      },
      rating: 5
    },
    {
      name: "Budi Santoso",
      business: "Batik Modern Indonesia",
      category: "Fashion & Craft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      story: "Ekspor batik ke 15 negara dengan bantuan program export readiness dan sertifikasi internasional.",
      metrics: {
        revenue: "800%",
        countries: "15",
        period: "2 tahun"
      },
      rating: 5
    },
    {
      name: "Ani Kusuma",
      business: "AgriTech Solutions",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      story: "Mengintegrasikan IoT dan AI untuk pertanian modern, meningkatkan produktivitas petani lokal 300%.",
      metrics: {
        revenue: "400%",
        farmers: "1000+",
        period: "15 bulan"
      },
      rating: 5
    }
  ];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 mb-6">
            <TrendingUp className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories UMKM
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Inspirasi nyata dari UMKM yang telah bertransformasi bersama Semindo
          </p>
        </div>

        {/* Main Story Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-large">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Story Content */}
                <div>
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                    "{currentStory.story}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(currentStory.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center mb-8">
                    <img 
                      src={currentStory.image} 
                      alt={currentStory.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{currentStory.name}</h4>
                      <p className="text-muted-foreground">{currentStory.business}</p>
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">
                        {currentStory.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Pencapaian</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">+{currentStory.metrics.revenue}</div>
                      <div className="text-sm text-muted-foreground">Peningkatan Revenue</div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-secondary">
                        {currentStory.metrics.outlets || currentStory.metrics.countries || currentStory.metrics.farmers}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {currentStory.metrics.outlets ? 'Outlet Franchise' : 
                         currentStory.metrics.countries ? 'Negara Ekspor' : 'Petani Terbantu'}
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600">{currentStory.metrics.period}</div>
                      <div className="text-sm text-muted-foreground">Periode Transformasi</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={prevStory}
              className="hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Sebelumnya
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm"
              onClick={nextStory}
              className="hover:bg-primary hover:text-white"
            >
              Selanjutnya
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-primary hover:opacity-90 text-white px-8">
            Lihat Semua Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;