import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/shippzi/Nav";
import { Hero } from "@/components/shippzi/Hero";
import { Solutions } from "@/components/shippzi/Solutions";
import { Platform } from "@/components/shippzi/Platform";
import { Industries } from "@/components/shippzi/Industries";
import { WhyShippzi } from "@/components/shippzi/WhyShippzi";
import { Contact } from "@/components/shippzi/Contact";
import { Footer } from "@/components/shippzi/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" richColors />
      <Nav />
      <main>
        <Hero />
        <Solutions />
        <Platform />
        <Industries />
        <WhyShippzi />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
