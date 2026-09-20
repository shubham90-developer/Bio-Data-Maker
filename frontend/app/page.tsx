import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TemplateShowcase } from "@/components/home/TemplateShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { BiodataSections } from "@/components/home/BiodataSections";
import { CommunitySection } from "@/components/home/CommunitySection";
import { LanguageSupport } from "@/components/home/LanguageSupport";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { BlogSpotlight } from "@/components/home/BlogSpotlight";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <TemplateShowcase />
      <HowItWorks />
      <FeaturesSection />
      <BiodataSections />
      <CommunitySection />
      <LanguageSupport />
      <TestimonialsSection />
      <FAQSection />
      <BlogSpotlight />
      <FinalCTA />
    </div>
  );
}
