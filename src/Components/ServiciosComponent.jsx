import logoempresa2 from '../Pages/logoempresa2.png';
import revestimientosimagen from '../Pages/revestimientosimagen.jpg';
import imagenfachadas from '../Pages/imagenfachadas.jpg';
import imageninteriores from '../Pages/imageninteriores.jpg';
import imagenaislamientos from '../Pages/imagenaislamientos.jpg';
import './ServiciosComponent.css';

export default function ServiciosComponent() {
  
  return (
  <div>
    <section className='contenedor-logo'>
      <img className='logo-servicios' src = {logoempresa2}></img>
      <h2 className='titulo-section-servicios'>Revestimientos | Fachadas | Interiores | Aislamientos</h2>
    </section>
    <div className='contenedor-boton-servicios'>
      <a href='./Contacto'><button className='boton-servicios'><b> Solicitar&nbsp;</b> Presupuesto</button></a>
    </div>    
        <div className='contenedor-modulos'>
          <article className='servicios-contenedor'>
            <h3 className='revestimientos-titulo'>Revestimientos</h3>
            <img className='imagen-revestimientos' src= {revestimientosimagen} ></img>
            <p className='texto-revestimientos'>Ofrecemos un servicio especializado en alicatado de revestimientos, garantizando acabados de alta calidad y durabilidad. Nuestro equipo de profesionales cuida cada detalle, desde la preparación de la superficie hasta la colocación final, para lograr resultados estéticos..</p>
          </article>
          <article className='servicios-contenedor'>
            <h3 className='fachadas-titulo'>Fachadas</h3>
            <img className='imagen-fachadas' src= {imagenfachadas} ></img>
            <p className='texto-fachadas'>Realizamos obras y rehabilitación de fachadas con un enfoque integral que combina seguridad, estética y eficiencia. Nuestro equipo de especialistas emplea materiales de alta calidad y técnicas avanzadas para garantizar acabados duraderos y resistentes a las condiciones climáticas.</p>
          </article>
          <article className='servicios-contenedor'>
            <h3 className='interiores-titulo'>Interiores</h3>
            <img className='imagen-interiores' src= {imageninteriores} ></img>
            <p className='texto-interiores'>Llevamos a cabo reformas de interiores creando espacios funcionales, modernos y adaptados a las necesidades de cada cliente. Nuestro equipo de profesionales se encarga de todo el proceso, desde el diseño y la planificación hasta la ejecución final, cuidando cada detalle para garantizar calidad y confort.</p>
          </article>
          <article className='servicios-contenedor'>
            <h3 className='aislamientos-titulo'>Aislamientos</h3>
            <img className='imagen-aislamientos' src= {imagenaislamientos} ></img>
            <p className='texto-aislamientos'>Ofrecemos un servicio especializado en la colocación de aislamientos, mejorando la eficiencia energética, el confort y la durabilidad de cada espacio. Trabajamos con materiales de última generación que garantizan un excelente rendimiento térmico y acústico, adaptándonos a las características de cada proyecto.</p>
          </article>
          </div>
      </div>
      );
  };