"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Tag, Share2, Facebook, Twitter, Linkedin, Mail, Home, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const mockBlogPosts = [
  {
    id: 1,
    title: "Diş İmplantı Sonrası Bakım: Bilmeniz Gerekenler",
    excerpt: "Diş implantı tedavisi sonrasında doğru bakım yapmak, tedavinin başarısını ve implantın ömrünü önemli ölçüde etkiler. Bu yazıda implant sonrası bakım sürecini detaylıca ele alıyoruz.",
    image: "/dis.png",
    author: "Dr. Aykut Arık",
    date: "15 Ocak 2025",
    readTime: "5 dk",
    category: "İmplantoloji",
    slug: "dis-implanti-sonrasi-bakim",
    content: `
      <p>Diş implantı tedavisi, eksik dişlerin yerine kalıcı ve doğal görünümlü çözümler sunan modern bir diş hekimliği uygulamasıdır. Ancak implantın başarısı sadece cerrahi işlemle sınırlı değildir; tedavi sonrası bakım süreci de en az o kadar önemlidir.</p>
      
      <h2>İmplant Sonrası İlk 24 Saat</h2>
      <p>İmplant yerleştirildikten sonraki ilk 24 saat, iyileşme sürecinin en kritik dönemidir. Bu süreçte dikkat edilmesi gereken önemli noktalar:</p>
      <ul>
        <li>İmplant bölgesine soğuk kompres uygulayın</li>
        <li>Reçete edilen ilaçları düzenli olarak kullanın</li>
        <li>Sigara ve alkol kullanımından kaçının</li>
        <li>Yumuşak gıdalar tüketin</li>
        <li>İmplant bölgesini fırçalamayın</li>
      </ul>
      
      <h2>İyileşme Döneminde Bakım</h2>
      <p>İmplantın çene kemiği ile kaynaşması (osseointegrasyon) süreci genellikle 3-6 ay sürer. Bu dönemde:</p>
      <ul>
        <li>Düzenli ağız hijyeni sağlayın</li>
        <li>Yumuşak kıllı diş fırçası kullanın</li>
        <li>İmplant çevresini özel temizleme araçlarıyla temizleyin</li>
        <li>Düzenli kontrolleri aksatmayın</li>
      </ul>
      
      <h2>Uzun Vadeli Bakım</h2>
      <p>İmplant yerleştirildikten ve üzerine kron takıldıktan sonra, implantın uzun ömürlü olması için düzenli bakım şarttır:</p>
      <ul>
        <li>Günlük diş fırçalama ve diş ipi kullanımı</li>
        <li>Yılda iki kez profesyonel temizlik</li>
        <li>Düzenli diş hekimi kontrolleri</li>
        <li>Sigara kullanımından kaçınma</li>
      </ul>
      
      <p>Doğru bakım ile diş implantları onlarca yıl sorunsuz bir şekilde kullanılabilir. Kliniğimizde, implant sonrası bakım konusunda hastalarımıza detaylı rehberlik sağlıyoruz.</p>
    `,
  },
  {
    id: 2,
    title: "Ağız Hijyeni İçin 10 Altın Kural",
    excerpt: "Sağlıklı dişler ve diş etleri için günlük ağız hijyeni rutininizde dikkat etmeniz gereken önemli noktalar. Uzman diş hekimlerimizden pratik öneriler.",
    image: "/Teeth W.png",
    author: "DT. Meryem Yardımcı",
    date: "12 Ocak 2025",
    readTime: "4 dk",
    category: "Ağız Bakımı",
    slug: "agiz-hijyeni-altin-kurallar",
    content: `
      <p>Sağlıklı bir ağız ve diş yapısı, genel sağlığınızın önemli bir parçasıdır. Günlük ağız hijyeni rutininizde dikkat etmeniz gereken 10 altın kural:</p>
      
      <h2>1. Doğru Fırçalama Tekniği</h2>
      <p>Dişlerinizi günde en az iki kez, tercihen sabah ve akşam fırçalayın. Fırçalama süresi en az 2 dakika olmalıdır.</p>
      
      <h2>2. Yumuşak Kıllı Fırça Kullanın</h2>
      <p>Sert kıllı fırçalar diş etlerine zarar verebilir. Yumuşak veya orta sertlikte kıllı fırçalar tercih edin.</p>
      
      <h2>3. Diş İpi Kullanımı</h2>
      <p>Günde en az bir kez diş ipi kullanarak diş aralarını temizleyin. Bu, fırçanın ulaşamadığı bölgeleri temizler.</p>
      
      <h2>4. Dil Temizliği</h2>
      <p>Dil yüzeyinde biriken bakteriler ağız kokusuna neden olabilir. Dil temizleyici kullanarak dilinizi temizleyin.</p>
      
      <h2>5. Florürlü Diş Macunu</h2>
      <p>Florür, diş çürüklerini önlemeye yardımcı olur. Florürlü diş macunu kullanın.</p>
      
      <h2>6. Ağız Gargarası</h2>
      <p>Antibakteriyel ağız gargarası kullanarak ağız hijyeninizi destekleyin.</p>
      
      <h2>7. Düzenli Kontroller</h2>
      <p>Yılda en az iki kez diş hekimi kontrolü yaptırın.</p>
      
      <h2>8. Sağlıklı Beslenme</h2>
      <p>Şekerli ve asitli gıdalardan kaçının. Bol su için ve lifli gıdalar tüketin.</p>
      
      <h2>9. Sigara ve Alkol Kullanımından Kaçının</h2>
      <p>Sigara ve aşırı alkol kullanımı ağız sağlığını olumsuz etkiler.</p>
      
      <h2>10. Fırçayı Düzenli Değiştirin</h2>
      <p>Diş fırçanızı 3-4 ayda bir değiştirin veya kılları yıprandığında yenileyin.</p>
      
      <p>Bu kurallara uyarak sağlıklı dişlere ve güzel bir gülüşe sahip olabilirsiniz.</p>
    `,
  },
  {
    id: 3,
    title: "Çocuklarda Diş Fırçalama Alışkanlığı Nasıl Kazandırılır?",
    excerpt: "Çocuklarınıza diş fırçalama alışkanlığı kazandırmak için ebeveynlerin bilmesi gerekenler. Yaş gruplarına göre öneriler ve pratik ipuçları.",
    image: "/dis.png",
    author: "DT. Meryem Yardımcı",
    date: "10 Ocak 2025",
    readTime: "6 dk",
    category: "Pedodonti",
    slug: "cocuklarda-dis-fircalama-aliskanligi",
    content: `
      <p>Çocuklarda diş fırçalama alışkanlığı kazandırmak, ebeveynlerin karşılaştığı önemli bir görevdir. Bu alışkanlık, çocukların yaşam boyu sağlıklı dişlere sahip olması için kritik öneme sahiptir.</p>
      
      <h2>Yaş Gruplarına Göre Yaklaşım</h2>
      
      <h3>0-2 Yaş</h3>
      <p>İlk dişler çıktığında, yumuşak bir bez veya özel bebek diş fırçası ile temizlemeye başlayın. Bebekler için florürsüz diş macunu kullanın.</p>
      
      <h3>2-6 Yaş</h3>
      <p>Bu yaş grubunda çocuklar kendi başlarına fırçalamayı öğrenmeye başlar. Ebeveynler gözetiminde ve yardımla fırçalama yapılmalıdır. Eğlenceli diş fırçaları ve çocuk dostu diş macunları kullanın.</p>
      
      <h3>6-12 Yaş</h3>
      <p>Çocuklar artık kendi başlarına fırçalayabilir, ancak ebeveyn kontrolü hala önemlidir. Düzenli fırçalama rutini oluşturun.</p>
      
      <h2>Alışkanlık Kazandırma İpuçları</h2>
      <ul>
        <li>Eğlenceli diş fırçaları ve çocuk dostu diş macunları seçin</li>
        <li>Şarkılar veya oyunlarla fırçalamayı eğlenceli hale getirin</li>
        <li>Kendiniz de fırçalayarak örnek olun</li>
        <li>Ödül sistemi kullanın (çıkartma, küçük hediyeler)</li>
        <li>Hikayeler ve kitaplarla diş sağlığını öğretin</li>
        <li>Düzenli diş hekimi ziyaretleri yapın</li>
      </ul>
      
      <p>Sabırlı ve tutarlı bir yaklaşımla, çocuklarınıza diş fırçalama alışkanlığını kazandırabilirsiniz.</p>
    `,
  },
  {
    id: 4,
    title: "Zirkonyum Kaplama mı Porselen Kaplama mı?",
    excerpt: "Diş kaplama seçenekleri arasında karar verirken dikkat edilmesi gereken faktörler. Zirkonyum ve porselen kaplamaların avantaj ve dezavantajları.",
    image: "/Teeth W.png",
    author: "Dr. Aykut Arık",
    date: "8 Ocak 2025",
    readTime: "7 dk",
    category: "Estetik Diş Hekimliği",
    slug: "zirkonyum-porselen-kaplama-karsilastirma",
    content: `
      <p>Diş kaplama tedavisinde zirkonyum ve porselen, en popüler iki seçenektir. Her ikisinin de kendine özgü avantajları vardır.</p>
      
      <h2>Zirkonyum Kaplamalar</h2>
      <p>Zirkonyum kaplamalar, yüksek dayanıklılık ve estetik görünüm sunar. Özellikle arka dişler için idealdir.</p>
      
      <h3>Avantajları:</h3>
      <ul>
        <li>Yüksek dayanıklılık</li>
        <li>Metal içermez, alerji riski düşüktür</li>
        <li>Doğal diş rengine yakın görünüm</li>
        <li>Uzun ömürlü</li>
      </ul>
      
      <h2>Porselen Kaplamalar</h2>
      <p>Porselen kaplamalar, mükemmel estetik sonuçlar sunar ve ön dişler için tercih edilir.</p>
      
      <h3>Avantajları:</h3>
      <ul>
        <li>Mükemmel estetik görünüm</li>
        <li>Doğal diş minesine benzer yarı saydamlık</li>
        <li>Leke tutmaz</li>
        <li>Biyolojik uyumluluk</li>
      </ul>
      
      <h2>Hangi Seçeneği Tercih Etmelisiniz?</h2>
      <p>Karar verirken diş hekiminizle görüşmeniz önemlidir. Dişin konumu, estetik beklentileriniz ve bütçeniz gibi faktörler seçimi etkiler.</p>
    `,
  },
  {
    id: 5,
    title: "Hamilelikte Diş Sağlığı: Önemli Bilgiler",
    excerpt: "Hamilelik döneminde diş sağlığının önemi ve dikkat edilmesi gerekenler. Gebelikte yapılabilecek ve yapılmaması gereken diş tedavileri hakkında bilgiler.",
    image: "/dis.png",
    author: "DT. Meryem Yardımcı",
    date: "5 Ocak 2025",
    readTime: "5 dk",
    category: "Ağız Bakımı",
    slug: "hamilelikte-dis-sagligi",
    content: `
      <p>Hamilelik döneminde diş sağlığı, hem anne hem de bebek için önemlidir. Hormonal değişiklikler, ağız sağlığını etkileyebilir.</p>
      
      <h2>Hamilelikte Diş Sağlığı Sorunları</h2>
      <p>Hamilelik sırasında yaygın görülen diş sağlığı sorunları:</p>
      <ul>
        <li>Diş eti iltihabı (gingivitis)</li>
        <li>Hamilelik tümörleri</li>
        <li>Diş çürükleri</li>
        <li>Diş hassasiyeti</li>
      </ul>
      
      <h2>Hamilelikte Yapılabilecek Tedaviler</h2>
      <ul>
        <li>Rutin temizlik ve kontroller</li>
        <li>Diş dolguları (ikinci trimester tercih edilir)</li>
        <li>Acil diş tedavileri</li>
        <li>Diş çekimi (gerekli durumlarda)</li>
      </ul>
      
      <h2>Hamilelikte Yapılmaması Gerekenler</h2>
      <ul>
        <li>Estetik tedaviler (ertelenebilir)</li>
        <li>Röntgen (acil durumlar hariç)</li>
        <li>Genel anestezi</li>
        <li>Beyazlatma işlemleri</li>
      </ul>
      
      <h2>Bakım Önerileri</h2>
      <p>Hamilelik sırasında ağız hijyenine özellikle dikkat edin. Düzenli fırçalama, diş ipi kullanımı ve diş hekimi kontrolleri önemlidir.</p>
    `,
  },
  {
    id: 6,
    title: "Diş Beyazlatma Yöntemleri ve Sonuçları",
    excerpt: "Profesyonel diş beyazlatma işlemleri ve evde uygulanabilecek yöntemler. Hangi yöntemin size uygun olduğunu öğrenin.",
    image: "/Teeth W.png",
    author: "Dr. Aykut Arık",
    date: "3 Ocak 2025",
    readTime: "6 dk",
    category: "Estetik Diş Hekimliği",
    slug: "dis-beyazlatma-yontemleri",
    content: `
      <p>Diş beyazlatma, estetik diş hekimliğinin en popüler uygulamalarından biridir. Farklı yöntemler ve sonuçlar hakkında bilgi sahibi olmak önemlidir.</p>
      
      <h2>Ofis İçi Beyazlatma</h2>
      <p>Profesyonel diş hekimi kontrolünde yapılan ofis içi beyazlatma, en hızlı ve etkili yöntemdir.</p>
      <ul>
        <li>Tek seansta sonuç</li>
        <li>8-10 ton açılma</li>
        <li>Güvenli ve kontrollü</li>
        <li>Hemen görünen sonuçlar</li>
      </ul>
      
      <h2>Ev Tipi Beyazlatma</h2>
      <p>Kişiye özel hazırlanan plaklar ile evde uygulanan beyazlatma yöntemi.</p>
      <ul>
        <li>Daha ekonomik</li>
        <li>Kademeli sonuçlar</li>
        <li>2-4 hafta süre</li>
        <li>Rahat uygulama</li>
      </ul>
      
      <h2>Kombine Beyazlatma</h2>
      <p>Ofis içi ve ev tipi beyazlatmanın birleştirilmesi ile en etkili sonuçlar elde edilir.</p>
      
      <h2>Sonuçlar ve Bakım</h2>
      <p>Beyazlatma sonuçları genellikle 1-3 yıl sürer. Sonuçların kalıcılığı için:</p>
      <ul>
        <li>Renkli gıdalardan kaçının</li>
        <li>Sigara kullanmayın</li>
        <li>Düzenli ağız hijyeni sağlayın</li>
        <li>Periyodik touch-up yaptırın</li>
      </ul>
    `,
  },
];

const categories = [
  "İmplantoloji",
  "Estetik Diş Hekimliği",
  "Ağız Bakımı",
  "Pedodonti",
  "Ortodonti",
];

const popularPosts = [
  {
    title: "Diş İmplantı Sonrası Bakım: Bilmeniz Gerekenler",
    date: "15 Ocak 2025",
    slug: "dis-implanti-sonrasi-bakim",
  },
  {
    title: "Ağız Hijyeni İçin 10 Altın Kural",
    date: "12 Ocak 2025",
    slug: "agiz-hijyeni-altin-kurallar",
  },
  {
    title: "Zirkonyum Kaplama mı Porselen Kaplama mı?",
    date: "8 Ocak 2025",
    slug: "zirkonyum-porselen-kaplama-karsilastirma",
  },
];

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = use(params);
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
          <p className="text-gray-600 mb-6">Aradığınız blog yazısı bulunamadı.</p>
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Blog Sayfasına Dön
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = mockBlogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-end px-4 md:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-6">
            <nav className="flex items-center space-x-2 text-sm text-white/80">
              <Link href="/" className="flex items-center hover:text-white transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <div className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-white/60" />
                <Link href="/blog" className="hover:text-white transition-colors">
                  Sağlık Rehberi
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-white/60" />
                <span className="text-white font-medium">{post.title}</span>
              </div>
            </nav>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/30">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} okuma</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Share Buttons */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">Paylaş:</span>
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-none"
              >
                <div
                  className="text-gray-700 leading-relaxed space-y-6 blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </motion.div>

              {/* Author Info */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {post.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{post.author}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {post.category} alanında uzman diş hekimi
                    </p>
                    <Link
                      href="#"
                      className="text-sm text-green-600 hover:text-green-700 font-medium"
                    >
                      Tüm yazıları görüntüle →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12 pt-12 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Yazılar</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.map((relatedPost) => {
                      const fullPost = mockBlogPosts.find((p) => p.slug === relatedPost.slug);
                      if (!fullPost) return null;
                      return (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="group"
                        >
                          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                              <Image
                                src={fullPost.image}
                                alt={fullPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                            <div className="p-4">
                              <span className="text-xs font-medium text-green-600 mb-2 block">
                                {fullPost.category}
                              </span>
                              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                                {fullPost.title}
                              </h3>
                              <p className="text-xs text-gray-500">{fullPost.date}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Kategoriler</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="flex items-center justify-between text-gray-700 hover:text-green-600 transition-colors py-2"
                        >
                          <span className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            {category}
                          </span>
                          <span className="text-sm text-gray-400">({Math.floor(Math.random() * 10) + 1})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popüler Yazılar</h3>
                  <ul className="space-y-4">
                    {popularPosts.map((popularPost, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/${popularPost.slug}`}
                          className="block group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 mb-1">
                                {popularPost.title}
                              </h4>
                              <p className="text-xs text-gray-500">{popularPost.date}</p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Bülten</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Yeni yazılarımızdan haberdar olmak için e-posta adresinizi girin.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="E-posta adresiniz"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm">
                      Abone Ol
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

