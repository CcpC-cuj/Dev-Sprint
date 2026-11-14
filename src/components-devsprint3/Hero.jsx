import { useEffect, useState } from "react";
import { Rocket, Calendar, Clock, MapPin, Users, Sparkles, ChevronDown } from "lucide-react";

// Target event date: 25th November 2026, 09:00 AM IST
const targetDate = new Date("2026-11-25T09:00:00").getTime();

const quickSpecs = [
  {
    icon: Calendar,
    label: "Date",
    value: "25th November 2026",
    sub: "One-Day Mini Hackathon",
  },
  {
    icon: Clock,
    label: "Duration",
    value: "9:00 AM – 5:00 PM",
    sub: "8-Hour Sprint",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "Labs 20, 21 & Room 327",
    sub: "Central University of Jharkhand",
  },
  {
    icon: Users,
    label: "Participation",
    value: "20–25 Teams",
    sub: "2–4 Members / Team",
  },
];

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
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 text-center overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,59,255,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00E5FF]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 mx-auto">
        {/* Organizer & Affiliation Badges */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-[#12122B]/90 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(108,59,255,0.2)]">
          <Rocket size={14} className="text-[#00E5FF]" />
          <span className="text-xs uppercase tracking-widest text-[#00E5FF] font-mono">
            MLH Hack Day Initiative
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-xs tracking-wider text-gray-300">
            CCPC × CSI Collaboration
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1] mb-4 text-gradient-hero">
          DEVSPRINT 3.0
        </h1>

        {/* Theme Banner */}
        <div className="mb-4">
          <span className="inline-block text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white via-[#00E5FF] to-[#A855F7] bg-clip-text text-transparent">
            “Build for Real – Solving Campus Problems”
          </span>
        </div>

        {/* Core Subtitle / Description */}
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-8 leading-relaxed font-sans">
          A one-day offline mini hackathon focusing on <span className="text-[#00E5FF] font-medium">prompt-to-code development</span>. Use AI-assisted coding tools and modern technologies to transform real problems and natural prompts into functional software prototypes.
        </p>

        {/* Countdown Timer */}
        <div className="mb-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-gray-400 mb-3">
            Hacking Commences In
          </p>
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div
                key={label}
                className="glass-panel rounded-xl px-4 sm:px-6 py-3 min-w-[75px] sm:min-w-[90px] border border-purple-500/20 bg-[#12122B]/80"
              >
                <div className="text-2xl sm:text-4xl font-extrabold font-mono text-white">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-xs text-[#00E5FF] uppercase tracking-widest mt-1 font-mono">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-14">
          <button
            onClick={() => scrollTo("timeline")}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#6C3BFF] to-[#00E5FF] text-white uppercase tracking-widest text-xs font-semibold shadow-[0_0_25px_rgba(108,59,255,0.5)] hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] hover:-translate-y-[2px] transition cursor-pointer flex items-center gap-2"
          >
            <Sparkles size={15} />
            Explore Timeline
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="px-7 py-3 rounded-xl border border-purple-500/40 text-gray-200 uppercase tracking-widest text-xs font-semibold hover:border-[#00E5FF] hover:bg-purple-500/10 hover:-translate-y-[2px] transition cursor-pointer"
          >
            Event Brief
          </button>
          <button
            onClick={() => scrollTo("criteria")}
            className="px-7 py-3 rounded-xl border border-purple-500/40 text-gray-200 uppercase tracking-widest text-xs font-semibold hover:border-[#00E5FF] hover:bg-purple-500/10 hover:-translate-y-[2px] transition cursor-pointer"
          >
            Judging Criteria
          </button>
        </div>

        {/* 4 Key Event Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {quickSpecs.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-purple-500/20 bg-[#12122B]/70 backdrop-blur-md p-4 text-left transition hover:border-[#00E5FF]/40 hover:-translate-y-1"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-[#00E5FF] flex items-center justify-center mb-3">
                <item.icon size={16} />
              </div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-white mt-1">
                {item.value}
              </p>
              <p className="text-xs text-purple-300/80 mt-0.5">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Down Chevron Indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="mt-14 animate-bounce text-gray-400 hover:text-[#00E5FF] transition cursor-pointer"
        aria-label="Scroll to About Section"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
