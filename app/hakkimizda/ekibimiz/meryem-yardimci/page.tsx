"use client";

import { motion } from "framer-motion";
import { Mail, GraduationCap, Award, Stethoscope, MapPin, Calendar, Heart } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MeryemYardimci() {
  const specialties = [
    "Endodonti",
    "Periodontoloji",
    "Protetik",
    "Restoratif İşlemler",
    "Pedodonti",
    "Dijital Diş Hekimliği",
  ];

  const experiences = [
    {
      period: "2023 - Günümüz",
      title: "VDS Diş Kliniği",
      location: "İstanbul, Bağcılar",
      description: "Aktif olarak hizmet vermekte ve yüksek standartlarla multidisipliner yaklaşımla hasta tedavileri sunmaktadır.",
    },
    {
      period: "2021 - 2023",
      title: "Özel Diş Kliniği",
      location: "Antalya",
      description: "İki yıl boyunca hasta memnuniyeti ve klinik başarı odaklı çalışmıştır.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[
            { label: "Hakkımızda", href: "/hakkimizda" },
            { label: "Ekibimiz", href: "/hakkimizda/ekibimiz" },
            { label: "DT. Meryem Yardımcı" }
          ]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Doktor Detay
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              DT. MERYEM YARDIMCI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Deneyimli ve yenilikçi diş hekimi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Image and Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Doctor Image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                <Image
                  src="/doktor/meryem.webp"
                  alt="DT. Meryem Yardımcı"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Contact Info */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-green-600" />
                  İletişim
                </h3>
                <a
                  href="mailto:info@vdsdental.com"
                  className="text-green-600 hover:text-green-700 transition-colors"
                >
                  info@vdsdental.com
                </a>
              </div>

              {/* Education Card */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                  Eğitim
                </h3>
                <p className="text-gray-600">
                  İstanbul Aydın Üniversitesi<br />
                  Diş Hekimliği Fakültesi
                </p>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* About */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Hakkında
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Meryem Yardımcı, İstanbul Aydın Üniversitesi Diş Hekimliği Fakültesi'nden mezun olmuştur ve 
                    üç yılı aşkın süredir sağlık sektöründe aktif olarak görev yapmaktadır. 
                    Endodonti, periodontoloji, protetik, restoratif işlemler ve pedodonti alanlarında kapsamlı deneyime sahiptir.
                  </p>
                  <p>
                    Dijital diş hekimliği uygulamalarında güncel teknolojileri etkin şekilde kullanarak, 
                    hastalarına modern ve konforlu tedavi çözümleri sunmaktadır. 
                    Profesyonel kariyerine Antalya'daki bir özel diş kliniğinde başlamış ve burada iki yıl boyunca 
                    hasta memnuniyeti ve klinik başarı odaklı çalışmıştır.
                  </p>
                  <p>
                    Şu anda VDS Diş Kliniği'nde aktif olarak hizmet vermekte ve yüksek standartlarla multidisipliner yaklaşımla 
                    hasta tedavileri sunmaktadır.
                  </p>
                  <p>
                    Mesleki gelişimini sürekli olarak destekleyen ve hasta iletişimine önem veren, 
                    yenilikçi ve çözüm odaklı bir diş hekimidir.
                  </p>
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                  Uzmanlık Alanları
                </h3>
                <div className="flex flex-wrap gap-3">
                  {specialties.map((specialty, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200"
                    >
                      {specialty}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-green-600" />
                  Kariyer Geçmişi
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full mt-2" />
                        {index < experiences.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-300 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-green-600">{exp.period}</span>
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500">{exp.location}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {exp.title}
                        </h4>
                        <p className="text-gray-600">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="rounded-full"
                  asChild
                >
                  <a href="/iletisim">
                    <Mail className="w-5 h-5 mr-2" />
                    Randevu Al
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Yaklaşım ve Değerler
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Hasta Odaklı",
                description: "Her hasta için kişiselleştirilmiş tedavi yaklaşımı",
              },
              {
                icon: Award,
                title: "Sürekli Gelişim",
                description: "Mesleki gelişimini sürekli destekleyen yaklaşım",
              },
              {
                icon: Stethoscope,
                title: "Modern Teknoloji",
                description: "Dijital diş hekimliği uygulamalarında güncel teknolojiler",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-gray-200 text-center"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

