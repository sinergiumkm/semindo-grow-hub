import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Star, MapPin, ShoppingCart, Eye, Heart, Award, Truck, Globe } from "lucide-react";
import SEOHead from "@/components/ui/seo-head";

const Marketplace = () => {
  const categories = [
    { id: "kuliner", name: "Kuliner & F&B", count: 245 },
    { id: "fashion", name: "Fashion & Tekstil", count: 189 },
    { id: "kerajinan", name: "Kerajinan Tangan", count: 156 },
    { id: "teknologi", name: "Teknologi & Digital", count: 98 },
    { id: "kesehatan", name: "Kesehatan & Kecantikan", count: 134 },
    { id: "pertanian", name: "Pertanian & Organik", count: 87 },
    { id: "otomotif", name: "Otomotif & Spare Part", count: 76 },
    { id: "elektronik", name: "Elektronik & Gadget", count: 112 }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Kopi Arabica Premium Gayo",
      seller: "CV Kopi Nusantara",
      location: "Aceh",
      price: "Rp 125.000",
      originalPrice: "Rp 150.000",
      rating: 4.8,
      reviews: 156,
      image: "/api/placeholder/300/200",
      category: "Kuliner",
      badges: ["Siap Ekspor", "Sertifikat Halal", "Organik"],
      description: "Kopi arabica premium dari dataran tinggi Gayo dengan cita rasa khas dan aroma yang menggoda."
    },
    {
      id: 2,
      name: "Batik Tulis Motif Parang",
      seller: "Batik Heritage Solo",
      location: "Solo, Jawa Tengah",
      price: "Rp 450.000",
      originalPrice: "Rp 550.000",
      rating: 4.9,
      reviews: 89,
      image: "/api/placeholder/300/200",
      category: "Fashion",
      badges: ["Siap Ekspor", "Warisan Budaya", "Handmade"],
      description: "Batik tulis asli dengan motif parang klasik, dikerjakan oleh pengrajin berpengalaman."
    },
    {
      id: 3,
      name: "Tas Anyaman Pandan Premium",
      seller: "Kerajinan Lombok Indah",
      location: "Lombok, NTB",
      price: "Rp 275.000",
      originalPrice: "Rp 325.000",
      rating: 4.7,
      reviews: 234,
      image: "/api/placeholder/300/200",
      category: "Kerajinan",
      badges: ["Siap Ekspor", "Eco-Friendly", "Handmade"],
      description: "Tas anyaman pandan berkualitas tinggi dengan desain modern dan ramah lingkungan."
    },
    {
      id: 4,
      name: "Aplikasi POS UMKM Smart",
      seller: "TechSolution Indonesia",
      location: "Jakarta",
      price: "Rp 99.000/bulan",
      originalPrice: "Rp 149.000/bulan",
      rating: 4.6,
      reviews: 412,
      image: "/api/placeholder/300/200",
      category: "Teknologi",
      badges: ["Cloud-Based", "Mobile Ready", "24/7 Support"],
      description: "Sistem POS lengkap untuk UMKM dengan fitur inventory, laporan, dan integrasi payment gateway."
    },
    {
      id: 5,
      name: "Sabun Herbal Kunyit Asli",
      seller: "Natural Beauty Care",
      location: "Yogyakarta",
      price: "Rp 35.000",
      originalPrice: "Rp 45.000",
      rating: 4.8,
      reviews: 298,
      image: "/api/placeholder/300/200",
      category: "Kesehatan",
      badges: ["BPOM", "Herbal", "Tanpa Kimia"],
      description: "Sabun herbal dari kunyit asli dengan khasiat mencerahkan dan melembabkan kulit."
    },
    {
      id: 6,
      name: "Beras Organik Premium",
      seller: "Tani Organik Nusantara",
      location: "Subang, Jawa Barat",
      price: "Rp 18.000/kg",
      originalPrice: "Rp 22.000/kg",
      rating: 4.9,
      reviews: 167,
      image: "/api/placeholder/300/200",
      category: "Pertanian",
      badges: ["Organik", "Sertifikat SNI", "Bebas Pestisida"],
      description: "Beras organik premium tanpa pestisida, ditanam dengan metode pertanian berkelanjutan."
    }
  ];

  const topSellers = [
    {
      name: "CV Kopi Nusantara",
      location: "Aceh",
      products: 24,
      rating: 4.8,
      totalSales: "2.5K+",
      verified: true,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Batik Heritage Solo",
      location: "Solo",
      products: 156,
      rating: 4.9,
      totalSales: "1.8K+",
      verified: true,
      image: "/api/placeholder/80/80"
    },
    {
      name: "TechSolution Indonesia",
      location: "Jakarta",
      products: 12,
      rating: 4.7,
      totalSales: "3.2K+",
      verified: true,
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Marketplace UMKM – Produk Unggulan & Siap Ekspor"
        description="Temukan produk unggulan UMKM binaan Semindo. Kategori lengkap dari kuliner, fashion, kerajinan, hingga teknologi. Produk siap ekspor tersedia!"
        keywords="marketplace UMKM, produk unggulan, siap ekspor, kuliner, fashion, kerajinan, teknologi"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Marketplace UMKM – Produk Unggulan & Siap Ekspor
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Temukan dan beli produk berkualitas dari UMKM binaan Semindo. Dari kuliner hingga teknologi, semua siap untuk pasar lokal dan ekspor.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Cari produk, kategori, atau nama toko..."
                className="pl-10 h-12"
              />
            </div>
            <Select>
              <SelectTrigger className="w-48 h-12">
                <SelectValue placeholder="Semua Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button size="lg" className="h-12 px-8">
              <Search className="h-4 w-4 mr-2" />
              Cari
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Kategori Produk</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} produk</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Produk Unggulan</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Terpopuler</SelectItem>
                  <SelectItem value="newest">Terbaru</SelectItem>
                  <SelectItem value="price-low">Harga Terendah</SelectItem>
                  <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                  <SelectItem value="rating">Rating Tertinggi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {product.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute top-2 right-2 flex gap-1">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">{product.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {product.location}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} ulasan)</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">oleh {product.seller}</p>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Beli Sekarang
                    </Button>
                    <Button variant="outline" size="sm">
                      Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Lihat Semua Produk
            </Button>
          </div>
        </div>
      </section>

      {/* Top Sellers */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Penjual Terpercaya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topSellers.map((seller, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img 
                      src={seller.image} 
                      alt={seller.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                    {seller.verified && (
                      <div className="absolute -top-1 -right-1 bg-primary rounded-full p-1">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-semibold mb-2">{seller.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3" />
                    {seller.location}
                  </div>
                  
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{seller.rating}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center text-sm">
                    <div>
                      <div className="font-semibold">{seller.products}</div>
                      <div className="text-muted-foreground">Produk</div>
                    </div>
                    <div>
                      <div className="font-semibold">{seller.totalSales}</div>
                      <div className="text-muted-foreground">Terjual</div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    Kunjungi Toko
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Ready Section */}
      <section className="py-12 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Globe className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Produk Siap Ekspor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Temukan produk-produk UMKM yang telah memenuhi standar internasional dan siap untuk pasar ekspor
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sertifikasi Lengkap</h3>
                <p className="text-sm text-muted-foreground">
                  Produk dengan sertifikat halal, SNI, dan standar internasional
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Truck className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Logistik Ekspor</h3>
                <p className="text-sm text-muted-foreground">
                  Dukungan pengiriman internasional dan dokumentasi ekspor
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Buyer Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Koneksi langsung dengan buyer internasional yang terpercaya
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg">
            <Globe className="h-5 w-5 mr-2" />
            Lihat Produk Siap Ekspor
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;