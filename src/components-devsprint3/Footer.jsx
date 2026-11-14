import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "flow", label: "Participant Flow" },
  { id: "criteria", label: "Judging Rubric" },
  { id: "facilities", label: "Facilities" },
  { id: "contact", label: "Contact" },
];

const FooterSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="pt-16 pb-8 bg-[#0B0B1E]/90 border-t border-purple-500/15 text-white flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 md:px-12 font-Rockwell">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-left">
          {/* About Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="DevSprint 3.0 Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="font-bold text-base text-white block">
                  DevSprint <span className="text-[#00E5FF]">3.0</span>
                </span>
                <span className="text-[10px] uppercase font-mono text-purple-300">
                  MLH Hack Day Mini Hackathon
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              "Build for Real – Solving Campus Problems". A one-day prompt-to-code hackathon empowering participants to transform ideas into working software using AI-assisted tools.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-title text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Page Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-gray-400 hover:text-[#00E5FF] transition cursor-pointer"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Editions Column */}
          <div>
            <h4 className="footer-title text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Editions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/tech-unlocked"
                  className="text-gray-400 hover:text-[#00E5FF] transition flex items-center gap-1.5"
                >
                  <span className="text-[#00E5FF]">▹</span>
                  Tech Unlocked (Past Event)
                </Link>
              </li>
              <li>
                <Link
                  to="/devsprint"
                  className="text-gray-400 hover:text-[#00E5FF] transition flex items-center gap-1.5"
                >
                  <span className="text-[#00E5FF]">▹</span>
                  DevSprint 1.0 (Past Hackathon)
                </Link>
              </li>
              <li>
                <span className="text-purple-300 flex items-center gap-1.5 font-medium">
                  <span className="text-[#00E5FF]">▹</span>
                  DevSprint 3.0 (25 Nov 2026)
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="space-y-3">
            <h4 className="footer-title text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <p className="text-xs text-gray-400">
              Department of Computer Science & Engineering
              <br />
              Central University of Jharkhand
            </p>
            <p className="text-xs font-mono text-purple-300">
              dev.ccpc@gmail.com
              <br />
              +91 6200468743
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/codecrafterscuj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 text-gray-300 flex items-center justify-center hover:text-white hover:border-[#00E5FF] hover:bg-purple-500/20 transition"
                aria-label="CCPC LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/ccpc_cuj?igsh=MW90MzJ3NmZjeHltbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 text-gray-300 flex items-center justify-center hover:text-white hover:border-[#00E5FF] hover:bg-purple-500/20 transition"
                aria-label="CCPC Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-purple-500/15 text-center text-xs text-gray-400 font-mono">
          © 2026 DevSprint 3.0 • Code Crafters Programming Club (CCPC) × Computer Society of India (CSI). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
