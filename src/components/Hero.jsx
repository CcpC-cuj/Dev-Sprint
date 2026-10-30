const details = [
  { label: "Date", value: "30 October 2026" },
  { label: "Time", value: "2:00 PM – 5:00 PM" },
  { label: "Venue", value: "Room 327" },
  { label: "For", value: "1st & 2nd Year Students" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-[#00E5FF] mb-6">
        Code Crafter Programming Club Presents
      </p>

      <h1 className="text-5xl md:text-8xl font-bold leading-tight bg-gradient-to-b from-white to-[#8B6BFF] bg-clip-text text-transparent">
        Tech Unlocked
      </h1>

      <p className="mt-6 max-w-2xl text-gray-400 text-base md:text-lg">
        A beginner-friendly, team-based tech event: solve clues, write prompts,
        prepare reports and present your ideas. No coding knowledge required.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
        {details.map((d) => (
          <div
            key={d.label}
            className="rounded-xl border border-purple-500/20 bg-[#12122B] px-4 py-5"
          >
            <p className="text-[10px] uppercase tracking-widest text-gray-500">
              {d.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-white">{d.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <a
          href="#timeline"
          className="px-8 py-3 rounded-lg border border-purple-500/40 text-white text-sm uppercase tracking-widest font-medium transition hover:bg-purple-500/10"
        >
          View Schedule
        </a>
      </div>
    </section>
  );
};

export default Hero;