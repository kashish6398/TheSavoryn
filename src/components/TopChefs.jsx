import chef1 from "../assets/top_chef_1.png";
import chef2 from "../assets/top_chef_2.png";
import chef3 from "../assets/top_chef_3.png";
import { Star } from "lucide-react";

function TopChefs() {
  const chefs = [
    {
      id: 1,
      name: "Oliver Bennett",
      role: "Baker Chef",
      image: chef1,
      rating: 4.9,
      shapeClass: "shape-leaf-blue bg-blue-500/80 border-blue-400",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      name: "Sophia Martina",
      role: "Chinese Chef",
      image: chef2,
      rating: 4.8,
      shapeClass: "shape-leaf-yellow bg-amber-500/80 border-amber-400",
      textColor: "text-amber-600",
    },
    {
      id: 3,
      name: "Vikram Cheng",
      role: "Indian Chef",
      image: chef3,
      rating: 5.0,
      shapeClass: "shape-leaf-red bg-brand-primary/80 border-brand-primary/60",
      textColor: "text-brand-primary",
    },
  ];

  return (
    <section className="py-24 bg-rose-50/30 relative">
      
      {/* Decorative BG element */}
      <div className="absolute top-1/4 right-0 w-24 h-24 bg-brand-primary/5 rounded-l-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-brand-primary uppercase tracking-widest text-xs sm:text-sm font-extrabold block">
            Category
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Top Rated Chefs
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto rounded-full mt-2" />
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {chefs.map((chef) => (
            <div 
              key={chef.id} 
              className="flex flex-col items-center group cursor-pointer"
            >
              
              {/* Teardrop Leaf Frame Wrapper */}
              <div className={`relative w-64 h-64 border-4 overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-500 ease-out flex items-end justify-center ${chef.shapeClass}`}>
                {/* Background color glow inside */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Chef Text Details */}
              <div className="text-center mt-6 space-y-1">
                <h3 className="text-xl font-extrabold text-gray-800 group-hover:text-brand-primary transition-colors">
                  {chef.name}
                </h3>
                
                <p className="text-sm font-semibold text-gray-500">
                  {chef.role}
                </p>

                {/* Stars/Rating */}
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-gray-600">({chef.rating})</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
            View All Chefs
          </button>
        </div>

      </div>
    </section>
  );
}

export default TopChefs;
