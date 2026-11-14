import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "flow", label: "Participant Flow" },
  { id: "criteria", label: "Judging" },
  { id: "facilities", label: "Facilities" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const resetScroll = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0B1E]/80 border-b border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo and Brand Tag */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="CCPC Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="text-left">
              <span className="text-base font-bold tracking-wide text-white flex items-center gap-1.5">
                DevSprint <span className="text-[#00E5FF]">3.0</span>
              </span>
              <span className="block text-[9px] uppercase tracking-wider text-purple-300 font-mono">
                MLH Hack Day
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-gray-300 hover:text-[#00E5FF] transition cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Navigation Switchers & Actions */}
        <div className="hidden md:flex items-center gap-3 text-xs uppercase tracking-wider font-medium">
          <Link
            to="/tech-unlocked"
            onClick={resetScroll}
            className="px-3.5 py-1.5 rounded-lg border border-purple-500/30 text-gray-300 hover:text-white hover:border-[#00E5FF] hover:bg-purple-500/10 transition"
          >
            2.0
          </Link>
          <Link
            to="/devsprint"
            onClick={resetScroll}
            className="px-3.5 py-1.5 rounded-lg border border-purple-500/30 text-gray-300 hover:text-white hover:border-[#00E5FF] hover:bg-purple-500/10 transition"
          >
            1.0
          </Link>
          <a
            href="#timeline"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6C3BFF] to-[#00E5FF] text-white text-xs uppercase tracking-widest font-semibold shadow-[0_0_20px_rgba(108,59,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] hover:-translate-y-[1px] transition inline-flex items-center gap-1.5"
          >
            <Sparkles size={13} />
            Event Flow
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-purple-500/20 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B0B1E]/95 backdrop-blur-xl border-t border-purple-500/20 px-6 py-5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="space-y-1 mb-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-2.5 text-sm text-gray-300 hover:text-[#00E5FF] uppercase tracking-widest transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-purple-500/20 space-y-2.5">
            <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400 mb-2">
              Switch Editions
            </p>
            <Link
              to="/tech-unlocked"
              onClick={resetScroll}
              className="block w-full text-center py-2.5 rounded-lg border border-purple-500/30 text-gray-200 text-xs uppercase tracking-widest hover:border-[#00E5FF]"
            >
              Tech Unlocked (Past Event)
            </Link>
            <Link
              to="/devsprint"
              onClick={resetScroll}
              className="block w-full text-center py-2.5 rounded-lg border border-purple-500/30 text-gray-200 text-xs uppercase tracking-widest hover:border-[#00E5FF]"
            >
              DevSprint 1.0 (Past Edition)
            </Link>
            <a
              href="#timeline"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-[#6C3BFF] to-[#00E5FF] text-white text-xs uppercase tracking-widest font-semibold"
            >
              View Schedule
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
