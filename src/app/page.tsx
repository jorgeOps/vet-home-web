import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Availability } from "@/components/Availability";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      <About />
      <Availability />
      {/* Contact section is integrated in Footer, but we could add a dedicated CTA section here if needed */}
    </div>
  );
}
