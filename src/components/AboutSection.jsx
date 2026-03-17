import { motion } from "framer-motion";
import { Globe, Code, Lightbulb } from "lucide-react";

const features = [
  { icon: Code, title: "24-Hour Sprint", desc: "Non-stop coding across time zones. Build, iterate, deploy." },
  { icon: Globe, title: "Global Teams", desc: "Collaborate with developers, designers, and innovators worldwide." },
  { icon: Lightbulb, title: "Real Impact", desc: "Solutions for healthcare, finance, education, agriculture, and beyond." },
];

const AboutSection = () => (
  <section id="about" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3 font-Rockwell text-cyan-400 font-bold">MISSION BRIEF</p>
        <h2 className="text-4xl font-extrabold">ABOUT THE HACKATHON</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed py-7 font-Rockwell tracking-widest">
          Dev Sprint is a 24-hour online web development hackathon where developers collaborate to create innovative solutions for real-world problems. Inspired by the theme "Code Beyond the Horizon", participants will explore new technological frontiers and build creative web applications that push the limits of innovation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card-surface p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-accent mb-4">
              <f.icon size={24} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;