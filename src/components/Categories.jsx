import { ChefHat, Pizza, Soup, Cake, ChevronRight } from "lucide-react";

function Categories() {
  const categories = [
    {
      id: 1,
      title: "Local Chef",
      icon: ChefHat,
      description: "Experience authentic local taste cooked in the absolute comfort of your own home.",
      color: "from-rose-500/10 to-rose-500/5",
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50",
    },
    {
      id: 2,
      title: "Pizza Chef",
      icon: Pizza,
      description: "Savor gourmet artisanal doughs, custom toppings, and woodfired baking masteries.",
      color: "from-amber-500/10 to-amber-500/5",
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: 3,
      title: "Chinese Chef",
      icon: Soup,
      description: "Delight in wok-tossed savory street eats, authentic dim sum, and rich broths.",
      color: "from-orange-500/10 to-orange-500/5",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      id: 4,
      title: "Tasty Chef",
      icon: Cake,
      description: "Indulge in sweet luxury, delicate hand-rolled pastries, and wedding cakes.",
      color: "from-pink-500/10 to-pink-500/5",
      iconColor: "text-pink-500",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-brand-primary uppercase tracking-widest text-xs sm:text-sm font-extrabold block">
            Category
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Find chef by using category
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto rounded-full mt-2" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={cat.id} 
                className="group relative bg-linear-to-b from-brand-primary-light/50 to-white/30 border border-brand-primary/10 hover:border-brand-primary/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl shadow-gray-100 hover:shadow-brand-primary/5 translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Decorative Background Shapes */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-[100px] pointer-events-none transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Icon Wrapper */}
                <div className={`w-16 h-16 rounded-2xl ${cat.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                  <IconComponent className={`${cat.iconColor} w-8 h-8`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-primary transition-colors">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                  {cat.description}
                </p>

                {/* Link Action */}
                <a 
                  href={`#category-${cat.id}`} 
                  className="mt-auto inline-flex items-center text-sm font-extrabold text-brand-primary group-hover:text-brand-primary-hover gap-1 transition-colors"
                >
                  <span>View More</span>
                  <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Categories;
