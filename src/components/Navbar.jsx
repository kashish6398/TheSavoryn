import { useState } from "react";
import logo from "../assets/savoryn_logo.png";
import { Menu, X, Globe } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary/20 shadow-md">
              <img 
                src={logo} 
                alt="The Savoryn Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-brand-dark flex items-center">
              The<span className="text-brand-primary">Savoryn</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#home" className="text-brand-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-brand-primary">
              Home
            </a>
            <a href="#categories" className="text-gray-600 hover:text-brand-primary transition-colors">
              Find Chef
            </a>
            <a href="#experts" className="text-gray-600 hover:text-brand-primary transition-colors">
              Find Jobs
            </a>
            <a href="#about" className="text-gray-600 hover:text-brand-primary transition-colors">
              About Us
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#signin" className="text-gray-700 hover:text-brand-primary font-medium px-4 py-2 transition-colors">
              Sign In
            </a>
            <a 
              href="#register" 
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-brand-primary/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Register
            </a>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 cursor-pointer hover:border-brand-primary transition-all">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" 
                alt="User Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" 
                alt="User Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg text-gray-600 hover:text-brand-primary hover:bg-gray-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100 py-4 border-t border-gray-100 bg-white" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="px-4 space-y-3">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-brand-primary bg-brand-primary-light font-semibold"
          >
            Home
          </a>
          <a 
            href="#categories" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-brand-primary font-medium transition-colors"
          >
            Find Chef
          </a>
          <a 
            href="#experts" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-brand-primary font-medium transition-colors"
          >
            Find Jobs
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-brand-primary font-medium transition-colors"
          >
            About Us
          </a>
          <div className="border-t border-gray-100 my-2 pt-2 flex flex-col gap-3">
            <a 
              href="#signin" 
              onClick={() => setIsOpen(false)}
              className="text-center py-2.5 text-gray-700 hover:text-brand-primary font-semibold transition-colors"
            >
              Sign In
            </a>
            <a 
              href="#register" 
              onClick={() => setIsOpen(false)}
              className="text-center bg-brand-primary hover:bg-brand-primary-hover text-white py-2.5 rounded-full font-semibold shadow-md transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;