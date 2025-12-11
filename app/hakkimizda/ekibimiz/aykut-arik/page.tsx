"use client";

import { motion } from "framer-motion";
import { Mail, GraduationCap, Award, Stethoscope, MapPin, Calendar, Globe, Trophy, Building2 } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AykutArik() {
  const specialties = [
    "İleri Seviye İmplantoloji",
    "Estetik Diş Hekimliği",
    "Dijital Destekli İmplant Protezleri",
    "Ağız ve Çene Cerrahisi",
  ];

  const languages = [
    { name: "Türkçe", level: "Ana Dil" },
    { name: "İngilizce", level: "Profesyonel Çalışma Yetkinliği" },
  ];

  const career = [
    {
      position: "Diş Hekimi (DDS)",
      institution: "Ankara Üniversitesi Diş Hekimliği Fakültesi",
      field: "Genel Diş Hekimliği",
      years: "2000",
    },
    {
      position: "Gönüllü Katkıcı",
      institution: "Ankara Üniversitesi Ağız ve Çene Cerrahisi Anabilim Dalı",
      field: "Ağız Cerrahisi",
      years: "2000–2001",
    },
    {
      position: "Kurucu Ortak",
      institution: "Ankara Dentorium Klinik",
      field: "İmplantoloji & Ağız Cerrahisi",
      years: "2001–2008",
    },
    {
      position: "Kıdemli Diş Hekimi",
      institution: "Başkent Üniversitesi İstanbul Hastanesi",
      field: "Ağız Cerrahisi, Periodontoloji, İmplantoloji",
      years: "2008–2012",
    },
    {
      position: "İmplantoloji Uzmanı",
      institution: "Dentistanbul Diş Hastanesi (Erenköy Şubesi)",
      field: "İmplantoloji & Ağız Tanısı",
      years: "2012–2013",
    },
    {
      position: "Başhekim",
      institution: "Medicalist Hastanesi Diş Kliniği",
      field: "İmplantoloji & Ağız Cerrahisi",
      years: "2013–2017",
    },
    {
      position: "Sorumlu Diş Hekimi",
      institution: "Kaş Medical Center Diş Kliniği",
      field: "İmplantoloji & Ağız Cerrahisi",
      years: "2017–2020",
    },
    {
      position: "Başhekim (Yarı Zamanlı)",
      institution: "Ünident Diş Kliniği",
      field: "İmplant Cerrahisi",
      years: "2017–2020",
    },
    {
      position: "Kurucu Ortak",
      institution: "Dentcity Klinik (Antalya)",
      field: "İmplantoloji & Dijital İmplant Protezleri",
      years: "2019–2021",
    },
    {
      position: "Başhekim",
      institution: "İstanbul Reyap Hastanesi Diş Polikliniği",
      field: "İmplantoloji, Ağız Cerrahisi, İmplant Destekli Protezler",
      years: "2021–2024",
    },
    {
      position: "Başhekim",
      institution: "VDS Diş Kliniği (İstanbul)",
      field: "İmplantoloji Bölümü",
      years: "2024–Günümüz",
    },
  ];

  const awards = [
    "Yılın En İyi Diş & Estetik Kliniği (2021)",
    "Yılın En İyi Sağlık Kliniği (2022)",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[
            { label: "Hakkımızda", href: "/hakkimizda" },
            { label: "Ekibimiz", href: "/hakkimizda/ekibimiz" },
            { label: "Dr. Aykut Arık" }
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
              DR. AYKUT ARIK
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Başhekim, İmplantoloji ve Estetik Diş Hekimliği Uzmanı
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Image and Info */}
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
                  src="/clinic iç foto.jpg"
                  alt="Dr. Aykut Arık"
                  fill
                  className="object-cover"
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

              {/* Personal Info */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Kişisel Bilgiler</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Adı Soyadı:</span>
                    <span className="text-gray-900 font-medium ml-2">Aykut Arık</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Doğum Tarihi:</span>
                    <span className="text-gray-900 font-medium ml-2">12 Nisan 1970</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Unvan:</span>
                    <span className="text-gray-900 font-medium ml-2">Başhekim, Diş Hekimi (DDS)</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Deneyim:</span>
                    <span className="text-gray-900 font-medium ml-2">20 Yıldan Fazla</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  Diller
                </h3>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">{lang.name}</span>
                      <span className="text-gray-600 text-sm">{lang.level}</span>
                    </div>
                  ))}
                </div>
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
                    Dr. Aykut Arık, implantoloji ve estetik diş hekimliği alanlarında uzmanlaşmış, deneyimli ve lisanslı bir diş hekimi, 
                    bu makaleyi doğruluk ve alaka açısından tıbbi olarak gözden geçirmiştir.
                  </p>
                  <p>
                    20 yılı aşkın bir deneyime sahip olan Dr. Aykut Arık, en güncel diş tedavi yöntemleri ve en iyi uygulamalar doğrultusunda 
                    bilgi sunarak okuyucuların ağız sağlıkları ve diş bakımları hakkında bilinçli ve güvenli kararlar almalarına yardımcı olmaktadır.
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

              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                  Eğitim
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-900 font-medium mb-2">
                    Ankara Üniversitesi Diş Hekimliği Fakültesi
                  </p>
                  <p className="text-gray-600">Diş Hekimi (DDS) - 2000</p>
                </div>
              </div>

              {/* Career Timeline */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-green-600" />
                  Eğitim & Mesleki Kariyer
                </h3>
                <div className="space-y-4">
                  {career.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{item.position}</h4>
                          <p className="text-gray-700 font-medium mb-1">{item.institution}</p>
                          <p className="text-gray-600 text-sm">{item.field}</p>
                        </div>
                        <div className="flex items-center gap-2 text-green-600 font-medium">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm whitespace-nowrap">{item.years}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-green-600" />
                  Ödüller & Tanınmalar
                </h3>
                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-4"
                    >
                      <Award className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">{index + 1}. {award}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  İletişim
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">Klinik:</span> VDS Diş Kliniği, İstanbul, Türkiye
                  </p>
                  <p>
                    <span className="font-medium">Rol:</span> Başhekim, İmplantoloji Bölümü
                  </p>
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
    </>
  );
}

