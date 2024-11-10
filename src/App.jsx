import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
