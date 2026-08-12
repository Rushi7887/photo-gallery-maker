import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getProject, projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — VN Architects" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — VN Architects`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary.slice(0, 155) },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % project.gallery.length);
      if (e.key === "ArrowLeft")
        setLightbox((i) => ((i ?? 0) - 1 + project.gallery.length) % project.gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, project.gallery.length]);

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
        <Link
          to="/"
          hash="works"
          className="label-mono text-muted-foreground hover:text-accent"
          onClick={() => {
            if (project.category) {
              window.dispatchEvent(new CustomEvent("set-filter", { detail: project.category }));
            }
          }}
        >
          ← Back to works
        </Link>

        <p className="mt-10 label-mono text-accent">
          /{project.index} — {project.category}
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.03em] md:text-8xl">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {project.summary}
        </p>

        <dl className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Year", project.year],
            ["Location", project.location],
            ["Status", project.status],
            ["Scope", project.scope],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-5">
              <dt className="label-mono text-muted-foreground">{k}</dt>
              <dd className="mt-2 text-base font-medium">{v}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-16 label-mono text-muted-foreground">
          Photographs ({project.gallery.length})
        </h2>
        

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {project.gallery.map((img: { src: string; caption: string }, i: number) => (
            <figure
              key={img.src + i}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="block w-full overflow-hidden bg-secondary"
                aria-label={`Open photo ${i + 1} full size`}
              >
                <img
                  src={img.src}
                  alt={`${project.title} — ${img.caption}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1400}
                  height={1000}
                  className={
                    "w-full object-cover transition-transform duration-700 hover:scale-[1.02] " +
                    (i === 0 ? "aspect-[16/9]" : "aspect-[4/3]")
                  }
                />
              </button>
              <figcaption className="mt-3 label-mono text-muted-foreground">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {project.videos && project.videos.length > 0 && (
          <>
            <h2 className="mt-20 label-mono text-muted-foreground">Walkthrough Videos ({project.videos.length})</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {project.videos.map((v, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg bg-secondary">
                  <video 
                    src={v} 
                    controls 
                    className="w-full aspect-video object-cover"
                    poster={project.cover}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <h2 className="mt-20 label-mono text-muted-foreground">More projects</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {others.map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="group">
              <img
                src={p.cover}
                alt={p.title}
                loading="lazy"
                width={1400}
                height={1000}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <p className="mt-3 text-lg font-bold tracking-tight group-hover:text-accent">
                {p.title}
              </p>
              <p className="label-mono text-muted-foreground">{p.category}</p>
            </Link>
          ))}
        </div>
      </article>

      {lightbox !== null && (
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
              setLightbox((i) => (i === null ? null : (i - 1 + project.gallery.length) % project.gallery.length));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] rounded-full bg-background/10 p-3 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-background/20 active:scale-95 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={project.gallery[lightbox]?.src}
            alt={project.gallery[lightbox]?.caption}
            className="max-h-[85vh] w-auto max-w-full object-contain shadow-2xl transition-all duration-500 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i + 1) % project.gallery.length));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] rounded-full bg-background/10 p-3 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-background/20 active:scale-95 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="label-mono text-ink-foreground text-sm tracking-widest">
              {lightbox + 1} / {project.gallery.length}
            </p>
            <p className="label-mono text-ink-foreground/60 text-xs">
              {project.gallery[lightbox]?.caption}
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
