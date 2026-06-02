import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import chefImg from "../assets/signup_chef.png";
import logo from "../assets/savoryn_logo.png";
import { Mail, ArrowLeft } from "lucide-react";

function Register() {
  const navigate = useNavigate();
  const [isOrganisation, setIsOrganisation] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created successfully for ${formData.name}!`);
    navigate("/login");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#fafbfe]">
      
      {/* Back to Home Button floating */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-brand-primary font-semibold transition-colors z-20"
      >
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>

      {/* Left Column: Form Section */}
      <div className="lg:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 relative overflow-hidden bg-white shadow-xl lg:shadow-none">
        
        <div className="max-w-md w-full mx-auto space-y-8">
          
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-3xl font-black text-brand-dark flex items-center gap-2 tracking-tight">
              Welcome back <span className="animate-wiggle">👋</span>
            </h2>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Today is a new day. It’s your day. You shape it. Login in to start what your are looking for.
            </p>
          </div>

          {/* Account Type Toggle */}
          <div className="bg-[#f0f4f8] p-1 rounded-xl flex gap-1 border border-gray-100 shadow-inner">
            <button
              type="button"
              onClick={() => setIsOrganisation(false)}
              className={`flex-1 text-center py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                !isOrganisation 
                  ? "bg-white text-brand-primary shadow-md" 
                  : "text-gray-500 hover:text-brand-dark"
              }`}
            >
              Chef / Individual
            </button>
            <button
              type="button"
              onClick={() => setIsOrganisation(true)}
              className={`flex-1 text-center py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                isOrganisation 
                  ? "bg-white text-brand-primary shadow-md" 
                  : "text-gray-500 hover:text-brand-dark"
              }`}
            >
              Organisation / Restaurant
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-extrabold text-gray-700 uppercase tracking-wide">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="Example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-extrabold text-gray-700 uppercase tracking-wide">
                New Password
              </label>
              <input
                required
                type="password"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
              />
            </div>

            {/* Dynamic Name Field */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-extrabold text-gray-700 uppercase tracking-wide">
                {isOrganisation ? "Organisation Name" : "Your Name"}
              </label>
              <input
                required
                type="text"
                placeholder="Type your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
              />
            </div>

            {/* Sign Up Button */}
            <button 
              type="submit" 
              className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center text-sm"
            >
              Sign Up
            </button>

          </form>

          {/* Social Logins */}
          <div className="space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
              
              {/* Google Button */}
              <button 
                type="button" 
                onClick={() => alert("Google signup flow initialized.")}
                className="flex items-center justify-center gap-2.5 border border-gray-200 bg-[#f8fafc] hover:bg-gray-50 rounded-xl py-3 px-4 transition-colors cursor-pointer text-xs font-bold text-gray-700"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.13-5.136 4.13A5.76 5.76 0 0 1 8.2 12.77a5.76 5.76 0 0 1 5.79-5.77c2.5 0 4.31 1.08 5.26 2l3.1-3.1C20.39 3.96 17.5 2.5 13.99 2.5a9.77 9.77 0 0 0-9.75 9.77 9.77 0 0 0 9.75 9.77c5.29 0 9.76-3.8 9.76-9.77 0-.66-.08-1.3-.21-1.98H12.24z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Email Button */}
              <button 
                type="button" 
                onClick={() => alert("Email signup flow initialized.")}
                className="flex items-center justify-center gap-2.5 border border-gray-200 bg-[#f8fafc] hover:bg-gray-50 rounded-xl py-3 px-4 transition-colors cursor-pointer text-xs font-bold text-gray-700"
              >
                <Mail size={16} className="text-gray-500 shrink-0" />
                <span>Continue with Email</span>
              </button>

            </div>
          </div>

          {/* Footer Link */}
          <div className="text-center pt-2">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">
              Do you have any account?{" "}
              <Link to="/login" className="text-brand-primary hover:text-brand-primary-hover font-bold hover:underline transition-all">
                log in
              </Link>
            </p>
          </div>

        </div>
      </div>

      {/* Right Column: Hero Image Section */}
      <div className="hidden lg:block lg:col-span-7 relative bg-brand-dark">
        <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent z-10 pointer-events-none" />
        <img 
          src={chefImg} 
          alt="Chef Sign Up background" 
          className="w-full h-full object-cover object-center"
        />
        
        {/* Decorative badge overlaying image */}
        <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-xl max-w-sm z-20">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center shrink-0">
            <img src={logo} alt="Savoryn Logo" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h4 className="text-xs font-black text-white">Join The Savoryn Today</h4>
            <p className="text-[10px] text-white/70 font-semibold mt-0.5">Level up your cooking career or hire elite vetted kitchen talents.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Register;
