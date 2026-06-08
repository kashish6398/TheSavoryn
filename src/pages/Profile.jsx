import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import chef1 from "../assets/top_chef_1.png";
import chef2 from "../assets/top_chef_2.png";
import chef4 from "../assets/hero_chef.png";
import chef5 from "../assets/cook_expert_1.png";
import { 
  Heart, MapPin, Clock, ChefHat, Briefcase, Calendar, Phone, Plus, Trash2, Mail, Users, Check, X, ShieldCheck
} from "lucide-react";

function Profile() {
  const navigate = useNavigate();
  // Page toggle states
  const [receiveUpdates, setReceiveUpdates] = useState(true);
  
  // Profile form state
  const [formData, setFormData] = useState({
    fullName: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    address: "123 Gourmet Lane, Foodie Town",
    gender: "Female",
    dob: "1997-08-01",
    phone: "+1 (555) 019-2834",
    altPhone: "+1 (555) 019-5678",
    householdSize: "Family of 3-4",
    about: "We love hosting family dinners and weekend barbecues. Prefer organic, fresh ingredients and light desserts."
  });

  // User preferences (Dietary Restrictions and Preferred Cuisines)
  const [dietaryPreferences, setDietaryPreferences] = useState([
    { id: "veg", label: "Vegetarian", selected: false },
    { id: "vegan", label: "Vegan", selected: false },
    { id: "gf", label: "Gluten-Free", selected: true },
    { id: "halal", label: "Halal", selected: false },
    { id: "nutfree", label: "Nut-Free", selected: true },
    { id: "df", label: "Dairy-Free", selected: false },
    { id: "lowcarb", label: "Low-Carb", selected: false }
  ]);

  const [preferredCuisines, setPreferredCuisines] = useState([
    { id: "italian", label: "Italian", selected: true },
    { id: "indian", label: "Indian", selected: false },
    { id: "chinese", label: "Chinese", selected: true },
    { id: "mexican", label: "Mexican", selected: false },
    { id: "french", label: "French", selected: false },
    { id: "japanese", label: "Japanese", selected: true },
    { id: "mediterranean", label: "Mediterranean", selected: true },
    { id: "thai", label: "Thai", selected: false }
  ]);

  // Bookings state
  const [bookings, setBookings] = useState([
    {
      id: 1,
      chefName: "Elena Petrova",
      chefRole: "Pizza Chef",
      date: "2026-06-15",
      time: "Dinner (6:00 PM - 10:00 PM)",
      status: "Confirmed",
      amount: "₹8,000",
      image: chef5
    },
    {
      id: 2,
      chefName: "Oliver Bennett",
      chefRole: "Baker Chef",
      date: "2026-05-20",
      time: "Morning Booking (8:00 AM - 12:00 PM)",
      status: "Completed",
      amount: "₹12,000",
      image: chef1
    }
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

  const handleToggleDietary = (id) => {
    setDietaryPreferences(prev =>
      prev.map(item => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  const handleToggleCuisine = (id) => {
    setPreferredCuisines(prev =>
      prev.map(item => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  const handleCancelBooking = (id) => {
    setBookings(prev =>
      prev.map(booking => (booking.id === id ? { ...booking, status: "Cancelled" } : booking))
    );
  };

  const addMockBooking = () => {
    const mockChefs = [
      { name: "Elena Petrova", role: "Pizza Chef", img: chef5 },
      { name: "Oliver Bennett", role: "Baker Chef", img: chef1 },
      { name: "Sophia Martina", role: "Chinese Chef", img: chef2 }
    ];
    const chefObj = mockChefs[Math.floor(Math.random() * mockChefs.length)];
    const newBooking = {
      id: Date.now(),
      chefName: chefObj.name,
      chefRole: chefObj.role,
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      time: "Evening Event (5:00 PM - 9:00 PM)",
      status: "Pending",
      amount: "₹10,000",
      image: chefObj.img
    };
    setBookings(prev => [newBooking, ...prev]);
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
                <h2 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight animate-fade-in">
                  {formData.fullName || "Alexa Rawles"}
                </h2>
                <p className="text-gray-500 font-bold text-sm flex items-center gap-1.5">
                  <Mail size={14} className="text-brand-primary" />
                  <span>{formData.email}</span>
                </p>
              </div>
            </div>

            {/* Profile Action Settings */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Toggle Seek Job Switch */}
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-bold text-brand-dark">
                  Receive booking updates?
                </span>
                <button 
                  onClick={() => setReceiveUpdates(!receiveUpdates)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    receiveUpdates ? "bg-brand-primary" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      receiveUpdates ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => navigate("/pricing")}
                className="bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl py-3 px-6 font-extrabold shadow-lg shadow-brand-primary/20 transition-all duration-300 text-sm cursor-pointer"
              >
                Upgrade Membership
              </button>
            </div>
          </div>

          {/* Form Block */}
          <form onSubmit={handleSaveProfile} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/40 space-y-10">
            
            {/* Personal Details Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-brand-dark tracking-tight pb-3 border-b border-gray-100 flex items-center gap-2">
                <Briefcase size={20} className="text-brand-primary" />
                <span>Personal Information</span>
              </h3>

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

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                    Email Address <span className="text-brand-primary">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="alexarawles@gmail.com"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                    Event / Dining Address <span className="text-brand-primary">*</span>
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

                {/* Date of Birth */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                    Date of Birth <span className="text-brand-primary">*</span>
                  </label>
                  <input 
                    type="date" 
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                  />
                </div>

                {/* Phone */}
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
                
                {/* Alternative Phone */}
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
                    placeholder="Type your alternative phone number"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all"
                  />
                </div>

                {/* Household Size */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                    Household Size <span className="text-brand-primary">*</span>
                  </label>
                  <select 
                    name="householdSize"
                    value={formData.householdSize}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-500 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all cursor-pointer"
                  >
                    <option value="Single">Single</option>
                    <option value="Couple">Couple</option>
                    <option value="Family of 3-4">Family of 3-4</option>
                    <option value="Large Family (5+ members)">Large Family (5+ members)</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Culinary & Dietary Preferences Section */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h3 className="text-lg font-black text-brand-dark tracking-tight pb-3 border-b border-gray-100 flex items-center gap-2">
                <ChefHat size={20} className="text-brand-primary" />
                <span>Culinary & Dietary Preferences</span>
              </h3>

              <div className="grid grid-cols-1 gap-6">
                
                {/* Dietary Restrictions Tags */}
                <div className="space-y-2.5">
                  <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                    Dietary Restrictions <span className="text-xs text-gray-400 font-semibold">(Select all that apply)</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {dietaryPreferences.map((pref) => (
                      <button
                        key={pref.id}
                        type="button"
                        onClick={() => handleToggleDietary(pref.id)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer flex items-center gap-1.5 ${
                          pref.selected
                            ? "bg-brand-primary/10 border-brand-primary text-brand-primary shadow-xs"
                            : "bg-[#f8fafc] border-gray-200 text-gray-500 hover:border-gray-300"
                        }`}
                      >
                        {pref.selected && <Check size={14} />}
                        <span>{pref.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Cuisines Tags */}
                <div className="space-y-2.5">
                  <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                    Preferred Cuisines <span className="text-xs text-gray-400 font-semibold">(Select all that apply)</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {preferredCuisines.map((cuisine) => (
                      <button
                        key={cuisine.id}
                        type="button"
                        onClick={() => handleToggleCuisine(cuisine.id)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer flex items-center gap-1.5 ${
                          cuisine.selected
                            ? "bg-brand-primary/10 border-brand-primary text-brand-primary shadow-xs"
                            : "bg-[#f8fafc] border-gray-200 text-gray-500 hover:border-gray-300"
                        }`}
                      >
                        {cuisine.selected && <Check size={14} />}
                        <span>{cuisine.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* About Household / Special Instructions */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                    About My Household / Special Dietary Needs
                  </label>
                  <textarea 
                    name="about"
                    rows={4}
                    value={formData.about}
                    onChange={handleInputChange}
                    placeholder="Type a description of your household tastes, allergen details, or special requests..."
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 outline-none transition-all resize-none"
                  />
                </div>

              </div>
            </div>

            {/* Save Button */}
            <div className="border-t border-gray-100 pt-6 flex justify-end">
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full py-3.5 px-8 font-black shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 transition-all duration-300 text-sm cursor-pointer"
              >
                Save Profile Details
              </button>
            </div>

          </form>

          {/* Bookings Section */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/40 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-150">
              <div>
                <h3 className="text-xl font-black text-brand-dark tracking-tight">
                  My Bookings & Booking History
                </h3>
                <p className="text-xs text-gray-500 font-bold mt-0.5">
                  Manage and track your active and past chef bookings
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={addMockBooking}
                  className="bg-gray-100 hover:bg-gray-200 text-brand-dark rounded-xl py-2.5 px-5 font-extrabold transition-all text-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <Plus size={14} />
                  <span>Add Mock Booking</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/find-chef")}
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl py-2.5 px-5 font-extrabold shadow-md shadow-brand-primary/15 hover:shadow-brand-primary/35 transition-all text-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Book a New Chef</span>
                </button>
              </div>
            </div>

            {bookings.length === 0 ? (
              <div className="text-center py-12 text-gray-400 font-bold bg-[#fcfdfe] border border-dashed border-gray-200 rounded-2xl">
                No bookings made yet. Find your perfect chef to get started!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bookings.map((booking) => (
                  <div 
                    key={booking.id}
                    className="bg-white border border-gray-150 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex gap-4 relative overflow-hidden group"
                  >
                    
                    {/* Chef Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-100 shrink-0">
                      <img 
                        src={booking.image || "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=100&h=100&q=80"} 
                        alt={booking.chefName} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Booking Info */}
                    <div className="grow space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-extrabold text-brand-dark text-sm sm:text-base">
                          {booking.chefName}
                        </h4>
                        <span 
                          className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                            booking.status === "Confirmed"
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                              : booking.status === "Completed"
                              ? "bg-blue-50 text-blue-600 border border-blue-100"
                              : booking.status === "Pending"
                              ? "bg-amber-50 text-amber-600 border border-amber-100"
                              : "bg-rose-50 text-rose-600 border border-rose-100"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>
                      
                      <p className="text-xs text-gray-500 font-semibold">{booking.chefRole}</p>
                      
                      <div className="text-xs font-semibold text-gray-500 pt-2 space-y-1 border-t border-gray-50 mt-2">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-brand-primary" />
                          <span>Date: {booking.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-brand-primary" />
                          <span>Time: {booking.time}</span>
                        </div>
                        <div className="text-brand-dark font-extrabold mt-1">
                          Amount Paid: <span className="text-brand-primary">{booking.amount}</span>
                        </div>
                      </div>

                    </div>

                    {/* Cancel Booking Action */}
                    {(booking.status === "Pending" || booking.status === "Confirmed") && (
                      <button
                        type="button"
                        onClick={() => handleCancelBooking(booking.id)}
                        title="Cancel Booking"
                        className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}

                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Favourite Section */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-black text-brand-dark tracking-tight pb-3 border-b border-gray-100">
              Saved Chefs
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
