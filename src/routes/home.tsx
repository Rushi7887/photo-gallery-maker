import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { categories, heroImage, heroSlideshow, projects, type Category } from "@/data/projects";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "VN Architects — Ar. Vedant Nalawade, Architect" },
      {
        name: "description",
        content:
          "VN Architects designs residential, industrial, interior and landscaping projects in Chhatrapati Sambhajinagar. Selected works by Ar. Vedant Nalawade.",
      },
      { property: "og:title", content: "VN Architects — Ar. Vedant Nalawade, Architect" },
      {
        property: "og:description",
        content:
          "Residential · Industrial · Interior · Landscaping. Selected works from the studio of Ar. Vedant Nalawade.",
      },
    ],
  }),
  component: Index,
});

const tools = [
  "AutoCAD",
  "SketchUp",
  "Revit",
  "Lumion",
  "Enscape",
  "V-Ray",
  "Photoshop",
  "Illustrator",
];

type Filter = "All" | (typeof categories)[number];
const filters: Filter[] = ["All", ...categories];

function Index() {
  // Single source of truth for the selected tab — fixes the filter tab bug
  // where the highlighted tab and the visible list could get out of sync.
  const [active, setActive] = useState<Filter>("All");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlideshow.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visible = (active === "All" ? projects : projects.filter((p) => p.category === active))
    .filter(p => p.category !== "3D Visualization");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-5 pt-12 pb-16 md:px-10 md:pt-20 md:pb-24">
        <div className="flex flex-wrap gap-x-8 gap-y-2 label-mono text-muted-foreground uppercase tracking-widest text-[10px]">
          <span>Architect</span>
          <span>Chhatrapati Sambhajinagar, Maharashtra, IN</span>
        </div>
        <h1 
          className="mt-8 text-[15vw] leading-[0.85] font-black tracking-[-0.05em] md:text-[9.5rem] uppercase"
          style={{ color: '#954842' }}
        >
          VN
          <br />
          Architects.
        </h1>
        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-[#666] md:text-xl">
          Residential, industrial, interior and landscaping design — drawn with
          discipline, built with material honesty and made for the way people actually
          live and work.
        </p>
        <div className="mt-12 overflow-hidden relative group">
          <div className="aspect-[16/10] w-full relative">
            {heroSlideshow.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt="Architectural visualization"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  idx === currentHeroIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between items-center label-mono text-muted-foreground">
            <span>Portfolio Highlights</span>
            <span>0{currentHeroIndex + 1} / 0{heroSlideshow.length}</span>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-5xl font-black tracking-tight md:text-7xl" style={{ color: '#954842' }}>
              Our Projects
            </h2>
            <a
              href="#contact"
              className="label-mono border border-foreground px-5 py-3 transition-colors hover:bg-ink hover:text-ink-foreground"
            >
              Enquire about a project
            </a>
          </div>

          {/* Filter tabs */}
          <div role="tablist" aria-label="Filter projects by category" className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = active === f;
              const count =
                f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f)}
                  className={
                    "label-mono border px-4 py-2.5 transition-colors " +
                    (isActive
                      ? "border-ink bg-ink text-ink-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground")
                  }
                >
                  {f} <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {visible.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-start gap-4">
                  <span className="label-mono text-accent">/{p.index}</span>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.meta}</p>
                    <span className="mt-3 inline-block label-mono text-foreground">
                      View all photos →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-12 label-mono text-muted-foreground">No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border px-5 py-16 md:grid-cols-4 md:px-10 md:py-20">
          {categories.map((c, i) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setActive(c);
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-secondary p-6 text-left transition-colors hover:bg-background"
            >
              <span className="label-mono text-accent">0{i + 1}</span>
              <p className="mt-3 text-xl font-bold tracking-tight">{c}</p>
            </button>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
