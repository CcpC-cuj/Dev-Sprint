const schedule = [
  { time: "02:00 – 02:10 PM", title: "Welcome and Briefing" },
  { time: "02:10 – 02:30 PM", title: "Four Envelope Challenge" },
  { time: "02:30 – 02:35 PM", title: "Problem Release" },
  { time: "02:35 – 03:25 PM", title: "Prompt-to-Report Challenge" },
  { time: "03:25 – 03:30 PM", title: "Final Submission" },
  { time: "03:30 – 03:40 PM", title: "Break and PPT Briefing" },
  { time: "03:40 – 04:00 PM", title: "PPT Preparation" },
  { time: "04:00 – 04:35 PM", title: "Team Presentations" },
  { time: "04:35 – 04:50 PM", title: "Judging and Reflection" },
  { time: "04:50 – 05:00 PM", title: "Results and Closing" },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00E5FF]">
            Timeline
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Event Schedule
          </h2>
          <p className="mt-4 text-sm uppercase tracking-widest text-gray-400">
            30 October 2026 · Room 327
          </p>
        </div>

        <div className="relative">
          {/* Centre line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px bg-[#6C3BFF]/70 -translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {schedule.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`relative pl-12 md:pl-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  }`}
                >
                  {/* Dot */}
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#8B3BFF] shadow-[0_0_14px_rgba(139,59,255,0.9)] ${
                      isLeft
                        ? "left-4 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"
                        : "left-4 -translate-x-1/2 md:left-0"
                    }`}
                  />

                  {/* Card */}
                  <div className="rounded-2xl bg-[#12122B]/80 border border-purple-500/10 px-7 py-6 backdrop-blur-sm transition hover:border-[#6C3BFF]/50 hover:-translate-y-1">
                    <h3 className="text-lg md:text-xl font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[#00E5FF]">
                      {item.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;