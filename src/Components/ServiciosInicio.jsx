import './ServiciosInicio.css';
import revestimientosimagen from '../Pages/revestimientosimagen.jpg';
import imagenfachadas from '../Pages/imagenfachadas.jpg';
import imageninteriores from '../Pages/imageninteriores.jpg';
import imagenaislamientos from '../Pages/imagenaislamientos.jpg';


export default function ServiciosInicio() {
  
  return (
    <div>
        <h1 className='titulo-componente'> ¿Qué servicios de obra ofrecemos? </h1>
<div className='contenedor-modulos'>
      <article className='servicios-contenedores'>
        <h3 className='revestimientos-titulo'>Revestimientos</h3>
        <img className='imagen-revestimientos' src= {revestimientosimagen} ></img>
        <p className='texto-revestimientos'>Ofrecemos un servicio especializado en alicatado de revestimientos, garantizando acabados de alta calidad y durabilidad. <br></br><span className='enlace-productos'><a href="/Servicios" target="/blank">Mas info.</a></span></p>
      </article>
      <article className='servicios-contenedores'>
        <h3 className='fachadas-titulo'>Fachadas</h3>
        <img className='imagen-fachadas' src= {imagenfachadas} ></img>
        <p className='texto-fachadas'>Realizamos obras y rehabilitación de fachadas con un enfoque integral que combina seguridad, estética y eficiencia. <span className='enlace-productos'><a href="/Servicios" target="/blank">Mas info.</a></span></p>
      </article>
      <article className='servicios-contenedores'>
        <h3 className='interiores-titulo'>Interiores</h3>
        <img className='imagen-interiores' src= {imageninteriores} ></img>
        <p className='texto-interiores'>Llevamos a cabo reformas de interiores creando espacios funcionales, modernos y adaptados a las necesidades de cada cliente. <span className='enlace-productos'><a href="/Servicios" target="/blank">Mas info.</a></span></p>
      </article>
      <article className='servicios-contenedores'>
        <h3 className='aislamientos-titulo'>Aislamientos</h3>
        <img className='imagen-aislamientos' src= {imagenaislamientos} ></img>
        <p className='texto-aislamientos'>Ofrecemos un servicio especializado en la colocación de aislamientos, mejorando la eficiencia energética, el confort y la durabilidad de cada espacio. <span className='enlace-productos'><a href="/Servicios" target="/blank">Mas info.</a></span></p>
      </article>
      </div>
      </div>
      );
    };