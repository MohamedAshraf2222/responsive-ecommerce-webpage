import Header from './components/Header';
import Footer from './Pages/Footer/Footer';
import Hero from './Pages/Hero/Hero';
import Products from './Pages/Products/Products';
import Slider from './Pages/Slider/Slider';
import Testimonials from './Pages/Testimonials/Testimonials';
import Virtual from './Pages/Virtual/Virtual';
import './App.css';
function App() {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
