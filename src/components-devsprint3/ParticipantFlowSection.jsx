import { motion } from "framer-motion";
import {
  UserCheck,
  Compass,
  FileCode,
  BrainCircuit,
  Wrench,
  UploadCloud,
  CheckCheck,
  Award,
  ArrowRight,
} from "lucide-react";

const flowSteps = [
  {
    step: "01",
    title: "Registration",
    icon: UserCheck,
    summary: "Check-in & Team Identity",
    details:
      "Participants check in at Computer Labs 20 & 21, confirm their teams (2–4 members), and receive official team identification credentials and workstation slots.",
  },
  {
    step: "02",
    title: "Orientation",
    icon: Compass,
    summary: "Rules, AI Tools & Guidelines",
    details:
      "Organizers assemble participants in Room No. 327 to brief everyone on the prompt-to-code format, acceptable AI tools, submission protocol, and scoring criteria.",
  },
  {
    step: "03",
    title: "Challenge Release",
    icon: FileCode,
    summary: "Simultaneous Problem Drop",
    details:
      "Problem statements under the theme 'Build for Real – Solving Campus Problems' are officially released simultaneously to all registered teams.",
  },
  {
    step: "04",
    title: "Planning & Strategy",
    icon: BrainCircuit,
    summary: "Idea, Tech Stack & Prompt Maps",
    details:
      "Teams dissect the problem statements, define their solution architecture, outline custom prompt blueprints, and choose suitable frameworks.",
  },
  {
    step: "05",
    title: "Development Sprints",
    icon: Wrench,
    summary: "AI-Assisted Fast Prototyping",
    details:
      "Participants harness prompt engineering and modern AI development tools alongside standard programming frameworks to craft working software prototypes.",
  },
  {
    step: "06",
    title: "Testing & Submission",
    icon: UploadCloud,
    summary: "Repo, Live Demo & Docs",
    details:
      "Teams rigorously test their prototypes, commit code to their public GitHub repository, and submit their project description and live demo link before 3:30 PM.",
  },
  {
    step: "07",
    title: "Demonstration & Evaluation",
    icon: CheckCheck,
    summary: "Live Presentation to Judges",
    details:
      "Judges assess each project in Room No. 327 across functionality (30%), relevance (25%), innovation (20%), UX (15%), and presentation (10%).",
  },
  {
    step: "08",
    title: "Results & Felicitation",
    icon: Award,
    summary: "Awards & Closing Feedback",
    details:
      "Winners are announced, prizes and certificates are distributed, feedback is gathered, and the event concludes with a commemorative group photo.",
  },
];

const ParticipantFlowSection = () => {
  return (
    <section id="flow" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="section-label">Participant Journey</p>
        <h2 className="section-title text-white mb-4">
          The 8-Stage Participant Flow
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Structured step-by-step roadmap guiding every team from morning check-in to prompt engineering, live deployment, and final podium evaluation.
        </p>
      </motion.div>

      {/* Grid of Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {flowSteps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="rounded-2xl border border-purple-500/20 bg-[#12122B]/75 p-6 text-left flex flex-col justify-between hover:border-[#00E5FF]/40 hover:bg-[#12122B]/95 transition-all duration-300 relative group"
          >
            <div>
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#6C3BFF]">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#00E5FF] flex items-center justify-center group-hover:bg-[#6C3BFF]/20 group-hover:scale-110 transition">
                  <item.icon size={20} />
                </div>
              </div>

              {/* Title & Sub */}
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00E5FF] transition">
                {item.title}
              </h3>
              <p className="text-[11px] font-mono text-purple-300 mb-3 uppercase tracking-wider">
                {item.summary}
              </p>

              {/* Body */}
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.details}
              </p>
            </div>

            {index < flowSteps.length - 1 && (
              <div className="hidden lg:flex items-center gap-1 text-[11px] font-mono text-gray-600 mt-4 group-hover:text-[#00E5FF] transition">
                <span>Next Stage</span>
                <ArrowRight size={12} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ParticipantFlowSection;
