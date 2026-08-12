import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { projects } from "@/data/projects";

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

        <h1 className="mt-8 text-5xl font-black tracking-tight md:text-8xl">
          Visualising<br />
          <span className="text-muted-foreground">the Future.</span>
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
              <div>
                <p className="label-mono text-xs text-muted-foreground uppercase">Status</p>
                <p className="mt-2 text-sm">{visualisationProject.status}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {visualisationProject.gallery.map((item, idx) => (
            <figure key={idx} className="group">
              <div className="overflow-hidden bg-secondary">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
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

      <SiteFooter />
    </div>
  );
}
