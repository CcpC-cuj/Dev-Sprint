import { motion } from "framer-motion";
import { Heart, Landmark, GraduationCap, Leaf, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const domains = [
  { icon: Heart, title: "Healthcare", desc: "Online appointment systems, telemedicine platforms, health record management." },
  { icon: Landmark, title: "Banking & Finance", desc: "Budget trackers, financial dashboards, expense management tools." },
  { icon: GraduationCap, title: "Education", desc: "E-learning platforms, collaborative study tools, student progress systems." },
  { icon: Leaf, title: "Agriculture", desc: "Crop advisory tools, farmer marketplace portals, weather-based farming systems." },
  { icon: Sparkles, title: "Open Innovation", desc: "Any innovative web-based solution solving unique problems." },
];

const SpotlightCard = ({ children }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouse = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="card-surface p-6 relative overflow-hidden"
    >
      {hovering && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, hsla(255,100%,62%,0.08), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const DomainsSection = () => (
  <section id="domains" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="section-label">Target Sectors</p>
        <h2 className="section-title">Application Domains</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {domains.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <SpotlightCard>
              <div className="feature-icon ">
                <d.icon size={28} />
              </div>
              <h3 className="feature-title">{d.title}</h3>
              <p className="feature-desc">{d.desc}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DomainsSection;