"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
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
  },
];

const categories = [
  "Tümü",
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

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: "Sağlık Rehberi" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Sağlık Rehberi
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Diş Sağlığı Rehberi
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Diş sağlığınız hakkında güncel bilgiler, uzman önerileri ve tedavi yöntemleri. 
              Sağlıklı gülüşler için bilmeniz gerekenler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Posts */}
              <div className="space-y-8">
                {mockBlogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200">
                              {post.category}
                            </span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        <div>
                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                            <div className="flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{post.readTime} okuma</span>
                            </div>
                          </div>

                          {/* Read More */}
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm group"
                          >
                            Devamını Oku
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center gap-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
                  1
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
                  2
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
                  3
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
                  Sonraki
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Search */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Ara</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Blog yazılarında ara..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Kategoriler</h3>
                  <ul className="space-y-2">
                    {categories.slice(1).map((category, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="flex items-center justify-between text-gray-700 hover:text-green-600 transition-colors py-2"
                        >
                          <span className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            {category}
                          </span>
                          <span className="text-sm text-gray-400">({index + 3})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popüler Yazılar</h3>
                  <ul className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="block group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 mb-1">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500">{post.date}</p>
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

