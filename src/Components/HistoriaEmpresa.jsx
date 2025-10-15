import './HistoriaEmpresa.css';
import PrimerasObras from './PrimerasObras.jpg';
import NuevoAlmacen from './nuevo-almacen.jpg';
import Sello from './Sello-calidad.png';
import Transporte from './transporte-distincion.png';
import EficienciaEconomica from './eficiencia-economica.png';


export default function HistoriaEmpresa() {
  
  return (
    <div>
      <h1 className="titulo-historia"> Nuestra Historia </h1>
        <p className='texto-historia'>Con más de 25 años de experiencia, hemos construido una trayectoria sólida en el sector de la venta de productos y servicios para la construcción. Desde nuestros inicios, nos hemos dedicado a ofrecer soluciones de calidad que acompañen a profesionales, empresas y particulares en cada proyecto, siempre con el compromiso de brindar confianza, asesoría especializada y atención cercana.
          <img className='imagen-PrimerasObras' src= {PrimerasObras} alt='Primeras-obras'></img>
            
            Gracias al esfuerzo de nuestro equipo y la confianza de nuestros clientes, hoy contamos con tres tiendas físicas, donde combinamos una amplia variedad de materiales y productos con el respaldo de un servicio personalizado. 

            
      <br></br>
            Nuestra historia es la de una empresa que ha crecido de la mano de la comunidad, adaptándose a los cambios del mercado y manteniendo intactos los valores que nos distinguen: calidad, compromiso y experiencia.

            Seguimos mirando hacia el futuro, innovando y expandiendo nuestro catálogo, para continuar siendo el aliado de confianza en cada obra, grande o pequeña.
        </p>
            <img className='imagen-nuevo-almacen' src= {NuevoAlmacen} alt='Nuevo-almacén'></img>
        <h2 className='titulo-mision'>Misión Construcar S.L.</h2>
          <p className='texto-historia'>Nuestra misión es diseñar y ejecutar proyectos de construcción con altos estándares de calidad, seguridad e innovación, contribuyendo al desarrollo sostenible de las comunidades y generando valor para nuestros clientes a través de soluciones eficientes y responsables.</p>
      <article className='distincion-calidad'>
        <img className='imagen-sello-calidad' src = {Sello} alt= "Sello-calidad"></img>
        <p className='texto-sello'>Este certificado de calidad reconoce a CONSTRUCAR S.L. por cumplir con los más altos estándares en la gestión de sus procesos constructivos, garantizando obras seguras, eficientes y sostenibles.</p>
      </article>
      <article className='distincion-transporte'>
        <img className='imagen-transporte-distincion' src= {Transporte} alt= "Transporte-Construcar"></img>
        <p className='texto-transporte'>Contamos con transporte propio que nos permite optimizar tiempos, asegurar la entrega puntual de materiales y garantizar mayor eficiencia en cada proyecto de construcción.</p>
      </article>
      <article className='distincion-eficiencia'>
        <img className='imagen-eficiencia' src= {EficienciaEconomica} alt= "Eficiencia-Construcar"></img>
        <p className='texto-eficiencia'>Nuestra empresa se distingue por su eficiencia económica, optimizando recursos y procesos para ofrecer soluciones constructivas de alta calidad con una inversión responsable y rentable.</p>
      </article>
    </div>

      );
;}