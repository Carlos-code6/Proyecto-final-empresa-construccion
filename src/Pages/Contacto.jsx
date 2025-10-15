import FormularioContacto from '../Components/Formulario';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Delegaciones from '../Components/Delegaciones';
import RRSS from '../Components/RRSS';
import Cookies from '../Components/Cookies';

export default function Contacto() {
  
  return (
    <div>
        <Cookies></Cookies>
      <header>
        <Header></Header>
      </header>
      <section>
        <FormularioContacto></FormularioContacto>
      </section>
      <article>
        <RRSS></RRSS>
      </article>
      <article>
        <Delegaciones></Delegaciones>
      </article>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
