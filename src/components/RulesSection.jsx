import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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

const criteria = [
  { label: "Innovation & Creativity", value: 20 },
  { label: "Technical Implementation", value: 20 },
  { label: "UI/UX Design", value: 20 },
  { label: "Impact & Practical Use", value: 20 },
  { label: "Presentation Skills", value: 20 },
];

const RulesSection = () => (
  <section id="rules" className="relative py-24 md:py-32">
    <div className="mx-auto px-4">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">Protocol</p>
        <h2 className="section-title">Rules & Judging</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-surface p-6"
        >
          <h3 className="font-heading font-semibold text-lg mb-4">
            Mission Parameters
          </h3>

          <ul className="space-y-3">
            {rules.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <CheckCircle
                  size={16}
                  style={{ color: "hsl(185,100%,50%)" }}
                />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-surface p-6 flex flex-col items-center"
        >
          <h3 className="font-heading font-semibold text-lg mb-6 self-start">
            Evaluation Matrix
          </h3>

          <div className="relative w-64 h-64 mb-6">
            <svg viewBox="0 0 200 200" className="w-full h-full">

              {/* Grid Rings */}
              {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
                <polygon
                  key={i}
                  points={criteria
                    .map((_, idx) => {
                      const angle =
                        (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                      const r = 80 * scale;
                      return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="rgba(108,59,255,0.15)"
                  strokeWidth="0.6"
                />
              ))}

              {/* Axis Lines */}
              {criteria.map((_, idx) => {
                const angle =
                  (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                return (
                  <line
                    key={idx}
                    x1="100"
                    y1="100"
                    x2={100 + 80 * Math.cos(angle)}
                    y2={100 + 80 * Math.sin(angle)}
                    stroke="rgba(108,59,255,0.15)"
                    strokeWidth="0.6"
                  />
                );
              })}

              {/* Filled Shape */}
              <motion.polygon
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  transformOrigin: "100px 100px",
                  filter: "drop-shadow(0 0 10px rgba(0,229,255,0.4))",
                }}
                points={criteria
                  .map((c, idx) => {
                    const angle =
                      (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                    const r = 80 * (c.value / 100);
                    return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
                  })
                  .join(" ")}
                fill="rgba(108,59,255,0.2)"
                stroke="hsl(185,100%,50%)"
                strokeWidth="1.5"
              />

              {/* Dots */}
              {criteria.map((c, idx) => {
                const angle =
                  (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
                const r = 80 * (c.value / 100);
                return (
                  <circle
                    key={idx}
                    cx={100 + r * Math.cos(angle)}
                    cy={100 + r * Math.sin(angle)}
                    r="3"
                    fill="hsl(185,100%,50%)"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(0,229,255,0.6))",
                    }}
                  />
                );
              })}
            </svg>

            {/* Labels */}
            {criteria.map((c, idx) => {
              const angle =
                (Math.PI * 2 * idx) / criteria.length - Math.PI / 2;
              const r = 105;

              return (
                <div
                  key={idx}
                  className="absolute text-[10px] text-muted-foreground text-center w-20 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${50 + (r * Math.cos(angle)) / 2}%`,
                    top: `${50 + (r * Math.sin(angle)) / 2}%`,
                  }}
                >
                  {c.label}
                  <span
                    style={{ color: "hsl(185,100%,50%)" }}
                    className="block font-mono text-xs"
                  >
                    {c.value}%
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full">
            {criteria.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "hsl(185,100%,50%)" }}
                />
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default RulesSection;