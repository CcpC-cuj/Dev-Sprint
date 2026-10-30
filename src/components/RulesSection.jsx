const rules = [
  "All team members should participate actively and respectfully.",
  "Submit your own work. Do not copy another team's report or presentation.",
  "AI tools may be used for the report, but you are responsible for checking the output.",
  "Only one final report per team, emailed by 3:30 PM. Late reports are not eligible for normal scoring.",
  "A 5-point deduction may apply if a team exceeds the presentation time after the warning.",
  "Organisers may deduct points for rule violations or disruptive behaviour.",
  "Tie-breaker: higher accuracy/critical-review score for the report; problem understanding and feasibility for the PPT.",
];

const rounds = [
  "Round 1: Four Envelope Challenge",
  "Round 2: Prompt-to-Report Challenge",
  "Round 3: Problem Card PPT Challenge",
];

const positions = [
  { place: "1st", label: "Top Team" },
  { place: "2nd", label: "Second Team" },
  { place: "3rd", label: "Third Team" },
];

const RulesSection = () => {
  return (
    <section id="rules" className="relative px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-[#00E5FF]">Rules</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
          Rules and Awards
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-purple-500/20 bg-[#12122B] p-8">
            <h3 className="text-lg font-semibold text-white">General Rules</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {rules.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="text-[#00E5FF]">▹</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-[#12122B] p-8">
            <h3 className="text-lg font-semibold text-white">Awards</h3>
            <p className="mt-4 text-sm text-gray-400">
              Certificates will be given to the top 3 teams, based on the
              combined evaluation of all 3 rounds.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {positions.map((p) => (
                <div
                  key={p.place}
                  className="rounded-xl border border-[#6C3BFF]/40 bg-[#6C3BFF]/10 px-3 py-5 text-center"
                >
                  <p className="text-2xl font-bold text-white">{p.place}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[#00E5FF]">
                    {p.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs uppercase tracking-widest text-gray-500">
              Rounds counted
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {rounds.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="text-[#00E5FF]">▹</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;