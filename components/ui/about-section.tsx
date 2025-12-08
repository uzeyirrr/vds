"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCard {
  value: string;
  label: string;
}

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [suffix, setSuffix] = useState("");

  useEffect(() => {
    // Parse value to extract number and suffix
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(0);
      setSuffix(value);
      return;
    }

    const num = parseInt(match[1], 10);
    const suffixPart = match[2] || "";

    setSuffix(suffixPart);

    // Animate counter
    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(num * easeOutQuart);
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(num);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

interface AboutSectionProps {
  headline1?: string;
  headline2?: string;
  description?: string;
  stats?: StatCard[];
  aboutLink?: string;
  backgroundImage?: string;
}

export function AboutSection({
  headline1 = "Mükemmelliği",
  headline2 = "Keşfedin.",
  description = "Kliniğimizde, gülüşünüzün sadece bakım değil, aynı zamanda kutlanması gerektiğine inanıyoruz. Sertifikalı uzman ekibimiz, spa benzeri rahatlatıcı bir deneyim ile en son teknoloji diş ve ortodonti tedavilerini bir araya getiriyor.",
  stats = [
    { value: "15+", label: "Yıllık deneyim" },
    { value: "98%", label: "Hasta memnuniyeti" },
    { value: "5000+", label: "Dönüştürülen gülüş" },
    { value: "17", label: "Sertifikalı uzman" },
  ],
  aboutLink = "#",
  backgroundImage = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&q=80",
}: AboutSectionProps) {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="w-full px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
      <section className="relative min-h-screen w-full overflow-hidden border-2 border-white/30 rounded-lg">
      {/* Background Video with Green Overlay */}
      <div className="absolute inset-0 rounded-lg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        >
          <source src="/arkaplan-videosu.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-green-600/50 rounded-lg" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 md:px-8 py-6 md:py-8 min-h-screen flex flex-col justify-between">
        {/* Main Content - Moved Up */}
        <div className="flex-1 flex flex-col justify-start pt-0">
          {/* Headlines with About Link */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <motion.div
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {headline1}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {headline2}
              </h3>
            </motion.div>
            <motion.a
              href={aboutLink}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-sm md:text-base font-medium hover:underline whitespace-nowrap pt-2 md:pt-3"
            >
              HAKKIMIZDA
            </motion.a>
          </div>

          {/* Description */}
          <motion.p
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl mb-0"
          >
            {description}
          </motion.p>
        </div>

        {/* Statistics Grid - At Bottom */}
        <motion.div
          custom={2}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-4 md:pb-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={3 + index}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className={cn(
                "bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6",
                "border border-white/20",
                "hover:bg-white/15 transition-colors"
              )}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <Counter value={stat.value} duration={2} />
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </div>
  );
}

