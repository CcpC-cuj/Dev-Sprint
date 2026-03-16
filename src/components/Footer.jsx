import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const quickLinks = ["Home", "About", "Timeline", "Rules", "Leaderboard", "Gallery"];

const FooterSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-primary/10 pt-16 pb-8 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading font-semibold mb-3">Dev<span className="text-primary">Sprint</span></h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              A 24-hour online web development hackathon challenging developers to code beyond the horizon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <button onClick={() => scrollTo(l)} className="text-xs text-muted-foreground hover:text-accent transition-colors">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Contact</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>devsprint@hackathon.com</li>
              <li>devsprint.dev</li>
              <li>Online Event</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Social</h4>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-primary/20 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2026 Dev Sprint Hackathon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;