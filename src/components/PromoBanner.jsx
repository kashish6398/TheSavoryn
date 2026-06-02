function PromoBanner() {
  return (
    <section className="bg-brand-primary text-white py-5 relative overflow-hidden shadow-lg">
      {/* Wave Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-base sm:text-lg font-bold tracking-wide">
          Upgrade to Premium – Unlock Exclusive Features for Chefs and Industries!
        </p>
        <button className="bg-white text-brand-primary hover:bg-brand-primary-light px-6 py-2 rounded-lg font-extrabold text-sm border-2 border-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-black/5 cursor-pointer">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}

export default PromoBanner;
