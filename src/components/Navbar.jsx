import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Timeline",
  "Domains",
  "Rules",
  // "Leaderboard",
  "Gallery",
  "Contact",
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0B1E]/70 border-b border-purple-500/10">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-xl font-bold tracking-wide text-white cursor-pointer"
        >
          Dev<span className="text-[#6C3BFF]">Sprint</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest">

          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-gray-400 hover:text-[#00E5FF] transition relative cursor-pointer"
            >
              {item}
            </button>
          ))}

          {/* Register Button */}
          <a href="https://unstop.com/p/dev-sprint-code-crafter-programing-club-1659600" target="_blank" rel="noopener noreferrer">
            <button
              className="ml-4 px-5 py-2 rounded-lg bg-[#6C3BFF] text-white text-xs uppercase tracking-widest font-medium transition hover:shadow-[0_0_25px_rgba(108,59,255,0.6)] hover:-translate-y-[1px] cursor-pointer"
            >
              Register Now
            </button>
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0B1E] border-t border-purple-500/10 px-6 py-4">

          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left py-3 text-sm text-gray-400 hover:text-[#00E5FF] uppercase tracking-widest"
            >
              {item}
            </button>
          ))}

          <button className="mt-4 w-full py-3 rounded-lg bg-[#6C3BFF] text-white uppercase tracking-widest text-sm">
            Register Now
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;