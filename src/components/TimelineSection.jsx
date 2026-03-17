import { motion } from "framer-motion";

const events = [
  { title: "Registration Deadline", date: "20 March 2026 – 10:00 AM" },
  { title: "Hackathon Begins", date: "21 March 2026 – 02:00 PM" },
  { title: "Development Phase", date: "21 March 2026 – 02:00 PM to 22 March 2026 – 01:00 PM" },
  { title: "Submission Deadline", date: "22 March 2026 – 01:00 PM" },
  { title: "Hackathon Ends", date: "22 March 2026 – 02:00 PM" },
];

const TimelineSection = () => (
  <section id="timeline" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-4xl">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="section-label">Launch Sequence</p>
        <h2 className="section-title">Mission Timeline</h2>
      </motion.div>

      {/* Timeline */}
      <div className="timeline">

        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`timeline-item ${i % 2 !== 0 ? "reverse" : ""}`}
          >

            {/* Node */}
            <div className="timeline-dot" />

            {/* Card */}
            <div className="timeline-card card-surface">
              <h3 className="timeline-title">
                {event.title}
              </h3>

              <p className="timeline-date">
                {event.date}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  </section>
);

export default TimelineSection;