"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Doctor {
  id: string;
  name: string;
  role: string;
  description: string;
  experience: string;
  image: string;
  slug?: string;
}

interface DoctorsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  doctors?: Doctor[];
  viewAllText?: string;
  viewAllLink?: string;
  avatars?: string[];
  totalCount?: number;
}

export function DoctorsSection({
  badge = "DOKTORLAR",
  title = "Doktorlarımızla tanışın",
  description = "Uzman ekibimiz, her tedaviye hassasiyet, empati ve sanat anlayışı getiriyor, yılların deneyimini gerçekten kişiselleştirilmiş bakım tutkusuyla birleştiriyor.",
  doctors = [
    {
      id: "1",
      name: "DT. MERYEM YARDIMCI",
      role: "DOKTOR",
      description: "İstanbul Aydın Üniversitesi Diş Hekimliği Fakültesi'nden mezun olmuştur ve diş hekimliği alanında uzmanlaşmış deneyimli bir hekimdir.",
      experience: "3+ yıl deneyim",
      image: "/doktor/meryem.webp",
      slug: "meryem-yardimci",
    },
    {
      id: "2",
      name: "DR. AYKUT ARIK",
      role: "BAŞHEKİM",
      description: "İmplantoloji ve estetik diş hekimliği alanlarında uzmanlaşmış, deneyimli bir diş hekimidir. 2025 yılında VDS Diş Kliniği'ni kurmuştur.",
      experience: "20+ yıl deneyim",
      image: "/doktor/aykut.webp",
      slug: "aykut-arik",
    },
  ],
  viewAllText = "Tüm ekibi gör",
  viewAllLink = "/hakkimizda/ekibimiz",
  avatars = [
    "/doktor/meryem.webp",
    "/doktor/aykut.webp",
  ],
  totalCount = 2,
}: DoctorsSectionProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    
    // Start from the right (scroll to end initially) - show partial cards
    const scrollToEnd = () => {
      const totalSlides = doctors.length;
      if (totalSlides > 0 && carouselApi) {
        // Scroll to the last slide without animation
        try {
          carouselApi.scrollTo(totalSlides - 1, false);
        } catch (e) {
          // Ignore errors if carousel is not ready
        }
      }
    };
    
    // Wait for carousel to initialize and scroll to end
    const timer1 = setTimeout(scrollToEnd, 50);
    const timer2 = setTimeout(scrollToEnd, 200);
    const timer3 = setTimeout(scrollToEnd, 500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi, doctors.length]);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 md:mb-16 gap-6">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 md:gap-6 mb-4 flex-wrap"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {title}
              </h2>
              <div className="flex items-center gap-2 -ml-2">
                {avatars.slice(0, Math.min(avatars.length, 3)).map((avatar, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md overflow-hidden -ml-2 first:ml-0"
                  >
                    <Image
                      src={avatar}
                      alt={`Team member ${index + 1}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ))}
                {totalCount > avatars.length && (
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center shadow-md -ml-2">
                    <span className="text-primary font-semibold text-xs md:text-sm">
                      +{totalCount - avatars.length}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href={viewAllLink}>
                  {viewAllText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="hidden shrink-0 gap-2 md:flex">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  carouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  carouselApi?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="disabled:pointer-events-auto border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
            <div className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {badge}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Doctors Slider */}
      <div className="w-full relative">
        {/* Fade gradient from left - covers 30% of the visible area - hidden on mobile */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[30%] bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none" />
        
        <div className="w-full md:w-[70%] md:ml-auto overflow-hidden">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "end",
              slidesToScroll: 1,
              containScroll: "trimSnaps",
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                  align: "center",
                },
              },
            }}
          >
            <CarouselContent className="ml-0 md:ml-auto mr-0">
            {doctors.map((doctor) => (
              <CarouselItem
                key={doctor.id}
                className="basis-full md:basis-[320px] pl-4 md:pl-[20px] lg:basis-[380px]"
              >
                <Link 
                  href={doctor.slug ? `/hakkimizda/ekibimiz/${doctor.slug}` : "#"}
                  className="block group relative h-full min-h-[32rem] max-w-full mx-auto md:mx-0 overflow-hidden rounded-2xl border-2 border-green-100 bg-white hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  {/* Doctor Image with bottom shadow */}
                  <div className="relative w-full h-full bg-gradient-to-br from-green-50 to-green-100 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Bottom shadow gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Doctor Info Overlay - on top of image */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8 text-white z-10">
                      {/* Role Badge */}
                      <div className="mb-3">
                        <span className="px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold shadow-lg">
                          {doctor.role}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-white/95 text-sm md:text-base mb-3 leading-relaxed line-clamp-2">
                        {doctor.description}
                      </p>
                      <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                        <span>{doctor.experience}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {doctors.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-primary w-8" 
                  : "bg-primary/20 hover:bg-primary/40"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

