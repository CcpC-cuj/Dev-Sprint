import { motion } from "framer-motion";
import { Laptop, MonitorPlay, Wifi, Volume2, ShieldCheck, Cpu } from "lucide-react";

const facilities = [
  {
    name: "Computer Laboratory 20",
    purpose: "Participant Workspace & Development",
    icon: Laptop,
    badge: "Primary Workspace",
    details:
      "Fully equipped departmental computer lab offering dedicated workstations, high-speed LAN, dual monitors/workstation access, and power outlets for developer laptops.",
  },
  {
    name: "Computer Laboratory 21",
    purpose: "Participant Workspace & Prototyping",
    icon: Cpu,
    badge: "Secondary Workspace",
    details:
      "Extended developer lab workspace ensuring comfortable space allocation for all 20–25 teams to collaborate, plan prompts, and code simultaneously.",
  },
  {
    name: "Room No. 327",
    purpose: "Inauguration, Orientation & Evaluations",
    icon: MonitorPlay,
    badge: "Keynote & Judging Hall",
    details:
      "Central venue for the 9:30 AM Inauguration, 9:45 AM Rule Briefing, 3:30 PM Live Team Project Demonstrations, and 4:30 PM Awards Ceremony.",
  },
  {
    name: "High-Speed Internet Connectivity",
    purpose: "AI Tools, Cloud IDEs & Deployment",
    icon: Wifi,
    badge: "Dedicated Bandwidth",
    details:
      "High-bandwidth, low-latency departmental networking configured for heavy AI API calls, Cursor/Copilot completions, npm dependencies, and live deployment platforms.",
  },
  {
    name: "Projector & Audio System",
    purpose: "Keynote Presentations & Announcements",
    icon: Volume2,
    badge: "AV Infrastructure",
    details:
      "High-definition AV projection and crystal-clear public address system in Room 327 for briefing slides, live screensharing demos, and judging questions.",
  },
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="section-label">Departmental Infrastructure</p>
        <h2 className="section-title text-white mb-4">
          Approved Facilities & Resources
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Sanctioned departmental infrastructure at the Department of Computer Science & Engineering, Central University of Jharkhand, ensuring an optimal competitive environment.
        </p>
      </motion.div>

      {/* Facilities Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {facilities.map((fac, idx) => (
          <motion.div
            key={fac.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-purple-500/20 bg-[#12122B]/75 p-6 text-left flex flex-col justify-between hover:border-[#00E5FF]/40 hover:bg-[#12122B]/95 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-[#00E5FF] flex items-center justify-center group-hover:bg-[#6C3BFF]/20 group-hover:scale-110 transition">
                  <fac.icon size={22} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                  {fac.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00E5FF] transition">
                {fac.name}
              </h3>
              <p className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider mb-3">
                {fac.purpose}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                {fac.details}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Supervision & Discipline Card */}
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-[#12122B]/80 p-6 text-left flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <ShieldCheck size={24} />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Compliance & Guidance
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Faculty Coordination & Departmental Discipline
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              The event is conducted under the direct guidance of the concerned faculty coordinator and strictly complies with all Central University of Jharkhand departmental regulations. CCPC and CSI ensure responsible facility utilization and participant discipline.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px] font-mono text-emerald-300">
            <span>Central University of Jharkhand</span>
            <span>CSE Dept.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
