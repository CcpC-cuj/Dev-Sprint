import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const teams = [
  { rank: 1, team: "Code Titans", project: "HealthConnect", score: 95 },
  { rank: 2, team: "Web Wizards", project: "FinTrack", score: 92 },
  { rank: 3, team: "Dev Innovators", project: "FarmSmart", score: 90 },
];

const LeaderboardSection = () => {
  return (
    <section id="leaderboard" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">Rankings</p>
          <h2 className="section-title">Mission Leaderboard</h2>
        </motion.div>

        {/* Leaderboard */}
        <div className="leaderboard">
          {teams.map((t, i) => (
            <motion.div
              key={t.rank}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`leaderboard-item ${t.rank === 1 ? "leaderboard-first" : ""}`}
            >

              {/* Rank */}
              <div className="leaderboard-rank">
                {t.rank === 1 ? <Trophy size={16} /> : `#${t.rank}`}
              </div>

              {/* Info */}
              <div className="leaderboard-info">
                <div className="leaderboard-team">{t.team}</div>
                <div className="leaderboard-project">{t.project}</div>
              </div>

              {/* Score */}
              <div className="leaderboard-score">
                {t.score}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeaderboardSection;