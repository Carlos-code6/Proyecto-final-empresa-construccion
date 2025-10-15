import Header from '../Components/Header';
import './NuestrasObras.css';
import Footer from '../Components/Footer';
import Delegaciones from '../Components/Delegaciones';
import Cookies from '../Components/Cookies';

import galeria1 from './galeria1.jpeg';
import galeria2 from './galeria2.jpg';
import galeria3 from './galeria3.jpg';
import galeria4 from './galeria4.jpg';

import hospital1 from './hospital1.jpeg';
import hospital2 from './hospital2.jpg';
import hospital3 from './hospital3.png';
import hospital4 from './hospital4.jpg';

import estadio1 from './estadio1.jpg';
import estadio2 from './estadio2.webp';
import estadio3 from './estadio3.jpg';
import estadio4 from './estadio4.jpg';

const chalet = [galeria1, galeria2, galeria3, galeria4];
const hospitales = [hospital1, hospital2, hospital3, hospital4]
const estadios = [estadio1, estadio2, estadio3, estadio4]

const Galeria = () => {
    return (
    <div>
            <Cookies></Cookies>
        <header>
            <Header></Header>
        </header>
        <section>
            <h1 className='titulo-nuestrasobras'>Últimas obras realizadas</h1>
            <h2 className='titulo-obras'>Construcción de chalet en Los Remedios (Sevilla).</h2>
            <p className='texto-obras'> Presentamos un exclusivo chalet de lujo en el barrio de Los Remedios (Sevilla), diseñado para ofrecer el máximo confort y distinción. Con acabados de alta gama, amplias estancias y espacios exteriores únicos, esta vivienda combina modernidad, elegancia y funcionalidad en una de las zonas más prestigiosas de la ciudad. Un hogar único que refleja calidad y estilo en cada detalle.</p>
        </section>
        <div className='galeria-contenedor'>
            {chalet.map((src, index) => (
                <img key={index} src={src} alt={`Imagenes-chalet ${index + 1}`} className="imagenes-galeria" />
            )) }
        </div>
            <section>
            <h2 className='titulo-obras'>Reforma del hospital Reina Sofía (Córdoba).</h2>
            <p className='texto-obras'> Hemos desarrollado la reforma del Hospital Reina Sofía (Córdoba), un proyecto enfocado en la modernización de sus instalaciones para mejorar la atención a pacientes y profesionales. La intervención incluyó la renovación de espacios interiores, la actualización de sistemas de climatización y eficiencia energética, así como la optimización de áreas técnicas y asistenciales.</p>
        </section>
        <div className='galeria-contenedor'>
            {hospitales.map((src, index) => (
                <img key={index} src={src} alt={`Imagenes-hospital ${index + 1}`} className="imagenes-galeria" />
            )) }
      </div>
            <section>
            <h2 className='titulo-obras'>Construcción nuevo estadio de fútbol (Madrid).</h2>
            <p className='texto-obras'> Participamos en la construcción del nuevo estadio de fútbol en Madrid, un proyecto de gran envergadura diseñado para convertirse en un referente deportivo y arquitectónico. La obra incluyó estructuras de última generación, instalaciones modernas y espacios versátiles para garantizar la máxima comodidad de jugadores, aficionados y personal.</p>
        </section>
        <div className='galeria-contenedor'>
            {estadios.map((src, index) => (
                <img key={index} src={src} alt={`Imagenes-estadio ${index + 1}`} className="imagenes-galeria" />
            )) }
        </div>
       
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    )
    
}
export default Galeria;