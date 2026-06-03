import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  ArrowLeft, CreditCard, ShieldCheck, CheckCircle2, 
  Loader2, Calendar, MapPin, Users, HelpCircle 
} from "lucide-react";

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [txnId, setTxnId] = useState("");

  // Input states
  const [cardData, setCardData] = useState({ number: "", expiry: "", cvv: "", name: "" });
  const [upiId, setUpiId] = useState("");
  const [bank, setBank] = useState("");

  // Fallback default details if the page is visited directly
  const booking = state || {
    chefName: "Elena Petrova",
    eventType: "Dinner Party",
    eventDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    location: "Brussels Central District",
    guestCount: 15,
    budget: 8000
  };

  const baseBudget = Number(booking.budget) || 5000;
  const serviceFee = Math.round(baseBudget * 0.05);
  const gst = Math.round(baseBudget * 0.18);
  const totalAmount = baseBudget + serviceFee + gst;

  // Generate mock transaction ID
  useEffect(() => {
    if (isPaid) {
      const randStr = Math.random().toString(36).substring(2, 10).toUpperCase();
      setTxnId(`TXN-${randStr}`);
    }
  }, [isPaid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate 1.5s loader
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfe] pt-20">
      <Navbar />

      <main className="grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Back button */}
          {!isPaid && (
            <button 
              onClick={() => navigate(-1)} 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary font-bold transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>Back to Profile Details</span>
            </button>
          )}

          {!isPaid ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Payment Form Details */}
              <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-250/20 space-y-6">
                <div>
                  <h1 className="text-2xl font-black text-brand-dark tracking-tight">Select Payment Option</h1>
                  <p className="text-xs text-gray-400 font-bold mt-0.5">Secure, encrypted connection powered by 256-bit encryption.</p>
                </div>

                {/* Tabs Selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "card", label: "Credit/Debit", icon: <CreditCard size={15} /> },
                    { id: "upi", label: "UPI Pay", icon: <span className="font-bold text-xs uppercase">UPI</span> },
                    { id: "net", label: "Net Bank", icon: <span className="font-bold text-xs">Bank</span> },
                    { id: "delivery", label: "Cash Later", icon: <span className="font-bold text-xs">COD</span> }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`py-3 px-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 font-extrabold text-xs transition-all cursor-pointer ${
                        paymentMethod === method.id 
                          ? "border-brand-primary bg-brand-primary-light/40 text-brand-primary shadow-sm" 
                          : "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {method.icon}
                      <span>{method.label}</span>
                    </button>
                  ))}
                </div>

                {/* Payment Option Forms */}
                <form onSubmit={handleSubmit} className="space-y-5 pt-3">
                  
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      {/* Card Number */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide">Card Number</label>
                        <input
                          required
                          type="text"
                          pattern="\d{16}"
                          maxLength="16"
                          placeholder="4111 2222 3333 4444"
                          value={cardData.number}
                          onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                          className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {/* Expiry Date */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide">Expiry Date</label>
                          <input
                            required
                            type="text"
                            placeholder="MM/YY"
                            maxLength="5"
                            value={cardData.expiry}
                            onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                            className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                          />
                        </div>
                        {/* CVV */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide">CVV Code</label>
                          <input
                            required
                            type="password"
                            pattern="\d{3}"
                            maxLength="3"
                            placeholder="***"
                            value={cardData.cvv}
                            onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                            className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                          />
                        </div>
                      </div>

                      {/* Card Holder Name */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide">Name on Card</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. John Doe"
                          value={cardData.name}
                          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                          className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide">UPI Virtual ID</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. user@okaxis"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark placeholder-gray-400 focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                        />
                        <span className="text-[10px] text-gray-400 font-bold block">Enter your UPI ID to trigger a collect notification to your UPI client App.</span>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "net" && (
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide">Select your Bank</label>
                        <select
                          required
                          value={bank}
                          onChange={(e) => setBank(e.target.value)}
                          className="w-full bg-[#f4f7ff] border border-gray-150 rounded-xl px-4 py-3 text-brand-dark focus:bg-white focus:border-brand-primary outline-none transition-all focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium cursor-pointer"
                        >
                          <option value="">Choose Bank</option>
                          <option value="sbi">State Bank of India</option>
                          <option value="hdfc">HDFC Bank</option>
                          <option value="icici">ICICI Bank</option>
                          <option value="axis">Axis Bank</option>
                          <option value="kotak">Kotak Mahindra Bank</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "delivery" && (
                    <div className="bg-[#f0f9ff] border border-blue-100 rounded-2xl p-5 space-y-2 text-blue-700">
                      <h4 className="text-sm font-black flex items-center gap-1">
                        <HelpCircle size={16} />
                        <span>Pay directly to Chef</span>
                      </h4>
                      <p className="text-xs font-semibold leading-relaxed text-blue-600/90">
                        Choose to settle payments on event completion directly with the chef (via Cash or direct transfer). A nominal service fee validation hold may still apply in case of cancellation.
                      </p>
                    </div>
                  )}

                  {/* Submission triggers */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-brand-primary hover:bg-brand-primary-hover disabled:bg-brand-primary-light text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Processing Secure Payment...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck size={18} />
                          <span>Confirm & Pay ₹{totalAmount.toLocaleString()}</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>

              {/* Right Side: Billing summary */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Summary Card */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-gray-250/20 space-y-6">
                  <h3 className="text-lg font-black text-brand-dark tracking-tight">Booking Summary</h3>
                  
                  {/* Event Details */}
                  <div className="space-y-4 border-b border-gray-100 pb-5">
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary-light/40 text-brand-primary flex items-center justify-center shrink-0">
                        <Calendar size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black block">Chef & Event</span>
                        <h4 className="font-extrabold text-brand-dark">{booking.chefName}</h4>
                        <p className="text-xs text-gray-500 font-bold mt-0.5">{booking.eventType}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-bold text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-brand-primary shrink-0" />
                        <span>{booking.eventDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users size={14} className="text-brand-primary shrink-0" />
                        <span>{booking.guestCount} Guests</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-bold text-gray-500">
                      <MapPin size={14} className="text-brand-primary shrink-0 mt-0.5" />
                      <span className="truncate">{booking.location}</span>
                    </div>
                  </div>

                  {/* Pricing break downs */}
                  <div className="space-y-3 font-bold text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Base Budget Rate:</span>
                      <span className="text-brand-dark font-extrabold">₹{baseBudget.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Service Fee (5%):</span>
                      <span className="text-brand-dark font-extrabold">₹{serviceFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-gray-100">
                      <span>GST (18%):</span>
                      <span className="text-brand-dark font-extrabold">₹{gst.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-base pt-2 text-brand-dark font-black">
                      <span>Total Amount:</span>
                      <span className="text-brand-primary">₹{totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Safety declaration banner */}
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 flex gap-3 text-xs text-emerald-800 font-semibold leading-relaxed">
                  <ShieldCheck size={20} className="text-emerald-600 shrink-0" />
                  <div>
                    <h5 className="font-extrabold text-emerald-700">100% Secure Checkout</h5>
                    <p className="text-emerald-600/90 mt-0.5">Your financial data is protected by secure layers. The chef is paid only upon satisfactory execution of the culinary booking.</p>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            
            /* Payment Success Screen */
            <div className="max-w-md mx-auto bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-2xl space-y-8">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={36} className="animate-scaleUp" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-brand-dark tracking-tight">Payment Successful!</h2>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                  Your payment has been verified. The booking request for <strong className="text-brand-dark">{booking.chefName}</strong> is fully active.
                </p>
              </div>

              {/* Payment Details Container */}
              <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-5 text-left text-xs font-semibold text-gray-500 space-y-3">
                <div className="flex justify-between">
                  <span>Chef Booked:</span>
                  <span className="text-brand-dark font-extrabold">{booking.chefName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Event Scheduled:</span>
                  <span className="text-brand-dark font-extrabold">{booking.eventType} ({booking.eventDate})</span>
                </div>
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <span className="text-brand-dark font-mono font-black">{txnId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span className="text-brand-dark font-extrabold uppercase">{paymentMethod}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-150">
                  <span>Total Amount Paid:</span>
                  <span className="text-brand-primary font-black text-sm">₹{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold pt-1">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>A copy of invoice receipt has been sent to your email address.</span>
                </div>
              </div>

              {/* Action Routes */}
              <div className="space-y-3">
                <Link
                  to="/profile"
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 transition-all duration-200 cursor-pointer text-sm block"
                >
                  View My Bookings
                </Link>
                <Link
                  to="/find-chef"
                  className="w-full bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary-light font-extrabold py-3.5 rounded-xl transition-all duration-200 cursor-pointer text-sm block"
                >
                  Browse More Chefs
                </Link>
              </div>
            </div>

          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Payment;
