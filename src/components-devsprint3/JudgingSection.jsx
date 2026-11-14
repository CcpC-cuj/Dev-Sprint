import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  Sliders,
  ShieldAlert,
  GitBranch,
  Video,
  Award,
} from "lucide-react";

const criteria = [
  {
    parameter: "Functionality and Implementation",
    weightage: 30,
    color: "from-blue-500 to-[#00E5FF]",
    textColor: "text-[#00E5FF]",
    borderColor: "border-[#00E5FF]/40",
    desc: "Working prototype execution, core logic stability, handling of edge cases, clean architecture, and practical robustness of the implemented software.",
  },
  {
    parameter: "Relevance to Problem Statement",
    weightage: 25,
    color: "from-purple-500 to-indigo-500",
    textColor: "text-purple-300",
    borderColor: "border-purple-500/40",
    desc: "How directly and effectively the solution solves the chosen campus challenge and demonstrates practical feasibility within a university ecosystem.",
  },
  {
    parameter: "Innovation and Creativity",
    weightage: 20,
    color: "from-pink-500 to-rose-500",
    textColor: "text-pink-300",
    borderColor: "border-pink-500/40",
    desc: "Originality of approach, inventive application of modern prompt engineering, novel use of AI tooling, and creative problem resolution.",
  },
  {
    parameter: "User Experience and Practicality",
    weightage: 15,
    color: "from-amber-400 to-orange-500",
    textColor: "text-amber-300",
    borderColor: "border-amber-400/40",
    desc: "Intuitive user interface, smooth user workflow, responsive design, accessibility, and ease of adoption by real campus stakeholders.",
  },
  {
    parameter: "Presentation and Explanation",
    weightage: 10,
    color: "from-emerald-400 to-teal-500",
    textColor: "text-emerald-300",
    borderColor: "border-emerald-400/40",
    desc: "Clarity of demonstration, concise articulation of the problem & solution, technical defense, and confidence during judge Q&A in Room 327.",
  },
];

const submissionRules = [
  {
    icon: GitBranch,
    title: "Public GitHub Repository",
    desc: "Clear commit history demonstrating progressive prompt-to-code iterations and authentic member contributions.",
  },
  {
    icon: Video,
    title: "Live Deployed Demo",
    desc: "Accessible web URL (e.g. Vercel, Netlify, Render, Cloudflare) allowing live verification by judges.",
  },
  {
    icon: FileText,
    title: "Comprehensive README & Description",
    desc: "Clear documentation of campus problem addressed, prompt methodology used, tech stack, and setup steps.",
  },
  {
    icon: ShieldAlert,
    title: "Submission Cutoff: 3:30 PM Sharp",
    desc: "All deliverables must be pushed and submitted via the official portal between 3:15 PM and 3:30 PM.",
  },
];

const JudgingSection = () => {
  return (
    <section id="criteria" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="section-label">Evaluation Rubric</p>
        <h2 className="section-title text-white mb-4">
          Judging Criteria & Deliverables
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Transparent, weighted scoring matrix totaling 100%. Evaluated team-wise by departmental faculty and industry judges in Room 327.
        </p>
      </motion.div>

      {/* Main Grid: Left for Criteria Bars, Right for Deliverables & Rules */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: 5 Scoring Criteria (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl border border-purple-500/20 bg-[#12122B]/80 p-6 sm:p-8 text-left">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-purple-500/20">
              <div className="flex items-center gap-2">
                <Sliders size={18} className="text-[#00E5FF]" />
                <span className="font-bold text-white text-base">
                  Weighted Scoring Breakdown
                </span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#6C3BFF]/20 text-[#00E5FF] border border-[#6C3BFF]/40">
                Total: 100%
              </span>
            </div>

            <div className="space-y-6">
              {criteria.map((item, idx) => (
                <motion.div
                  key={item.parameter}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="font-semibold text-sm sm:text-base text-white">
                      {item.parameter}
                    </span>
                    <span className={`font-mono text-base font-bold ${item.textColor}`}>
                      {item.weightage}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-3 rounded-full bg-[#0B0B1E] overflow-hidden border border-white/5 p-0.5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.weightage}%` }}
                    />
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed pt-0.5">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Submission Deliverables & Departmental Rules (5 Cols) */}
        <div className="lg:col-span-5 space-y-5 text-left">
          {/* Submission Guidelines Card */}
          <div className="rounded-2xl border border-purple-500/20 bg-[#12122B]/80 p-6 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-purple-500/20">
              <Award size={18} className="text-[#00E5FF]" />
              <h3 className="font-bold text-white text-base">
                Submission Checklist
              </h3>
            </div>

            <div className="space-y-3.5">
              {submissionRules.map((r) => (
                <div key={r.title} className="flex gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-[#00E5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <r.icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {r.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation Protocol Card */}
          <div className="rounded-2xl border border-[#00E5FF]/20 bg-[#0B0B1E]/90 p-5 text-xs text-gray-300 space-y-2.5">
            <div className="flex items-center gap-2 text-[#00E5FF] font-semibold uppercase tracking-wider text-[11px] font-mono">
              <CheckCircle size={14} />
              Evaluation Protocol (Room 327)
            </div>
            <p className="text-gray-400 leading-relaxed">
              Teams present live working demos to the judges between 3:30 PM and 4:15 PM. Each presentation is followed by a technical Q&A focusing on problem understanding, prompt engineering workflow, and codebase integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgingSection;
