import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PromoBanner from "../components/PromoBanner";
import Categories from "../components/Categories";
import CookExpert1 from "../components/CookExpert1";
import TopChefs from "../components/TopChefs";
import CookExpert2 from "../components/CookExpert2";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Page Content */}
      <main className="flex-grow">
        <Hero />
        <PromoBanner />
        <Categories />
        <CookExpert1 />
        <TopChefs />
        <CookExpert2 />
        <Contact />
      </main>
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default Home;