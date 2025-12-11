"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, FlaskConical } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function Klinik() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const klinikImages = [
    "/klinik/vds-2.jpg",
    "/klinik/vds-4.jpg",
    "/klinik/vds-5.jpg",
    "/klinik/vds-6.jpg",
    "/klinik/vds-7.jpg",
    "/klinik/vds-8.jpg",
  ];

  const labImages = [
    "/lab/25-ekim-sdf-1-min-768x768.webp",
    "/lab/25-ekim-sdf-2-min-768x768.webp",
    "/lab/6-kas─▒m-sdf-1-min.webp",
    "/lab/6-kas─▒m-sdf-2-min.webp",
    "/lab/6-kas─▒m-sdf-3-min.webp",
    "/lab/6-kas─▒m-sdf-4-min (1).webp",
    "/lab/6-kas─▒m-sdf-5-min.webp",
    "/lab/6-kas─▒m-sdf-6-min.webp",
    "/lab/sdf-26-eylu╠el-3-min-2048x2048.webp",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[
            { label: "Hakkımızda", href: "/hakkimizda" },
            { label: "Kliniğimiz" }
          ]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Kliniğimiz
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Modern Tesislerimiz
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              350 m²'lik modern alanımızda, en son teknolojilerle donatılmış tesislerimizi keşfedin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Klinik Gallery Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Klinik Galerisi
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Geniş, samimi ve iyi aydınlatılmış alanlarımızda, misafirlerimizin konforunu ve rahatlığını ön planda tutuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {klinikImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Klinik ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Gallery Section */}
      <section className="w-full bg-gray-50 py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Laboratuvar Galerisi
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Son teknoloji laboratuvarımızda, en kaliteli diş malzemeleri ile çalışıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {labImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Laboratuvar ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Büyük görünüm"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

