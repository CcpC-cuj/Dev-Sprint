const objectives = [
  "Encourage students to collaborate and solve problems as a team.",
  "Introduce participants to technology concepts in an accessible way.",
  "Practise writing and improving prompts to create a useful, well-structured report.",
  "Build confidence in explaining an idea through a short presentation and Q&A.",
];

const outcomes = [
  "Teamwork",
  "Technology reasoning",
  "Prompt writing & refinement",
  "Critical review of AI output",
  "Report preparation",
  "Concise presentation",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-[#00E5FF]">About</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
          What is Tech Unlocked?
        </h2>
        <p className="mt-6 max-w-3xl text-gray-400">
          TECH UNLOCKED is an introductory technology event for first- and
          second-year students to explore technology through teamwork,
          problem-solving, prompt writing, report preparation and presentations.
          Every activity is beginner-friendly. Expected attendance is under 30
          students, in teams of 3–5.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-purple-500/20 bg-[#12122B] p-8">
            <h3 className="text-lg font-semibold text-white">Objectives</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {objectives.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="text-[#00E5FF]">▹</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-[#12122B] p-8">
            <h3 className="text-lg font-semibold text-white">
              What you will practise
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {outcomes.map((o) => (
                <span
                  key={o}
                  className="px-4 py-2 rounded-full border border-purple-500/30 text-xs text-gray-300"
                >
                  {o}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400">
              The event is designed to make technology feel approachable for
              students who are new to coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;