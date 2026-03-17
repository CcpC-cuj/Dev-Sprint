import { motion } from "framer-motion";
import { User } from "lucide-react";

const judges = [1, 2, 3];

const JudgesSection = () => (
  <section id="judges" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label">Command Crew</p>
        <h2 className="section-title">Judges Panel</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {judges.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-surface p-6 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <User size={32} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-1">To Be Announced</h3>
            <p className="text-muted-foreground text-xs">Judge details will be announced soon.</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JudgesSection;