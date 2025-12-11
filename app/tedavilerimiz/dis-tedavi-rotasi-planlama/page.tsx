"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Award, Calendar, User, Phone, MapPin, Clock, ChevronDown, Plane, Hotel, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function DisTedaviRotasiPlanlama() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", phone: "" });
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[
            { label: "Tedavilerimiz", href: "/tedavilerimiz" },
            { label: "Diş Tedavi Rotası Planlama" }
          ]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Diş Tedavi Rotası Planlama: Bağcılar Diş Kliniği Randevu 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Emin Ellerdesiniz...
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Sağlık, hayatın en değerli unsurlarından biridir. Özellikle yurt dışında veya şehir dışında tedavi arayan hastalar için 
              diş tedavi rotası planlama, doğru adımlarla sağlığına kavuşmanın en verimli yoludur.
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
                  src="/dental islem.jpg"
                  alt="Diş Tedavi Rotası Planlama"
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
                Diş Tedavi Rotası Planlama Nedir?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diş Tedavi rotası planlama, bir hastanın tanı konulmasından tedavi sürecinin tamamlanmasına kadar geçen tüm sürecin profesyonel bir şekilde organize edilmesidir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bu süreç; doktor seçimi, hastane tercihi, randevu takibi, konaklama, ulaşım ve tedavi sonrası takibi içerir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Important Section */}
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
              Neden Diş Tedavi Rotası Planlaması Yapılmalı?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Zamandan ve Maliyetten Tasarruf",
                description: "Planlı bir tedavi rotası, hastaların vakit kaybetmeden en uygun sağlık hizmetine ulaşmasını sağlar. Özellikle sağlık turizmi kapsamında gelen yabancı hastalar için bu büyük bir avantajdır.",
                icon: Clock,
              },
              {
                title: "Doğru Doktor ve Kurum Seçimi",
                description: "Her hastalık alanında uzmanlaşmış sağlık kurumları ve doktorlar farklılık gösterir. Tedavi rotası planlaması, hastanın şikayetlerine uygun en iyi uzmanlara ulaşmasını mümkün kılar.",
                icon: Award,
              },
              {
                title: "Konforlu ve Stresiz Bir Süreç",
                description: "Tedavi süreci zaten başlı başına zorlu bir dönemdir. Bu sürecin planlı ve rehberli bir şekilde yürütülmesi, hem hasta hem de yakınları için önemli bir konfor sağlar.",
                icon: Shield,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              Tedavi Rotası Planlama Nasıl Yapılır?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Ön Görüşme ve Tanı",
                description: "İlk adım, hastanın mevcut sağlık durumu hakkında bilgi alınması ve tanının netleştirilmesidir.",
                icon: User,
              },
              {
                step: "02",
                title: "Uzman Seçimi",
                description: "Tanıya göre en uygun doktor veya hastane belirlenir.",
                icon: Award,
              },
              {
                step: "03",
                title: "Randevu ve Organizasyon",
                description: "Uygun randevu tarihleri planlanır, konaklama ve ulaşım gibi lojistik destekler ayarlanır.",
                icon: Calendar,
              },
              {
                step: "04",
                title: "Tedavi Süreci",
                description: "Planlanan tarihlerde tedavi süreci başlatılır ve yönetilir.",
                icon: CheckCircle,
              },
              {
                step: "05",
                title: "Takip ve Raporlama",
                description: "Tedavi sonrası hastaya gerekli kontroller ve raporlar sağlanır.",
                icon: Shield,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <div className="text-4xl font-bold text-green-600 mb-4">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
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
              Kimler İçin Uygundur?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Yurt Dışından Gelen Hastalar",
                description: "Yurt dışından tedavi için gelen hastalar için özel planlama ve lojistik destek sağlanır.",
                icon: Plane,
              },
              {
                title: "Şehir Dışından Gelenler",
                description: "Şehir dışında sağlık hizmeti arayan bireyler için konaklama ve ulaşım organizasyonu yapılır.",
                icon: MapPin,
              },
              {
                title: "Kronik Hastalığı Olanlar",
                description: "Kronik hastalıkları olan ve sürekli kontrol gerektiren kişiler için düzenli takip planlaması.",
                icon: Clock,
              },
              {
                title: "Estetik ve İleri Düzey Tedavi",
                description: "Estetik cerrahi, diş tedavisi veya ileri düzey tıbbi müdahale düşünen hastalar için özel planlama.",
                icon: Award,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tedavi rotası planlaması kapsamında sunduğumuz hizmetler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Konaklama Organizasyonu",
                description: "Tedavi süreciniz boyunca konforlu konaklama seçenekleri sunuyoruz.",
                icon: Hotel,
              },
              {
                title: "Ulaşım Desteği",
                description: "Havalimanı transferi ve şehir içi ulaşım organizasyonu sağlıyoruz.",
                icon: Car,
              },
              {
                title: "Çeviri Hizmeti",
                description: "Yabancı hastalar için profesyonel çeviri desteği sunuyoruz.",
                icon: User,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-green-50 p-8 rounded-xl border border-green-100 text-center"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Sık Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600">
              Diş tedavi rotası planlama hakkında merak ettikleriniz
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "Diş Tedavi rotası planlaması ne işe yarar?",
                answer: "Diş tedavi rotası planlaması, bir hastanın tanı konulmasından tedavi sürecinin tamamlanmasına kadar geçen tüm sürecin profesyonel bir şekilde organize edilmesidir. Bu süreç; doktor seçimi, hastane tercihi, randevu takibi, konaklama, ulaşım ve tedavi sonrası takibi içerir. Bu sayede zaman kaybı, yanlış tedavi riski ve gereksiz maliyetlerin önüne geçilir.",
              },
              {
                question: "Diş Tedavi planlaması sadece yurt dışından gelen hastalar için mi geçerli?",
                answer: "Hayır, diş tedavi planlaması sadece yurt dışından gelen hastalar için değil, şehir dışından gelen, kronik hastalığı olan veya karmaşık tedavi süreçleri gerektiren tüm hastalar için geçerlidir. Planlama, her hasta için en uygun tedavi yolunu belirlemek ve süreci organize etmek için yapılır.",
              },
              {
                question: "Diş Tedavi sürecinde konaklama ve ulaşım da organize ediliyor mu?",
                answer: "Evet, tedavi rotası planlaması kapsamında konaklama ve ulaşım organizasyonu da yapılmaktadır. Yurt dışından veya şehir dışından gelen hastalar için havalimanı transferi, otel rezervasyonu ve şehir içi ulaşım desteği sağlanmaktadır.",
              },
              {
                question: "Diş Tedavi rotası planlaması ücretli mi?",
                answer: "Hayır. Muayenizden sonra doktorunuz sizin için ücretsiz bir tedavi planlaması oluşturacaktır. Tedavi rotası planlaması hizmeti ücretsizdir ve hastalarımızın en iyi şekilde tedavi alabilmeleri için sunulmaktadır.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-gray-500 flex-shrink-0 transition-transform",
                      openFaq === index && "rotate-180"
                    )}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bize Ulaşın
              </h2>
              <p className="text-lg text-gray-600">
                Aşağıdaki formu doldurun, en kısa sürede sizinle iletişime geçeceğiz.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none text-gray-900"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none text-gray-900"
                    placeholder="Telefon numaranızı girin"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Gönder
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
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
                  alt="Klinik"
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
                Emin Ellerdesiniz...
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                VDS Dental, diş tedavi rotası planlama hizmeti ile hastalarımızın tedavi süreçlerini en verimli şekilde organize ediyoruz. 
                Yurt dışından veya şehir dışından gelen hastalarımız için konaklama, ulaşım ve tüm lojistik desteği sağlıyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Muayenizden sonra doktorunuz sizin için ücretsiz bir tedavi planlaması oluşturacaktır. 
                Bu planlama sayesinde zaman kaybetmeden en uygun sağlık hizmetine ulaşabilirsiniz.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">VDS Dental</p>
                  <p className="text-gray-600">
                    Son teknoloji ekipmanlarımızla, tecrübeli ve yetenekli ekibimizle size hizmet vermeye her daim hazırız.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

