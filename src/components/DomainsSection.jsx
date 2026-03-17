import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Landmark,
  GraduationCap,
  Leaf,
  Sparkles,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

const domains = [
  {
    icon: Heart,
    title: "Healthcare",
    desc: "Online appointment systems, telemedicine platforms, health record management.",
    problems: [
    "To be announced soon" 
    ],
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Budget trackers, financial dashboards, expense management tools.",
    problems: [
      "To be announced soon"
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "E-learning platforms, collaborative study tools, student progress systems.",
    problems: [
      "To be announced soon"
    ],
  },
  {
    icon: Leaf,
    title: "Agriculture",
    desc: "Crop advisory tools, farmer marketplace portals, weather-based farming systems.",
    problems: [
    "To be announced soon" 
    ],
  },
  {
    icon: Sparkles,
    title: "Open Innovation",
    desc: "Any innovative web-based solution solving unique problems.",
    problems: [
    "To be announced soon"  
    ],
  },
];

const SpotlightCard = ({ children, onClick }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouse = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="card-surface feature-card relative overflow-hidden w-full max-w-[300px] cursor-pointer"
    >
      {hovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, hsla(255,100%,62%,0.08), transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

const DomainsSection = () => {
  const [activeDomain, setActiveDomain] = useState(null);

  return (
    <section id="domains" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="section-label">Target Sectors</p>
          <h2 className="section-title">Application Domains</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <SpotlightCard onClick={() => setActiveDomain(d)}>
                <div className="feature-icon">
                  <d.icon size={26} />
                </div>
                <h3 className="feature-title">{d.title}</h3>
                <p className="feature-desc">{d.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeDomain && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setActiveDomain(null)}
              />

              {/* Modal */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="card-surface relative p-8 max-w-lg w-full"
              >
                {/* Close */}
                <button
                  onClick={() => setActiveDomain(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-accent"
                >
                  <X size={20} />
                </button>

                {/* Title */}
                <h3 className="feature-title mb-4">
                  {activeDomain.title}
                </h3>

                {/* Problem Statements */}
                <ul style={{ paddingLeft: "1rem" }}>
                  {activeDomain.problems.map((p, idx) => (
                    <li
                      key={idx}
                      className="feature-desc"
                      style={{ marginBottom: "0.6rem" }}
                    >
                      • {p}
                    </li>
                  ))}
                </ul>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default DomainsSection;