import { ServicesSection } from "@/components/ui/services-section";
import { motion } from "framer-motion";

export default function Tedavilerimiz() {
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
              Tedavilerimiz
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Profesyonel Diş Tedavileri
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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



