import Header from '../Components/Header';
import ServiciosComponent from '../Components/ServiciosComponent.jsx';
import Footer from '../Components/Footer';
import Cookies from '../Components/Cookies';
import './Servicios.css';

export default function Servicios() {
  
  return (
  <div>
      <Cookies></Cookies>
    <header>
      <Header></Header>
    </header>
    <section>
      <ServiciosComponent></ServiciosComponent>
    </section>
    <footer>
      <Footer></Footer>
    </footer>
    
    </div>
  );
};
