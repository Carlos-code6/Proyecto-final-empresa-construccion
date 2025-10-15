import Header from '../Components/Header';
import HistoriaEmpresa from '../Components/HistoriaEmpresa';
import "./QuienesSomos.css"
import almacenqs from "./almacenqs.png";
import Footer from '../Components/Footer';
import Cookies from '../Components/Cookies';
export default function QuienesSomos() {
  
  return (
  <div>
      <Cookies></Cookies>
    <header>
      <Header />
    </header>

      <section>
        
           
          <img className="imagen-principal" src= {almacenqs} alt="Portada-novedades"/>
      </section>
      <article>
      <HistoriaEmpresa></HistoriaEmpresa>
      </article>
      <article className='banner-qs'>
           3 Tiendas | E-commerce | Garantía | +6.000 clientes 
      </article>
        <p className='texto-objetivos'>Nuestros objetivos de facturación para los próximos cinco años se enfocan en lograr un crecimiento sostenido del 15% anual, alcanzando el doble de nuestra facturación actual al término del período. Para ello, impulsaremos la diversificación de proyectos, la optimización de procesos y la apertura de nuevos mercados que fortalezcan nuestra posición en el sector de la construcción.</p>           
            <footer>
              <Footer></Footer>
            </footer>
  </div>
  );
};

