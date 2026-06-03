import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChefHat, UtensilsCrossed, BookOpen, Handshake, Target, Compass } from "lucide-react";

function About() {
  const contributors = [
    {
      id: 1,
      name: "Neha bansal",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 2,
      name: "Neha bansal",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 3,
      name: "Neha bansal",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 4,
      name: "Neha bansal",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 5,
      name: "Neha bansal",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 6,
      name: "Neha bansal",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white pt-20">
      <Navbar />

      <main className="grow">
        {/* Hero Section */}
        <section className="relative h-[650px] w-full flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1920&q=80"
              alt="Chefs Cooking"
              className="w-full h-full object-cover"
            />
            {/* White overlay matching mockup */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight tracking-tight max-w-3xl mx-auto">
              Bridging Culinary Talent with Industry Needs
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium">
              Empowering chefs and industries to connect and grow.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold px-8 py-4 rounded-full shadow-lg shadow-brand-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                Explore Opportunity
              </button>
              <button className="w-full sm:w-auto bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary-light font-extrabold px-8 py-4 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                Find Chefs
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <span className="text-sm font-bold text-brand-primary tracking-[0.2em] uppercase">
            Why Choose Us?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mt-3 mb-16">
            What Sets Us Apart?
          </h2>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Tailored Matches */}
            <div className="bg-gradient-to-b from-[#FFF5F2] to-white border border-[#FFF5F2] rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-6 border border-brand-primary/10 group-hover:scale-110 transition-transform duration-300">
                <ChefHat className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Tailored Matches</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Automated filters to find the perfect chef or business based on skills, location, and preferences.
              </p>
            </div>

            {/* Card 2: Growth Opportunities */}
            <div className="bg-gradient-to-b from-[#FFF5F2] to-white border border-[#FFF5F2] rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-6 border border-brand-primary/10 group-hover:scale-110 transition-transform duration-300">
                <UtensilsCrossed className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Growth Opportunities</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Chefs and industries can customize their profile and reputations throughout our platform.
              </p>
            </div>

            {/* Card 3: Seamless Process */}
            <div className="bg-gradient-to-b from-[#FFF5F2] to-white border border-[#FFF5F2] rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-6 border border-brand-primary/10 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Seamless Process</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Streamlined communication, hiring, and collaboration processes.
              </p>
            </div>

            {/* Card 4: Trusted Network */}
            <div className="bg-gradient-to-b from-[#FFF5F2] to-white border border-[#FFF5F2] rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-6 border border-brand-primary/10 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Trusted Network</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A community of verified professionals and businesses to ensure quality and trust.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="bg-brand-primary-light py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Title Column */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight">
                Our <span className="text-brand-primary">"Mission</span> and <span className="text-brand-primary">Vision"</span>
              </h2>
            </div>

            {/* Right Cards Column */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white rounded-3xl border border-brand-primary/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-primary-light flex items-center justify-center mb-6">
                  <ChefHat className="w-6 h-6 text-brand-primary" />
                </div>
                <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                  "To empower chefs and industries by creating meaningful partnerships through a user-friendly platform."
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-3xl border border-brand-primary/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-primary-light flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-brand-primary" />
                </div>
                <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                  "To be the leading global platform that transforms how chefs and industries connect and collaborate."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-16">
            Our Contributors
          </h2>

          {/* Grid of Contributors */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-5xl mx-auto">
            {contributors.map((member) => (
              <div key={member.id} className="flex flex-col items-center group">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-5 border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-500 text-sm font-semibold">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
