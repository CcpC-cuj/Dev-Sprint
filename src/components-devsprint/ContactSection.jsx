import { motion } from "framer-motion";
import { Mail, Globe, Phone  } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Section Heading */}
                <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <p className="upper-label uppercase tracking-[0.35em] text-[#00E5FF] text-xs mb-4 flex items-center justify-center gap-2">
            {/* <Rocket size={14} /> */}
    Communications
  </p>

  <h2 className="font-heading text-3xl md:text-4xl font-semibold uppercase tracking-wide text-foreground">
    Contact Mission Control
  </h2>
</motion.div>

        {/* Contact Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface p-8 w-full max-w-lg flex flex-col justify-center space-y-8"
          >

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-accent" />

              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-mono">
                  Email
                </div>

                <a
                  href="mailto:dev.ccpc@gmail.com"
                  className="text-sm font-mono tracking-wide hover:text-indigo-400 transition"
                >
                  dev.ccpc@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={18} className="text-accent" />

              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-mono">
                  Phone
                </div>

                <a
                  href="tel:+6200468743"
                  className="text-sm font-mono tracking-wide hover:text-indigo-400 transition"
                >
                  +91 6200468743
                </a>
              </div>
            </div>

            {/* Event Type */}
            <div className="flex items-center gap-4">
              <Globe size={18} className="text-accent" />

              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-mono">
                  Event Type
                </div>

                <div className="text-sm font-mono tracking-wide">
                  Online Hackathon
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;