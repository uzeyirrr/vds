"use client";

import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, User, Stethoscope } from "lucide-react";

interface ConsultationSectionProps {
  badge?: string;
  title?: string;
  description?: string;
}

export function ConsultationSection({
  badge = "Randevu",
  title = "İlk adımınızı planlayın",
  description = "Tercih ettiğiniz tarihi, tedavi türünü seçin, geri kalanını biz hallederiz.",
}: ConsultationSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const services = useMemo(() => [
    "Estetik diş hekimliği",
    "Ortodonti",
    "İmplantoloji",
    "Beyazlatma",
    "Cerrahi diş hekimliği",
    "Genel muayene",
  ], []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background tooth images with different rotations and blur - Optimized with CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden will-change-transform">
        <div
          className="absolute top-20 left-10 w-64 h-64 opacity-20 blur-sm"
          style={{
            backgroundImage: "url(/dis.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "rotate(12deg) translateZ(0)",
            willChange: "transform",
          }}
        />
        <div
          className="absolute top-40 right-20 w-56 h-56 opacity-15 blur-md"
          style={{
            backgroundImage: "url(/dis.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "rotate(-45deg) translateZ(0)",
            willChange: "transform",
          }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-60 h-60 opacity-25 blur-sm"
          style={{
            backgroundImage: "url(/dis.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "rotate(90deg) translateZ(0)",
            willChange: "transform",
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
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

        {/* Form */}
        <div className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ml-4" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınızı girin"
                  required
                  className="w-full pl-12 pr-4 py-4 border-b-2 border-gray-200 focus:border-green-600 outline-none text-gray-900 placeholder-gray-400"
                  style={{ transition: "border-color 0.15s ease" }}
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ml-4" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefon numaranızı girin"
                  required
                  className="w-full pl-12 pr-4 py-4 border-b-2 border-gray-200 focus:border-green-600 outline-none text-gray-900 placeholder-gray-400"
                  style={{ transition: "border-color 0.15s ease" }}
                />
              </div>
            </div>

            {/* Service and Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <Stethoscope className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ml-4 z-10" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-10 py-4 border-b-2 border-gray-200 focus:border-green-600 outline-none text-gray-900 appearance-none bg-transparent cursor-pointer"
                  style={{ transition: "border-color 0.15s ease" }}
                >
                  <option value="" disabled>
                    Servis seçin
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ml-4" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={minDate}
                  className="w-full pl-12 pr-4 py-4 border-b-2 border-gray-200 focus:border-green-600 outline-none text-gray-900"
                  style={{ transition: "border-color 0.15s ease" }}
                />
              </div>
            </div>

            {/* Submit Button and Privacy */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 shadow-lg"
                style={{ transition: "background 0.2s ease, transform 0.2s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                Randevu gönder
              </button>
              <p className="text-sm text-gray-500">
                Bu butona tıklayarak{" "}
                <a href="#" className="text-green-600 underline hover:text-green-700">
                  Gizlilik Politikası
                </a>
                'nı kabul etmiş olursunuz
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

