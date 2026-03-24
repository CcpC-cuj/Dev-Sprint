import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useState } from "react";

const rules = [
  "Team size: 2–4 members (min 1 from 1st year; leader from 2nd–4th year).",
  "Build a web-based project during the hackathon only.",
  "Submission must include: GitHub repo, deployed live link, and contribution report (Drive link).",
  "Deployment is mandatory; submissions cannot be modified after submission.",
  "Minimum 6 meaningful commits required; individual contributions must be clear.",
  "Final round: 3-min demo + 2-min Q&A.",
  "Only participants present at inauguration are eligible.",
  "Open-source libraries allowed; plagiarism leads to disqualification.",
  "Judges' decisions are final.",
];

const ruleDetails = [
  {
    title:
      "1. Team Size: 2–4 members (minimum 1 from 1st year; leader from 2nd–4th year)",
    description: (
      <p>
        This rule ensures a balanced and diverse team composition. Having at least one 1st-year student promotes inclusivity and gives juniors exposure to real-world development experience. The requirement that the team leader must be from 2nd–4th year ensures that the team is guided by someone with relatively more academic and technical experience. A team size of 2–4 members is optimal as it allows efficient collaboration without overcrowding responsibilities.
      </p>
    ),
  },
  {
    title: "2. Build a web-based project during the hackathon only",
    description: (
      <p>
        Participants must develop their project strictly within the hackathon duration, ensuring fairness and equal opportunity. Pre-built projects or prior coding is not allowed. The focus on web-based projects ensures accessibility, ease of deployment, and standardization across all teams. This rule tests real-time problem-solving, creativity, and teamwork under time constraints.
      </p>
    ),
  },
  {
    title:
      "3. Submission must include: GitHub repo, deployed live link, and contribution report (Drive link)",
    description: (
      <>
        <p>Each team must submit:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>GitHub repository (source code)</li>
          <li>Live deployed link</li>
          <li>Contribution report (Drive link)</li>
        </ul>
        <p className="mt-2">
          This ensures transparency, proper documentation, and accountability.
        </p>
      </>
    ),
  },
  {
    title:
      "4. Deployment is mandatory; submissions cannot be modified after submission",
    description: (
      <p>
        Projects must be deployed (Vercel/Netlify/etc.). Once submitted, no further edits are allowed, ensuring fairness and preventing last-minute changes.
      </p>
    ),
  },
  {
    title:
      "5. Minimum 6 meaningful commits required; individual contributions must be clear",
    description: (
      <p>
        At least 6 meaningful commits must be present. Each commit should reflect real progress. Contributions must clearly show each member’s involvement.
      </p>
    ),
  },
  {
    title: "6. Final round: 3-minute demo + 2-minute Q&A",
    description: (
      <>
        <ul className="list-disc ml-5 space-y-1">
          <li>3-minute project demo</li>
          <li>2-minute Q&A session</li>
        </ul>
        <p className="mt-2">
          Judges evaluate communication, clarity, and technical understanding.
        </p>
      </>
    ),
  },
  {
    title: "7. Only participants present at inauguration are eligible",
    description: (
      <p>
        Attendance is mandatory to ensure authenticity and awareness of rules.
      </p>
    ),
  },
  {
    title:
      "8. Open-source libraries allowed; plagiarism leads to disqualification",
    description: (
      <p>
        Open-source tools are allowed, but plagiarism will lead to immediate disqualification.
      </p>
    ),
  },
  {
    title: "9. Judges' decisions are final",
    description: (
      <p>
        Judges' decisions are final and binding. No disputes will be entertained.
      </p>
    ),
  },
];

const criteria = [
  { label: "Innovation", value: 20 },
  { label: "Technical", value: 20 },
  { label: "UI/UX", value: 20 },
  { label: "Impact", value: 20 },
  { label: "Presentation", value: 20 },
];

const RulesSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="rules" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div className="text-center mb-16">
          <p className="section-label mb-3">Protocol</p>
          <h2 className="section-title">Rules & Judging</h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* RULES */}
          <motion.div
            onClick={() => setOpen(true)}
            className="card-surface p-6 cursor-pointer hover:scale-[1.01] transition"
          >
            <h3 className="font-heading text-lg mb-4">
              Mission Parameters
            </h3>

            <ul className="space-y-3">
              {rules.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ✅ RESPONSIVE RADAR */}
          <motion.div className="card-surface p-6 flex flex-col items-center">
            <h3 className="font-heading text-lg mb-6 self-start">
              Evaluation Matrix
            </h3>

            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square mx-auto">

              <svg viewBox="0 0 200 200" className="w-full h-full">

                {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    points={criteria.map((_, idx) => {
                      const angle = (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                      const r = 80 * scale;
                      return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
                    }).join(" ")}
                    fill="none"
                    stroke="rgba(108,59,255,0.15)"
                  />
                ))}

                <motion.polygon
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  style={{ transformOrigin: "100px 100px" }}
                  points={criteria.map((c, idx) => {
                    const angle = (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                    const r = 80 * (c.value / 100);
                    return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
                  }).join(" ")}
                  fill="rgba(108,59,255,0.2)"
                  stroke="hsl(185,100%,50%)"
                  strokeWidth="2"
                />

                {criteria.map((c, idx) => {
                  const angle = (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                  const r = 80 * (c.value / 100);
                  return (
                    <circle
                      key={idx}
                      cx={100 + r * Math.cos(angle)}
                      cy={100 + r * Math.sin(angle)}
                      r="3"
                      fill="hsl(185,100%,50%)"
                    />
                  );
                })}
              </svg>

              {/* Labels */}
              {criteria.map((c, idx) => {
                const angle = (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                const r = 95;

                return (
                  <div
                    key={idx}
                    className="absolute text-[10px] sm:text-xs text-center w-16 sm:w-20 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${50 + (r * Math.cos(angle)) / 2}%`,
                      top: `${50 + (r * Math.sin(angle)) / 2}%`,
                    }}
                  >
                    <div>{c.label}</div>
                    <div className="text-cyan-400">{c.value}%</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
                onClick={() => setOpen(false)}
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
              >
                <div className="sticky top-0 flex justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                  <h3 className="font-heading text-lg">Detailed Rules</h3>
                  <button onClick={() => setOpen(false)}>
                    <X size={18} />
                  </button>
                </div>

                <div className="px-6 py-4 overflow-y-auto max-h-[70vh] space-y-6">
                  {ruleDetails.map((rule, i) => (
                    <div key={i}>
                      <h4 className="text-white font-semibold">{rule.title}</h4>
                      <div className="text-gray-300 text-sm mt-1">
                        {rule.description}
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default RulesSection;