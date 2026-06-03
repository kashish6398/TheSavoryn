import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  X, Calendar, MapPin, Users, Info, 
  User, Mail, Phone, CheckCircle2, ArrowRight 
} from "lucide-react";

function BookingModal({ isOpen, onClose, chefName }) {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    location: "",
    budget: "",
    guestCount: "",
    specialRequirements: "",
    contactName: "",
    contactEmail: "",
    contactPhone: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to payment page with details in state
    navigate("/payment", {
      state: {
        chefName,
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        location: formData.location,
        budget: formData.budget,
        guestCount: formData.guestCount
      }
    });
    onClose();
  };

  const handleClose = () => {
    setIsSuccess(false);
    // Reset form
    setFormData({
      eventType: "",
      eventDate: "",
      location: "",
      budget: "",
      guestCount: "",
      specialRequirements: "",
      contactName: "",
      contactEmail: "",
      contactPhone: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div 
        className="bg-white border border-gray-100 rounded-3xl w-full max-w-2xl shadow-2xl relative overflow-hidden transition-all duration-300 transform scale-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-gray-150 flex items-center justify-between shrink-0 bg-linear-to-r from-brand-primary-light/30 via-transparent to-transparent">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark tracking-tight">
              {isSuccess ? "Booking Confirmed!" : `Book Chef: ${chefName}`}
            </h2>
            <p className="text-xs text-gray-500 font-bold mt-0.5">
              {isSuccess ? "Your request has been successfully submitted." : "Please fill in the details below to complete your booking request."}
            </p>
          </div>
          <button 
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto grow p-6 space-y-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Event Details Grid */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-brand-primary">1. Event Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Event Type */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                      <span>Event Type</span>
                      <span className="text-brand-primary">*</span>
                    </label>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium cursor-pointer"
                    >
                      <option value="">Select Event Type</option>
                      <option value="Dinner Party">Dinner Party</option>
                      <option value="Wedding / Reception">Wedding / Reception</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Family Gathering">Family Gathering</option>
                      <option value="Other / Custom Event">Other / Custom Event</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                      <span>Event Date</span>
                      <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                      <span>Guest Count</span>
                      <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <Users size={16} />
                      </span>
                      <input
                        required
                        type="number"
                        min="1"
                        placeholder="e.g. 15"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl pl-10 pr-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                      <span>Estimated Budget (₹)</span>
                      <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm pointer-events-none">
                        ₹
                      </span>
                      <input
                        required
                        type="number"
                        min="100"
                        placeholder="e.g. 10000"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl pl-8 pr-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                      />
                    </div>
                  </div>

                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                    <span>Location / Venue Address</span>
                    <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <MapPin size={16} />
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Enter city, region, or full address"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl pl-10 pr-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                    <span>Special Requirements & Notes</span>
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Dietary restrictions, preferred cuisine details, kitchen equipment available..."
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                    className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Contact Details Section */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-xs font-black uppercase tracking-wider text-brand-primary">2. Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                      <span>Full Name</span>
                      <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <User size={15} />
                      </span>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl pl-10 pr-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                      <span>Email</span>
                      <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <Mail size={15} />
                      </span>
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl pl-10 pr-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                      <span>Phone Number</span>
                      <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <Phone size={15} />
                      </span>
                      <input
                        required
                        type="tel"
                        placeholder="Phone/Mobile"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl pl-10 pr-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-100 shrink-0">
                <button 
                  type="button"
                  onClick={handleClose}
                  className="bg-white border-2 border-gray-250 text-gray-500 hover:bg-gray-50 font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer text-sm"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold px-6 py-3 rounded-xl shadow-lg shadow-brand-primary/20 transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-sm"
                >
                  <span>Confirm Booking</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </form>
          ) : (
            
            /* Success State */
            <div className="py-8 text-center space-y-6 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={36} className="animate-scaleUp" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-black text-brand-dark">Booking Request Submitted!</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                  We've successfully received your booking inquiry for <strong className="text-brand-dark font-black">{chefName}</strong>. Our concierge team is checking the availability and will connect with you via email or phone shortly.
                </p>
              </div>
              
              {/* Summary Details */}
              <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-4 text-left text-xs font-semibold text-gray-500 space-y-2.5">
                <div className="flex justify-between">
                  <span>Chef Selected:</span>
                  <span className="text-brand-dark font-extrabold">{chefName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Event:</span>
                  <span className="text-brand-dark font-extrabold">{formData.eventType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="text-brand-dark font-extrabold">{formData.eventDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-brand-dark font-extrabold truncate max-w-[200px]">{formData.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span className="text-brand-dark font-extrabold">{formData.guestCount} guests</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Budget:</span>
                  <span className="text-brand-dark font-extrabold">₹{Number(formData.budget).toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={handleClose}
                className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-brand-primary/20 transition-all duration-200 cursor-pointer text-sm"
              >
                Return to Chef Profile
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default BookingModal;
