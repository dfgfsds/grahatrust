import DocumentsSection from "@/components/DocumentsSection";
import HeroCarousel from "@/components/HeroCarousel";
import LegalProsSection from "@/components/LegalProsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import MembershipSection from "@/components/MembershipSection";
import AISection from "@/components/AISection";
import ContactSection from "@/components/ContactSection";
import PricingCards from "@/components/PricingCards";
import PropertySlider from "@/components/slider/PropertySlider";
import WorkWithUs from "@/components/WorkWithUs";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <DocumentsSection />
      {/* <LegalProsSection /> */}
      <PropertySlider />
      <TestimonialSlider />

      <PricingCards />
      <WorkWithUs />
      {/* <MembershipSection />
      <AISection />
      <ContactSection /> */}
      <WhatsAppFloatingButton />
    </>
  );
}
