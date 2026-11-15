import { motion } from "framer-motion";
import { Mail, Phone, Building2, Globe } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "dev.ccpc@gmail.com",
    href: "mailto:dev.ccpc@gmail.com",
    subtext: "Official inquiries & support",
    isLink: true,
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+91 6200468743",
    href: "tel:+916200468743",
    subtext: "Helpline & participant support",
    isLink: true,
  },
  {
    icon: Building2,
    label: "Host Institution",
    value: "Central University of Jharkhand",
    subtext: "Department of Computer Science & Engineering",
    isLink: false,
  },
  {
    icon: Globe,
    label: "Event Type",
    value: "Offline",
    subtext: " Mini hackathon participation",
    isLink: false,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="section-label">Communications & Information</p>
        <h2 className="section-title text-white mb-4">
          Contact Details
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          For any questions, registrations, or event support, reach out through the official channels below.
        </p>
      </motion.div>

      {/* 4 Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactCards.map((card, idx) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="rounded-2xl border border-purple-500/20 bg-[#12122B]/75 backdrop-blur-md p-6 text-left flex flex-col justify-between hover:border-[#00E5FF]/40 hover:bg-[#12122B]/95 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          >
            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-[#00E5FF] flex items-center justify-center mb-5 group-hover:bg-[#6C3BFF]/20 group-hover:scale-110 transition">
                <card.icon size={22} />
              </div>

              {/* Label */}
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5">
                {card.label}
              </p>

              {/* Value */}
              {card.isLink ? (
                <a
                  href={card.href}
                  className="text-sm sm:text-base font-semibold text-white group-hover:text-[#00E5FF] transition break-words block font-mono"
                >
                  {card.value}
                </a>
              ) : (
                <p className="text-sm sm:text-base font-semibold text-white break-words">
                  {card.value}
                </p>
              )}
            </div>

            {/* Subtext */}
            <p className="text-xs text-purple-300/80 mt-4 pt-3 border-t border-purple-500/15">
              {card.subtext}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
