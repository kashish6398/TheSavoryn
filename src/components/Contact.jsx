import { useState } from "react";
import contactBg from "../assets/contact_bg.png";
import { Send, ArrowRight } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.firstName}! Your message has been sent.`);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28 flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Dark overlay to ensure high contrast and readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glassmorphic Contact Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Send Us a Message!
            </h2>
            <p className="text-gray-600 font-semibold text-sm">
              Have questions or need assistance? Fill out the form below and we will get back to you!
            </p>
            <div className="w-12 h-1 bg-brand-primary mx-auto rounded-full mt-2" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* First Name & Last Name Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-extrabold text-gray-700 tracking-wide uppercase">
                  First Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-white/70 hover:bg-white/90 focus:bg-white border border-gray-200 focus:border-brand-primary rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-extrabold text-gray-700 tracking-wide uppercase">
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-white/70 hover:bg-white/90 focus:bg-white border border-gray-200 focus:border-brand-primary rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-extrabold text-gray-700 tracking-wide uppercase">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/70 hover:bg-white/90 focus:bg-white border border-gray-200 focus:border-brand-primary rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm"
              />
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-extrabold text-gray-700 tracking-wide uppercase">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/70 hover:bg-white/90 focus:bg-white border border-gray-200 focus:border-brand-primary rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Send message</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
