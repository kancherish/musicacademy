import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection"
import { Intructors } from "@/components/Intructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { WhyChooseUs } from "@/components/WhyChooseUs";


export default function Home() {
  return (
      <div className="min-h-screen w-full flex flex-col overflow-x-hidden items-center justify-center p-2">
          <HeroSection /> 
          <FeaturedSection />   
          <WhyChooseUs />
          <TestimonialCards />
          <UpcomingWebinars />
          <Intructors />
      </div>
  );
}
