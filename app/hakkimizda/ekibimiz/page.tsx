"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Award, Stethoscope } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Ekibimiz() {
  const doctors = [
    {
      name: "DT. MERYEM YARDIMCI",
      title: "DOKTOR",
      image: "/doktor/meryem.webp",
      description: "Meryem Yardımcı, İstanbul Aydın Üniversitesi Diş Hekimliği Fakültesi'nden mezun olmuştur ve diş hekimliği alanında uzmanlaşmış deneyimli bir hekimdir.",
      education: "İstanbul Aydın Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Genel Diş Hekimliği", "Estetik Diş Hekimliği", "Hasta Bakımı"],
      slug: "meryem-yardimci",
    },
    {
      name: "DR. AYKUT ARIK",
      title: "DOKTOR",
      image: "/doktor/aykut.webp",
      description: "Dr. Aykut Arık, implantoloji ve estetik diş hekimliği alanlarında uzmanlaşmış, deneyimli bir diş hekimidir. 2025 yılında VDS Diş Kliniği'ni kurmuştur.",
      education: "Diş Hekimliği Fakültesi",
      specialties: ["İmplantoloji", "Estetik Diş Hekimliği", "Diş Cerrahisi"],
      slug: "aykut-arik",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[
            { label: "Hakkımızda", href: "/hakkimizda" },
            { label: "Ekibimiz" }
          ]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Ekibimiz
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kişiye Özel Bakım
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Uzman ekibimiz, deneyimli ve yetenekli diş hekimlerimizle size en iyi hizmeti sunmak için burada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Doctor Image */}
                  <div className="relative w-full aspect-[3/2] overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-xs font-medium text-green-600 uppercase tracking-wider mb-2">
                        {doctor.title}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {doctor.name}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {doctor.description}
                      </p>
                    </div>

                    {/* Education */}
                    <div className="flex items-start gap-2 mb-4 pb-4 border-b border-gray-200">
                      <GraduationCap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">Eğitim</h3>
                        <p className="text-gray-600 text-xs">{doctor.education}</p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-green-600" />
                        Uzmanlık Alanları
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {doctor.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Doctor Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-sm"
                      asChild
                    >
                      <a href={`/hakkimizda/ekibimiz/${doctor.slug}`}>
                        <User className="w-3.5 h-3.5 mr-2" />
                        Doktoru Gör
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
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
              Ekibimizin Değerleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her hasta için kişiselleştirilmiş bakım ve en yüksek kalitede hizmet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Uzmanlık",
                description: "Alanında uzman ve deneyimli diş hekimleri",
              },
              {
                icon: User,
                title: "Kişisel Bakım",
                description: "Her hasta için özelleştirilmiş tedavi planları",
              },
              {
                icon: Stethoscope,
                title: "Modern Teknoloji",
                description: "En son teknolojilerle donatılmış tesisler",
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

