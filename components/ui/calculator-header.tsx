"use client";

import { motion } from "framer-motion";

export function CalculatorHeader() {
  return (
    <div className="text-center mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider mb-4"
      >
        TEDAVİ HESAPLAYICI
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-4"
      >
        Gülüş yolculuğunuzu planlayın
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
      >
        Gülüş hedeflerinize göre maliyet ve tedavi süresini tahmin edin. İnteraktif. Ücretsiz. Kişiselleştirilmiş.
      </motion.p>
    </div>
  );
}

