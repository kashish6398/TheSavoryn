import chefImg from "../assets/hero_chef.png";
import { Search, MapPin, CheckCircle, Award, Compass, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:py-40 bg-linear-to-br from-white via-brand-primary-light/10 to-white overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Search */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight tracking-tight">
                Let's Discover the <br />
                Finest{" "}
                <span className="relative inline-block px-6 py-1.5 text-white bg-brand-primary rounded-full shadow-lg shadow-brand-primary/20 transform -rotate-1">
                  Chefs
                </span>{" "}
                for You
              </h1>
              
              <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Find the perfect chef for your next dinner party, culinary event, or restaurant. Verified professionals, custom menus, and absolute culinary bliss.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="relative max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-100 rounded-2xl sm:rounded-full p-2.5 shadow-xl shadow-gray-200/50 gap-2">
                <div className="flex items-center w-full px-3 gap-2">
                  <MapPin className="text-brand-primary shrink-0" size={20} />
                  <input
                    type="text"
                    placeholder="Search by location or cuisine..."
                    className="w-full text-brand-dark placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0 text-sm sm:text-base"
                  />
                </div>
                
                <button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl sm:rounded-full px-8 py-3.5 font-bold shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer">
                  <Search size={18} />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm">
              <span className="text-gray-500 font-semibold">Popular :</span>
              {["Chef", "Baker", "Indian", "Chinese"].map((tag) => (
                <button 
                  key={tag} 
                  className="px-4 py-1.5 bg-white hover:bg-brand-primary hover:text-white border border-gray-200 hover:border-brand-primary rounded-full text-gray-600 font-medium transition-all duration-300 shadow-sm cursor-pointer hover:shadow"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Chef Image & Badges */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-10 lg:mt-0 select-none">
            
            {/* Wrapper for the Chef Image and its overlay badges */}
            <div className="relative w-80 h-96 sm:w-96 sm:h-[480px]">
              
              {/* Shapes Background Decor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border-2 border-dashed border-brand-primary/10 rounded-full animate-spin-slow pointer-events-none" />
              
              {/* Colorful Dot / Square Particles */}
              <div className="absolute -top-4 left-6 w-6 h-6 bg-yellow-400 rounded-full animate-pulse pointer-events-none" />
              <div className="absolute bottom-16 right-4 w-5 h-5 bg-brand-primary rounded-lg rotate-12 animate-pulse pointer-events-none" />
              <div className="absolute top-1/3 right-10 w-4 h-4 bg-blue-400 rounded-full pointer-events-none" />

              {/* Offset Red Background Shape (mockup has a reddish frame shape behind the chef) */}
              <div className="absolute inset-0 bg-brand-primary/15 rounded-t-[200px] rounded-b-[200px] transform translate-x-4 translate-y-4 -z-10 border-2 border-brand-primary/20" />

              {/* Big Chef Frame */}
              <div className="relative w-full h-full bg-brand-primary-light/40 rounded-t-[200px] rounded-b-[200px] border-4 border-white shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-t from-brand-primary/15 to-transparent z-10" />
                <img
                  src={chefImg}
                  alt="Finest Chef"
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Badges */}
              
              {/* Badge 1: 100+ Professional Chefs (Top Left) */}
              <div className="absolute top-12 -left-12 bg-white/95 backdrop-blur-md border border-purple-100 rounded-2xl p-2.5 shadow-xl shadow-purple-900/5 flex items-center gap-2.5 animate-float-slow z-20">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                  <Compass size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Discovery</p>
                  <h4 className="text-xs font-black text-gray-800">100+ Pro Chefs</h4>
                </div>
              </div>

              {/* Badge 2: Verified Profile (Right Middle) */}
              <div className="absolute top-1/3 -right-8 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-2.5 shadow-xl shadow-emerald-900/5 flex items-center gap-2.5 animate-float-medium z-20">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Security</p>
                  <h4 className="text-xs font-black text-gray-800">Verified Profiles</h4>
                </div>
              </div>

              {/* Badge 3: Affordable Price (Bottom Left) */}
              <div className="absolute bottom-16 -left-8 bg-white/95 backdrop-blur-md border border-amber-100 rounded-2xl p-2.5 shadow-xl shadow-amber-900/5 flex items-center gap-2.5 animate-float-slow z-20" style={{ animationDelay: "1.5s" }}>
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Pricing</p>
                  <h4 className="text-xs font-black text-gray-800">Affordable Rates</h4>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;