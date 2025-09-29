import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, Clock, Eye, Heart, Share2, BookOpen, TrendingUp, Award, Filter, Tag } from "lucide-react";
import SEOHead from "@/components/ui/seo-head";

const Blog = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Strategi Digital Marketing UMKM di Era Post-Pandemic",
      excerpt: "Pandemi mengubah perilaku konsumen secara drastis. Pelajari strategi digital marketing yang efektif untuk UMKM di era new normal.",
      author: "Dr. Sarah Marketing",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-02-10",
      readTime: "8 min",
      views: 2456,
      likes: 189,
      category: "Digital Marketing",
      image: "/api/placeholder/600/300",
      tags: ["digital marketing", "pandemic", "strategy", "umkm"],
      featured: true
    },
    {
      id: 2,
      title: "Riset Pasar: Tren Konsumen Indonesia 2024",
      excerpt: "Analisis mendalam tentang perubahan perilaku konsumen Indonesia dan peluang bisnis yang muncul di tahun 2024.",
      author: "Tim Riset Semindo",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-02-08",
      readTime: "12 min",
      views: 3421,
      likes: 267,
      category: "Riset Pasar",
      image: "/api/placeholder/600/300",
      tags: ["riset pasar", "tren konsumen", "2024", "indonesia"],
      featured: true
    }
  ];

  const articles = [
    {
      id: 3,
      title: "Cara Mendapatkan Sertifikat Halal untuk Produk UMKM",
      excerpt: "Panduan lengkap proses sertifikasi halal, dari persiapan dokumen hingga audit. Termasuk biaya dan timeline yang diperlukan.",
      author: "Ahmad Halal Expert",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-02-05",
      readTime: "6 min",
      views: 1876,
      likes: 143,
      category: "Legal & Sertifikasi",
      image: "/api/placeholder/400/250",
      tags: ["halal", "sertifikasi", "legal", "fnb"]
    },
    {
      id: 4,
      title: "Kisah Sukses: Dari Warung Kecil ke Ekspor Internasional",
      excerpt: "Perjalanan inspiratif Ibu Sari yang mengembangkan usaha keripik singkong dari warung kecil hingga berhasil ekspor ke 5 negara.",
      author: "Redaksi Semindo",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-02-03",
      readTime: "10 min",
      views: 2134,
      likes: 298,
      category: "Success Story",
      image: "/api/placeholder/400/250",
      tags: ["success story", "ekspor", "inspirasi", "umkm"]
    },
    {
      id: 5,
      title: "Teknologi AI untuk Optimasi Inventory UMKM",
      excerpt: "Bagaimana teknologi AI dapat membantu UMKM mengoptimalkan manajemen inventory dan mengurangi waste hingga 30%.",
      author: "Tech Team Semindo",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-02-01",
      readTime: "7 min",
      views: 1543,
      likes: 187,
      category: "Teknologi",
      image: "/api/placeholder/400/250",
      tags: ["ai", "teknologi", "inventory", "optimasi"]
    },
    {
      id: 6,
      title: "Analisis Peluang Ekspor Produk Kerajinan ke Eropa",
      excerpt: "Riset mendalam tentang peluang ekspor produk kerajinan Indonesia ke pasar Eropa, termasuk regulasi dan strategi market entry.",
      author: "Export Research Team",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-01-28",
      readTime: "15 min",
      views: 987,
      likes: 156,
      category: "Riset Pasar",
      image: "/api/placeholder/400/250",
      tags: ["ekspor", "kerajinan", "eropa", "riset"]
    },
    {
      id: 7,
      title: "Tips Mengelola Keuangan UMKM dengan Aplikasi Digital",
      excerpt: "Rekomendasi aplikasi digital terbaik untuk mengelola keuangan UMKM, dari pencatatan transaksi hingga laporan keuangan.",
      author: "Finance Expert",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-01-25",
      readTime: "9 min",
      views: 2876,
      likes: 234,
      category: "Keuangan",
      image: "/api/placeholder/400/250",
      tags: ["keuangan", "aplikasi", "digital", "manajemen"]
    },
    {
      id: 8,
      title: "Strategi Branding untuk UMKM dengan Budget Terbatas",
      excerpt: "Cara membangun brand yang kuat untuk UMKM tanpa mengeluarkan budget besar. Termasuk tips desain dan strategi komunikasi.",
      author: "Brand Strategist",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "2024-01-22",
      readTime: "11 min",
      views: 1654,
      likes: 201,
      category: "Branding",
      image: "/api/placeholder/400/250",
      tags: ["branding", "budget", "strategi", "desain"]
    }
  ];

  const categories = [
    { name: "Semua", count: 156, active: true },
    { name: "Digital Marketing", count: 34, active: false },
    { name: "Riset Pasar", count: 28, active: false },
    { name: "Success Story", count: 23, active: false },
    { name: "Teknologi", count: 19, active: false },
    { name: "Keuangan", count: 17, active: false },
    { name: "Legal & Sertifikasi", count: 15, active: false },
    { name: "Branding", count: 12, active: false },
    { name: "Ekspor", count: 8, active: false }
  ];

  const popularTags = [
    "digital marketing", "umkm", "ekspor", "teknologi", "keuangan", 
    "sertifikasi", "branding", "riset pasar", "success story", "ai",
    "halal", "inventory", "aplikasi", "strategi", "budget"
  ];

  const marketResearch = [
    {
      title: "Laporan Tren E-commerce Indonesia Q1 2024",
      description: "Analisis komprehensif pertumbuhan e-commerce dan peluang untuk UMKM",
      downloadCount: 1234,
      fileSize: "2.5 MB",
      format: "PDF",
      price: "Gratis",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Riset Perilaku Konsumen Gen Z Indonesia",
      description: "Insight mendalam tentang preferensi dan pola belanja generasi Z",
      downloadCount: 987,
      fileSize: "1.8 MB",
      format: "PDF",
      price: "Gratis",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Analisis Pasar Ekspor Produk Halal 2024",
      description: "Peluang ekspor produk halal Indonesia ke pasar global",
      downloadCount: 756,
      fileSize: "3.2 MB",
      format: "PDF",
      price: "Gratis",
      image: "/api/placeholder/300/200"
    }
  ];

  const successStories = [
    {
      title: "Batik Modern: Dari Rumahan ke Brand Internasional",
      business: "Batik Nusantara Co.",
      growth: "500% dalam 2 tahun",
      image: "/api/placeholder/300/200",
      excerpt: "Bagaimana inovasi desain dan digital marketing mengangkat batik tradisional ke pasar global"
    },
    {
      title: "Kopi Lokal: Menembus Pasar Specialty Coffee",
      business: "Kopi Gunung Semeru",
      growth: "300% revenue growth",
      image: "/api/placeholder/300/200",
      excerpt: "Perjalanan dari petani kopi lokal menjadi brand specialty coffee yang diakui internasional"
    },
    {
      title: "Kerajinan Bambu: Ekspor ke 15 Negara",
      business: "Bamboo Craft Indonesia",
      growth: "Ekspor ke 15 negara",
      image: "/api/placeholder/300/200",
      excerpt: "Inovasi produk kerajinan bambu yang ramah lingkungan dan diminati pasar global"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Blog Semindo – Artikel Bisnis, Riset Pasar, & Tips UMKM"
        description="Baca insight terbaru tentang bisnis, teknologi, riset pasar, dan kisah sukses UMKM. Dapatkan tips praktis untuk mengembangkan usaha."
        keywords="blog UMKM, artikel bisnis, riset pasar, tips UMKM, insight bisnis, success story"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Blog Semindo – Artikel Bisnis, Riset Pasar, & Tips UMKM
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Temukan insight terbaru, riset pasar, dan kisah sukses UMKM. Dapatkan tips praktis untuk mengembangkan bisnis Anda.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Cari artikel, tips, atau topik..." 
              className="pl-10"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="articles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="articles">Artikel Terbaru</TabsTrigger>
            <TabsTrigger value="research">Riset Pasar</TabsTrigger>
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
            <TabsTrigger value="tips">Tips Praktis</TabsTrigger>
          </TabsList>

          {/* Articles */}
          <TabsContent value="articles" className="space-y-8">
            {/* Featured Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Artikel Unggulan</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-white">Featured</Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(article.publishDate).toLocaleDateString('id-ID')}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 hover:text-primary cursor-pointer">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={article.authorAvatar} />
                            <AvatarFallback>{article.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-medium">{article.author}</div>
                            <div className="text-xs text-muted-foreground">{article.readTime} read</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {article.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {article.likes}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Articles List */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Semua Artikel</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      Terbaru
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {articles.map((article) => (
                    <Card key={article.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">{article.category}</Badge>
                              <span className="text-xs text-muted-foreground">
                                {new Date(article.publishDate).toLocaleDateString('id-ID')}
                              </span>
                            </div>
                            
                            <h4 className="font-semibold mb-2 hover:text-primary cursor-pointer">
                              {article.title}
                            </h4>
                            
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Avatar className="w-6 h-6">
                                  <AvatarImage src={article.authorAvatar} />
                                  <AvatarFallback>{article.author[0]}</AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-muted-foreground">{article.author}</span>
                                <span className="text-xs text-muted-foreground">• {article.readTime}</span>
                              </div>
                              
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Eye className="h-3 w-3" />
                                  {article.views}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Heart className="h-3 w-3" />
                                  {article.likes}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button variant="outline" size="lg">
                    Muat Artikel Lainnya
                  </Button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Kategori</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-muted ${category.active ? 'bg-primary/10 text-primary' : ''}`}>
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tag className="h-5 w-5" />
                      Popular Tags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-primary hover:text-white">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Trending This Week
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium hover:text-primary cursor-pointer mb-1">
                        5 Strategi Marketing untuk UMKM
                      </div>
                      <div className="text-xs text-muted-foreground">2,456 views</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium hover:text-primary cursor-pointer mb-1">
                        Cara Ekspor Produk ke Singapura
                      </div>
                      <div className="text-xs text-muted-foreground">1,876 views</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium hover:text-primary cursor-pointer mb-1">
                        Tips Mengelola Cashflow UMKM
                      </div>
                      <div className="text-xs text-muted-foreground">1,543 views</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Market Research */}
          <TabsContent value="research" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Riset Pasar & Laporan Industri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketResearch.map((research, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={research.image} 
                        alt={research.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-green-600 text-white">{research.price}</Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">{research.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{research.description}</p>
                      
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span>Format:</span>
                          <span className="font-medium">{research.format}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Size:</span>
                          <span className="font-medium">{research.fileSize}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Downloads:</span>
                          <span className="font-medium">{research.downloadCount.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Download Laporan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Success Stories */}
          <TabsContent value="stories" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Kisah Sukses UMKM</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {successStories.map((story, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-yellow-600 text-white">
                          <Award className="h-3 w-3 mr-1" />
                          Success Story
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{story.title}</h3>
                      <div className="text-sm text-primary font-medium mb-2">{story.business}</div>
                      <div className="text-sm text-green-600 font-medium mb-3">{story.growth}</div>
                      <p className="text-sm text-muted-foreground mb-4">{story.excerpt}</p>
                      
                      <Button variant="outline" className="w-full">
                        Baca Selengkapnya
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tips Praktis */}
          <TabsContent value="tips" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Tips Praktis UMKM</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">💡 Tips Marketing</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Manfaatkan media sosial untuk branding</li>
                    <li>• Buat konten yang engaging dan konsisten</li>
                    <li>• Gunakan influencer micro untuk promosi</li>
                    <li>• Optimalkan SEO untuk website bisnis</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">💰 Tips Keuangan</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Pisahkan rekening pribadi dan bisnis</li>
                    <li>• Catat semua transaksi harian</li>
                    <li>• Buat laporan keuangan bulanan</li>
                    <li>• Siapkan dana darurat minimal 3 bulan</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">🌍 Tips Ekspor</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Riset pasar target dengan mendalam</li>
                    <li>• Pastikan produk sesuai standar internasional</li>
                    <li>• Siapkan dokumen ekspor yang lengkap</li>
                    <li>• Jalin hubungan dengan freight forwarder</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">⚖️ Tips Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Daftarkan merek dagang produk</li>
                    <li>• Lengkapi izin usaha yang diperlukan</li>
                    <li>• Buat kontrak kerja yang jelas</li>
                    <li>• Pahami regulasi industri Anda</li>
                  </ul>
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

export default Blog;