import logo from "../assets/savoryn_logo.png";
import { Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full">
    
      {/* Tier 1: Bright Orange-Red Newsletter Bar */}
      <div className="bg-brand-primary text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide">
              Subscribe to our newsletter
            </h3>
            <p className="text-white/80 text-sm font-semibold">
              Get the latest updates, chef availability notices, and exclusive recipe articles.
            </p>
          </div>

          <div className="w-full lg:w-auto max-w-md flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-80 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 rounded-full px-5 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50 text-sm"
            />
            <button className="w-full sm:w-auto bg-brand-dark hover:bg-brand-dark-deep text-white font-extrabold px-8 py-3 rounded-full shadow-lg transition-colors cursor-pointer text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: Dark Crimson Main Footer */}
      <div className="bg-brand-crimson text-white/90 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Background Accent Lines */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
            
            {/* Left side: Logo & Branding */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-xl bg-white/5">
                  <img 
                    src={logo} 
                    alt="The Savoryn Logo" 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div>
                  <span className="text-2xl font-black tracking-tight text-white flex items-center">
                    The<span className="text-brand-primary">Savoryn</span>
                  </span>
                  <p className="text-xs text-white/60 font-semibold mt-0.5">Discover the Finest Chefs</p>
                </div>
              </div>
              
              <p className="text-sm text-white/70 max-w-sm leading-relaxed font-medium">
                The Savoryn is the premier platform connecting verified professional culinary artists, bakers, and pastry experts with households and fine-dining operations worldwide.
              </p>
            </div>

            {/* Right side: Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              
              {/* Column 1: Resources */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-primary">Resources</h4>
                <ul className="space-y-2.5 text-sm text-white/70 font-semibold">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><a href="/#categories" className="hover:text-white transition-colors">Find Chefs</a></li>
                  <li><Link to="/find-chef" className="hover:text-white transition-colors">Book a Chef</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                </ul>
              </div>

              {/* Column 2: Solutions */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-primary">Solutions</h4>
                <ul className="space-y-2.5 text-sm text-white/70 font-semibold">
                  <li><Link to="/login" className="hover:text-white transition-colors">Sign In</Link></li>
                  <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
                  <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
                  <li><Link to="/register" className="hover:text-white transition-colors">Chef Registration</Link></li>
                </ul>
              </div>

              {/* Column 3: Company */}
              <div className="space-y-4 col-span-2 sm:col-span-1">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-primary">Company</h4>
                <ul className="space-y-2.5 text-sm text-white/70 font-semibold">
                  <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="/#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 bg-brand-crimson-dark border border-white/10 rounded-full px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/20 transition-all cursor-pointer">
                <Globe size={16} />
                <span className="font-semibold">English</span>
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Copyright Notice */}
            <div className="text-center md:text-left text-xs text-white/60 font-semibold space-y-1">
              <p>© 2026 The Savoryn. All Rights Reserved.</p>
              <p>
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                {" | "}
                <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
              </p>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {[
                {
                  name: "Twitter",
                  href: "#twitter",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                },
                {
                  name: "Facebook",
                  href: "#facebook",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  )
                },
                {
                  name: "Instagram",
                  href: "#instagram",
                  svg: (
                    <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )
                },
                {
                  name: "Linkedin",
                  href: "#linkedin",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                }
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  aria-label={soc.name}
                  className="w-9 h-9 rounded-full bg-brand-crimson-dark border border-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {soc.svg}
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
