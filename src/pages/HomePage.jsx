import AboutUsSection from "../components/AboutUsSection";
import Activities from "../components/Activities";
import ContactUsSection from "../components/ContactUsSection";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <Activities />
      <ContactUsSection />
    </>
  );
};

export default HomePage;
