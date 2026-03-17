import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const quickLinks = ["Home", "About", "Timeline", "Rules", "Leaderboard", "Gallery"];

const FooterSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className=" mx-auto px-4">

        {/* Grid */}
        <div className="footer-grid">

          {/* About */}
          <div className="footer-about">
            <h3 className="footer-logo">
              Dev<span>Sprint</span>
            </h3>
            <p className="footer-desc">
              A 24-hour online web development hackathon challenging developers to code beyond the horizon.
            </p>
          </div>

          {/* Links */}
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
              <li>devsprint@hackathon.com</li>
              <li>devsprint.dev</li>
              <li>Online Event</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="footer-title">Social</h4>
            <div className="footer-social">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="social-icon">
                  <Icon size={16} />
                </a>
              ))}
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