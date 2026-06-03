import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import chef1 from "../assets/top_chef_1.png";
import chef2 from "../assets/top_chef_2.png";
import chef4 from "../assets/hero_chef.png";
import chef5 from "../assets/cook_expert_1.png";
import { 
  Heart, MapPin, Clock, ChefHat, Briefcase, Calendar, Phone, Plus, Trash2 
} from "lucide-react";

function Profile() {
  // Page toggle states
  const [availableForBookings, setAvailableForBookings] = useState(true);
  
  // Profile form state
  const [formData, setFormData] = useState({
    fullName: "Alexa Rawles",
    address: "",
    gender: "Female",
    lookingFor: "Full Time",
    chefCategory: "Pizza Chef",
    dob: "1997-08-01",
    experience: "",
    salaryExpectation: "",
    about: "",
    phone: "",
    altPhone: ""
  });

  // Previous job experience dynamic state
  const [experiences, setExperiences] = useState([
    { id: 1, companyName: "", start: "2020-02-15", leave: "2023-02-15" }
  ]);

  // Favorites state (allows unfavoriting items)
  const [favoriteChefs, setFavoriteChefs] = useState([
    {
      id: 1,
      name: "Elena Petrova",
      role: "Pizza Chef",
      image: chef5,
      location: "Brussels",
      type: "Full Time",
      experience: "2 Years",
      salary: "₹30,000 - ₹50,000/month",
      description: "Passionate Italian chef with a knack for crafting authentic flavors using fresh, seasonal ingredients. Olivia has worked with luxury restaurants in Paris and New York, delivering exquisite dining experiences."
    },
    {
      id: 2,
      name: "Elena Petrova",
      role: "Pizza Chef",
      image: chef4,
      location: "Brussels",
      type: "Full Time",
      experience: "2 Years",
      salary: "₹30,000 - ₹50,000/month",
      description: "Passionate Italian chef with a knack for crafting authentic flavors using fresh, seasonal ingredients. Olivia has worked with luxury restaurants in Paris and New York, delivering exquisite dining experiences."
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (id, field, value) => {
    setExperiences(prev => prev.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };

  const addExperience = () => {
    setExperiences(prev => [
      ...prev,
      { id: Date.now(), companyName: "", start: "", leave: "" }
    ]);
  };

  const removeExperience = (id) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavoriteChefs(prev => prev.filter(chef => chef.id !== id));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert("Profile saved successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfe]">
      {/* Navbar */}
      <Navbar />

      <main className="grow pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Profile Header Block */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Profile Avatar */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-brand-primary/20 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80" 
                  alt="Alexa Rawles Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">
                  Alexa Rawles
                </h2>
                <p className="text-gray-500 font-bold text-sm">
                  alexarawles@gmail.com
                </p>
              </div>
            </div>

            {/* Profile Action Settings */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Toggle Seek Job Switch */}
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-bold text-brand-dark">
                  Are you available for bookings?
                </span>
                <button 
                  onClick={() => setAvailableForBookings(!availableForBookings)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    availableForBookings ? "bg-brand-primary" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      availableForBookings ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => alert("Redirecting to Customer flow...")}
                className="bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl py-3 px-6 font-extrabold shadow-lg shadow-brand-primary/20 transition-all duration-300 text-sm cursor-pointer"
              >
                Complete Profile as a Customer
              </button>
            </div>
          </div>

          {/* Form Block */}
          <form onSubmit={handleSaveProfile} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/40 space-y-10">
            
            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  Full Name <span className="text-brand-primary">*</span>
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Alexa Rawles"
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  Address <span className="text-brand-primary">*</span>
                </label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Type your address"
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all"
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  Gender <span className="text-brand-primary">*</span>
                </label>
                <select 
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-500 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Looking for */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  Booking Type <span className="text-brand-primary">*</span>
                </label>
                <select 
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-500 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              {/* Chef Category */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  Chef Category <span className="text-brand-primary">*</span>
                </label>
                <select 
                  name="chefCategory"
                  value={formData.chefCategory}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-500 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                >
                  <option value="Pizza Chef">Pizza Chef</option>
                  <option value="Baker Chef">Baker Chef</option>
                  <option value="Chinese Chef">Chinese Chef</option>
                  <option value="Indian Chef">Indian Chef</option>
                  <option value="Donut Chef">Donut Chef</option>
                  <option value="Chocolate Chef">Chocolate Chef</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  Data of Birth <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  Experience <span className="text-brand-primary">*</span>
                </label>
                <select 
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-500 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                >
                  <option value="">Select your experience</option>
                  <option value="Freshers">Freshers</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3 Years">3 Years</option>
                  <option value="4 Years">4 Years</option>
                  <option value="5+ Years">5+ Years</option>
                </select>
              </div>

              {/* Salary Expectation */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  Expected Rate / Salary <span className="text-brand-primary">*</span>
                </label>
                <select 
                  name="salaryExpectation"
                  value={formData.salaryExpectation}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-500 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                >
                  <option value="">Select your salary range</option>
                  <option value="₹30,000 - ₹50,000/month">₹30,000 - ₹50,000/month</option>
                  <option value="₹50,000 - ₹80,000/month">₹50,000 - ₹80,000/month</option>
                  <option value="₹80,000 - ₹100,000/month">₹80,000 - ₹100,000/month</option>
                </select>
              </div>

              {/* About Yourself (Spans full width or is stacked) */}
              <div className="space-y-2 md:col-span-1">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  About Yourself
                </label>
                <textarea 
                  name="about"
                  rows={5}
                  value={formData.about}
                  onChange={handleInputChange}
                  placeholder="Type a short description about yourself..."
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all resize-none"
                />
              </div>

              {/* Phone and Alt Phone in Stack/Col */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                    Contact phone number <span className="text-brand-primary">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Type your phone number"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                    Contact alternative phone number <span className="text-brand-primary">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="altPhone"
                    value={formData.altPhone}
                    onChange={handleInputChange}
                    required
                    placeholder="Type your phone number"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all"
                  />
                </div>
              </div>

            </div>

            {/* Experience in Previous Job Section */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h3 className="text-base sm:text-lg font-black text-brand-dark tracking-tight">
                Experience in previous bookings & jobs
              </h3>

              {experiences.map((exp, idx) => (
                <div 
                  key={exp.id} 
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-[#fcfdfe] border border-gray-100 p-5 rounded-2xl relative group"
                >
                  {/* Delete Row Button */}
                  {experiences.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeExperience(exp.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}

                  {/* Company Name */}
                  <div className="md:col-span-6 space-y-2">
                    <label className="block text-xs font-extrabold text-gray-700">
                      Client / Restaurant Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Type client or restaurant name..."
                      value={exp.companyName}
                      onChange={(e) => handleExperienceChange(exp.id, "companyName", e.target.value)}
                      className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all"
                    />
                  </div>

                  {/* Start Date */}
                  <div className="md:col-span-3 space-y-2">
                    <label className="block text-xs font-extrabold text-gray-700">
                      Start
                    </label>
                    <input 
                      type="date" 
                      value={exp.start}
                      onChange={(e) => handleExperienceChange(exp.id, "start", e.target.value)}
                      className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                    />
                  </div>

                  {/* Leave Date */}
                  <div className="md:col-span-3 space-y-2">
                    <label className="block text-xs font-extrabold text-gray-700">
                      Leave
                    </label>
                    <input 
                      type="date" 
                      value={exp.leave}
                      onChange={(e) => handleExperienceChange(exp.id, "leave", e.target.value)}
                      className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                    />
                  </div>

                </div>
              ))}

              {/* Add Another Experience Button */}
              <div>
                <button
                  type="button"
                  onClick={addExperience}
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl py-3 px-6 font-extrabold shadow-md shadow-brand-primary/15 hover:shadow-brand-primary/35 transition-all duration-300 text-sm cursor-pointer inline-flex items-center gap-2"
                >
                  <Plus size={16} />
                  <span>Add another Experience</span>
                </button>
              </div>

            </div>

            {/* Submit Button */}
            <div className="border-t border-gray-100 pt-6 flex justify-end">
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full py-3.5 px-8 font-black shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 transition-all duration-300 text-sm cursor-pointer"
              >
                Save Details
              </button>
            </div>

          </form>

          {/* Favourite Section */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-black text-brand-dark tracking-tight pb-3 border-b border-gray-100">
              Favourite
            </h3>

            {favoriteChefs.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center text-gray-400 font-bold">
                No favorite chefs saved yet.
              </div>
            ) : (
              <div className="space-y-6">
                {favoriteChefs.map((chef) => (
                  <div 
                    key={chef.id}
                    className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-3xl p-6 shadow-lg shadow-gray-200/20 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300 gap-6 relative overflow-hidden group"
                  >
                    
                    {/* Chef Image */}
                    <div className="w-full md:w-36 md:h-36 lg:w-40 lg:h-40 aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-md shrink-0">
                      <img 
                        src={chef.image} 
                        alt={chef.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Chef Details */}
                    <div className="grow space-y-3.5 pr-0 md:pr-40">
                      
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
                        Preferred rate range: <span className="text-brand-primary">{chef.salary}</span>
                      </p>

                      {/* Description */}
                      <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                        {chef.description}
                      </p>

                    </div>

                    {/* Actions Area: Heart & Contact */}
                    <div className="flex items-center md:flex-col md:items-end justify-between md:justify-start gap-4 md:absolute md:top-6 md:right-6 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                      
                      {/* Favorite Button */}
                      <button 
                        type="button"
                        onClick={() => toggleFavorite(chef.id)}
                        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all cursor-pointer bg-rose-50 border-rose-200 text-brand-primary scale-110"
                      >
                        <Heart size={16} fill="currentColor" />
                      </button>

                      {/* Contact Details Button */}
                      <button 
                        type="button"
                        onClick={() => alert(`Contacting ${chef.name}...`)}
                        className="bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl py-2.5 px-5 text-xs font-black shadow-md shadow-brand-primary/15 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        Contact Details
                      </button>

                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Profile;
