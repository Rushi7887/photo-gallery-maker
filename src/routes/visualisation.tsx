import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Route = createFileRoute("/visualisation")({
  head: () => ({
    meta: [
      { title: "3D Visualisation — VN Architects" },
      {
        name: "description",
        content:
          "High-end architectural 3D visualizations by VN Architects. Exterior perspectives, interior renders, and urban planning visualizations.",
      },
      { property: "og:title", content: "3D Visualisation — VN Architects" },
      {
        property: "og:description",
        content: "High-end architectural 3D visualizations and photorealistic renders.",
      },
    ],
  }),
  component: VisualisationPage,
});

function VisualisationPage() {
  const visualisationProject = projects.find(p => p.category === "3D Visualization");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null || !visualisationProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % visualisationProject.gallery.length);
      if (e.key === "ArrowLeft")
        setLightbox((i) => ((i ?? 0) - 1 + visualisationProject.gallery.length) % visualisationProject.gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, visualisationProject]);

  if (!visualisationProject) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
          <p className="label-mono text-muted-foreground">Portfolio content not found.</p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-[1400px] px-5 pt-12 pb-24 md:px-10 md:pt-20">
        <div className="flex flex-wrap gap-x-8 gap-y-2 label-mono text-muted-foreground">
          <span>03</span>
          <span>3D Visualisation Portfolio</span>
          <span>Architectural Rendering</span>
        </div>

        <h1 className="mt-8 text-5xl font-black tracking-tight md:text-8xl" style={{ color: '#954842' }}>
          Visualising<br />
          the Future.
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
              {visualisationProject.summary}
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="label-mono text-xs text-muted-foreground uppercase">Services</p>
                <p className="mt-2 text-sm">{visualisationProject.scope}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {visualisationProject.gallery.map((item, idx) => (
            <figure key={idx} className="group">
              <button
                type="button"
                onClick={() => setLightbox(idx)}
                className="block w-full overflow-hidden bg-secondary"
                aria-label={`Open photo ${idx + 1} full size`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="mt-4 flex items-start gap-3">
                <span className="label-mono text-accent text-xs">/{String(idx + 1).padStart(2, '0')}</span>
                <span className="text-sm text-muted-foreground">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-16 text-center">
            <p className="label-mono text-muted-foreground mb-6">Want to see your project in 3D?</p>
            <a
              href="#contact"
              className="inline-block label-mono border border-foreground px-8 py-4 transition-colors hover:bg-ink hover:text-ink-foreground"
            >
              Start a Visualization Project
            </a>
        </div>
      </main>

      {lightbox !== null && visualisationProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i - 1 + visualisationProject.gallery.length) % visualisationProject.gallery.length));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] rounded-full bg-background/10 p-3 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-background/20 active:scale-95 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={visualisationProject.gallery[lightbox]?.src}
            alt={visualisationProject.gallery[lightbox]?.caption}
            className="max-h-[85vh] w-auto max-w-full object-contain shadow-2xl transition-all duration-500 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i + 1) % visualisationProject.gallery.length));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] rounded-full bg-background/10 p-3 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-background/20 active:scale-95 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="label-mono text-ink-foreground text-sm tracking-widest">
              {lightbox + 1} / {visualisationProject.gallery.length}
            </p>
            <p className="label-mono text-ink-foreground/60 text-xs">
              {visualisationProject.gallery[lightbox]?.caption}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 z-[110] rounded-full bg-background/10 p-3 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-background/20 active:scale-95"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
