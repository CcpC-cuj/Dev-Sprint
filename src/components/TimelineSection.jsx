import { motion } from "framer-motion";

const events = [
  { title: "Registration Deadline", date: "20 March 2026 – 10:00 AM", past: false },
  { title: "Hackathon Begins", date: "21 March 2026 – 02:00 PM", past: false },
  { title: "Development Phase", date: "21 March 2026 – 02:00 PM to 22 March 2026 – 01:00 PM", past: false },
  { title: "Submission Deadline", date: "22 March 2026 – 01:00 PM", past: false },
  { title: "Hackathon Ends", date: "22 March 2026 – 02:00 PM", past: false },
];

const TimelineSection = () => (
  <section id="timeline" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">Launch Sequence</p>
        <h2 className="section-title">Mission Timeline</h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-secondary to-transparent" />

        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex items-start mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Node */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10 mt-1" />

            {/* Card */}
            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
              <div className="card-surface p-5">
                <h3 className="font-heading font-semibold text-sm mb-1">{event.title}</h3>
                <p className="text-accent text-xs font-mono">{event.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;