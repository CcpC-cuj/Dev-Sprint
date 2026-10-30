import {  Linkedin, Instagram } from "lucide-react";

const quickLinks = ["Home", "About", "Timeline", "Domains", "Rules"];

const FooterSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="pt-16 pb-8 bg-[transparent-65%] text-white flex flex-col items-center">
      <div className="max-w-7xl px-8 md:px-20 font-Rockwell ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-12 mb-12">
          {/* About */}
          <div className="col-span-2 md:col-span-1 mb-6 md:mb-0">
            <img 
              src="/logo.png"
              alt="DevSprint Logo"
              className="w-20 h-20 object-contain"
            />
            <p className="text-muted-foreground text-xs leading-relaxed tracking-widest">
              A 24-hour online web development hackathon challenging developers to code beyond the horizon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((l) => (
                <li key={l}>
                  <button onClick={() => scrollTo(l)} className="footer-link">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-list">
              <li>dev.ccpc@gmail.com</li>
              <li>+91 6200468743</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="footer-title">Social</h4>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/codecrafterscuj/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="https://www.instagram.com/ccpc_cuj?igsh=MW90MzJ3NmZjeHltbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © 2026 Dev Sprint Hackathon. All Rights Reserved.
        </div>
      </div>
    </footer>

  );
};

export default FooterSection;