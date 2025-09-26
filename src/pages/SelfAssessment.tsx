import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Target, TrendingUp, Award, BookOpen, DollarSign, FileCheck, BarChart3 } from "lucide-react";

const SelfAssessment = () => {
  const assessmentAreas = [
    {
      icon: BarChart3,
      title: "Analisis Bisnis",
      description: "Evaluasi model bisnis dan potensi pasar",
      questions: 15
    },
    {
      icon: DollarSign,
      title: "Kesehatan Keuangan",
      description: "Assessment kondisi finansial usaha",
      questions: 12
    },
    {
      icon: Target,
      title: "Kesiapan Digital",
      description: "Tingkat adopsi teknologi digital",
      questions: 10
    },
    {
      icon: FileCheck,
      title: "Legalitas & Sertifikasi",
      description: "Kelengkapan dokumen dan izin",
      questions: 8
    }
  ];

  const recommendations = [
    {
      category: "Usaha Mikro",
      level: "Tahap Awal",
      color: "bg-yellow-500",
      recommendations: [
        "Pelatihan Dasar Kewirausahaan",
        "Pendampingan Pembukuan Sederhana",
        "Workshop Digital Marketing",
        "Akses Pembiayaan Mikro"
      ]
    },
    {
      category: "Usaha Kecil", 
      level: "Berkembang",
      color: "bg-blue-500",
      recommendations: [
        "Sertifikasi Halal & BPOM",
        "Pelatihan Ekspor Pemula",
        "Sistem Manajemen Inventori",
        "Akses KUR & Fintech"
      ]
    },
    {
      category: "Usaha Menengah",
      level: "Siap Ekspor",
      color: "bg-green-500", 
      recommendations: [
        "Certification ISO & Export",
        "B2B Marketplace Access",
        "International Trade Training",
        "Investment Banking Access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Self-Assessment</span> AI Engine
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Evaluasi otomatis tingkat kesiapan usaha Anda dengan teknologi AI dan dapatkan rekomendasi personal
          </p>
          <Button size="lg" className="font-semibold">
            <Brain className="h-5 w-5 mr-2" />
            Mulai Assessment Gratis
          </Button>
        </div>
      </section>

      {/* Assessment Areas */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Area Assessment
            </h2>
            <p className="text-xl text-muted-foreground">
              AI engine kami akan mengevaluasi 4 aspek kritis bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{area.questions} Pertanyaan</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proses Assessment
            </h2>
            <p className="text-xl text-muted-foreground">
              Sistem AI akan menganalisis jawaban Anda dalam 3 tahap
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                <p className="text-muted-foreground">Isi kuesioner komprehensif tentang profil bisnis, kondisi keuangan, dan target pasar</p>
                <Progress value={100} className="mt-3 h-2" />
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">Machine learning menganalisis data dan membandingkan dengan database 15,000+ UMKM</p>
                <Progress value={75} className="mt-3 h-2" />
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-muted-foreground text-background flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Personalized Report</h3>
                <p className="text-muted-foreground">Dapatkan laporan detail dengan scoring, rekomendasi, dan roadmap pengembangan</p>
                <Progress value={25} className="mt-3 h-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Results */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sample Output & Rekomendasi
            </h2>
            <p className="text-xl text-muted-foreground">
              Contoh hasil assessment dan rekomendasi berdasarkan level usaha
            </p>
          </div>
          
          <Tabs defaultValue="mikro" className="w-full">
            <TabsList className="grid w-full md:grid-cols-3">
              <TabsTrigger value="mikro">Usaha Mikro</TabsTrigger>
              <TabsTrigger value="kecil">Usaha Kecil</TabsTrigger>
              <TabsTrigger value="menengah">Usaha Menengah</TabsTrigger>
            </TabsList>
            
            {recommendations.map((rec, index) => (
              <TabsContent key={index} value={rec.category.toLowerCase().split(' ')[1]} className="mt-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{rec.category}</CardTitle>
                        <CardDescription>Level: {rec.level}</CardDescription>
                      </div>
                      <div className={`w-4 h-20 rounded-full ${rec.color}`}></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Rekomendasi Prioritas:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {rec.recommendations.map((item, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-muted/50 rounded-lg">
                          <Award className="h-5 w-5 text-secondary mr-3" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dashboard Personal UMKM
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Akses hasil assessment, track progress, dan dapatkan update rekomendasi secara real-time
          </p>
          
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-sm text-muted-foreground">Monitor perkembangan bisnis real-time</p>
                </div>
                <div>
                  <BookOpen className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Learning Path</h3>
                  <p className="text-sm text-muted-foreground">Modul pembelajaran yang dipersonalisasi</p>
                </div>
                <div>
                  <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Action Plan</h3>
                  <p className="text-sm text-muted-foreground">Roadmap pengembangan usaha</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SelfAssessment;