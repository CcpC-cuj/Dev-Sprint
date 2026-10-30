const activities = [
  {
    no: "01",
    title: "Four Envelope Challenge",
    duration: "20 minutes",
    desc: "Each team gets four envelopes. Each holds a clue or short puzzle on a technology topic such as AI, the internet, cybersecurity or mobile apps.",
    points: [
      "10 points per correct answer (max 40)",
      "One hint per clue, each hint costs 2 points",
      "No negative marking for wrong answers",
      "Do not share clues or answers with other teams",
    ],
  },
  {
    no: "02",
    title: "Prompt-to-Report Challenge",
    duration: "50 minutes",
    desc: "Each team receives a problem statement by email, writes and improves a prompt, then reviews the output for gaps, errors and unsupported claims. Submit one final report by 3:30 PM.",
    points: [
      "Relevance to the problem: 25",
      "Completeness and structure: 20",
      "Prompt quality and improvement: 20",
      "Accuracy and critical review: 20",
      "Clarity and presentation: 15",
    ],
  },
  {
    no: "03",
    title: "Problem Card PPT Challenge",
    duration: "3 min + 1 min Q&A",
    desc: "Each team draws a problem card and completes the same ready-made PowerPoint template: problem, solution, how it works, benefits, limitations and conclusion.",
    points: [
      "Understanding of the problem: 25",
      "Creativity and usefulness: 25",
      "Feasibility and reasoning: 20",
      "Slide clarity: 15",
      "Presentation and Q&A: 15",
    ],
  },
];

const DomainsSection = () => {
  return (
    <section id="domains" className="relative px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-[#00E5FF]">Activities</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
          Three Challenges
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {activities.map((a) => (
            <div
              key={a.no}
              className="rounded-2xl border border-purple-500/20 bg-[#12122B] p-8 transition hover:border-[#6C3BFF]/60 hover:-translate-y-1"
            >
              <p className="text-4xl font-bold text-[#6C3BFF]/60">{a.no}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{a.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#00E5FF]">
                {a.duration}
              </p>
              <p className="mt-4 text-sm text-gray-400">{a.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                {a.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-[#00E5FF]">▹</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Report and PPT rubrics are each scored out of 100.
        </p>
      </div>
    </section>
  );
};

export default DomainsSection;