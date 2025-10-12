import Background from "./components/background";
import Timer from "./components/Timer";
import About from "./components/About"; 
import Faq from "./components/Faq";
import Explore from "./components/Explore";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Shades from "./components/Shades";
export default function App() {
  return (
    <div className="App">
      <Background />
      <Timer />
      <Shades/>
      <About />
     
      <Explore />
      <Faq />
      <Map />        
      <Footer />
    </div>
  );
}