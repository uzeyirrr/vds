"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Award, Calendar, User, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DisImplantlari() {
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
      <section className="w-full bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-sm md:text-base font-medium text-green-600 uppercase tracking-wider mb-4">
              Diş İmplantı Bağcılar
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Emin Ellerdesiniz...
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Diş implantı (Bağcılar), modern diş hekimliğinde kaybolan ya da hasar gören dişlerin yerine uygulanan, 
              çene kemiğine yerleştirilen titanyumdan yapılmış yapay köklerdir.
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
                  src="/dis implant.png"
                  alt="Diş İmplantı"
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
                Diğer diş tedavileriyle karşılaştırıldığında, diş implantları daha uzun ömürlü, estetik ve fonksiyonel çözümler sunar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Teknolojik ilerlemeler sayesinde, günümüzde diş implantı tedavisi artık ağrısız, hızlı ve daha erişilebilir hale gelmiştir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Peki, diş implantları tam olarak nedir, nasıl uygulanır, kimler için uygundur ve sağladığı avantajlar nelerdir? 
                Bu yazımızda, diş implantları hakkında detaylı bilgilere ulaşabilirsiniz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Implant Section */}
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
                Diş İmplantı Nedir?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diş implantı, kaybolmuş ya da hasar görmüş dişlerin yerine yerleştirilen titanyumdan yapılan yapay diş kökleridir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Çene kemiğine yerleştirilen bu implantlar, üzerine diş kronu, köprü veya protez yerleştirilerek estetik ve fonksiyonel bir çözüm sunar. 
                İmplantlar, doğal dişlerin yerine geçerek çiğneme, konuşma gibi günlük fonksiyonları eski haline getirir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                İmplant tedavisinin en büyük avantajı, diş kaybı sonrası çene kemiğini desteklemeye devam etmesidir.
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
                  alt="Diş İmplantı İşlemi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
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
              Diş İmplantı Nasıl Uygulanır?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diş implantı tedavi süreci, genellikle birkaç aşamadan oluşur.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "İlk Muayene ve Planlama",
                description: "İmplant tedavisi öncesinde, diş hekimi, hastanın diş sağlığını değerlendirir. Çene kemiğinin durumu, dişeti sağlığı ve genel ağız yapısı incelenir. Bu aşamada, röntgen, 3D tomografi gibi teknolojilerle çene kemiğinin yapısı detaylı bir şekilde incelenebilir. Eğer çene kemiği yeterli değilse, ek tedavilerle kemik desteği sağlanabilir.",
                image: "/dis inceleme.png",
              },
              {
                step: "02",
                title: "İmplantın Yerleştirilmesi",
                description: "Lokal anestezi altında yapılan bu işlemde, diş hekimi, titanyumdan yapılmış implantı çene kemiğine yerleştirir. İmplant, çene kemiğine kaynaşarak doğal diş kökünün fonksiyonunu üstlenir. Bu aşama genellikle 1-2 saat sürer ve ağrı minimal düzeydedir. Teknolojinin ilerlemesiyle birlikte, implant yerleştirilmesi çok daha hızlı ve rahat bir işlem haline gelmiştir.",
                image: "/dis implant 2.jpg",
              },
              {
                step: "03",
                title: "İyileşme Süreci",
                description: "İmplantın yerleştirilmesinin ardından, çene kemiği ile implantın kaynaşması süreci başlar. Bu süre, genellikle 3-6 ay arasında değişir. Bu süreç boyunca implantın yerleştiği bölgeyi iyileştirmek için hastanın dikkatli olması ve hekim tavsiyelerine uyması gereklidir. Çene kemiği ile implantın kaynaşması, tedavi başarısını artıran en önemli faktördür.",
                image: "/dis implant 3.png",
              },
              {
                step: "04",
                title: "Diş Kronunun Yerleştirilmesi",
                description: "İmplant kaynaştıktan sonra, üzerine diş kronu veya köprü yerleştirilir. Bu kron, hastanın doğal dişlerine uygun olarak yapılır ve dişin estetik ve fonksiyonel açıdan uyumlu olmasını sağlar. Bu işlem sonrasında, hasta yeni dişini kullanmaya başlayabilir.",
                image: "/dis implant 4.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="text-4xl font-bold text-green-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-6 lg:px-8">
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
                  src="/dis implant 5.jpg"
                  alt="Diş İmplantı"
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
                Diş İmplantı Ağrılı Mı?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diş implantı tedavisinin en büyük endişelerden biri, tedavi sürecindeki ağrıdır. Ancak günümüzde, 
                diş implantı tedavisi teknolojik gelişmeler sayesinde oldukça ağrısız bir hale gelmiştir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lokal anestezi ile yapılan işlem sırasında hastalar herhangi bir acı hissetmezler.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                İmplant sonrası bazı hastalar, işlem bölgesinde hafif bir ağrı veya şişlik hissedebilir, 
                ancak bu durum kısa süre içinde geçer. Doktorlar, ağrı yönetimi için gerekli ilaçları reçete ederek tedavi sürecini rahatlatır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
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
              Diş İmplantı Kimlere Uygundur?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Diş implantları, sağlıklı diş etlerine ve yeterli çene kemiği yapısına sahip her birey için uygun bir tedavi seçeneğidir. 
              Ancak, sigara içenler, kemik kaybı yaşayanlar veya ciddi dişeti hastalıkları bulunan bireyler için tedavi öncesinde ek değerlendirmeler yapılması gerekebilir.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ayrıca, bazı tıbbi durumları olan hastalar için implant tedavisi uygun olmayabilir. 
              Bu nedenle, tedaviye başlamadan önce uzman bir diş hekimi ile kapsamlı bir değerlendirme yapılması önemlidir.
            </p>
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
                Diş İmplantı Teknolojisi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diş implantı tedavisi, teknolojik yeniliklerle sürekli olarak gelişmektedir. 
                İmplant üretiminde kullanılan titanyum malzeme, biyolojik uyumluluğu yüksek olup vücutla mükemmel bir şekilde kaynaşır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ayrıca, 3D yazıcılar ve dijital görüntüleme teknolojileri sayesinde, implant yerleştirme işlemleri daha hassas, 
                hızlı ve ağrısız bir şekilde yapılabilmektedir. Bu gelişmeler, hastaların tedavi sürecinde daha kısa iyileşme süreleri ve daha iyi sonuçlar elde etmelerini sağlar.
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
                  alt="Diş İmplantı Teknolojisi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
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
              Sonuç
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Diş implantları, kaybolan dişlerin yerine en iyi çözümü sunar. Hem estetik hem de fonksiyonel olarak doğal dişlere en yakın sonucu elde etmenizi sağlar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Teknolojik ilerlemelerle birlikte, diş implantı tedavisi daha hızlı, ağrısız ve erişilebilir hale gelmiştir. 
              Çene kemiğini destekleyerek uzun ömürlü ve kalıcı bir çözüm sunan diş implantları, gülüşünüzü yeniden kazanmanıza yardımcı olabilir.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Eğer diş kaybınız varsa, diş implantları hakkında yukarıdaki formu doldurarak, sağlıklı ve estetik bir gülüşe kavuşabilirsiniz.
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
              <p className="text-xl text-gray-700 font-semibold">
                Titanyum Destekli Dental İmplant Tedavisi
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diş implantı, eksik dişlerin yerine yerleştirilen ve çene kemiğine entegre olan yapay diş köküdür. 
                Üzerine yerleştirilen protez dişle birlikte, hem estetik hem de fonksiyonel olarak doğal dişin yerini alır.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">DT. Meryem Yardımcı</p>
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
