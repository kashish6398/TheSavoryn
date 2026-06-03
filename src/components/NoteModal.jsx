import { useState } from "react";
import { X, MessageSquare, Send, CheckCircle2 } from "lucide-react";

function NoteModal({ isOpen, onClose, chefName }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    message: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      subject: "",
      message: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div 
        className="bg-white border border-gray-100 rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden transition-all duration-300 transform scale-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between shrink-0 bg-gradient-to-r from-brand-primary-light/30 via-transparent to-transparent">
          <div>
            <h2 className="text-xl font-black text-brand-dark tracking-tight">
              {isSuccess ? "Message Sent!" : `Send a Note to ${chefName}`}
            </h2>
            <p className="text-xs text-gray-500 font-bold mt-0.5">
              {isSuccess ? "Your note has been delivered successfully." : "Send an inquiry or special request to discuss before booking."}
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
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                  <span>Subject</span>
                  <span className="text-brand-primary">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Question about dinner menu pricing"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                  <span>Message</span>
                  <span className="text-brand-primary">*</span>
                </label>
                <textarea
                  required
                  rows="6"
                  placeholder="Write your custom message or questions for the chef here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 shrink-0">
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
                  <span>Send Message</span>
                  <Send size={14} />
                </button>
              </div>

            </form>
          ) : (
            
            /* Success State */
            <div className="py-8 text-center space-y-6 max-w-sm mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={36} className="animate-scaleUp" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-black text-brand-dark">Message Sent!</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                  Your message was sent to <strong className="text-brand-dark font-black">{chefName}</strong>. They will reply directly to your contact profile or email soon.
                </p>
              </div>

              {/* Summary Details */}
              <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-4 text-left text-xs font-semibold text-gray-500 space-y-2.5">
                <div className="flex justify-between">
                  <span>Recipient:</span>
                  <span className="text-brand-dark font-extrabold">{chefName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Subject:</span>
                  <span className="text-brand-dark font-extrabold truncate max-w-[200px]">{formData.subject}</span>
                </div>
              </div>

              <button 
                onClick={handleClose}
                className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-brand-primary/20 transition-all duration-200 cursor-pointer text-sm"
              >
                Close Window
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default NoteModal;
