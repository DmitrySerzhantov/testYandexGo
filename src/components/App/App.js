import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Promo from '../Promo/Promo';
import Acquire from '../Acquire/Acquire';


function App() {
  return (
    <div className='App'>
      <div className='App__conainer'>
        <Header />
        <About />
        <Promo />
        <Acquire />
        <Footer />
      </div>
    </div>
  );
}

export default App;
