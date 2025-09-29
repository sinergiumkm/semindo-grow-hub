import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle,
  Users,
  Calendar,
  Globe,
  Building
} from "lucide-react";
import SEOHead from "@/components/ui/seo-head";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Alamat Kantor",
      details: [
        "Jl. Sudirman No. 123, Jakarta Pusat",
        "Jakarta 10220, Indonesia"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telepon",
      details: [
        "+62 21 1234 5678",
        "+62 812 3456 7890 (WhatsApp)"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: [
        "info@semindo.co.id",
        "konsultasi@semindo.co.id"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
        "Sabtu: 08:00 - 12:00"
      ]
    }
  ];

  const services = [
    "Konsultasi Digital",
    "Konsultasi Keuangan", 
    "Sertifikasi & Legalitas",
    "Pasar & Ekspor",
    "Learning Hub",
    "Self Assessment",
    "Marketplace",
    "Financing Hub",
    "Community",
    "Lainnya"
  ];

  const offices = [
    {
      city: "Jakarta",
      address: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
      phone: "+62 21 1234 5678",
      email: "jakarta@semindo.co.id",
      manager: "Sarah Wijaya",
      image: "/api/placeholder/300/200",
      isMain: true
    },
    {
      city: "Surabaya",
      address: "Jl. Pemuda No. 45, Surabaya 60271",
      phone: "+62 31 8765 4321",
      email: "surabaya@semindo.co.id",
      manager: "Budi Santoso",
      image: "/api/placeholder/300/200",
      isMain: false
    },
    {
      city: "Bandung",
      address: "Jl. Asia Afrika No. 67, Bandung 40111",
      phone: "+62 22 9876 5432",
      email: "bandung@semindo.co.id",
      manager: "Rina Sari",
      image: "/api/placeholder/300/200",
      isMain: false
    }
  ];

  const faqs = [
    {
      question: "Bagaimana cara mendaftar konsultasi?",
      answer: "Anda dapat mendaftar konsultasi melalui website kami, WhatsApp, atau datang langsung ke kantor. Tim kami akan membantu menjadwalkan sesi konsultasi sesuai kebutuhan Anda."
    },
    {
      question: "Apakah konsultasi berbayar?",
      answer: "Kami menyediakan konsultasi gratis untuk sesi pertama (30 menit). Untuk konsultasi lanjutan, tersedia paket konsultasi dengan harga yang kompetitif."
    },
    {
      question: "Layanan apa saja yang tersedia?",
      answer: "Kami menyediakan konsultasi digital, keuangan, sertifikasi & legalitas, ekspor, learning hub, self assessment, marketplace, dan financing hub."
    },
    {
      question: "Apakah bisa konsultasi online?",
      answer: "Ya, kami menyediakan layanan konsultasi online melalui video call, telepon, atau chat. Anda dapat memilih metode yang paling nyaman."
    },
    {
      question: "Berapa lama proses konsultasi?",
      answer: "Durasi konsultasi bervariasi tergantung kebutuhan, mulai dari 30 menit untuk konsultasi singkat hingga beberapa sesi untuk pendampingan intensif."
    }
  ];

  const socialMedia = [
    { name: "WhatsApp", handle: "+62 812 3456 7890", color: "bg-green-500" },
    { name: "Instagram", handle: "@semindo.official", color: "bg-pink-500" },
    { name: "LinkedIn", handle: "Semindo Indonesia", color: "bg-blue-600" },
    { name: "YouTube", handle: "Semindo Channel", color: "bg-red-500" },
    { name: "Facebook", handle: "Semindo Indonesia", color: "bg-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Hubungi Semindo – Konsultasi & Pertanyaan UMKM"
        description="Butuh bantuan? Hubungi tim Semindo via form, WhatsApp, atau kunjungi kantor kami. Siap membantu UMKM Anda berkembang."
        keywords="hubungi semindo, kontak UMKM, konsultasi bisnis, bantuan UMKM, customer service"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Hubungi Semindo – Konsultasi & Pertanyaan UMKM
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tim ahli kami siap membantu Anda 24/7. Hubungi kami untuk konsultasi gratis dan solusi terbaik untuk bisnis UMKM Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Sekarang
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="h-5 w-5 mr-2" />
              Jadwalkan Konsultasi
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="contact" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="contact">Hubungi Kami</TabsTrigger>
            <TabsTrigger value="offices">Kantor Cabang</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="support">Dukungan</TabsTrigger>
          </TabsList>

          {/* Contact Form */}
          <TabsContent value="contact" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="h-5 w-5 text-primary" />
                      Kirim Pesan
                    </CardTitle>
                    <CardDescription>
                      Isi form di bawah ini dan tim kami akan merespons dalam 24 jam
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nama Depan *</Label>
                        <Input id="firstName" placeholder="Masukkan nama depan" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nama Belakang *</Label>
                        <Input id="lastName" placeholder="Masukkan nama belakang" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="nama@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor Telepon *</Label>
                        <Input id="phone" placeholder="+62 812 3456 7890" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Nama Perusahaan/UMKM</Label>
                      <Input id="company" placeholder="Masukkan nama perusahaan" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Layanan yang Diminati *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih layanan" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Ceritakan tentang bisnis Anda dan bantuan apa yang dibutuhkan..."
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Estimasi Budget (Opsional)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih range budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5m">Di bawah Rp 5 juta</SelectItem>
                          <SelectItem value="5m-10m">Rp 5 - 10 juta</SelectItem>
                          <SelectItem value="10m-25m">Rp 10 - 25 juta</SelectItem>
                          <SelectItem value="25m-50m">Rp 25 - 50 juta</SelectItem>
                          <SelectItem value="above-50m">Di atas Rp 50 juta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Kirim Pesan
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informasi Kontak</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">{info.icon}</div>
                        <div>
                          <h4 className="font-semibold mb-2">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Media Sosial</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {socialMedia.map((social, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer">
                        <div className={`w-8 h-8 rounded-full ${social.color} flex items-center justify-center text-white text-sm font-bold`}>
                          {social.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{social.name}</div>
                          <div className="text-xs text-muted-foreground">{social.handle}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Konsultasi Gratis</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Dapatkan konsultasi gratis 30 menit untuk sesi pertama
                    </p>
                    <Button className="w-full" variant="outline">
                      Klaim Sekarang
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Office Locations */}
          <TabsContent value="offices" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Kantor Cabang Semindo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offices.map((office, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={office.image} 
                        alt={`Kantor ${office.city}`}
                        className="w-full h-48 object-cover"
                      />
                      {office.isMain && (
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-primary text-white">
                            <Building className="h-3 w-3 mr-1" />
                            Kantor Pusat
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{office.address}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{office.phone}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{office.email}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Manager: {office.manager}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          Lihat Peta
                        </Button>
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4 mr-2" />
                          Hubungi
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ekspansi Nasional</h3>
                    <p className="text-muted-foreground mb-4">
                      Kami terus berkembang untuk melayani UMKM di seluruh Indonesia. 
                      Kantor cabang baru akan segera hadir di Medan, Makassar, dan Denpasar.
                    </p>
                    <Button variant="outline">
                      Daftar Update Pembukaan Cabang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-muted/50">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Masih Ada Pertanyaan?</h3>
                  <p className="text-muted-foreground mb-4">
                    Tim customer service kami siap membantu Anda 24/7
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button>
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Live Chat
                    </Button>
                    <Button variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      Telepon
                    </Button>
                    <Button variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support */}
          <TabsContent value="support" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Pusat Bantuan & Dukungan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Chat langsung dengan tim support kami
                    </p>
                    <Badge className="bg-green-100 text-green-800 mb-4">Online 24/7</Badge>
                    <Button className="w-full">
                      Mulai Chat
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Telepon</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Hubungi hotline untuk bantuan cepat
                    </p>
                    <Badge className="bg-blue-100 text-blue-800 mb-4">08:00 - 22:00</Badge>
                    <Button className="w-full" variant="outline">
                      +62 21 1234 5678
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Kirim email untuk pertanyaan detail
                    </p>
                    <Badge className="bg-yellow-100 text-yellow-800 mb-4">Respon &lt; 24 jam</Badge>
                    <Button className="w-full" variant="outline">
                      support@semindo.co.id
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Panduan & Tutorial</CardTitle>
                    <CardDescription>
                      Akses panduan lengkap penggunaan platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer">
                      <span className="text-sm">Cara Menggunakan Self Assessment</span>
                      <Badge variant="outline">Video</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer">
                      <span className="text-sm">Panduan Booking Konsultasi</span>
                      <Badge variant="outline">PDF</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer">
                      <span className="text-sm">Tutorial Learning Hub</span>
                      <Badge variant="outline">Video</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer">
                      <span className="text-sm">Cara Mengakses Financing Hub</span>
                      <Badge variant="outline">PDF</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Status Sistem</CardTitle>
                    <CardDescription>
                      Pantau status layanan platform Semindo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Website</span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Operational
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Learning Hub</span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Operational
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Marketplace</span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Operational
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Payment Gateway</span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Operational
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;