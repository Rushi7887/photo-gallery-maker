import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlideshow } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideshow.length);
    }, 5000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navigate({ to: "/home" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(slideTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);

  return (
    <div className="relative h-[200vh] w-full bg-black text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
      {/* Background Slideshow with Parallax/Zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-full w-full"
          >
            <img
              src={heroSlideshow[currentImageIndex]}
              alt="Architectural Visual"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Architectural Design Elements: Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
        {/* Coordinate Markers */}
        <div className="absolute top-10 left-10 label-mono text-[8px] uppercase tracking-widest">
          LAT: 19.8762° N / LONG: 75.3433° E
        </div>
        <div className="absolute bottom-10 right-10 label-mono text-[8px] uppercase tracking-widest">
          REF: VN_ARCH_2026_INDEX
        </div>
      </div>

      {/* Top Navigation Overlay */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 flex items-center justify-center bg-[#954842] text-white label-mono text-xl font-bold">
            VN
          </div>
          <span className="hidden md:block label-mono text-xs uppercase tracking-[0.3em]">Architects</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-8 label-mono text-[10px] uppercase tracking-widest text-white/60"
        >
          <button onClick={() => navigate({ to: "/home" })} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => navigate({ to: "/home", hash: "projects" })} className="hover:text-white transition-colors">Projects</button>
          <button onClick={() => navigate({ to: "/home", hash: "contact" })} className="hover:text-white transition-colors">Contact</button>
        </motion.div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="label-mono mb-4 text-xs uppercase tracking-[0.5em] text-[#954842]">
              Architecture • Interiors • Planning
            </h2>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              WE SHAPE SPACES.<br />
              <span className="text-white/20 outline-text">WE CREATE EXPERIENCES.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mx-auto max-w-xl text-sm md:text-base text-white/60 font-light leading-relaxed mb-12"
          >
            Creating bold, functional and timeless spaces through innovative architectural thinking. 
            Designing the future of residential and industrial landscapes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate({ to: "/home" })}
              className="px-10 py-4 bg-[#954842] text-white label-mono text-xs uppercase tracking-widest hover:bg-[#a65d57] transition-all duration-300 hover:scale-105"
            >
              Explore Our Work
            </button>
            <button
              onClick={() => navigate({ to: "/home", hash: "contact" })}
              className="px-10 py-4 border border-white/20 text-white label-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              Start A Project
            </button>
          </motion.div>
        </div>
      </main>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="label-mono text-[8px] uppercase tracking-[0.4em] text-white/40">Scroll to explore</span>
        <div className="h-16 w-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#954842]"
          />
        </div>
      </motion.div>

      {/* Side Vertical Text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="rotate-90 origin-right label-mono text-[10px] uppercase tracking-[0.5em] text-white/10 whitespace-nowrap">
          DESIGNING THE FUTURE / 2026
        </div>
      </div>
      
      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
      `}</style>
      </div>
    </div>
  );
}
