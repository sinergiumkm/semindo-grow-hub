import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Award, Building2, TrendingUp } from "lucide-react";

const TentangKami = () => {
  const team = [
    {
      name: "Dr. Ahmad Rifai",
      role: "CEO & Lead Consultant",
      expertise: "Digital Transformation",
      image: "/placeholder.svg"
    },
    {
      name: "Sari Maharani, M.Ec",
      role: "Financial Consultant",
      expertise: "UMKM Finance & Banking",
      image: "/placeholder.svg"
    },
    {
      name: "Budi Santoso",
      role: "Export Specialist",
      expertise: "International Trade",
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Permata",
      role: "Technology Director",
      expertise: "AI & Digital Solutions",
      image: "/placeholder.svg"
    }
  ];

  const partners = [
    { name: "Kementerian Koperasi dan UKM", type: "Government" },
    { name: "Bank Indonesia", type: "Banking" },
    { name: "Shopee Indonesia", type: "Marketplace" },
    { name: "Tokopedia", type: "Marketplace" },
    { name: "BUMN Partnership", type: "Corporate" },
    { name: "Gramedia Foundation", type: "NGO" }
  ];

  const impacts = [
    { number: "15,000+", label: "UMKM Binaan", icon: Users },
    { number: "Rp 45M+", label: "Akses Pembiayaan", icon: TrendingUp },
    { number: "2,500+", label: "Produk Terekspor", icon: Award },
    { number: "85%", label: "Success Rate", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tentang <span className="text-primary">Semindo</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Platform konsultasi teknologi yang memberdayakan UMKM Indonesia menuju transformasi digital dan ekspor global
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Menjadi platform konsultasi teknologi terdepan yang memberdayakan 1 juta UMKM Indonesia untuk go digital dan go global pada 2030
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Memberikan solusi konsultasi terintegrasi berbasis AI untuk transformasi digital, akses pembiayaan, dan ekspor UMKM
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Nilai Inti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Inovasi</Badge>
                  <Badge variant="secondary">Keberpihakan</Badge>
                  <Badge variant="secondary">Integritas</Badge>
                  <Badge variant="secondary">Kolaborasi</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tim & Konsultan */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tim & Konsultan Ahli
            </h2>
            <p className="text-xl text-muted-foreground">
              Dipandu oleh para ahli berpengalaman di bidangnya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{member.expertise}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Strategis */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partner Strategis
            </h2>
            <p className="text-xl text-muted-foreground">
              Berkolaborasi dengan institusi terpercaya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{partner.name}</h3>
                  <Badge variant="secondary">{partner.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Data */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Impact & Capaian
            </h2>
            <p className="text-xl text-muted-foreground">
              Bukti nyata kontribusi kami untuk UMKM Indonesia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <impact.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {impact.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {impact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TentangKami;