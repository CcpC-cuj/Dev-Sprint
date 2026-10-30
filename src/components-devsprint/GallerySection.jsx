import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { label: "Coding Sessions", color: "from-primary/20 to-secondary/20" },
  { label: "Team Collaboration", color: "from-accent/20 to-primary/20" },
  { label: "Project Demos", color: "from-secondary/20 to-accent/20" },
  { label: "Winners Celebration", color: "from-accent/20 to-secondary/20" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Visual Log</p>
          <h2 className="section-title">Mission Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.button
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className="card-surface aspect-square overflow-hidden group cursor-pointer p-0"
            >
              <div className={`w-full h-full bg-gradient-to-br ${img.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">{img.label}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-6 right-6 text-foreground" onClick={() => setSelected(null)}>
            <X size={24} />
          </button>
          <div className={`w-full max-w-2xl aspect-video rounded-xl bg-gradient-to-br ${images[selected].color} flex items-center justify-center`}>
            <span className="text-lg uppercase tracking-widest text-muted-foreground font-mono">{images[selected].label}</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;