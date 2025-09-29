import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageCircle, Calendar, MapPin, Clock, Heart, Share2, Eye, TrendingUp, Award, Star } from "lucide-react";
import SEOHead from "@/components/ui/seo-head";

const Community = () => {
  const forumCategories = [
    {
      id: "general",
      name: "Diskusi Umum",
      description: "Berbagi pengalaman dan tips bisnis UMKM",
      posts: 1247,
      members: 3456,
      icon: "💬",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: "marketing",
      name: "Marketing & Promosi",
      description: "Strategi pemasaran dan branding untuk UMKM",
      posts: 892,
      members: 2134,
      icon: "📢",
      color: "bg-green-100 text-green-800"
    },
    {
      id: "finance",
      name: "Keuangan & Investasi",
      description: "Manajemen keuangan dan akses permodalan",
      posts: 567,
      members: 1876,
      icon: "💰",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: "technology",
      name: "Teknologi & Digital",
      description: "Digitalisasi dan teknologi untuk UMKM",
      posts: 423,
      members: 1234,
      icon: "💻",
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: "export",
      name: "Ekspor & Internasional",
      description: "Panduan dan pengalaman ekspor produk",
      posts: 298,
      members: 987,
      icon: "🌍",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      id: "legal",
      name: "Legal & Sertifikasi",
      description: "Perizinan, legalitas, dan sertifikasi",
      posts: 234,
      members: 765,
      icon: "⚖️",
      color: "bg-red-100 text-red-800"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Tips Meningkatkan Penjualan Online di Marketplace",
      author: "Sarah Entrepreneur",
      avatar: "/api/placeholder/40/40",
      category: "Marketing & Promosi",
      replies: 23,
      views: 456,
      likes: 34,
      timeAgo: "2 jam lalu",
      excerpt: "Berbagi pengalaman saya meningkatkan penjualan dari 10 juta menjadi 50 juta per bulan di marketplace...",
      tags: ["marketplace", "penjualan", "tips"]
    },
    {
      id: 2,
      title: "Pengalaman Ekspor Pertama ke Malaysia - Lessons Learned",
      author: "Budi Eksportir",
      avatar: "/api/placeholder/40/40",
      category: "Ekspor & Internasional",
      replies: 18,
      views: 234,
      likes: 27,
      timeAgo: "4 jam lalu",
      excerpt: "Setelah 6 bulan persiapan, akhirnya berhasil ekspor produk kerajinan ke Malaysia. Ini yang saya pelajari...",
      tags: ["ekspor", "malaysia", "kerajinan"]
    },
    {
      id: 3,
      title: "Cara Mendapatkan Sertifikat Halal untuk Produk F&B",
      author: "Rina Kuliner",
      avatar: "/api/placeholder/40/40",
      category: "Legal & Sertifikasi",
      replies: 15,
      views: 189,
      likes: 22,
      timeAgo: "6 jam lalu",
      excerpt: "Panduan lengkap proses sertifikasi halal dari pengalaman pribadi. Biaya, waktu, dan dokumen yang diperlukan...",
      tags: ["halal", "sertifikasi", "fnb"]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Workshop Digital Marketing untuk UMKM",
      date: "2024-02-15",
      time: "09:00 - 16:00",
      location: "Jakarta Convention Center",
      type: "Workshop",
      price: "Gratis",
      participants: 156,
      maxParticipants: 200,
      speaker: "Dr. Marketing Expert",
      description: "Pelajari strategi digital marketing terkini untuk meningkatkan penjualan UMKM Anda",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Expo UMKM Nusantara 2024",
      date: "2024-02-20",
      time: "08:00 - 18:00",
      location: "ICE BSD, Tangerang",
      type: "Exhibition",
      price: "Rp 500K",
      participants: 89,
      maxParticipants: 500,
      speaker: "Multiple Speakers",
      description: "Pameran produk UMKM terbesar dengan networking session dan business matching",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Webinar: Akses Pembiayaan untuk UMKM",
      date: "2024-02-18",
      time: "19:00 - 21:00",
      location: "Online (Zoom)",
      type: "Webinar",
      price: "Gratis",
      participants: 234,
      maxParticipants: 1000,
      speaker: "Bank Indonesia",
      description: "Memahami berbagai skema pembiayaan dan cara mengaksesnya untuk UMKM",
      image: "/api/placeholder/300/200"
    }
  ];

  const industryGroups = [
    {
      name: "Kuliner & F&B",
      members: 2456,
      posts: 1234,
      description: "Komunitas pelaku usaha kuliner dan food & beverage",
      image: "/api/placeholder/60/60",
      trending: true
    },
    {
      name: "Fashion & Tekstil",
      members: 1876,
      posts: 987,
      description: "Grup untuk pengusaha fashion, tekstil, dan garment",
      image: "/api/placeholder/60/60",
      trending: false
    },
    {
      name: "Kerajinan Tangan",
      members: 1543,
      posts: 765,
      description: "Komunitas pengrajin dan produk handmade Indonesia",
      image: "/api/placeholder/60/60",
      trending: true
    },
    {
      name: "Teknologi & Startup",
      members: 1234,
      posts: 543,
      description: "Grup untuk tech startup dan digital business",
      image: "/api/placeholder/60/60",
      trending: false
    }
  ];

  const topContributors = [
    {
      name: "Sarah Entrepreneur",
      avatar: "/api/placeholder/50/50",
      posts: 156,
      likes: 2340,
      badge: "Expert Contributor",
      expertise: "Digital Marketing"
    },
    {
      name: "Budi Eksportir",
      avatar: "/api/placeholder/50/50",
      posts: 134,
      likes: 1987,
      badge: "Export Specialist",
      expertise: "International Trade"
    },
    {
      name: "Rina Kuliner",
      avatar: "/api/placeholder/50/50",
      posts: 123,
      likes: 1765,
      badge: "F&B Expert",
      expertise: "Food & Beverage"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Komunitas UMKM – Forum Diskusi & Kalender Event"
        description="Bergabunglah dengan forum UMKM, grup sektor industri, dan ikuti event seperti workshop & expo. Bangun networking untuk bisnis Anda."
        keywords="komunitas UMKM, forum diskusi, networking, event bisnis, workshop, expo"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Komunitas UMKM – Forum Diskusi & Kalender Event
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Bergabunglah dengan komunitas UMKM terbesar di Indonesia. Berbagi pengalaman, belajar dari ahli, dan bangun networking yang kuat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              <Users className="h-5 w-5 mr-2" />
              Gabung Komunitas
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="h-5 w-5 mr-2" />
              Lihat Event
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="forum" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="forum">Forum Diskusi</TabsTrigger>
            <TabsTrigger value="events">Event & Workshop</TabsTrigger>
            <TabsTrigger value="groups">Grup Industri</TabsTrigger>
            <TabsTrigger value="leaderboard">Top Contributors</TabsTrigger>
          </TabsList>

          {/* Forum Discussion */}
          <TabsContent value="forum" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Forum Categories */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Kategori Forum</h2>
                  <Button>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Buat Post Baru
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {forumCategories.map((category) => (
                    <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{category.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2">{category.name}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                            <div className="flex justify-between text-sm">
                              <span>{category.posts} posts</span>
                              <span>{category.members} members</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Recent Posts */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Diskusi Terbaru</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Card key={post.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <Avatar>
                              <AvatarImage src={post.avatar} />
                              <AvatarFallback>{post.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold hover:text-primary cursor-pointer">
                                  {post.title}
                                </h4>
                                <span className="text-sm text-muted-foreground">{post.timeAgo}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm font-medium">{post.author}</span>
                                <Badge variant="outline" className="text-xs">{post.category}</Badge>
                              </div>
                              
                              <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-1">
                                  {post.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>
                                
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    {post.views}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageCircle className="h-4 w-4" />
                                    {post.replies}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Heart className="h-4 w-4" />
                                    {post.likes}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Trending Topics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#digitalmarketing</span>
                      <Badge variant="secondary">234 posts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#ekspor</span>
                      <Badge variant="secondary">189 posts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#pembiayaan</span>
                      <Badge variant="secondary">156 posts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#sertifikasi</span>
                      <Badge variant="secondary">123 posts</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Statistik Komunitas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Members</span>
                      <span className="font-semibold">12,456</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Posts Today</span>
                      <span className="font-semibold">89</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Active Discussions</span>
                      <span className="font-semibold">234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Online Now</span>
                      <span className="font-semibold text-green-600">456</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Events & Workshops */}
          <TabsContent value="events" className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Event & Workshop Mendatang</h2>
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Buat Event
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-primary text-white">{event.type}</Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary">{event.price}</Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 line-clamp-2">{event.title}</h3>
                      
                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(event.date).toLocaleDateString('id-ID', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {event.participants}/{event.maxParticipants} peserta
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm">
                          Daftar Sekarang
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Lihat Semua Event
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Industry Groups */}
          <TabsContent value="groups" className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Grup Sektor Industri</h2>
                <Button>
                  <Users className="h-4 w-4 mr-2" />
                  Buat Grup Baru
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industryGroups.map((group, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <img 
                          src={group.image} 
                          alt={group.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{group.name}</h3>
                            {group.trending && (
                              <Badge className="bg-red-100 text-red-800 text-xs">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3">{group.description}</p>
                          
                          <div className="flex justify-between text-sm mb-4">
                            <span>{group.members.toLocaleString()} members</span>
                            <span>{group.posts} posts</span>
                          </div>
                          
                          <Button className="w-full" size="sm">
                            Gabung Grup
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Top Contributors */}
          <TabsContent value="leaderboard" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Top Contributors Bulan Ini</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topContributors.map((contributor, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="relative mb-4">
                        <Avatar className="w-20 h-20 mx-auto">
                          <AvatarImage src={contributor.avatar} />
                          <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                        </Avatar>
                        {index === 0 && (
                          <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                            <Award className="h-4 w-4 text-yellow-800" />
                          </div>
                        )}
                      </div>
                      
                      <h3 className="font-semibold mb-2">{contributor.name}</h3>
                      <Badge className="mb-3">{contributor.badge}</Badge>
                      <p className="text-sm text-muted-foreground mb-4">{contributor.expertise}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="font-bold text-lg">{contributor.posts}</div>
                          <div className="text-xs text-muted-foreground">Posts</div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">{contributor.likes.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Likes</div>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4" variant="outline" size="sm">
                        Lihat Profile
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-primary/5">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ingin Jadi Top Contributor?</h3>
                  <p className="text-muted-foreground mb-4">
                    Aktif berbagi pengalaman dan membantu sesama UMKM untuk mendapatkan badge eksklusif
                  </p>
                  <Button>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Mulai Berkontribusi
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Community;