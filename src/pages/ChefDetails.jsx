import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import chef1 from "../assets/top_chef_1.png";
import chef2 from "../assets/top_chef_2.png";
import chef3 from "../assets/top_chef_3.png";
import chef4 from "../assets/hero_chef.png";
import chef5 from "../assets/cook_expert_1.png";
import { 
  MapPin, Clock, ChefHat, Briefcase, Star, ArrowLeft, 
  MessageSquare, CalendarCheck, ShieldCheck, Check 
} from "lucide-react";
import BookingModal from "../components/BookingModal";
import NoteModal from "../components/NoteModal";

function ChefDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Full detailed list of chefs matching the FindChef listing
  const chefsData = {
    1: {
      id: 1,
      name: "Elena Petrova",
      role: "Pizza Chef",
      image: chef5,
      location: "Brussels",
      type: "Full Time",
      experience: "2 Years",
      salary: "₹30,000 - ₹50,000/month",
      availability: "Available for dinner parties & weekend events",
      pricingDetails: "₹1,500/hour or ₹8,000 per event",
      bio: "Passionate Italian chef with a knack for crafting authentic flavors using fresh, seasonal ingredients. Elena has worked with luxury restaurants in Paris and New York, delivering exquisite dining experiences. She specializes in hand-stretched woodfired pizzas, fresh pasta dough, and classic Mediterranean salads.",
      skills: ["Pizza Dough", "Woodfired Baking", "Fresh Pasta", "Focaccia", "Mediterranean Cuisine", "Gluten-Free Baking", "Menu Planning"],
      reviews: [
        { name: "Sarah L.", rating: 5, date: "May 12, 2026", comment: "Elena made the most amazing Neapolitan pizzas for my birthday party! Highly recommend her professionalism." },
        { name: "Marc G.", rating: 4.8, date: "April 28, 2026", comment: "Excellent cooking skills, clean kitchen setup, and incredibly friendly personality. A joy to host." }
      ]
    },
    2: {
      id: 2,
      name: "Oliver Bennett",
      role: "Baker Chef",
      image: chef1,
      location: "London",
      type: "Full Time",
      experience: "3 Years",
      salary: "₹50,000 - ₹80,000/month",
      availability: "Available weekdays (mornings) and custom cake orders",
      pricingDetails: "₹2,000/hour or ₹12,000 per booking",
      bio: "Artisanal dough preparation, sourdough fermentation methods, and dynamic pastry baking. Oliver excels in leading bakery menus, custom wedding cakes, and French bakery classics. He brings precision and food science to every loaf and dessert.",
      skills: ["Sourdough Fermentation", "Wedding Cakes", "French Pastry", "Viennoiserie", "Dessert Styling", "Chocolate Tempering"],
      reviews: [
        { name: "Emily R.", rating: 5, date: "May 20, 2026", comment: "The sourdough bread and croissants Oliver baked were out of this world! Our guests loved the pastry bar." }
      ]
    },
    3: {
      id: 3,
      name: "Sophia Martina",
      role: "Chinese Chef",
      image: chef2,
      location: "Paris",
      type: "Part Time",
      experience: "5 Years",
      salary: "₹80,000 - ₹100,000/month",
      availability: "Fully Available for lunch & dinner bookings",
      pricingDetails: "₹2,500/hour or ₹15,000 per booking",
      bio: "Specialized in wok-cooking, dim sum assembly, and traditional Szechuan broths. Sophia creates flavorful culinary journeys, fusing ancient cooking traditions with modern culinary art. She has trained in Shanghai and Hong Kong.",
      skills: ["Wok Cooking", "Dim Sum Crafting", "Szechuan Spices", "Dumpling Assembly", "Cantonese Stews", "Knife Master"],
      reviews: [
        { name: "Chen W.", rating: 4.9, date: "May 15, 2026", comment: "Sophia's Szechuan hot pot and handmade dumplings tasted absolutely authentic. Outstanding performance." }
      ]
    },
    4: {
      id: 4,
      name: "Vikram Cheng",
      role: "Indian Chef",
      image: chef3,
      location: "Brussels",
      type: "Temporary",
      experience: "7 Years",
      salary: "₹80,000 - ₹100,000/month",
      availability: "Available weekends only",
      pricingDetails: "₹1,800/hour or ₹10,000 per event",
      bio: "Elite culinary expert specializing in North and South Indian delicacies, tandoori baking, and complex spice blending. Over 7 years of high-volume kitchen management experience. Brings the warmth of authentic Indian spices to your tables.",
      skills: ["Tandoori Baking", "Biryani Preparation", "Spice Blending", "Naan Bread", "South Indian Curries", "Vegan Indian Cuisine"],
      reviews: [
        { name: "Dev K.", rating: 5, date: "June 01, 2026", comment: "The butter chicken and garlic naan Vikram prepared were restaurant quality! Cleaned the kitchen perfectly afterward." }
      ]
    },
    5: {
      id: 5,
      name: "Elena Petrova",
      role: "Pizza Chef",
      image: chef4,
      location: "Brussels",
      type: "Full Time",
      experience: "2 Years",
      salary: "₹30,000 - ₹50,000/month",
      availability: "Available for dinner parties & weekend events",
      pricingDetails: "₹1,500/hour or ₹8,000 per event",
      bio: "Passionate Italian chef with a knack for crafting authentic flavors using fresh, seasonal ingredients. Elena has worked with luxury restaurants in Paris and New York, delivering exquisite dining experiences. She specializes in hand-stretched woodfired pizzas, fresh pasta dough, and classic Mediterranean salads.",
      skills: ["Pizza Dough", "Woodfired Baking", "Fresh Pasta", "Focaccia", "Mediterranean Cuisine", "Gluten-Free Baking", "Menu Planning"],
      reviews: [
        { name: "Sarah L.", rating: 5, date: "May 12, 2026", comment: "Elena made the most amazing Neapolitan pizzas for my birthday party! Highly recommend her professionalism." },
        { name: "Marc G.", rating: 4.8, date: "April 28, 2026", comment: "Excellent cooking skills, clean kitchen setup, and incredibly friendly personality. A joy to host." }
      ]
    }
  };

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  // Find chef matching parameter ID, default to chef 1 if not found
  const chef = chefsData[id] || chefsData[1];

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleSendNote = () => {
    setIsNoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfe] pt-20">
      <Navbar />

      <main className="grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Back button */}
          <Link 
            to="/find-chef" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary font-bold transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Find Chefs</span>
          </Link>

          {/* Details layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image Card & Quick Stats */}
            <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-gray-250/20 space-y-6">
              
              {/* Photo Frame */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Quick Info Block */}
              <div className="space-y-4">
                
                {/* Rating & Verification */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm font-extrabold text-gray-700">(5.0)</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    <ShieldCheck size={14} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Rates / Pricing details */}
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Pricing Rate</span>
                  <div className="text-xl font-black text-brand-dark">{chef.pricingDetails}</div>
                  <span className="text-xs text-gray-400 font-semibold block">Salary range: {chef.salary}</span>
                </div>

                {/* Availability info */}
                <div className="space-y-1 pt-2">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Availability</span>
                  <div className="text-sm font-bold text-brand-dark flex items-center gap-1.5">
                    <Clock size={15} className="text-brand-primary" />
                    <span>{chef.availability}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <button 
                  onClick={handleBookNow}
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  <CalendarCheck size={18} />
                  <span>Book Now</span>
                </button>
                <button 
                  onClick={handleSendNote}
                  className="w-full bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary-light font-extrabold py-3 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  <span>Send a Note</span>
                </button>
              </div>

            </div>

            {/* Right Column: Bio, Skills & Reviews */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Profile Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-250/20 space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">{chef.name}</h1>
                  <span className="inline-block mt-2 bg-brand-primary-light text-brand-primary font-extrabold text-sm px-3.5 py-1 rounded-full border border-brand-primary/10">
                    {chef.role}
                  </span>
                </div>

                {/* Tags Row */}
                <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-500 pt-2 border-t border-gray-100">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-brand-primary" />
                    <span>Location: {chef.location}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={16} className="text-brand-primary" />
                    <span>Experience: {chef.experience}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ChefHat size={16} className="text-brand-primary" />
                    <span>Type: {chef.type}</span>
                  </span>
                </div>

                {/* Bio text */}
                <div className="space-y-3 pt-4">
                  <h3 className="text-lg font-black text-brand-dark tracking-tight">Biography</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                    {chef.bio}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-black text-brand-dark tracking-tight">Specialized Skills</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {chef.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-[#f4f7ff] border border-gray-200 text-brand-dark font-bold text-xs px-3 py-1.5 rounded-xl flex items-center gap-1.5"
                      >
                        <Check size={12} className="text-brand-primary" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Reviews Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-250/20 space-y-6">
                <h3 className="text-xl font-black text-brand-dark tracking-tight">Customer Reviews ({chef.reviews.length})</h3>
                
                <div className="space-y-6">
                  {chef.reviews.map((rev, index) => (
                    <div 
                      key={index}
                      className="border-b border-gray-100 last:border-0 pb-6 last:pb-0 space-y-2.5"
                    >
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-extrabold text-brand-dark">{rev.name}</h4>
                          <span className="text-xs text-gray-400 font-semibold block">{rev.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={12} 
                              fill={i < Math.floor(rev.rating) ? "currentColor" : "none"} 
                              className={i < Math.floor(rev.rating) ? "text-amber-400" : "text-gray-200"}
                            />
                          ))}
                          <span className="text-xs font-black text-gray-600 ml-1">({rev.rating})</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed font-semibold">
                        "{rev.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        chefName={chef.name} 
      />

      {/* Note Modal */}
      <NoteModal 
        isOpen={isNoteModalOpen} 
        onClose={() => setIsNoteModalOpen(false)} 
        chefName={chef.name} 
      />
    </div>
  );
}

export default ChefDetails;
