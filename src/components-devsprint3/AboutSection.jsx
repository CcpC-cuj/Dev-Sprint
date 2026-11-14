import { motion } from "framer-motion";
import {
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
  Users2,
  Building2,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  {
    icon: Terminal,
    title: "Prompt-to-Code Mastery",
    desc: "Master prompt engineering techniques to turn concepts, user stories, and specs directly into production-ready software prototypes.",
    tag: "Core Focus",
  },
  {
    icon: Cpu,
    title: "AI Development Tooling",
    desc: "Leverage modern AI-assisted coding tools, LLM code assistants, and modern development frameworks to accelerate execution.",
    tag: "Modern Tech",
  },
  {
    icon: Building2,
    title: "Solving Campus Problems",
    desc: "Identify and resolve friction points across university life—from student services to lab workflows and peer collaboration.",
    tag: "Real Impact",
  },
  {
    icon: Layers,
    title: "Implementation & Testing",
    desc: "Move beyond mockups to build functional software with live repositories, verified logic, and working deployed endpoints.",
    tag: "Engineering",
  },
  {
    icon: Users2,
    title: "20–25 Collaborative Teams",
    desc: "Teams of 2–4 members work collectively, combining domain insight, prompt craft, and frontend/backend expertise.",
    tag: "Teamwork",
  },
  {
    icon: ShieldCheck,
    title: "Academic & MLH Backing",
    desc: "Conducted under faculty guidance, in collaboration with Computer Society of India (CSI) and MLH Hack Day.",
    tag: "Official Event",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="section-label">Proposal & Mission</p>
        <h2 className="section-title text-white mb-6">
          About DevSprint 3.0
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          The <span className="text-[#00E5FF] font-semibold">Code Crafters Programming Club (CCPC)</span>, in collaboration with the <span className="text-purple-300 font-semibold">Computer Society of India (CSI)</span> at the <span className="text-white font-medium">Department of Computer Science & Engineering, Central University of Jharkhand</span>, presents DevSprint 3.0 under the <span className="text-[#00E5FF] font-semibold">MLH Hack Day</span> initiative on <span className="text-white font-bold">25th November 2026</span>.
        </p>
      </motion.div>

      {/* Main Feature Highlight Card */}
      <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-[#12122B]/90 to-[#18183B]/80 backdrop-blur-xl p-6 sm:p-10 mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C3BFF]/20 border border-[#6C3BFF]/40 text-xs font-mono text-purple-300">
              <Sparkles size={14} className="text-[#00E5FF]" />
              THEME: "BUILD FOR REAL – SOLVING CAMPUS PROBLEMS"
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Transform Ideas & Prompts into Functional Prototypes
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              DevSprint 3.0 emphasizes problem identification, prompt engineering, effective use of AI development tools, implementation, testing, and live presentation of working solutions.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Participants will work in teams within a fixed 8-hour time limit (9:00 AM – 5:00 PM), promoting practical learning, creativity, teamwork, and hands-on awareness of emerging AI-powered software engineering practices.
            </p>

            <div className="pt-2 grid sm:grid-cols-2 gap-3 text-xs text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00E5FF] flex-shrink-0" />
                <span>20–25 teams with 2–4 members each</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00E5FF] flex-shrink-0" />
                <span>Hands-on in Computer Labs 20 & 21</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00E5FF] flex-shrink-0" />
                <span>Evaluation in Room No. 327</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00E5FF] flex-shrink-0" />
                <span>Permitted modern AI-assisted tools</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0B0B1E]/80 rounded-2xl p-6 border border-purple-500/20 text-left space-y-4">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
              <span className="text-xs uppercase font-mono tracking-wider text-gray-400">
                Departmental Approval
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Official Proposal
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <p className="text-gray-400 font-mono text-[10px] uppercase">Department</p>
                <p className="text-white font-medium">Computer Science and Engineering</p>
              </div>
              <div>
                <p className="text-gray-400 font-mono text-[10px] uppercase">Institution</p>
                <p className="text-white font-medium">Central University of Jharkhand</p>
              </div>
              <div>
                <p className="text-gray-400 font-mono text-[10px] uppercase">Organizing Bodies</p>
                <p className="text-[#00E5FF] font-medium">CCPC (Code Crafters) × CSI Student Branch</p>
              </div>
              <div>
                <p className="text-gray-400 font-mono text-[10px] uppercase">Event Type</p>
                <p className="text-[#00E5FF] font-medium">Online Hackathon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Feature Pillars Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="rounded-2xl border border-purple-500/20 bg-[#12122B]/70 p-6 text-left hover:border-[#00E5FF]/40 hover:bg-[#12122B]/90 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-[#00E5FF] flex items-center justify-center group-hover:bg-[#6C3BFF]/20 transition">
                <item.icon size={22} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                {item.tag}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition">
              {item.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
