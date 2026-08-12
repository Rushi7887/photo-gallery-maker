import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const items = [
    { n: "01", label: "Index", hash: "" },
    { n: "02", label: "Works", hash: "works" },
    { n: "03", label: "3D Visualisation", hash: "works" }, // Scrolls to works, user can select the tab
    { n: "04", label: "Contact", hash: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-ink text-ink-foreground label-mono">
            VN
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            VN Architects — Vedant Nalawade
          </span>
          <span className="text-sm font-semibold tracking-tight sm:hidden">VN Architects</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-7">
          {items.map((it) => (
            <Link
              key={it.label}
              to="/"
              hash={it.hash}
              className="group flex items-baseline gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
              onClick={() => {
                if (it.label === "3D Visualisation") {
                  // Small delay to ensure navigation/scroll happens first
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent("set-filter", { detail: "3D Visualization" }));
                  }, 100);
                }
              }}
            >
              <span className="label-mono text-muted-foreground group-hover:text-accent">
                {it.n}
              </span>
              <span className="hidden sm:inline">{it.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <p className="label-mono opacity-60">Got a project in mind?</p>
        <h2 className="mt-4 text-5xl font-black tracking-tight md:text-8xl">Let's Build</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div>
            <p className="label-mono opacity-60">Email</p>
            <a
              href="mailto:archvedantn@gmail.com"
              className="mt-2 block text-lg underline-offset-4 hover:underline"
            >
              archvedantn@gmail.com
            </a>
          </div>
          <div>
            <p className="label-mono opacity-60">Phone</p>
            <a href="tel:+918275503713" className="mt-2 block text-lg underline-offset-4 hover:underline">
              +91 82755 03713
            </a>
          </div>
          <div>
            <p className="label-mono opacity-60">Studio</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Office+No.+6,+Plot+No.+215,+Shankara+Residency,+Ulkanagari,+Chhatrapati+Sambhajinagar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-lg leading-snug opacity-90 underline-offset-4 hover:underline"
            >
              Office No. 6, Plot No. 215, Shankara Residency, Ulkanagari, Chhatrapati
              Sambhajinagar
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-white/15 pt-6 label-mono opacity-60">
          <span>© 2026 VN Architects</span>
          <span>Residential · Industrial · Interior · Landscaping</span>
        </div>
      </div>
    </footer>
  );
}
