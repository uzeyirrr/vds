import { Header } from "@/components/ui/header-2";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { AboutSection } from "@/components/ui/about-section";
import { ServicesSection } from "@/components/ui/services-section";
import { DoctorsSection } from "@/components/ui/doctors-section";
import { TreatmentCalculator } from "@/components/ui/treatment-calculator";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ConsultationSection } from "@/components/ui/consultation-section";
import { Footer7 } from "@/components/ui/footer-7";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <HeroGeometric 
        badge="Diş Kliniği"
        title1="Sağlıklı Gülüşler"
        title2="Modern Diş Hekimliği"
        description="Uzman diş hekimlerimiz ve son teknoloji ekipmanlarımızla sağlıklı gülüşlerinize kavuşun. Estetik ve tedavi alanında profesyonel hizmet sunuyoruz."
      />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <TreatmentCalculator />
      <TestimonialsSection />
      <ConsultationSection />
      <Footer7 />
    </div>
  );
}
