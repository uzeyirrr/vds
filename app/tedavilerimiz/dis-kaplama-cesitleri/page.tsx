"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Award, Calendar, User, Phone, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function DisKaplamaCesitleri() {
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
            { label: "Diş Kaplama Çeşitleri" }
          ]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Diş Kaplama Fiyatı 2025 Bağcılar
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Emin Ellerdesiniz...
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Diş kaplamaları modern estetik diş hekimliğinin temel taşı haline gelmiş olup gülümsemelerini güzelleştirmek isteyenler için dönüştürücü bir çözüm sunmaktadır.
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
                  src="/Aesthetic D.png"
                  alt="Diş Kaplama"
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
              <p className="text-lg text-gray-600 leading-relaxed">
                İster kırılmalar ister şiddetli renk bozuklukları gibi kusurları düzeltmek olsun, diş kaplamaları dayanıklı ve estetik açıdan hoş bir seçenek sunar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bu kapsamlı kılavuz, mevcut çeşitli türlerden maliyetlerine, uzun ömürlüğüne ve bakımına kadar kaplamalar hakkında bilmeniz gereken her şeyi derinlemesine ele alıyor.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Veneers Section */}
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
                Kaplamalar Nedir?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kaplamalar esasen dişlerin kozmetik görünümünü iyileştirmek için dişlerin ön yüzeyine yapışan ince kaplamalardır. 
                Porselen veya kompozit malzemelerden yapılan diş kaplamaları, dişlerinize mükemmel şekilde oturacak şekilde özel olarak tasarlanır 
                ve rengi, şekli ve konumlandırmayı geliştiren doğal bir görünüm sağlar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kaplamalar en iyi ne için kullanılır? Boşluklar, düzensiz dişler ve kalıcı lekeler dahil olmak üzere çeşitli diş sorunlarının çözümü için mükemmel bir seçimdir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diş kaplamalarının başlıca çekiciliği, çok yönlülüğü ve diş estetiğini dönüştürmedeki etkinliğinde yatmaktadır. 
                Kaplamalar çok sayıda görsel kusuru düzeltebilir, bu da onları kusursuz bir gülümseme arayanlar arasında popüler bir seçim haline getiriyor.
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
                  src="/dental islem.jpg"
                  alt="Diş Kaplama"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Overview Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Diş Kaplama Çeşitleri
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Diş kaplamaları sadece estetik amaçlı değildir; diş yüzeyinin hasardan korunmasında da önemli rol oynarlar. 
              Diş kaplamaları iki ana malzemeden yapılabilir: porselen ve kompozit reçine. Her malzemenin kendine göre avantajları vardır; 
              porselen, dayanıklılığı ve doğal görünümü nedeniyle tercih edilmektedir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Porcelain Veneers Section */}
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
                Porselen Diş Kaplamaları
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Porselen kaplamalar, diş minesinin doğal yarı saydamlığını taklit etme yetenekleriyle ünlüdür. 
                Yüksek kaliteli seramikten üretilen porselen kaplamalar, dişlerinizin ön kısmına yapışan güçlü ve leke tutmaz bir yüzey sağlar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Porselen kaplamalar uzun ömürlü güzellikleri ve dayanıklılıkları nedeniyle tercih edilmektedir. 
                Kahve, çay ve sigara dumanından kaynaklanan lekelere karşı dayanıklı olmaları, onları kalıcı bir kozmetik çözüm arayan hastalar için tercih edilen bir seçenek haline getiriyor.
              </p>
              <div className="flex items-start gap-3 pt-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Avantajları</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Doğal diş görünümü</li>
                    <li>• Leke tutmaz</li>
                    <li>• Uzun ömürlü (10-15 yıl)</li>
                    <li>• Yüksek dayanıklılık</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                <Image
                  src="/Implantology.png"
                  alt="Porselen Kaplama"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Composite Veneers Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/Teeth W.png"
                  alt="Kompozit Kaplama"
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
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Kompozit Diş Kaplamaları
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kompozit kaplamalar porselene göre daha uygun maliyetli bir alternatif olup tek diş muayenesinde uygulanabilmektedir. 
                Kompozit kaplamalar, yüksek yoğunluklu ışık kullanılarak kürlenen ve yapıştırılan bir reçine kullanılarak doğrudan dişlerinizin üzerine şekillendirilir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kompozit kaplamalar lekelenmeye karşı daha duyarlı olmalarına ve porselen kadar uzun süre dayanamamalarına rağmen, 
                kolaylıkla tamir edilip yeniden cilalanabilmeleri, daha az kalıcı bir seçenek arayanlar için çekiciliğini artırmaktadır.
              </p>
              <div className="flex items-start gap-3 pt-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Avantajları</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Daha uygun fiyatlı</li>
                    <li>• Tek seans uygulama</li>
                    <li>• Kolay tamir edilebilir</li>
                    <li>• Minimal diş hazırlığı</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E-Max Veneers Section */}
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
                E-Max Diş Kaplamaları
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                E-Max kaplamalar üstün dayanıklılıkları ve estetik nitelikleriyle ünlüdür ve bu da onları diş kaplamaları için birinci sınıf bir çözüm arayanlar arasında popüler bir seçim haline getiriyor. 
                Yarı saydamlığı ve dayanıklılığıyla bilinen bir malzeme olan lityum disilikat seramikten üretilen E-Max kaplamalar, 
                gerçek dişlerden ayırt edilmesi zor, doğal görünümlü bir yüzey sağlar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                E-Max kaplamaların öne çıkan özelliklerinden biri, diğer kaplama türlerinde ortak bir sorun olan ufalanma ve çatlamaya karşı dayanıklılıklarıdır. 
                Dayanıklılıkları, zamanla azalmayan etkileyici bir estetik kaliteyle birleştirilmiştir.
              </p>
              <div className="flex items-start gap-3 pt-4">
                <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Avantajları</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• En yüksek estetik kalite</li>
                    <li>• Çatlamaya karşı dayanıklı</li>
                    <li>• Onlarca yıl dayanabilir</li>
                    <li>• Minimal diş hazırlığı</li>
                  </ul>
                </div>
              </div>
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
                  alt="E-Max Kaplama"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-green-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Diş Kaplama Maliyeti (2025 Fiyatları)
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Kaplamaların genel maliyeti, kullanılan malzemeleri, uygulama sürecinin karmaşıklığını ve diş hekiminin uzmanlığını içerir. 
              Porselen kaplamalar, özel imalat süreci nedeniyle kompozit kaplamalardan daha pahalıdır.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Kaplama fiyatları, seçilen kaplama türüne ve tedavi edilen diş sayısına bağlı olarak önemli ölçüde değişebilir. 
              Kaplamalar genel olarak ne kadardır? Gülüşünüze yapılan bir yatırımdır, porselen seçenekleri daha uzun ömrü ve estetik özellikleri nedeniyle kompozite göre daha pahalıdır.
            </p>
            <p className="text-lg text-gray-700 font-medium text-center">
              Özel durumunuza göre kesin bir tahmin almak için bir diş hekimine danışmanız önemlidir.
            </p>
          </motion.div>
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
              Diş kaplamaları hakkında merak ettikleriniz
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "Diş kaplamaları tam olarak nedir ve ne işe yarar?",
                answer: "Diş kaplamaları, dişlerin ön yüzeyine yapıştırılan ince, özel yapım kabuklardır. Estetik amaçlı kullanılırlar ve dişlerin rengini, şeklini, boyutunu ve genel görünümünü iyileştirirler. Boşluklar, renk bozuklukları, düzensiz dişler gibi sorunlarda tercih edilir.",
              },
              {
                question: "Diş kaplaması türleri nelerdir ve aralarındaki farklar nelerdir?",
                answer: "Başlıca üç tür diş kaplaması vardır: Porselen kaplamalar (en dayanıklı ve estetik), Kompozit kaplamalar (daha uygun fiyatlı, tek seans uygulanabilir) ve E-Max kaplamalar (en yüksek kalite, çatlamaya karşı dayanıklı). Her birinin kendine özgü avantajları ve uygulama süreçleri vardır.",
              },
              {
                question: "Diş kaplamaları ne kadar süre dayanır?",
                answer: "Porselen kaplamalar genellikle 10-15 yıl, kompozit kaplamalar 5-7 yıl, E-Max kaplamalar ise uygun bakım ile onlarca yıl dayanabilir. Dayanıklılık, bakım kalitesi, ağız hijyeni ve diş hekimi ziyaretlerinin düzenliliğine bağlıdır.",
              },
              {
                question: "Kaplama uygulaması dişlere zarar verir mi?",
                answer: "Hayır, kaplama uygulaması dişlere zarar vermez. İşlem sırasında minimal bir diş hazırlığı yapılır (özellikle porselen için). Kompozit ve E-Max kaplamalar daha az invaziftir ve doğal diş yapısının daha fazla korunmasını sağlar. Deneyimli diş hekimleri tarafından yapıldığında güvenli bir işlemdir.",
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
                Diş kaplamalarının uygulanması, diş hekiminin hastanın dişlerini değerlendirdiği ve istenen sonucu tartıştığı konsültasyonla başlayan titiz bir süreci içerir. 
                Bu başlangıç aşaması, bireysel ihtiyaç ve beklentileri karşılayan kaplamaların kişiselleştirilmesine zemin hazırladığı için çok önemlidir.
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

