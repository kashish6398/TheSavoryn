import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import chef1 from "../assets/top_chef_1.png";
import chef2 from "../assets/top_chef_2.png";
import chef3 from "../assets/top_chef_3.png";
import chef4 from "../assets/hero_chef.png";
import chef5 from "../assets/cook_expert_1.png";
import { 
  Search, MapPin, Globe, Clock, ChefHat, 
  Heart, ChevronLeft, ChevronRight, Briefcase 
} from "lucide-react";

function FindChef() {
  const [searchCategory, setSearchCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [favorites, setFavorites] = useState({});

  // Mock list of chefs utilizing generated assets
  const chefs = [
    {
      id: 1,
      name: "Elena Petrova",
      role: "Pizza Chef",
      image: chef5,
      location: "Brussels",
      type: "Full Time",
      experience: "2 Years",
      salary: "₹30,000 - ₹50,000/month",
      description: "Passionate Italian chef with a knack for crafting authentic flavors using fresh, seasonal ingredients. Elena has worked with luxury restaurants in Paris and New York, delivering exquisite dining experiences."
    },
    {
      id: 2,
      name: "Oliver Bennett",
      role: "Baker Chef",
      image: chef1,
      location: "London",
      type: "Full Time",
      experience: "3 Years",
      salary: "₹50,000 - ₹80,000/month",
      description: "Artisanal dough preparation, sourdough fermentation methods, and dynamic pastry baking. Oliver excels in leading bakery menus, custom wedding cakes, and French bakery classics."
    },
    {
      id: 3,
      name: "Sophia Martina",
      role: "Chinese Chef",
      image: chef2,
      location: "Paris",
      type: "Part Time",
      experience: "5 Years",
      salary: "₹80,000 - ₹100,000/month",
      description: "Specialized in wok-cooking, dim sum assembly, and traditional Szechuan broths. Sophia creates flavorful culinary journeys, fusing ancient cooking traditions with modern culinary art."
    },
    {
      id: 4,
      name: "Vikram Cheng",
      role: "Indian Chef",
      image: chef3,
      location: "Brussels",
      type: "Temporary",
      experience: "7 Years",
      salary: "₹80,000 - ₹100,000/month",
      description: "Elite culinary expert specializing in North and South Indian delicacies, tandoori baking, and complex spice blending. Over 7 years of high-volume kitchen management experience."
    },
    {
      id: 5,
      name: "Elena Petrova",
      role: "Pizza Chef",
      image: chef4,
      location: "Brussels",
      type: "Full Time",
      experience: "2 Years",
      salary: "₹30,000 - ₹50,000/month",
      description: "Passionate Italian chef with a knack for crafting authentic flavors using fresh, seasonal ingredients. Elena has worked with luxury restaurants in Paris and New York, delivering exquisite dining experiences."
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfe]">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        
        {/* Header Search Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 mb-16">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight">
              Find best{" "}
              <span className="relative inline-block text-brand-primary">
                Chefs
                {/* Wavy Underline */}
                <svg className="absolute left-0 bottom-[-8px] w-full h-2.5 text-brand-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,7 Q25,2 50,7 T100,7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-gray-500 font-bold text-sm sm:text-base">
              Type your category to get exact chef details
            </p>
          </div>

          {/* Search Card Container */}
          <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl md:rounded-full p-3 shadow-xl shadow-gray-200/50">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3">
              
              {/* Category Input */}
              <div className="md:col-span-5 flex items-center gap-2.5 px-3 border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0">
                <Search className="text-brand-primary flex-shrink-0" size={18} />
                <input 
                  type="text" 
                  placeholder="Type your chef Category"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-sm text-brand-dark placeholder-gray-400 focus:ring-0"
                />
              </div>

              {/* Country Selection */}
              <div className="md:col-span-3 flex items-center gap-2.5 px-3 border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0">
                <Globe className="text-gray-400 flex-shrink-0" size={18} />
                <select 
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-sm text-gray-500 focus:ring-0 cursor-pointer"
                >
                  <option value="">Country</option>
                  <option value="brussels">Brussels</option>
                  <option value="uk">United Kingdom</option>
                  <option value="france">France</option>
                </select>
              </div>

              {/* State Selection */}
              <div className="md:col-span-2 flex items-center gap-2.5 px-3 pb-3 md:pb-0">
                <MapPin className="text-gray-400 flex-shrink-0" size={18} />
                <select 
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-sm text-gray-500 focus:ring-0 cursor-pointer"
                >
                  <option value="">State</option>
                  <option value="brussels">Brussels</option>
                  <option value="london">London</option>
                  <option value="paris">Paris</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-2">
                <button 
                  onClick={() => alert("Search executed.")}
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl md:rounded-full py-3.5 px-6 font-bold shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all duration-300 cursor-pointer text-sm"
                >
                  Search
                </button>
              </div>

            </div>
          </div>

          {/* Popular Tag list */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 font-semibold">
            <span>Popular:</span>
            {["Donut Chef", "Pizza Chef", "Chocolate Chef"].map((tag) => (
              <button 
                key={tag}
                onClick={() => setSearchCategory(tag)}
                className="hover:text-brand-primary hover:underline transition-colors"
              >
                {tag},
              </button>
            ))}
          </div>

        </section>

        {/* Main Content Layout Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Filters Sidebar */}
            <aside className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-gray-200/40 space-y-8 select-none">
              
              <h3 className="text-lg font-black text-brand-dark tracking-tight pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>Filters</span>
              </h3>

              {/* Salary Range */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold uppercase text-gray-700 tracking-wide">Salary Range</h4>
                <div className="space-y-3">
                  {["Any", ">30000k", ">50000k", ">80000k", ">100000k"].map((val, idx) => (
                    <label key={val} className="flex items-center gap-3 cursor-pointer text-xs sm:text-sm font-bold text-gray-500 hover:text-brand-dark">
                      <input 
                        type="radio" 
                        name="salary" 
                        defaultChecked={idx === 0}
                        className="w-4 h-4 text-brand-primary border-gray-300 focus:ring-brand-primary cursor-pointer accent-brand-primary" 
                      />
                      <span>{val}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold uppercase text-gray-700 tracking-wide">Work Experience</h4>
                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {["Freshers", "1 Year", "2 Year", "3 Year", "4 Year", "5 Year", "6 Year", "7 Year", "8+ more Year"].map((val, idx) => (
                    <label key={val} className="flex items-center gap-3 cursor-pointer text-xs sm:text-sm font-bold text-gray-500 hover:text-brand-dark">
                      <input 
                        type="radio" 
                        name="experience" 
                        defaultChecked={idx === 0}
                        className="w-4 h-4 text-brand-primary border-gray-300 focus:ring-brand-primary cursor-pointer accent-brand-primary" 
                      />
                      <span>{val}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type of Employment */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold uppercase text-gray-700 tracking-wide">Type of employment</h4>
                <div className="space-y-3">
                  {["Full Time", "Temporary", "Part Time"].map((val, idx) => (
                    <label key={val} className="flex items-center gap-3 cursor-pointer text-xs sm:text-sm font-bold text-gray-500 hover:text-brand-dark">
                      <input 
                        type="radio" 
                        name="employment" 
                        defaultChecked={idx === 0}
                        className="w-4 h-4 text-brand-primary border-gray-300 focus:ring-brand-primary cursor-pointer accent-brand-primary" 
                      />
                      <span>{val}</span>
                    </label>
                  ))}
                </div>
              </div>

            </aside>

            {/* Right Column: Chefs List */}
            <div className="lg:col-span-9 space-y-6">
              
              {/* Count Header */}
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-2xl font-black text-brand-dark tracking-tight">357 Chefs</h2>
              </div>

              {/* Chef Cards Stack */}
              <div className="space-y-6">
                {chefs.map((chef) => (
                  <div 
                    key={chef.id}
                    className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-3xl p-6 shadow-lg shadow-gray-200/20 hover:shadow-2xl hover:shadow-brand-primary/5 hover:-translate-y-0.5 transition-all duration-300 gap-6 relative overflow-hidden group"
                  >
                    
                    {/* Chef Image */}
                    <div className="w-full md:w-36 md:h-36 lg:w-40 lg:h-40 aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-md flex-shrink-0">
                      <img 
                        src={chef.image} 
                        alt={chef.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Chef Details */}
                    <div className="flex-grow space-y-3.5 pr-0 md:pr-40">
                      
                      {/* Name */}
                      <h3 className="text-xl font-black text-brand-dark tracking-tight hover:text-brand-primary transition-colors cursor-pointer">
                        {chef.name}
                      </h3>

                      {/* Badges Row */}
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-brand-primary" />
                          {chef.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} className="text-brand-primary" />
                          {chef.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <ChefHat size={14} className="text-brand-primary" />
                          {chef.role}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={14} className="text-brand-primary" />
                          Experience: {chef.experience}
                        </span>
                      </div>

                      {/* Preferred Salary */}
                      <p className="text-xs sm:text-sm text-brand-dark font-extrabold">
                        Preferred salary range: <span className="text-brand-primary">{chef.salary}</span>
                      </p>

                      {/* Description */}
                      <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                        {chef.description}
                      </p>

                    </div>

                    {/* Actions Area: Heart & Contact (Positioned Absolute on desktop, Flex on mobile) */}
                    <div className="flex items-center md:flex-col md:items-end justify-between md:justify-start gap-4 md:absolute md:top-6 md:right-6 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                      
                      {/* Favorite Button */}
                      <button 
                        onClick={() => toggleFavorite(chef.id)}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
                          favorites[chef.id] 
                            ? "bg-rose-50 border-rose-200 text-brand-primary scale-110" 
                            : "bg-[#f8fafc] border-gray-200 text-gray-400 hover:text-brand-primary hover:bg-rose-50"
                        }`}
                      >
                        <Heart size={16} fill={favorites[chef.id] ? "currentColor" : "none"} />
                      </button>

                      {/* Contact Details Button */}
                      <button 
                        onClick={() => alert(`Contacting ${chef.name}...`)}
                        className="bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl py-2.5 px-5 text-xs font-black shadow-md shadow-brand-primary/15 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        Contact Details
                      </button>

                    </div>

                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-center gap-2 pt-10">
                
                {/* Previous Button */}
                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center font-bold text-gray-500 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all cursor-pointer">
                  <ChevronLeft size={16} />
                </button>

                {/* Page 1 (Active) */}
                <button className="w-10 h-10 rounded-xl bg-brand-primary text-white border border-brand-primary flex items-center justify-center font-black text-sm shadow-md shadow-brand-primary/20 cursor-pointer">
                  1
                </button>

                {/* Other pages */}
                {[2, 3, 4, 5].map((page) => (
                  <button key={page} className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center font-bold text-gray-500 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all cursor-pointer">
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center font-bold text-gray-500 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all cursor-pointer">
                  <ChevronRight size={16} />
                </button>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default FindChef;
