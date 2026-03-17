import { motion } from "framer-motion";
import { Users, Crown } from "lucide-react";

const judges = [
  {
    icon: Users,
    title: "Student Body",
    desc: "Participants collectively evaluate and vote on innovative solutions.",
  },
  {
    icon: Crown,
    title: "President, CCPC",
    desc: "Acts as the tie-breaker in case of equal scores and final decisions.",
  },
];

const JudgesSection = () => (
  <section id="judges" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label">Command Crew</p>
        <h2 className="section-title">Judging Panel</h2>
      </motion.div>

      {/* Grid */}
      <div
        className="features-grid"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {judges.map((j, i) => (
          <motion.div
            key={j.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-surface feature-card"
          >

            {/* Icon */}
            <div className="feature-icon">
              <j.icon size={26} />
            </div>

            {/* Title */}
            <h3 className="feature-title">
              {j.title}
            </h3>

            {/* Description */}
            <p className="feature-desc">
              {j.desc}
            </p>

          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default JudgesSection;