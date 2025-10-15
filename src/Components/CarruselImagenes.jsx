import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarruselImagenes.css";
import { Carousel } from "react-responsive-carousel";
import ofertaRevestimientos from "./Rebajas3.png";
import imagenTransporte from "./transporte-portada.png";
import imagenAlmacen from "./almacen-portada.png";


export default function CarruselImagenes() {
  return ( 
    <div className="carrusel-contenedor">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={600}
      >
        <div>
          <img src ={imagenTransporte} alt="Imagen 1" />
          
        </div>
         <div>
          <img src ={imagenAlmacen} alt="Imagen 2" />
          
        </div>
        <div>
          <img src ={ofertaRevestimientos} alt="Imagen 3" />
          
        </div>
        
      </Carousel>
    </div>
  );
}