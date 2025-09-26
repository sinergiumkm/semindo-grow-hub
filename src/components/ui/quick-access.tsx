import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, ArrowRight } from "lucide-react";

const QuickAccess = () => {
  const quickAccessItems = [
    {
      icon: CheckCircle,
      title: "Self-Assessment",
      subtitle: "Cek Kesiapan Usaha Anda",
      description: "Evaluasi mendalam tingkat kematangan bisnis Anda dengan AI assessment engine kami.",
      features: ["AI-powered analysis", "Rekomendasi personal", "Dashboard tracking"],
      color: "text-primary",
      bgColor: "bg-primary/5",
      href: "#assessment"
    },
    {
      icon: Users,
      title: "Join Program",
      subtitle: "Ikut Program Pendampingan",
      description: "Bergabung dengan program pendampingan eksklusif bersama mentor ahli.",
      features: ["Mentor berpengalaman", "Group mentoring", "Network building"],
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      href: "#program"
    },
    {
      icon: BookOpen,
      title: "Learning Hub",
      subtitle: "Belajar Digital",
      description: "Akses ribuan materi pembelajaran dan sertifikasi untuk mengembangkan skill bisnis.",
      features: ["Video course", "Live webinar", "Digital certificate"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      href: "#learning"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-2">
            Mulai Perjalanan Bisnis Anda
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Pilih langkah pertama yang tepat untuk mengembangkan UMKM Anda dengan panduan ahli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {quickAccessItems.map((item, index) => (
            <Card 
              key={item.title} 
              className="group hover:shadow-large transition-all duration-300 border-0 bg-gradient-card hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${item.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <h4 className={`text-lg font-medium ${item.color} mb-4`}>
                  {item.subtitle}
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="default"
                  className="w-full group/btn"
                  asChild
                >
                  <a href={item.href}>
                    Mulai Sekarang
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Butuh bantuan memilih? Tim ahli kami siap membantu Anda
          </p>
          <Button variant="outline" size="lg" className="px-6 py-3">
            Konsultasi dengan Ahli
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;