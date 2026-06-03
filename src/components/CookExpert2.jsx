import kitchenImg from "../assets/cook_expert_2.png";
import { Award, Clock, HeartHandshake } from "lucide-react";

function CookExpert2() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-brand-primary uppercase tracking-widest text-xs sm:text-sm font-extrabold block">
                COOK WITH EXPERT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight max-w-lg">
                Find the Perfect Chefs for Your Needs
              </h2>
              <div className="w-16 h-1 bg-brand-primary rounded-full" />
            </div>

            <p className="text-gray-600 font-medium leading-relaxed">
              Elevate your private dining experiences, host exquisite dinner parties, or arrange custom catering for your private gatherings. Our platform matches you directly with the best vetted local culinary talent, tailored to your exact tastes and dietary requirements.
            </p>

            {/* List with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary-light flex items-center justify-center text-brand-primary shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-brand-dark">Top Excellence</h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Michelin-star caliber chefs available.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-brand-dark">Time Efficient</h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Quick matching within hours.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <HeartHandshake size={22} />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-brand-dark">Full Service</h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Includes setup, cooking, and cleanup.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Image with Floating Elements */}
          <div className="lg:col-span-6 relative flex justify-center order-1 lg:order-2">
            
            {/* Red Overlapping Frame */}
            <div className="absolute top-4 right-4 sm:-top-4 sm:-right-4 w-[85%] h-[85%] border-8 border-brand-primary rounded-3xl pointer-events-none -z-10" />

            {/* Kitchen Action Image Container */}
            <div className="relative w-80 h-96 sm:w-[440px] sm:h-[400px] bg-white rounded-3xl overflow-hidden shadow-2xl p-3 border border-gray-100">
              <img
                src={kitchenImg}
                alt="Chef cooking in kitchen"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Floating leafy green garnish decoration */}
            <div className="absolute left-0 bottom-72 bg-white/95 backdrop-blur border border-gray-100 p-3 rounded-2xl shadow-xl flex items-center justify-center animate-float-slow">
              <span className="text-4xl">🌱</span>
            </div>

            {/* Floating pepper garnish decoration */}
            <div className="absolute right-10 -bottom-6 bg-white/95 backdrop-blur border border-gray-100 p-2 rounded-2xl shadow-xl flex items-center justify-center animate-float-medium" style={{ animationDelay: "1.5s" }}>
              <span className="text-3xl">🌶️</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CookExpert2;
