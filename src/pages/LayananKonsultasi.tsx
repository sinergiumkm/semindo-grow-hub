import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bot, DollarSign, FileCheck, Globe, Calendar, Phone, Clock } from "lucide-react";
import SEOHead from "@/components/ui/seo-head";

const LayananKonsultasi = () => {
  const services = [
    {
      icon: Bot,
      title: "Konsultasi Digital",
      description: "Transformasi digital dengan AI chatbot dan meeting online",
      features: ["AI-powered analysis", "Virtual consultation", "Digital roadmap", "Tech recommendations"],
      price: "Mulai Rp 500K"
    },
    {
      icon: DollarSign,
      title: "Konsultasi Keuangan",
      description: "Pembukuan, pembiayaan, dan akses permodalan UMKM",
      features: ["Financial health check", "Bookkeeping setup", "Funding access", "Investment planning"],
      price: "Mulai Rp 750K"
    },
    {
      icon: FileCheck,
      title: "Sertifikasi & Legalitas",
      description: "Halal, BPOM, HAKI, dan perizinan usaha lengkap",
      features: ["Halal certification", "BPOM guidance", "IP protection", "Business permits"],
      price: "Mulai Rp 1M"
    },
    {
      icon: Globe,
      title: "Pasar & Ekspor",
      description: "Riset pasar, buyer matching, dan strategi ekspor",
      features: ["Market research", "Export strategy", "Buyer connections", "Trade facilitation"],
      price: "Mulai Rp 2M"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Layanan Konsultasi UMKM – Digital, Keuangan, Sertifikasi, Ekspor"
        description="Dapatkan konsultasi online untuk keuangan, digitalisasi, legalitas, dan ekspor. Booking jadwal dengan konsultan ahli Semindo secara mudah."
        keywords="konsultasi UMKM, konsultasi digital, konsultasi keuangan, sertifikasi halal, konsultasi ekspor"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Layanan <span className="text-primary">Konsultasi</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Solusi konsultasi komprehensif untuk mengakselerasi pertumbuhan UMKM Anda
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full">Konsultasi Sekarang</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Konsultasi Online
            </h2>
            <p className="text-xl text-muted-foreground">
              Jadwalkan sesi konsultasi dengan para ahli kami
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Form Booking Konsultasi
              </CardTitle>
              <CardDescription>
                Isi formulir di bawah untuk menjadwalkan konsultasi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" placeholder="Masukkan nama lengkap" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Nama Perusahaan/UMKM</Label>
                  <Input id="company" placeholder="Nama bisnis Anda" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@domain.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">No. WhatsApp</Label>
                  <Input id="phone" placeholder="081234567890" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Jenis Konsultasi</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis konsultasi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="digital">Konsultasi Digital</SelectItem>
                      <SelectItem value="financial">Konsultasi Keuangan</SelectItem>
                      <SelectItem value="legal">Sertifikasi & Legalitas</SelectItem>
                      <SelectItem value="export">Pasar & Ekspor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Skala Usaha</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih skala usaha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mikro">Usaha Mikro</SelectItem>
                      <SelectItem value="kecil">Usaha Kecil</SelectItem>
                      <SelectItem value="menengah">Usaha Menengah</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi Kebutuhan</Label>
                <Textarea 
                  id="description" 
                  placeholder="Jelaskan tantangan atau kebutuhan konsultasi Anda..."
                  rows={4}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Konsultasi via WhatsApp
                </Button>
                <Button variant="outline" className="flex-1">
                  <Clock className="h-4 w-4 mr-2" />
                  Jadwalkan Meeting Online
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LayananKonsultasi;