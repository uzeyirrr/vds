import { HeroSection } from "@/components/ui/hero-section-1";
import { ServicesSection } from "@/components/ui/services-section";
import { DoctorsSection } from "@/components/ui/doctors-section";
import { TreatmentCalculator } from "@/components/ui/treatment-calculator";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ConsultationSection } from "@/components/ui/consultation-section";
import { PhotoGallery } from "@/components/ui/gallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhotoGallery />
      <ServicesSection />
      <DoctorsSection />
      <TreatmentCalculator />
      <TestimonialsSection />
      <ConsultationSection />
    </>
  );
}
