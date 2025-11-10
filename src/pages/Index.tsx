import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import SearchSection from "@/components/SearchSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const [searchParams] = useSearchParams();
  const vParam = searchParams.get("v");
  const v2Param = searchParams.get("v2");
  const extractYoutubeId = (raw: string): string | null => {
    if (!raw) return null;
    const val = raw.trim();
    try {
      // youtu.be/<id>
      if (val.includes("youtu.be/")) {
        const after = val.split("youtu.be/")[1];
        return after.split("?")[0].split("/")[0];
      }
      // youtube.com/watch?v=<id>
      if (val.includes("youtube.com/watch")) {
        const url = new URL(val);
        const id = url.searchParams.get("v");
        return id ? id : null;
      }
      // youtube.com/embed/<id>
      if (val.includes("/embed/")) {
        const after = val.split("/embed/")[1];
        return after.split("?")[0].split("/")[0];
      }
      // If it's just the ID, return as-is
      return val;
    } catch {
      // Fallback simple parsing
      if (val.includes("v=")) {
        const match = val.match(/v=([A-Za-z0-9_-]+)/);
        return match ? match[1] : null;
      }
      return val;
    }
  };
  const videoIds = [
    ...(vParam ? vParam.split(",").map((s) => extractYoutubeId(s)).filter((x): x is string => Boolean(x)) : []),
    ...(v2Param ? [extractYoutubeId(v2Param)].filter((x): x is string => Boolean(x)) : [])
  ];

  // Ajuste de meta robots para evitar indexación cuando el video oculto esté visible
  useEffect(() => {
    if (videoIds.length === 0) return;
    const robotsTag = document.querySelector("meta[name='robots']");
    const previous = robotsTag?.getAttribute("content") || "index, follow";
    if (robotsTag) robotsTag.setAttribute("content", "noindex, nofollow");
    return () => {
      if (robotsTag) robotsTag.setAttribute("content", previous);
    };
  }, [videoIds.length]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <SearchSection />
      <PricingSection />
      <StatsSection />
      <CTASection />

      {videoIds.length > 0 && (
        <section id="hidden-video" className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoIds.slice(0, 2).map((id, index) => (
                <div
                  key={`${id}-${index}`}
                  className="relative overflow-hidden rounded-xl shadow-elegant border border-border/50 bg-card animate-fade-in-up"
                >
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`}
                      title={`YouTube video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Apartado: Video incrustado del producto */}
      <section id="product-demo" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Video: sobre el producto</h3>
            <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-elegant">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/5w4PEJw1MCE?modestbranding=1&rel=0"
                  title="Demo del producto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
