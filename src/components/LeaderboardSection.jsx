import { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Crown,
  Users,
  GraduationCap,
  Play,
  Pause,
} from "lucide-react";

const teams = [
  {
    rank: 1,
    team: "Immature Coders",
    semester: "1st Semester",
    members: ["Raunak Raj", "Aditya Anand", "Dharnidhar Mishra"],
  },
  {
    rank: 2,
    team: "Logic Legends",
    semester: "1st Semester",
    members: ["Md Faraz Nayeem", "Mohit Verma", "Himanshu Kumar"],
  },
  {
    rank: 3,
    team: "Beginners",
    semester: "1st Semester",
    members: ["Kingshuk Banik", "Ajay Chaudhari", "Amal Santra", "Ankit Raj"],
  },
];

const participants = [
  {
    team: "Immature Coders",
    members: ["Raunak Raj", "Aditya Anand", "Dharnidhar Mishra"],
    semester: "1st Semester",
  },
  {
    team: "Logic Legends",
    members: ["Md Faraz Nayeem", "Mohit Verma", "Himanshu Kumar"],
    semester: "1st Semester",
  },
  {
    team: "Beginners",
    members: ["Kingshuk Banik", "Ajay Chaudhari", "Amal Santra", "Ankit Raj"],
    semester: "1st Semester",
  },
  {
    team: "Innovexaa",
    members: ["Vanshika Raj", "Anushka Sinha", "Anwesha Minz"],
    semester: "1st Semester",
  },
  {
    team: "Defender",
    members: ["Harsh Vardhan Bareth", "Raj Pandit", "Prithvi Raj Singha", "Priyanshu Kumar"],
    semester: "3rd Semester",
  },
  {
    team: "Coding Alchemist",
    members: ["Pratyasha Kumari", "Anushka Kumari"],
    semester: "1st Semester",
  },
  {
    team: "Alpha",
    members: ["Kushagra Srivastava", "Umang Raj"],
    semester: "1st Semester",
  },
  {
    team: "The Innovation Loop",
    members: ["Shweta Gupta", "Garima Gupta", "Udita Maity", "Vidya Rani"],
    semester: "1st Semester",
  },
  {
    team: "BUG HUNTERS",
    members: ["Abhishek Nayak", "Nilesh Kumar", "Nikhil Kumar"],
    semester: "1st Semester",
  },
  {
    team: "Elite Squad",
    members: ["Arav Sinha", "Navraj Shanker", "Prachi Gupta", "Shreya Jha"],
    semester: "1st Semester",
  },
  {
    team: "Null Pointers",
    members: ["Nikhil Kumar", "Lakshmi Kumari", "Nitu Kumari", "Swastik Priya"],
    semester: "1st Semester",
  },
  {
    team: "Delusional Engineers",
    members: ["Aditya Dewangan", "Shiv Shankar Pandey"],
    semester: "1st Semester",
  },
  {
    team: "Challengers",
    members: ["Aniket Das", "Mohmmad Arbaz"],
    semester: "1st Semester",
  },
];

const rankConfig = {
  1: {
    place: "1st",
    title: "Champion",
    icon: Trophy,
    crown: true,
    badgeClass: "bg-amber-400/15 text-amber-300 border-amber-400/30",
    borderClass: "border-amber-400/40 hover:border-amber-300",
    glowClass: "shadow-[0_0_35px_rgba(251,191,36,0.18)]",
    cardBg: "bg-gradient-to-b from-amber-500/10 via-[#12122B] to-[#12122B]",
    avatarBg: "bg-gradient-to-br from-amber-400/25 to-amber-600/35 text-amber-300 border-amber-400/40",
    accentText: "text-amber-400",
    awardBadge: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    orderMobile: "order-1",
    orderDesktop: "md:order-2",
    elevation: "md:-translate-y-4 md:scale-105 z-10",
  },
  2: {
    place: "2nd",
    title: "Runner-Up",
    icon: Medal,
    crown: false,
    badgeClass: "bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30",
    borderClass: "border-[#00E5FF]/40 hover:border-[#00E5FF]/80",
    glowClass: "shadow-[0_0_30px_rgba(0,229,255,0.14)]",
    cardBg: "bg-gradient-to-b from-[#00E5FF]/10 via-[#12122B] to-[#12122B]",
    avatarBg: "bg-gradient-to-br from-[#00E5FF]/25 to-[#6C3BFF]/35 text-[#00E5FF] border-[#00E5FF]/40",
    accentText: "text-[#00E5FF]",
    awardBadge: "bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30",
    orderMobile: "order-2",
    orderDesktop: "md:order-1",
    elevation: "z-0",
  },
  3: {
    place: "3rd",
    title: "2nd Runner-Up",
    icon: Award,
    crown: false,
    badgeClass: "bg-[#6C3BFF]/15 text-purple-300 border-purple-500/30",
    borderClass: "border-purple-500/40 hover:border-purple-400",
    glowClass: "shadow-[0_0_30px_rgba(108,59,255,0.15)]",
    cardBg: "bg-gradient-to-b from-purple-500/10 via-[#12122B] to-[#12122B]",
    avatarBg: "bg-gradient-to-br from-purple-500/25 to-pink-500/35 text-purple-300 border-purple-500/40",
    accentText: "text-[#6C3BFF]",
    awardBadge: "bg-[#6C3BFF]/10 text-purple-300 border-purple-500/30",
    orderMobile: "order-3",
    orderDesktop: "md:order-3",
    elevation: "z-0",
  },
};

const getInitials = (name) => {
  if (!name) return "TM";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const LeaderboardSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="leaderboard" className="relative px-6 py-24 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#6C3BFF]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00E5FF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header matching About, Timeline & Rules sections */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00E5FF]">
            Official Rankings
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Mission Leaderboard
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400 text-sm md:text-base">
            Recognising the top teams evaluated across all three challenges:
            Four Envelope, Prompt-to-Report, and Problem Card PPT.
          </p>
        </div>

        {/* Top 3 Podium Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {teams.map((t, i) => {
            const config = rankConfig[t.rank] || rankConfig[3];
            const Icon = config.icon;

            return (
              <motion.div
                key={t.rank}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative rounded-2xl border ${config.borderClass} ${config.cardBg} ${config.glowClass} p-7 text-center transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${config.orderMobile} ${config.orderDesktop} ${config.elevation}`}
              >
                {/* Crown badge for 1st place */}
                {config.crown && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-amber-500/30">
                    <Crown size={13} className="text-black" />
                    <span>Grand Winner</span>
                  </div>
                )}

                <div>
                  {/* Rank Badge & Label */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${config.badgeClass}`}
                    >
                      <Icon size={13} />
                      {config.place} Place
                    </span>

                    <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">
                      {config.title}
                    </span>
                  </div>

                  {/* Team Avatar Initials */}
                  <div className="my-4 flex justify-center">
                    <div
                      className={`w-18 h-18 rounded-2xl border-2 flex items-center justify-center font-heading font-bold text-2xl tracking-wider shadow-inner ${config.avatarBg}`}
                    >
                      {getInitials(t.team)}
                    </div>
                  </div>

                  {/* Team Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide font-heading">
                    {t.team}
                  </h3>

                  {/* Semester & Member Count */}
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-mono">
                      <GraduationCap size={12} className="text-[#00E5FF]" />
                      {t.semester}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-mono">
                      <Users size={12} className="text-[#6C3BFF]" />
                      {t.members.length} Members
                    </span>
                  </div>

                  {/* Team Members */}
                  <div className="mt-4 pt-4 border-t border-purple-500/15">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2.5 text-center">
                      Team Members
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {t.members.map((member) => (
                        <span
                          key={member}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#12122B]/90 border border-purple-500/20 text-gray-200 shadow-sm"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continuous Moving Carousel of Participants */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          {/* Moving Carousel Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#00E5FF]">
                Participants
              </p>
              <h3 className="mt-1 text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                Teams & Members
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {participants.length} Teams
                </span>
              </h3>
            </div>

            {/* Interactive Control Pill */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-xs font-mono text-gray-400">
                Hover to pause
              </span>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-purple-500/30 bg-[#12122B] text-xs font-mono text-gray-300 hover:text-white hover:border-[#00E5FF] transition-all cursor-pointer shadow-md"
              >
                {isPaused ? (
                  <>
                    <Play size={13} className="text-[#00E5FF]" />
                    <span>Resume</span>
                  </>
                ) : (
                  <>
                    <Pause size={13} className="text-[#00E5FF]" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Continuous Moving Track Container with Edge Fade Masks */}
          <div className="relative overflow-hidden py-4 -mx-6 px-6">
            {/* Left Edge Fade Mask */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />

            {/* Right Edge Fade Mask */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

            {/* Infinite Marquee Track */}
            <div
              className={`animate-marquee gap-6 ${
                isPaused ? "animate-marquee-paused" : ""
              }`}
            >
              {[...participants, ...participants].map((p, idx) => (
                <div
                  key={`${p.team}-${idx}`}
                  className="w-[300px] sm:w-[340px] md:w-[360px] flex-shrink-0"
                >
                  <div className="h-full min-h-[250px] rounded-2xl border border-purple-500/20 bg-[#12122B] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#6C3BFF]/80 hover:shadow-[0_8px_30px_rgba(108,59,255,0.2)] hover:-translate-y-1">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/25">
                          <GraduationCap size={13} />
                          {p.semester}
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-mono">
                          <Users size={12} className="text-[#6C3BFF]" />
                          {p.members.length} {p.members.length === 1 ? "Member" : "Members"}
                        </span>
                      </div>

                      {/* Team Name */}
                      <h4 className="text-lg md:text-xl font-bold text-white tracking-wide font-heading">
                        {p.team}
                      </h4>

                      {/* Divider */}
                      <div className="h-px bg-purple-500/15 my-4" />

                      {/* Team Members List */}
                      <div>
                        <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-2.5">
                          Team Members
                        </p>
                        <ul className="space-y-2">
                          {p.members.map((member) => (
                            <li
                              key={member}
                              className="flex items-center gap-2.5 text-sm text-gray-300"
                            >
                              <span className="text-[#00E5FF] text-xs">▹</span>
                              <span className="font-medium tracking-wide">{member}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Status / Footer */}
                    <div className="mt-6 pt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                      <span>Tech Unlocked</span>
                      <span className="text-[#6C3BFF]">CCPC</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeaderboardSection;