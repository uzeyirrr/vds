"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Calendar, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  name: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
}

interface ServicesSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  services?: Service[];
  ctaText?: string;
  ctaLink?: string;
}

export function ServicesSection({
  badge = "Servisler",
  title = "Her gülüş için uzman bakım",
  description = "Sağlığınızı, güveninizi ve doğal güzelliğinizi yükseltmek için özelleştirilmiş tam kapsamlı tedaviler sunuyoruz.",
  services = [
    {
      id: "aesthetic",
      name: "Estetik diş hekimliği",
      title: "Mükemmel gülüş tasarımı",
      description: "Gülüşünüzü öne çıkaran estetik çözümler. Zirkonyum kaplamalar, laminate veneer ve diş beyazlatma ile doğal ve parlak bir gülüşe kavuşun.",
      image: "/Aesthetic D.png",
    },
    {
      id: "orthodontics",
      name: "Ortodonti",
      title: "Düzgün dişler, sağlıklı gülüş",
      description: "Şeffaf plaklar ve geleneksel braketler ile dişlerinizi ideal konuma getiriyoruz. Hem görünüm hem de fonksiyon açısından mükemmel sonuçlar.",
      image: "/Orthodontist.png",
    },
    {
      id: "implantology",
      name: "İmplantoloji",
      title: "Kalıcı gülüş restorasyonu",
      description: "Kalıcı, doğal görünümlü diş protezleri. 3D rehberli cerrahi kullanarak implantlarımız tam çiğneme fonksiyonunu ve estetiği hassas uyum, kemik entegrasyonu ve gerçekçi seramik kronlarla restore eder.",
      image: "/Implantology.png",
    },
    {
      id: "whitening",
      name: "Beyazlatma",
      title: "Parlak beyaz gülüş",
      description: "Profesyonel diş beyazlatma tedavileri ile gülüşünüzü 8-10 ton açın. Ofis içi ve ev tipi beyazlatma seçenekleri ile istediğiniz sonuca ulaşın.",
      image: "/Teeth W.png",
    },
    {
      id: "surgical",
      name: "Cerrahi diş hekimliği",
      title: "Güvenli cerrahi çözümler",
      description: "20 yaş dişi çekimi, apikal rezeksiyon ve diş eti cerrahisi. Deneyimli cerrahlarımız ve modern teknoloji ile ağrısız ve hızlı iyileşme.",
      image: "/Surgical Dentistry.png",
    },
  ],
  ctaText = "Randevu al",
  ctaLink = "#",
}: ServicesSectionProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base font-medium text-primary uppercase tracking-wider mb-4"
          >
            {badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
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

        {/* Services Grid */}
        <div className="flex flex-nowrap justify-center gap-4 md:gap-6 mb-12 md:mb-16 overflow-x-auto pb-4">
          {services.map((service, index) => {
            const isExpanded = hoveredId === service.id;
            const hasDetails = service.title && service.description;
            const isOtherExpanded = hoveredId !== null && hoveredId !== service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  opacity: 1,
                  y: 0,
                  flexBasis: isExpanded && hasDetails ? "400px" : isOtherExpanded ? "160px" : "200px",
                  minWidth: isExpanded && hasDetails ? "400px" : isOtherExpanded ? "160px" : "180px",
                  maxWidth: isExpanded && hasDetails ? "400px" : "220px",
                }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  y: { duration: 0.5, delay: index * 0.1 },
                  flexBasis: { duration: 0.5, ease: "easeInOut" },
                  minWidth: { duration: 0.5, ease: "easeInOut" },
                  maxWidth: { duration: 0.5, ease: "easeInOut" },
                }}
                className={cn(
                  "relative rounded-2xl overflow-hidden cursor-pointer",
                  "bg-gradient-to-br from-green-50 to-green-100",
                  "h-[280px] md:h-[320px]",
                  "shrink-0"
                )}
              >
                {/* Service Icon/Visual Area */}
                <div className="absolute inset-0">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 180px, 400px"
                      priority={index < 2}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-green-200/50 backdrop-blur-sm border-2 border-green-300/50 flex items-center justify-center">
                        <div className="text-primary text-4xl md:text-5xl font-bold">
                          {service.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Name */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-green-900/90 to-transparent">
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {service.name}
                  </h3>
                </div>

                {/* Expanded Details Panel */}
                {isExpanded && hasDetails && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 top-0 bottom-0 w-[280px] md:w-[320px] bg-green-900/40 backdrop-blur-xl p-6 md:p-8 rounded-l-2xl flex flex-col justify-between shadow-2xl border-l border-white/20"
                  >
                    <div className="flex-1 flex flex-col justify-start">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-white font-bold text-xl md:text-2xl leading-tight pr-2">
                          {service.title}
                        </h4>
                        <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center shrink-0 cursor-pointer">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <p className="text-white/85 text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="text-white/70 text-xs md:text-sm font-medium uppercase tracking-wider">
                        {service.name}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full"
          >
            <a href={ctaLink}>
              <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              {ctaText}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

