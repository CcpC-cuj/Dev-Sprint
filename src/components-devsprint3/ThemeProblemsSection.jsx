import { motion } from "framer-motion";
import {
  Sparkles,
  Map,
  BookOpen,
  MessageSquare,
  CalendarCheck2,
  Lightbulb,
} from "lucide-react";

const domains = [
  {
    icon: Map,
    title: "Campus Facilities & Navigation",
    focus: "Lab & Room Availability, Campus Maps",
    description:
      "Platforms to check real-time lab/room occupancy (e.g. Labs 20, 21, Room 327), book study spaces, find campus amenities, and locate academic blocks.",
    prompts: [
      "Real-time lab workstation & vacancy tracker",
      "Interactive 3D/2D university building navigator",
      "Classroom schedule & vacant slot locator",
    ],
  },
  {
    icon: BookOpen,
    title: "Academic & Peer Collaboration",
    focus: "Notes Sharing, Peer Study Circles",
    description:
      "Tools for students to collaborate across semesters, find project partners, share verified lecture notes, and summarize academic papers with AI.",
    prompts: [
      "AI-driven study group matcher by subject",
      "Peer-reviewed syllabus note repository",
      "Automated assignment reminder & group planner",
    ],
  },
  {
    icon: MessageSquare,
    title: "Student Welfare & Grievance Redressal",
    focus: "Hostel, Mess & Administrative Feedback",
    description:
      "Transparent reporting and resolution workflows for hostel maintenance, mess menu feedback, departmental queries, and anonymous student suggestions.",
    prompts: [
      "Smart ticket-based hostel repair tracker",
      "Daily mess menu rating & feedback analytics",
      "Anonymous grievance system with status tracking",
    ],
  },
  {
    icon: CalendarCheck2,
    title: "Club & Event Discovery Hub",
    focus: "CCPC, CSI & Campus Activities",
    description:
      "Centralized event calendar for CCPC, CSI, and technical clubs, enabling single-click event registration, team matchmaking, and leaderboard showcases.",
    prompts: [
      "Unified university hackathon & workshop hub",
      "Club membership & attendance passbook",
      "Project exhibition gallery with voting",
    ],
  },
];

const ThemeProblemsSection = () => {
  return (
    <section id="domains" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="section-label">Hackathon Theme</p>
        <h2 className="section-title text-white mb-4">
          "Build for Real – Solving Campus Problems"
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Participants build functional software that directly eliminates friction points in campus life, using AI prompt-to-code practices.
        </p>
      </motion.div>

      {/* 4 Thematic Problem Domains */}
      <div className="grid md:grid-cols-2 gap-6">
        {domains.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-purple-500/20 bg-[#12122B]/75 p-6 sm:p-7 text-left hover:border-[#00E5FF]/40 hover:bg-[#12122B]/95 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-[#00E5FF] flex items-center justify-center group-hover:bg-[#6C3BFF]/20 group-hover:scale-110 transition">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00E5FF] transition">
                  {item.title}
                </h3>
                <p className="text-[11px] font-mono text-purple-300">
                  {item.focus}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
              {item.description}
            </p>

            <div className="space-y-2 pt-3 border-t border-purple-500/15">
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                <Lightbulb size={12} className="text-[#00E5FF]" />
                Sample Prototype Challenges:
              </p>
              <ul className="space-y-1.5">
                {item.prompts.map((p) => (
                  <li
                    key={p}
                    className="text-xs text-gray-400 flex items-start gap-2"
                  >
                    <span className="text-[#00E5FF] font-mono">›</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ThemeProblemsSection;
