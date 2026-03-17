import { motion } from "framer-motion";

const events = [
  { title: "Registration Deadline", date: "20 March 2026 – 10:00 AM" },
  { title: "Hackathon Begins", date: "21 March 2026 – 02:00 PM" },
  { title: "Development Phase", date: "21 March 2026 – 02:00 PM to 22 March 2026 – 01:00 PM" },
  { title: "Submission Deadline", date: "22 March 2026 – 01:00 PM" },
  { title: "Hackathon Ends", date: "22 March 2026 – 02:00 PM" },
];

const TimelineSection = () => (
  <section id="timeline" className="timeline-section">
    <div className="container">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="timeline-header"
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
            className="timeline-item"
          >
            {/* Dot */}
            <div className="timeline-dot" />

            {/* Card */}
            <div className="timeline-card">
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-date">{event.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;