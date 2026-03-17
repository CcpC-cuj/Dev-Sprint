import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const teams = [
  { rank: 1, team: "Code Titans", project: "HealthConnect", score: 95 },
  { rank: 2, team: "Web Wizards", project: "FinTrack", score: 92 },
  { rank: 3, team: "Dev Innovators", project: "FarmSmart", score: 90 },
];

const LeaderboardSection = () => (
  <section id="leaderboard" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label">Rankings</p>
        <h2 className="section-title">Mission Leaderboard</h2>
      </motion.div>

      <div className="space-y-3">
        {teams.map((t, i) => (
          <motion.div
            key={t.rank}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`card-surface p-4 flex items-center gap-4 ${t.rank === 1 ? "border-accent/50 glow-accent" : ""}`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-heading font-bold text-sm ${t.rank === 1 ? "bg-accent/20 text-accent" : "bg-primary/10 text-primary"}`}>
              {t.rank === 1 ? <Trophy size={18} /> : `#${t.rank}`}
            </div>
            <div className="flex-1">
              <div className="font-heading font-semibold text-sm">{t.team}</div>
              <div className="text-muted-foreground text-xs">{t.project}</div>
            </div>
            <div className="font-mono text-lg font-bold text-accent">{t.score}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LeaderboardSection;