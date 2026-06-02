import chefImg from "../assets/cook_expert_1.png";
import burgerImg from "../assets/burger_fries.png";
import { CheckCircle2 } from "lucide-react";

function CookExpert1() {
  return (
    <section id="experts" className="py-24 bg-brand-primary-light/10 relative overflow-hidden">

      {/* Decorative Background Circles */}
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Chef Portrait with shapes */}
          <div className="lg:col-span-6 relative flex justify-center">

            {/* Red semi-circular backdrop */}
            <div className="absolute bottom-0 w-72 h-72 sm:w-96 sm:h-96 bg-brand-primary rounded-t-full pointer-events-none -z-10 opacity-90 shadow-xl shadow-brand-primary/15" />

            {/* Main Chef Portrait */}
            <div className="relative w-80 h-[380px] sm:w-[420px] sm:h-[480px] overflow-visible">
              <img
                src={chefImg}
                alt="Chef holding salad"
                className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating onion sketch decorative item */}
              <div className="absolute -left-6 bottom-16 bg-white/90 backdrop-blur border border-gray-100 p-2.5 rounded-2xl shadow-lg flex items-center justify-center animate-float-slow">
                <span className="text-3xl">🧅</span>
              </div>

              {/* Floating lettuce sketch decorative item */}
              <div className="absolute right-0 top-1/6 bg-white/90 backdrop-blur border border-gray-100 p-2.5 rounded-2xl shadow-lg flex items-center justify-center animate-float-medium" style={{ animationDelay: "1s" }}>
                <span className="text-3xl">🥬</span>
              </div>
            </div>

          </div>

          {/* Right Column: Description & Overlapping Burger */}
          <div className="lg:col-span-6 space-y-8 relative">
            <div className="space-y-4">
              <span className="text-brand-primary uppercase tracking-widest text-xs sm:text-sm font-extrabold block">
                COOK WITH EXPERT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight max-w-lg">
                Find the Perfect Chefs for Your Needs
              </h2>
              <div className="w-16 h-1 bg-brand-primary rounded-full" />
            </div>

            <div className="space-y-4 text-gray-600 font-medium">
              <p className="leading-relaxed text-sm sm:text-base">
                Whether you need a private chef for an intimate dinner, a pastry specialist for a grand celebration, or line cooks for a busy commercial kitchen, we connect you with culinary experts tailored to your requirements.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Individually customized menu creation",
                  "Vetted and background-checked kitchen experts",
                  "Flexible packages suited for any event size",
                  "Hassle-free booking and payments"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle2 className="text-brand-primary flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Overlapping Burger Graphic at bottom right */}
            <div className="relative pt-6 sm:pt-0 lg:absolute lg:-bottom-24 lg:-right-16 flex justify-center sm:justify-start lg:justify-end z-20">
              <div className="group w-48 h-48 bg-white/90 backdrop-blur-md border border-gray-100 rounded-3xl p-3 shadow-2xl shadow-gray-400/20 hover:shadow-brand-primary/20 flex flex-col items-center animate-float-slow cursor-pointer transition-all duration-300" style={{ animationDelay: "2s" }}>
                <div className="w-28 h-28 rounded-2xl overflow-hidden border border-gray-100 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={burgerImg}
                    alt="Delicious burger platter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-2.5">
                  <h4 className="text-xs font-extrabold text-brand-dark group-hover:text-brand-primary transition-colors">Popular Burger Meals</h4>
                  <p className="text-[10px] text-gray-500 font-bold mt-0.5">Custom Recipes Included</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CookExpert1;
