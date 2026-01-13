import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Availability } from "@/components/Availability";
import fs from "node:fs/promises";
import path from "node:path";

async function getCarouselImages() {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const files = await fs.readdir(publicDir);

    // Filter for files starting with 'carousel-' and are images
    const carouselFiles = files.filter(file =>
      file.startsWith("carousel-") && /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    // Sort naturally (so carousel-2 comes before carousel-10)
    carouselFiles.sort((a, b) => {
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    // Prepend '/' for usage in src img tag
    return carouselFiles.map(file => `/${file}`);
  } catch (error) {
    console.error("Error reading carousel images:", error);
    return [];
  }
}

export default async function Home() {
  const carouselImages = await getCarouselImages();

  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      <About carouselImages={carouselImages} />
      <Availability />
      {/* Contact section is integrated in Footer, but we could add a dedicated CTA section here if needed */}
    </div>
  );
}
