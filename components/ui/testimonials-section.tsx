"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfoCard {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

interface TestimonialsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  tabs?: Array<{
    id: string;
    label: string;
    cards: InfoCard[];
  }>;
}

export function TestimonialsSection({
  badge = "VDS DENTAL",
  title = "VDS Dental Hakkında",
  description = "Modern diş hekimliğinde öncü, hasta memnuniyetini ön planda tutan bir kliniğiz.",
  tabs = [
    {
      id: "aesthetic",
      label: "Estetik diş hekimliği",
      cards: [
        {
          id: "1",
          title: "Gülüş Tasarımı",
          content: "VDS Dental'de estetik diş hekimliği alanında uzman ekibimiz, her hastaya özel gülüş tasarımı yapıyor. Zirkonyum kaplamalar, laminate veneer ve diş beyazlatma gibi modern tekniklerle doğal ve estetik sonuçlar elde ediyoruz. 3D dijital planlama teknolojisi ile tedavi öncesi sonuçları görselleştiriyoruz.",
        },
        {
          id: "2",
          title: "Veneer Uygulamaları",
          content: "Laminate veneer ve zirkonyum veneer uygulamalarında deneyimli ekibimiz, minimal invaziv teknikler kullanarak dişlerinizin doğal görünümünü koruyarak estetik iyileştirmeler yapıyor. Her veneer, hastanın yüz yapısına ve diş rengine özel olarak tasarlanıyor.",
        },
        {
          id: "3",
          title: "Diş Beyazlatma",
          content: "Ofis içi ve ev tipi beyazlatma seçenekleri sunuyoruz. Güvenli ve etkili beyazlatma teknikleri ile dişlerinizi 8-10 ton açabiliyoruz. Tedavi sonrası bakım ve koruma konusunda detaylı rehberlik sağlıyoruz.",
        },
      ],
    },
    {
      id: "orthodontics",
      label: "Ortodonti",
      cards: [
        {
          id: "4",
          title: "Şeffaf Plak Tedavisi",
          content: "VDS Dental'de şeffaf plak (Invisalign) tedavisi ile görünmez ortodonti çözümleri sunuyoruz. Dijital planlama ile tedavi sürecini önceden görüntüleyebilir, iş ve sosyal hayatınızı etkilemeden dişlerinizi düzeltebilirsiniz. Her hasta için özel plaklar üretiliyor.",
        },
        {
          id: "5",
          title: "Geleneksel Braketler",
          content: "Metal ve seramik braket seçenekleri ile her yaş grubuna uygun ortodonti tedavileri uyguluyoruz. Deneyimli ortodontistlerimiz, tedavi sürecinde düzenli kontroller yaparak optimal sonuçlar elde ediyor. Tedavi sonrası koruma plakları ile sonuçları kalıcı hale getiriyoruz.",
        },
        {
          id: "6",
          title: "Erken Dönem Tedavi",
          content: "Çocuklarda erken dönem ortodonti müdahaleleri ile ileride oluşabilecek sorunları önlüyoruz. 7-12 yaş arası çocuklarda yapılan değerlendirmeler ile çene gelişimini yönlendiriyor ve diş çapraşıklıklarını erken dönemde çözüyoruz.",
        },
      ],
    },
    {
      id: "implantology",
      label: "İmplantoloji",
      cards: [
        {
          id: "7",
          title: "3D Rehberli İmplant Cerrahisi",
          content: "VDS Dental'de 3D rehberli implant cerrahisi ile maksimum hassasiyet ve güvenlik sağlıyoruz. Dijital planlama ile implantların konumunu önceden belirliyor, minimal invaziv tekniklerle ağrısız ve hızlı iyileşme sağlıyoruz. Bu teknoloji sayesinde komplikasyon riski minimuma iniyor.",
        },
        {
          id: "8",
          title: "Tam Ağız İmplant Çözümleri",
          content: "Eksik dişlerin tamamını implant ile restore ediyoruz. All-on-4 ve All-on-6 teknikleri ile tek seansta tam ağız rehabilitasyonu yapabiliyoruz. Özel tasarım kronlar ile doğal görünüm ve tam fonksiyon sağlıyoruz. Kemik yetersizliği durumlarında kemik grefti uygulamaları yapıyoruz.",
        },
        {
          id: "9",
          title: "İmplant Sonrası Bakım",
          content: "İmplant tedavisi sonrası düzenli kontroller ve bakım programları uyguluyoruz. Hastalarımıza implant bakımı konusunda detaylı eğitim veriyor, uzun vadeli başarı için gerekli önlemleri alıyoruz. Yıllık kontroller ile implantların sağlığını izliyoruz.",
        },
      ],
    },
    {
      id: "whitening",
      label: "Beyazlatma",
      cards: [
        {
          id: "10",
          title: "Ofis İçi Beyazlatma",
          content: "VDS Dental'de ofis içi beyazlatma işlemi tek seansta tamamlanıyor. Güçlü beyazlatma ajanları ile dişlerinizi 8-10 ton açabiliyoruz. İşlem sırasında hassasiyet önleyici uygulamalar yapıyoruz. Sonuçlar hemen görülüyor ve uzun süre kalıcı oluyor.",
        },
        {
          id: "11",
          title: "Ev Tipi Beyazlatma",
          content: "Hastalarımıza özel olarak hazırlanan beyazlatma plakları ile evde rahatça uygulayabileceğiniz beyazlatma seçeneği sunuyoruz. Kişiye özel plaklar ile maksimum uyum ve etkinlik sağlıyoruz. Tedavi sürecinde düzenli kontroller yaparak sonuçları takip ediyoruz.",
        },
        {
          id: "12",
          title: "Kombine Beyazlatma",
          content: "Ofis içi ve ev tipi beyazlatmayı birleştirerek en etkili sonuçları elde ediyoruz. İlk seansta ofis içi beyazlatma ile hızlı sonuç alıyor, sonrasında ev tipi beyazlatma ile sonuçları pekiştiriyoruz. Bu yöntem ile daha kalıcı ve etkili beyazlık sağlanıyor.",
        },
      ],
    },
  ],
}: TestimonialsSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeCards = tabs.find((tab) => tab.id === activeTab)?.cards || [];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base font-medium text-green-600 uppercase tracking-wider mb-4"
          >
            {badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 text-base font-medium transition-all duration-300 relative",
                activeTab === tab.id
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                  initial={false}
                  transition={{ type: "spring" as const, stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Info Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-shadow"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

