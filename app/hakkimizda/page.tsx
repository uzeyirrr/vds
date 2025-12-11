"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Building2, Globe, Users, Sparkles, Shield, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function Hakkimizda() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: "Hakkımızda" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Hakkımızda
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              VDS Diş Kliniği
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              2025 yılında, diş hekimliği alanında uzun yıllara dayanan deneyime sahip ve sektördeki uzmanlığıyla tanınan 
              Dr. Aykut Arık'ın liderliğinde kurulmuştur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/clinic iç foto.jpg"
                  alt="VDS Diş Kliniği"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                İstanbul'un Merkezi Konumunda
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                İstanbul'un merkezi konumunda, Bağcılar, (Güneşli, Yavuz Sultan Selim Caddesi No:12A, 34200 Bağcılar, İstanbul, Türkiye) 
                adresinde bulunan VDS Diş Kliniği, misafirlerine uluslararası standartlarda hizmet sunan, 
                İstanbul'un en gelişmiş teknoloji odaklı kliniklerinden biridir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                350 m²'lik modern bir alana yayılan klinik, estetik diş hekimliğinden karmaşık diş cerrahi işlemlerine kadar 
                çok çeşitli diş hekimliği uygulamaları gerçekleştirmektedir.
              </p>
              <div className="flex items-start gap-3 pt-4">
                <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Adres</p>
                  <p className="text-gray-600">
                    Güneşli, Yavuz Sultan Selim Caddesi No:12A<br />
                    34200 Bağcılar, İstanbul, Türkiye
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                İleri Diş Teknolojilerinin Temelleri
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                350 m² alana sahip VDS Diş Kliniği, Bağcılar'da lider konumda bir diş kliniğidir ve İstanbul'un diş sağlığı sektöründe çığır açan bir tesistir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Klinik, geniş, samimi ve iyi aydınlatılmış bir alanda yer alan, en son teknolojilerle donatılmış, son teknoloji ürünü bir tıbbi tesistir 
                ve aynı zamanda misafirlerimizin konforunu ve rahatlığını da gözetir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sağlık sektöründeki en son trendler olan 3D baskı ve lazer diş hekimliği gibi fütüristik yöntemleri kullanan klinik, 
                en yüksek kalitede bakım sunma vaadini yerine getirmektedir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/labarotuvar 1.png"
                  alt="İleri Teknoloji"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comfort Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Konfor ve Sağlık Ön Planda
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              VDS Diş Kliniğimizde, ferah, ileri teknoloji ve samimi bir ortamda sağlık ve konfor ön planda tutulur; 
              böylece her misafirimize olağanüstü bir tedavi güvencesi sağlanır.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kliniğimizin, gülümsemeleri değiştirmeye ve misafirlerimizin güvenini geri kazandırmaya olan bağlılığının bir göstergesi olarak referans gösterilmiştir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dünya Çapında Markalar İle İş Ortaklığı
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              VDS Diş Kliniği, diş muayenehanelerinde, yalnızca en kaliteli diş malzemelerini kullanır. 
              Diş tedavisinde kullandığımız en iyi markalardan biri, dünya çapında mükemmel güvenilirliğiyle tanınan bir şirketlere öncelik verilir.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Straumann", icon: Award },
              { name: "Ivoclar", icon: Sparkles },
              { name: "IPS e.max", icon: Shield },
              { name: "3Shape", icon: Building2 },
            ].map((partner, index) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Teknolojiyi doğanın estetiğiyle birleştiren bu uzun ömürlü, yüksek performanslı malzemeler, 
              güzel, uzun süreli ve doğal görünümlü bir gülümsemenin temelini oluşturur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* International Services Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Uluslararası Tedavi Deneyimi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              VDS Diş Kliniği'nde Dünya Çapında Mükemmel Hizmet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/clinic iç foto.2.jpg"
                  alt="Uluslararası Hizmetler"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Uluslararası Misafir Hizmetleri
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                VDS Diş Kliniğimizde, her misafirimize tamamen kişiselleştirilmiş bir tedavi protokolü sunuyoruz. 
                Son teknoloji tesisimiz, uzman hekimlerimiz ve birinci sınıf ekipmanlarımız sayesinde, 
                İstanbul'daki misafirlerimize yalnızca benzersiz bir tedavi deneyimi değil, aynı zamanda güvenli ve konforlu bir deneyim sunuyoruz.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "VIP Transfer, Ulaşım ve Konaklama",
                description: "Tüm misafirlerimizin İstanbul'daki diş tedavisi süreçlerini konforlu hale getirmek için VIP transfer ve otel konaklama hizmetlerini de sağlıyoruz. Misafirlerimiz, otellerinden kliniklere mümkün olan en konforlu şekilde şoförlü araçla götürülürken diş tedavilerine tamamen odaklanma fırsatı buluyorlar.",
                icon: Building2,
              },
              {
                title: "Çok Dilli Destek",
                description: "Tüm misafirlerimize tedavi süreci boyunca, çeşitli dillerde yetkin profesyonel tercümanlarımız ile, misafirlerimizin doktorlarımızla iletişim kurma gereksinimlerini karşılıyoruz ve böylece dil engelleri tamamen ortadan kaldırıyoruz.",
                icon: Globe,
              },
              {
                title: "Modern Teknoloji ve Yenilikçi Yöntemler",
                description: "Diş tedavisi, estetik diş hekimliği ve implantoloji alanlarında dünya çapında tanınmış uzmanlarla işbirliği yaparak müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Amacımız, tedavi sürecini tüm misafirlerimize konforlu hale getirmektir.",
                icon: Sparkles,
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-green-50 p-6 rounded-xl border border-green-100"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desteklediğimiz Diller
            </h2>
            <p className="text-lg text-gray-600">
              Türkçe, İngilizce, Arapça, Rusça ve daha birçok dilde uzman olan ekip üyelerimiz, 
              sürecin her aşamasında size destek olmak için burada yer alıyor.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Türkçe", flag: "🇹🇷" },
              { name: "İngilizce", flag: "🇬🇧" },
              { name: "Arapça", flag: "🇸🇦" },
              { name: "Rusça", flag: "🇷🇺" },
            ].map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center"
              >
                <div className="text-4xl mb-3">{lang.flag}</div>
                <h3 className="font-semibold text-gray-900">{lang.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "350 m²", label: "Modern Alan" },
              { value: "2025", label: "Kuruluş Yılı" },
              { value: "100%", label: "Hasta Memnuniyeti" },
              { value: "24/7", label: "Destek Hizmeti" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

