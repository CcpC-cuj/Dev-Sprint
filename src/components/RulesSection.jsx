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
  "Teams must strictly follow size and leadership requirements.",
  "All development must be done within the hackathon timeline.",
  "Submissions must include repository, live demo, and report.",
  "Once submitted, projects cannot be edited.",
  "Commit history will be evaluated for contribution.",
  "Presentation timing will be strictly followed.",
  "Only inaugurated participants are eligible.",
  "Proper credit must be given for external resources.",
  "Judges' decisions are final and binding.",
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

        <div className="grid md:grid-cols-2 gap-10">

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
                <li
                  key={r}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                 <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" style={{ color: "hsl(185,100%,50%)" }} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RADAR */}
          <motion.div className="card-surface p-6 flex flex-col items-center">
            <h3 className="font-heading text-lg mb-6 self-start">
              Evaluation Matrix
            </h3>

            <div className="relative w-[340px] h-[340px]">
              <svg viewBox="0 0 200 200" className="w-full h-full">

                {/* Grid */}
                {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    points={criteria
                      .map((_, idx) => {
                        const angle =
                          (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                        const r = 90 * scale;
                        return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="rgba(108,59,255,0.15)"
                  />
                ))}

                {/* Shape */}
                <motion.polygon
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  style={{ transformOrigin: "100px 100px" }}
                  points={criteria
                    .map((c, idx) => {
                      const angle =
                        (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                      const r = 90 * (c.value / 100);
                      return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
                    })
                    .join(" ")}
                  fill="rgba(108,59,255,0.2)"
                  stroke="hsl(185,100%,50%)"
                  strokeWidth="2"
                />

                {/* Dots */}
                {criteria.map((c, idx) => {
                  const angle =
                    (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                  const r = 90 * (c.value / 100);
                  return (
                    <circle
                      key={idx}
                      cx={100 + r * Math.cos(angle)}
                      cy={100 + r * Math.sin(angle)}
                      r="4"
                      fill="hsl(185,100%,50%)"
                    />
                  );
                })}
              </svg>

              {/* Labels */}
              {criteria.map((c, idx) => {
                const angle =
                  (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                const r = 115;

                return (
                  <div
                    key={idx}
                    className="absolute text-xs text-center w-20 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${50 + (r * Math.cos(angle)) / 2}%`,
                      top: `${50 + (r * Math.sin(angle)) / 2}%`,
                    }}
                  >
                    <div>{c.label}</div>
                    <div style={{ color: "hsl(185,100%,50%)" }}>
                      {c.value}%
                    </div>
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
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />

              {/* Modal */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="card-surface p-8 max-w-lg w-full relative"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4"
                >
                  <X size={20} />
                </button>

                <h3 className="font-heading text-lg mb-4">
                  Detailed Rules
                </h3>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  {ruleDetails.map((r, i) => (
                    <li key={i}>• {r}</li>
                  ))}
                </ul>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default RulesSection;