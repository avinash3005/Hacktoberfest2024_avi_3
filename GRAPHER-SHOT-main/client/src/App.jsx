import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Form from "./components/Form";
import Pricelist from "./components/Pricelist";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";
import WhatsAppButton from "./components/reusableComponents/WhatsAppButton";

function App() {
  return (
    <>
    <WhatsAppButton />
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Portfolio></Portfolio>
      <Why></Why>
      <Testimonials></Testimonials>
      <Pricelist></Pricelist>
      <Form></Form>
      <div className="md:-mt-20 -mt-8">
        <Footer />
      </div>
    </>
  );
}

export default App;
