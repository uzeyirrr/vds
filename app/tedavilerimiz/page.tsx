"use client";

import { ServicesSection } from "@/components/ui/services-section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";

export default function Tedavilerimiz() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: "Tedavilerimiz" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
              Tedavilerimiz
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Profesyonel Diş Tedavileri
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Modern teknoloji ve uzman ekibimizle sağlıklı gülüşlerinize kavuşun. 
              Her tedavi için özel çözümler sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
    </>
  );
}



