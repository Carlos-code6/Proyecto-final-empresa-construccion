import './ServiciosCancelado.css';
import Fachada from "../Pages/galeria3.jpg";
import Aislamientos from "../Pages/imagenaislamientos.jpg";
import Interiores from "../Pages/imageninteriores.jpg";
import Alicatados from "../Pages/revestimientosimagen.jpg";


export default function Servicios () {
    return (
        
        <section className="obra-container">
            <h1 className="Titulo-servicios">Nuestros servicios de construcción</h1>
            <div>
                    <h2 className='subtitulo-servicios'>Fachadas - Aislamientos - Interiores - Alicatados</h2>
                </div>
            <div className="box1-obra">
                <img className="fachada" src= {Fachada} alt="fachada"></img>
                <img className="aislamientos" src= {Aislamientos} alt="aislamientos"></img>
                <img className="interiores" src= {Interiores} alt="interiores"></img>
                <img className="alicatados" src= {Alicatados} alt="alicatados"></img>
            </div>      
            
        </section>
        

    )
}