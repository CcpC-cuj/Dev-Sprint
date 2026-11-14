import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Timeline",
  "Domains",
  "Rules",
  // "Leaderboard",
  // "Gallery",
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

  const goToMainSite = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0B1E]/70 border-b border-purple-500/10">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-xl font-bold tracking-wide text-white cursor-pointer"
        >
           <img 
              src="/logo.png"
              alt="DevSprint Logo"
              className="w-20 h-20 object-contain"
            />
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

          {/* DevSprint 3.0 Link */}
          <Link
            to="/"
            onClick={goToMainSite}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6C3BFF] to-[#00E5FF] text-white text-xs uppercase tracking-widest font-semibold transition hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:-translate-y-[1px] cursor-pointer"
          >
            DevSprint 3.0
          </Link>

          {/* Tech Unlocked Link */}
          <Link
            to="/tech-unlocked"
            onClick={goToMainSite}
            className="text-gray-400 hover:text-[#00E5FF] transition relative cursor-pointer"
          >
            Tech Unlocked
          </Link>

          
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

          <Link
            to="/tech-unlocked"
            onClick={goToMainSite}
            className="block w-full text-left py-3 text-sm text-gray-400 hover:text-[#00E5FF] uppercase tracking-widest"
          >
            Tech Unlocked
          </Link>

          <Link
            to="/"
            onClick={goToMainSite}
            className="mt-2 block w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-[#6C3BFF] to-[#00E5FF] text-white uppercase tracking-widest text-sm font-semibold"
          >
            DevSprint 3.0
          </Link>

          <button className="mt-4 w-full py-3 rounded-lg bg-[#6C3BFF] text-white uppercase tracking-widest text-sm">
            Register Now
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;