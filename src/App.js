import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Body ship="Free shipping" cart="Add to Cart"/>
    <Footer/>
    </>
  );
}

export default App;
