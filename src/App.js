import './scss/main.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Carousel from './components/Carousel';
import Feature from './components/Feature/Feature';
import Services from './components/Services/Services';
import Block from './components/Block';
import Index from './components/index/Index';
import Products from './components/Products';
import Customer from './components/customer/Customer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Feature/>
      <Services/>
      <Block/>
      <Index/>
      <Products/>
      <Customer/>
      <Footer/>
    </div>

  );
}

export default App;
