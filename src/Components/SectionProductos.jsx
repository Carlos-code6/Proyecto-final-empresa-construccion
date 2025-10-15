import "./SectionProductos.css";
import Revestimientos from "./REVESTIMIENTOS.png";
import Pavimentos from "./PAVIMENTOS.png";
import Platosducha from "./BAÑERAS.png"
import Mamparas from "./MAMPARAS.png";
const sectionInicio = () => {
    return (
        
        <section className="sectionContainer">
            <h1 className="Titulo-productos-inicio">Nuestro catálogo de productos</h1>
            <div className="boxes1">
                <a href="/Revestimientos" target="_blank" rel="noopener noreferrer"><img className="imagenRevestimientos" src= {Revestimientos} alt="Catalogo"></img></a>
                <a href="/Pavimentos" target="_blank" rel="noopener noreferrer"><img className="imagenPavimentos" src= {Pavimentos} alt="Catalogo"></img></a>
            </div>
            <div className="boxes2">
                <a href="/Baneras" target="_blank" rel="noopener noreferrer"><img className="imagenBaneras" src= {Platosducha} alt="Catalogo"></img></a>
                <a href="/Mamparas" target="_blank" rel="noopener noreferrer"><img className="imagenMamparas" src= {Mamparas} alt="Catalogo"></img></a>
            </div>
        </section>
    )

}
export default sectionInicio;