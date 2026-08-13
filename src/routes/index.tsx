import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial fade in
    const timerIn = setTimeout(() => setIsVisible(true), 100);
    
    // Auto redirect after 3.5 seconds
    const timerOut = setTimeout(() => {
      navigate({ to: "/home" });
    }, 3500);

    return () => {
      clearTimeout(timerIn);
      clearTimeout(timerOut);
    };
  }, [navigate]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] text-white transition-opacity duration-1000"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="text-center px-6">
        <div className="label-mono mb-6 text-white/40 tracking-[0.3em] uppercase text-xs animate-pulse">
          Portfolio Intro
        </div>
        <h1 
          className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none"
          style={{ color: '#954842' }}
        >
          VN
          <br />
          Architects<span className="text-white">.</span>
        </h1>
        
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => navigate({ to: "/home" })}
            className="group flex flex-col items-center gap-4 transition-transform hover:scale-105"
          >
            <div className="h-px w-12 bg-white/20 transition-all group-hover:w-20 group-hover:bg-[#954842]" />
            <span className="label-mono text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white">
              Enter Studio
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 label-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
        VN Architects © 2026
      </div>
      
      <div className="absolute top-10 right-10 flex gap-2">
        <div className="h-1 w-1 bg-[#954842] rounded-full animate-ping" />
        <div className="h-1 w-1 bg-[#954842] rounded-full" />
      </div>
    </div>
  );
}
