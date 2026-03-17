import { useEffect, useState } from "react";
import { Rocket, ChevronDown } from "lucide-react";

const targetDate = new Date("2026-03-21T14:00:00").getTime();

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, targetDate - now);

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff % 86400000) / 3600000),
        min: Math.floor((diff % 3600000) / 60000),
        sec: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 text-center overflow-hidden"
    >
      {/* cosmic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,59,255,0.12),transparent_65%)]"></div>

      <div className="relative z-10 max-w-4xl px-6">

        {/* label */}
        <p className="uppercase tracking-[0.2em] text-[#00E5FF] text-xs mb-4 flex items-center justify-center gap-2">
          <Rocket size={14} />
          ONLINE WEB DEVELOPMENT HACKATHON
        </p>

        {/* title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] mb-6 text-gradient-hero">
          Code Beyond
          <br />
          the Horizon
        </h1>

        {/* subtitle */}
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mb-4 opacity-80">
          Push the boundaries of innovation and build impactful web solutions
          in a 24-hour coding sprint.
        </p>

        {/* date */}
        <p className="text-[#00E5FF] font-mono text-sm mb-10">
          21 March 2026 – 22 March 2026
        </p>

        {/* countdown */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="glass-panel rounded-xl px-6 py-4 min-w-[90px]"
            >
              <div className="text-3xl font-bold font-mono text-white">
                {String(value).padStart(2, "0")}
              </div>

              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* buttons */}
        <div className="flex justify-center gap-4 flex-wrap">

          <button className="px-8 py-3 rounded-lg bg-[#6C3BFF] text-white uppercase tracking-widest text-sm font-semibold transition hover:shadow-[0_0_25px_rgba(108,59,255,0.6)] hover:-translate-y-[2px]">
            Register Now
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="px-8 py-3 rounded-lg border border-purple-400/30 text-white uppercase tracking-widest text-sm font-semibold hover:border-purple-400 hover:-translate-y-[2px] transition"
          >
            View Details
          </button>

        </div>

      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="text-gray-400" size={26} />
      </div>
    </section>
  );
};

export default HeroSection;