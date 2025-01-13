import Navbar from './components/Navbar';
import Hero from './components/Hero';
import image from './assets/nav/closeIcon.png';
import About from './components/About';

function App() {
  return (
    <div className="bg-dark2 w-full h-full overflow-hidden font-outfit">
      <Navbar />
      <Hero />
      <About />
      {/* <img src={image} alt="" /> */}
    </div>
  );
}

export default App;
