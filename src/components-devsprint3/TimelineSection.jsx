import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  CheckCircle2,
  Code2,
  Presentation,
  Trophy,
  Coffee,
  Sparkles,
} from "lucide-react";

const schedule = [
  {
    time: "9:00 – 9:30 AM",
    activity: "Registration & Check-in",
    description: "Participant verification, team confirmation, and workspace allocation.",
    venue: "Computer Labs 20 & 21",
    phase: "Onboarding",
    icon: CheckCircle2,
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    time: "9:30 – 9:45 AM",
    activity: "Inauguration & Welcome",
    description: "Welcome address, introductory remarks, and kickoff by faculty and club leadership.",
    venue: "Room No. 327",
    phase: "Kickoff",
    icon: Sparkles,
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
  {
    time: "9:45 – 10:00 AM",
    activity: "Orientation & Rule Briefing",
    description: "Explanation of event format, prompt-to-code guidelines, permitted AI tools, judging criteria, and submission workflow.",
    venue: "Room No. 327",
    phase: "Briefing",
    icon: Presentation,
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  {
    time: "10:00 – 10:15 AM",
    activity: "Problem Statement Release",
    description: "Official announcement of problem statements and specific development challenges under Solving Campus Problems.",
    venue: "Room No. 327",
    phase: "Release",
    icon: Sparkles,
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    time: "10:15 – 10:30 AM",
    activity: "Team Discussion & Planning",
    description: "Teams finalize their project scope, architectural approach, prompt strategies, and technology stack.",
    venue: "Labs 20 & 21",
    phase: "Strategy",
    icon: Code2,
    badgeColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  },
  {
    time: "10:30 AM – 1:00 PM",
    activity: "Development Sprint – 1",
    description: "Prompt engineering, AI-assisted coding, core logic implementation, and foundational UI scaffolding.",
    venue: "Computer Labs 20 & 21",
    phase: "Sprint Phase 1",
    icon: Code2,
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    isMajor: true,
  },
  {
    time: "1:00 – 1:45 PM",
    activity: "Lunch Break",
    description: "Lunch, relaxation, and informal networking among participants, mentors, and organizing team.",
    venue: "Designated Dining Area",
    phase: "Recharge",
    icon: Coffee,
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  {
    time: "1:45 – 3:15 PM",
    activity: "Development Sprint – 2",
    description: "Feature completion, end-to-end debugging, cross-tool testing, UI polish, and deployment of working prototypes.",
    venue: "Computer Labs 20 & 21",
    phase: "Sprint Phase 2",
    icon: Code2,
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    isMajor: true,
  },
  {
    time: "3:15 – 3:30 PM",
    activity: "Final Submission",
    description: "Strict deadline: Submission of public GitHub repository, project description markdown, and live deployment link.",
    venue: "Online Submission Portal",
    phase: "Deadline",
    icon: CheckCircle2,
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    isMajor: true,
  },
  {
    time: "3:30 – 4:15 PM",
    activity: "Project Demonstration & Evaluation",
    description: "Team-wise live project presentations, interactive walkthroughs, and rigorous evaluation by the judge panel.",
    venue: "Room No. 327",
    phase: "Evaluation",
    icon: Presentation,
    badgeColor: "bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30",
    isMajor: true,
  },
  {
    time: "4:15 – 4:30 PM",
    activity: "Judging & Finalization",
    description: "Consolidation of evaluation rubric scores across all 5 criteria and selection of winning teams.",
    venue: "Room No. 327",
    phase: "Review",
    icon: Trophy,
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
  {
    time: "4:30 – 4:50 PM",
    activity: "Results & Awards",
    description: "Winner announcements, prize felicitation, and distribution of certificates to standout performers.",
    venue: "Room No. 327",
    phase: "Ceremony",
    icon: Trophy,
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/40",
    isMajor: true,
  },
  {
    time: "4:50 – 5:00 PM",
    activity: "Closing Ceremony",
    description: "Acknowledgements, participant feedback collection, vote of thanks, and official group photograph.",
    venue: "Room No. 327",
    phase: "Wrap-up",
    icon: Sparkles,
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="section-label">Launch Sequence</p>
        <h2 className="section-title text-white mb-4">
          Event Timeline & Schedule
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          From 9:00 AM check-in to 5:00 PM awards, every hour is optimized for intense AI-powered development, hands-on sprints, and live evaluation.
        </p>
      </motion.div>

      {/* Timeline List */}
      <div className="relative border-l border-purple-500/20 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-8 space-y-8">
        {schedule.map((item, index) => (
          <motion.div
            key={item.time + item.activity}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
            className="relative group"
          >
            {/* Timeline Dot Indicator */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                item.isMajor
                  ? "bg-[#00E5FF] border-white shadow-[0_0_12px_#00E5FF]"
                  : "bg-[#0B0B1E] border-purple-400 group-hover:border-[#00E5FF]"
              }`}
            />

            {/* Main Timeline Card */}
            <div
              className={`rounded-2xl border p-5 sm:p-6 text-left transition-all duration-300 ${
                item.isMajor
                  ? "border-purple-500/40 bg-gradient-to-br from-[#12122B]/95 to-[#1c183d]/90 shadow-[0_4px_25px_rgba(108,59,255,0.15)] group-hover:border-[#00E5FF]/60"
                  : "border-purple-500/20 bg-[#12122B]/60 group-hover:border-purple-500/40 group-hover:bg-[#12122B]/90"
              }`}
            >
              {/* Header inside card: Time, Phase, Venue */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#00E5FF]" />
                  <span className="font-mono text-xs sm:text-sm font-semibold text-white">
                    {item.time}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                  >
                    {item.phase}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <MapPin size={11} className="text-purple-400" />
                    {item.venue}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#00E5FF] transition">
                {item.activity}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
