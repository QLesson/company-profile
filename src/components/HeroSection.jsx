import { Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-section d-flex flex-column justify-content-center align-items-center "
    >
      <div className="container text-center text-white ">
        <h1>QLesson</h1>
        <h2>Success Future Together</h2>
      </div>

      <Button>About Us</Button>
    </section>
  );
};

export default HeroSection;
