import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Versprechen from "./components/Versprechen";
import PiecesGallery from "./components/PiecesGallery";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Trenner from "./components/Trenner";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Trenner />
      <Versprechen />
      <PiecesGallery />
      <Footer />
    </main>
  );
}

export default App;
