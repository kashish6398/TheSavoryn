import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check } from "lucide-react";

function Pricing() {
  const plans = [
    {
      name: "Basic Plan",
      description: "Perfect for casual hosting. Get access to local chef profiles.",
      price: "₹199/month",
      features: [
        "Access To 20 Chef Profiles Per Month.",
        "Limited Access To Premium Chef Profiles.",
        "Basic Support For Inquiries.",
      ],
    },
    {
      name: "Professional Plan",
      description: "Ideal for regular hosts or chefs looking for premium bookings.",
      price: "₹499/month",
      features: [
        "Access To Unlimited Chef Profiles.",
        "Priority Response For Bookings.",
        "In-Depth Chef Insights (Ratings, Skills, Certifications).",
        "Dedicated Customer Support.",
      ],
    },
    {
      name: "Enterprise Plan",
      description: "Tailored for events and premium chefs. Maximize your booking and matching efficiency.",
      price: "₹999/month",
      features: [
        "Unlimited Chef Profiles and Contacts.",
        "Featured Chef Profile Visibility.",
        "Analytics For Booking Trends.",
        "24/7 Customer Support.",
      ],
    },
    {
      name: "Elite Chef Plan",
      description: "Showcase your culinary skills and connect with premium clients.",
      price: "₹199/month",
      features: [
        "Profile Visibility Boost For Clients.",
        "Personalized Skill Certification Badge.",
        "Access To High-Paying Private Bookings.",
        "Career Consultation With Experts.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white pt-20">
      <Navbar />

      <main className="grow py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark leading-tight tracking-tight">
              Let’s purchase a premium package <br className="hidden sm:inline" />
              to get your <span className="text-brand-primary">Chefs contact details</span>
            </h1>
            <p className="mt-4 text-gray-500 font-bold text-sm sm:text-base">
              Purchase now to get more chefs contact details
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full relative"
              >
                {/* Plan Info */}
                <h3 className="text-xl font-extrabold text-brand-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-[13px] font-semibold leading-relaxed mb-6 min-h-[60px]">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="text-3xl font-black text-brand-dark mb-6">
                  {plan.price}
                </div>

                {/* Features Divider & Title */}
                <div className="border-t border-gray-100 pt-6 mb-4">
                  <span className="text-[11px] font-extrabold text-brand-dark uppercase tracking-wider block mb-4">
                    Features:
                  </span>
                  
                  {/* Features List */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-xs sm:text-[13px] font-semibold leading-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-6">
                  <button className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold py-3 px-6 rounded-xl shadow-lg shadow-brand-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center text-sm cursor-pointer">
                    Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Pricing;
