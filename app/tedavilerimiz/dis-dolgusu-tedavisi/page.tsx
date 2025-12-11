"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Award, Calendar, User, Phone, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function DisDolgusuTedavisi() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

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
            { label: "Diş Dolgusu Tedavisi" }
          ]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Diş Dolgusu Tedavisi Bağcılar
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Emin Ellerdesiniz...
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              VDS Dental, çürük veya hasar görmüş dişleri özel dolgu tedavileriyle onararak doğal diş dokusunu mümkün olduğunca korur.
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
                  alt="Diş Dolgusu Tedavisi"
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
                VDS Dental İle Diş Dolgusu Tedavisi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                VDS Dental, çürük, kırık veya aşınma nedeniyle zarar görmüş dişleri estetik ve dayanıklı dolgu tedavileriyle onararak doğal diş yapısını korur. 
                Her hastaya özel olarak planlanan dolgu uygulamaları, hem konforlu bir tedavi süreci hem de uzun ömürlü sonuçlar sunar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tedavi süreci, detaylı bir muayene ve dijital görüntüleme ile başlar. Çürük ya da hasarlı alan titizlikle temizlendikten sonra, 
                dişin şekline ve rengine en uygun dolgu materyali seçilir. Kompozit, porselen veya amalgam gibi farklı dolgu türleriyle estetik ve işlevsel bütünlük yeniden sağlanır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Son aşamada uygulanan cilalama ve hassas yükseklik ayarlamaları sayesinde, dolgu uygulaması doğal dişten ayırt edilemeyecek hale getirilir. 
                Uzman diş hekimlerinin kontrolünde tamamlanan bu titiz işlemle, hastalar kliniğimizden hem sağlıklı hem de güvenle gülümseyerek ayrılır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Filling Section */}
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
                Diş Dolgusu Nedir?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diş dolgusu, çürümüş, kırılmış veya hasar görmüş diş dokusunun temizlenmesinden sonra oluşan boşluğun özel dolgu malzemeleriyle doldurulması işlemidir. 
                Bu işlem, hem dişin fonksiyonunu hem de estetik görünümünü yeniden kazandırmak amacıyla yapılır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diş dolguları sayesinde dişin çekilmesine gerek kalmadan doğal yapı korunabilir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diş çürükleri tedavi edilmeden bırakıldığında ağrıya, enfeksiyona ve diş kaybına yol açabilir. 
                Ancak erken teşhis ve uygun dolgu işlemiyle bu tür problemler kolayca önlenebilir.
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
                  src="/dis inceleme.png"
                  alt="Diş Dolgusu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When Needed Section */}
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
              Hangi Durumlarda Diş Dolgusu Gerekir?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Çürük Nedeniyle Oluşan Madde Kaybı",
                description: "En yaygın diş dolgusu nedeni, çürüklerin neden olduğu doku kaybıdır.",
                icon: CheckCircle,
              },
              {
                title: "Kırık veya Çatlak Dişler",
                description: "Travma sonucu oluşan diş kırıklarında estetik ve fonksiyonel onarım sağlar.",
                icon: Shield,
              },
              {
                title: "Aşınmış Dişler",
                description: "Bruksizm (diş sıkma) veya asit erozyonu sonucu oluşan aşınmalar dolgu ile tedavi edilebilir.",
                icon: Award,
              },
              {
                title: "Estetik Amaçlı Küçük Düzeltmeler",
                description: "Ön dişlerdeki küçük şekil bozuklukları veya renklenmeler kompozit dolgularla düzeltilebilir.",
                icon: Sparkles,
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
                  className="flex items-start gap-4 p-6 bg-green-50 rounded-xl border border-green-100"
                >
                  <Icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
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

      {/* Materials Section */}
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
              Kullanılan Diş Dolgusu Malzemeleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diş dolgularında farklı materyaller kullanılmaktadır. Tedavi planlaması sırasında hastanın yaşı, dişin konumu ve estetik beklentilerine göre en uygun dolgu türü seçilir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kompozit Dolgu (Beyaz Dolgu)",
                features: [
                  "Diş renginde olduğu için görünmez",
                  "Ön ve arka dişlerde kullanılabilir",
                  "Işıkla sertleştirilir",
                  "Ortalama 5–10 yıl dayanıklıdır",
                ],
              },
              {
                title: "Amalgam Dolgu (Gri Dolgu)",
                features: [
                  "Gümüş, kalay ve cıva alaşımı içerir",
                  "Genellikle arka dişlerde tercih edilir",
                  "Yüksek dayanıklılık sağlar",
                  "Daha ekonomiktir ancak estetik açıdan tercih edilmez",
                ],
              },
              {
                title: "Seramik (Porselen) Dolgu – İnley/Onley",
                features: [
                  "Laboratuvar ortamında hazırlanır",
                  "Doğal diş rengine çok yakındır ve leke tutmaz",
                  "Uzun ömürlüdür, 10 yıldan fazla dayanabilir",
                ],
              },
              {
                title: "Geçici Dolgu",
                features: [
                  "Kanal tedavisi sürecinde veya iki seans arasında kısa süreli koruma amaçlı kullanılır",
                ],
              },
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {material.title}
                </h3>
                <ul className="space-y-2">
                  {material.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Diş Dolgusu Nasıl Yapılır?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diş dolgusu işlemi, ortalama 20 ila 40 dakika süren, ağrısız ve güvenli bir işlemdir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Muayene ve Teşhis",
                description: "Röntgen ve klinik muayene ile çürüğün boyutu belirlenir.",
              },
              {
                step: "02",
                title: "Anestezi",
                description: "Gerekli durumlarda lokal anestezi uygulanır.",
              },
              {
                step: "03",
                title: "Çürük Temizliği",
                description: "Hasarlı doku tamamen temizlenir.",
              },
              {
                step: "04",
                title: "Dolgu Uygulaması",
                description: "Uygun malzeme diş boşluğuna yerleştirilir.",
              },
              {
                step: "05",
                title: "Şekillendirme ve Cilalama",
                description: "Dolgu, doğal diş yapısına uygun şekilde şekillendirilip parlatılır.",
              },
            ].map((item, index) => (
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-700 font-medium">
              Tedavi sonrası diş hemen kullanılabilir hale gelir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Diş Dolgusu Fiyatları
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Diş dolgusu fiyatları şu faktörlere göre değişiklik gösterebilir:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Kullanılan dolgu materyali (kompozit, amalgam, porselen vb.)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Dolgunun uygulanacağı dişin konumu (ön/arka)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Çürüğün derinliği ve büyüklüğü</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Ek işlemler (örn. geçici dolgu, kanal tedavisi gerekliliği)</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 font-medium text-center">
              Kliniğimizde hastaya özel fiyatlandırma yapılmakta olup, tüm tedavi süreci şeffaf şekilde planlanmaktadır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Satisfaction Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Diş Dolgusu Tedavisinde Memnuniyet
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              VDS Dental, diş dolgusu tedavilerinde sadece çürük ya da hasarlı dokuyu onarmakla kalmaz; aynı zamanda hastanın konforunu, beklentilerini ve estetik ihtiyaçlarını da ön planda tutar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              İlk muayeneden son kontrole kadar tüm süreç, hasta memnuniyetini temel alan bir anlayışla yürütülür. Her hastaya özel hazırlanan tedavi planları sayesinde, kullanılan dolgu malzemesi, uygulanacak teknik ve işlem detayları kişiye göre şekillendirilir.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Böylece hem estetik açıdan tatmin edici hem de uzun ömürlü sonuçlar elde edilir. Tedavi sırasında lokal anesteziyle ağrısız bir deneyim sağlanır; işlem sonrasında ise hızlı bir adaptasyon süreci yaşanır.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              VDS Dental'in deneyimli diş hekimleri, tedavi sonrası detaylı kontroller yaparak dolgunun hem görünüm hem de çiğneme fonksiyonu açısından ideal olmasını garanti eder.
            </p>
          </motion.div>
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
                Alanında uzman hekimlerimiz, tedavi öncesi detaylı muayene ve görüntüleme teknikleri ile çürük boyutunu net bir şekilde analiz eder. 
                Gerekli temizlik ve hazırlık sonrası, dişe en uygun dolgu malzemesi uygulanır ve hassas şekillendirme ile doğal görünüm sağlanır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tedavi sonrasında yapılan son kontroller ve cilalama işlemi sayesinde dolgular uzun ömürlü, dayanıklı ve gözle fark edilmeyecek kadar estetik hale gelir. 
                Bu özenli yaklaşım, hastalarımızın hem sağlıklı hem de güvenle gülümseyebilecekleri bir sonuçla kliniğimizden memnun ayrılmasını sağlar.
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

