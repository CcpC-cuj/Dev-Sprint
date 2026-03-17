import { motion } from "framer-motion";
import { Globe, Code, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "24-Hour Sprint",
    desc: "Non-stop coding across time zones. Build, iterate, deploy.",
  },
  {
    icon: Globe,
    title: "Global Teams",
    desc: "Collaborate with developers, designers, and innovators worldwide.",
  },
  {
    icon: Lightbulb,
    title: "Real Impact",
    desc: "Solutions for healthcare, finance, education, agriculture, and beyond.",
  },
];

const AboutSection = () => (
  <section id="about" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label">Mission Brief</p>

        <h2 className="section-title mb-6">
          About the Hackathon
        </h2>

        <p className="section-desc">
          Dev Sprint is a 24-hour online web development hackathon where developers collaborate to create innovative solutions for real-world problems. Inspired by the theme "Code Beyond the Horizon", participants will explore new technological frontiers and build creative web applications that push the limits of innovation.
        </p>
      </motion.div>

      {/* Features */}
      <div className="features-grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card-surface feature-card"
          >
            <div className="feature-icon">
              <f.icon size={24} />
            </div>

            <h3 className="feature-title">
              {f.title}
            </h3>

            <p className="feature-desc">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default AboutSection;