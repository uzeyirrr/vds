"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Award, Calendar, User, Phone, Heart, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function KokKanaliTedavisi() {
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
      <section className="w-full bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-sm md:text-base font-medium text-green-600 uppercase tracking-wider mb-4">
              Kök Kanalı Tedavisi Bağcılar
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Emin Ellerdesiniz...
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              VDS Dental, kök kanal tedavisi yoluyla hasarlı veya enfeksiyonlu diş dokusunu onarırken dişlerin doğal yapısını korur.
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
                  alt="Kök Kanalı Tedavisi"
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
                VDS Dental İle Kök Kanal Tedavisi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                VDS Dental Clinic, kanal tedavisi alanında elde ettiği ödüllü başarılarla sektörde lider konumda bulunmaktadır. 
                Her hastaya özel olarak hazırlanan tedavi planları ve kişiye özel gülüş tasarımları sayesinde, 
                her bireyin beklenti ve ihtiyaçlarına tam anlamıyla cevap verilir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bu bireysel yaklaşım sayesinde hastalar, hızlı ve etkili sonuçlara ulaşmaktadır. Kanal tedavisi sürecinde, 
                en güncel teknolojileri kullanarak hastalara konforlu bir deneyim sunmayı öncelik haline getiren uzman diş hekimi ekibi, 
                kısa iyileşme süresi ve tedavinin uzun süreli etkileri ile hastaların memnuniyetini en üst düzeye çıkarmaktadır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                VDS Dental'deki kanal tedavisi, hastaların sağlıklı ve parlak gülüşlere kavuşmalarını sağlamanın yanı sıra, kalıcı memnuniyet sunmaktadır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Root Canal Section */}
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
                Kök Kanal Tedavisi Nedir?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kök kanal tedavisi, dişin içindeki enfekte veya hasarlı sinir dokusunun (pulpa) temizlenmesi ve dezenfekte edilmesi işlemidir. 
                Bu tedavi sayesinde, diş çekilmeden doğal diş yapısı korunur.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her hastaya özel tedavi planları konforlu bir deneyim sağlarken, tedavi sonrasında kaliteli dolgu veya kaplamalar kullanılarak 
                diş estetiği ve işlevselliği yeniden kazandırılmaktadır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Endodonti uzmanları son kontrolleri yaparak sonuçların hem estetik hem de fonksiyonel açıdan üstün olmasını sağlar. 
                Bu titiz yaklaşım sayesinde hastalar klinikten memnun ayrılıyor.
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
                  alt="Kök Kanalı Tedavisi"
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
              Hangi Durumlarda Kök Kanal Tedavisi Gerekir?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Derin Çürükler",
                description: "Çürük dişin sinir dokusuna kadar ilerlemesi durumunda kök kanal tedavisi gerekebilir.",
                icon: Shield,
              },
              {
                title: "Diş Travması",
                description: "Kaza veya darbe sonucu dişin sinir dokusunun hasar görmesi durumunda uygulanır.",
                icon: Heart,
              },
              {
                title: "Tekrarlayan Diş Ağrıları",
                description: "Sürekli veya şiddetli diş ağrıları, kök kanal tedavisi gerektirebilir.",
                icon: Sparkles,
              },
              {
                title: "Diş Absesi",
                description: "Enfeksiyon sonucu oluşan apse durumunda kök kanal tedavisi ile diş kurtarılabilir.",
                icon: CheckCircle,
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

      {/* Process Section */}
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
              Kök Kanal Tedavisi Nasıl Yapılır?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kök kanal tedavisi, genellikle birkaç seans süren, ağrısız ve güvenli bir işlemdir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Muayene ve Teşhis",
                description: "Röntgen ve klinik muayene ile dişin durumu değerlendirilir ve tedavi planı oluşturulur.",
              },
              {
                step: "02",
                title: "Anestezi ve Erişim",
                description: "Lokal anestezi uygulanır ve dişin içine erişim sağlanır.",
              },
              {
                step: "03",
                title: "Temizlik ve Dezenfeksiyon",
                description: "Enfekte sinir dokusu temizlenir, kanallar genişletilir ve dezenfekte edilir.",
              },
              {
                step: "04",
                title: "Dolgu ve Kapatma",
                description: "Kök kanalları özel dolgu malzemesi ile doldurulur ve diş geçici veya kalıcı dolgu ile kapatılır.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="text-4xl font-bold text-green-600 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Kök Kanal Tedavisinin Avantajları
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Doğal Diş Korunur",
                description: "Diş çekilmeden doğal yapı korunur ve çiğneme fonksiyonu devam eder.",
                icon: Heart,
              },
              {
                title: "Ağrısız İşlem",
                description: "Lokal anestezi ile ağrısız bir tedavi deneyimi sunulur.",
                icon: Shield,
              },
              {
                title: "Estetik Sonuç",
                description: "Tedavi sonrası diş doğal görünümünü korur ve estetik açıdan tatmin edici sonuçlar elde edilir.",
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

      {/* Satisfaction Section */}
      <section className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Kök Kanal Tedavisinde Hasta Memnuniyeti
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              VDS Dental, kök kanal tedavisi dahil, tüm diş tedavileri sırasında son teknoloji ve VIP hizmet anlayışıyla kişisel beklentilere göre şekillendirir. 
              Kök kanal tedavisi sürecinde, hastaların konforunu ve memnuniyetini en üst düzeyde tutmak için gelişmiş ağrı yönetimi teknikleri kullanılır.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Özel olarak tahsis edilen asistanlar sayesinde, her kök kanal tedavisi süreci, hastaların endişelerini azaltacak ve iletişimde kolaylık sağlayacak şekilde yönetilir. 
              Bu özenli yaklaşım, VDS Dental'in hasta memnuniyetini her zaman öncelikli tuttuğunun bir göstergesidir.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Böylece, kök kanal tedavisi gerektiren her durumda, hastalar kendilerini güvende ve rahat hissederler. 
              Klinik olarak, sağlık ve estetiği birleştiren tedavilerle gülüşlerin daha estetik bir görünüme kavuşması hedeflenir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
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
              Kök kanal tedavisi hakkında merak ettikleriniz
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "Kök kanal tedavisi ağrılı mı?",
                answer: "Hayır, kök kanal tedavisi lokal anestezi altında yapıldığı için ağrısız bir işlemdir. İşlem sırasında herhangi bir acı hissedilmez. Tedavi sonrasında hafif bir hassasiyet olabilir ancak bu genellikle birkaç gün içinde geçer.",
              },
              {
                question: "Kök kanal tedavisi ne kadar sürer?",
                answer: "Kök kanal tedavisi genellikle 1-3 seans arasında tamamlanır. Her seans yaklaşık 60-90 dakika sürer. Dişin durumuna ve karmaşıklığına göre süre değişebilir.",
              },
              {
                question: "Kök kanal tedavisi sonrası diş ne kadar dayanır?",
                answer: "Düzgün yapılan bir kök kanal tedavisi ve uygun bakım ile tedavi edilen diş ömür boyu kullanılabilir. Ancak dişin üzerine kaplama yapılması önerilir çünkü kök kanal tedavisi sonrası diş daha kırılgan hale gelebilir.",
              },
              {
                question: "Kök kanal tedavisi sonrası normal yemek yiyebilir miyim?",
                answer: "Tedavi sonrası ilk birkaç saat yemek yememek önerilir. Sonrasında yumuşak gıdalarla başlayarak normal beslenmeye dönebilirsiniz. Tedavi edilen dişin üzerine fazla baskı yapmamaya dikkat edin.",
              },
              {
                question: "Kök kanal tedavisi başarısız olursa ne olur?",
                answer: "Nadiren de olsa kök kanal tedavisi başarısız olabilir. Bu durumda retreatment (yeniden tedavi) veya apikal rezeksiyon gibi alternatif tedaviler uygulanabilir. Son çare olarak diş çekimi gerekebilir.",
              },
              {
                question: "Kök kanal tedavisi sonrası diş rengi değişir mi?",
                answer: "Bazı durumlarda kök kanal tedavisi sonrası diş rengi hafifçe koyulaşabilir. Bu durumda diş beyazlatma veya kaplama ile estetik görünüm düzeltilebilir.",
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
                VDS Dental, kök kanal tedavisi yoluyla hasarlı veya enfeksiyonlu diş dokusunu onarırken dişlerin doğal yapısını korur. 
                Her hastaya özel tedavi planları konforlu bir deneyim sağlarken, tedavi sonrasında kaliteli dolgu veya kaplamalar kullanılarak 
                diş estetiği ve işlevselliği yeniden kazandırılmaktadır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Endodonti uzmanları son kontrolleri yaparak sonuçların hem estetik hem de fonksiyonel açıdan üstün olmasını sağlar. 
                Bu titiz yaklaşım sayesinde hastalar klinikten memnun ayrılıyor.
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

