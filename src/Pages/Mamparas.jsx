import Mamparas1 from './mamparas1.jpg';
import Mamparas2 from './mamparas2.jpg';
import Mamparas3 from './mamparas3.jpg';
import Mamparas4 from './mamparas4.jpg';
import Mamparas5 from './mamparas5.jpg';
import Mamparas6 from './mamparas6.jpg';

import Cookies from "../Components/Cookies";
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import './Mamparas.css';

export default function Mamparas() {
    return (
    <div>
        <div>
            <Cookies></Cookies>
        </div>
        <header>
            <Header></Header>
        </header>
            <main className="cabecera-mamparas">
                <span className='banner-mamparas'>Envíos gratis España, en compras de +200€</span>
                <h1 className="titulo-mamparas">MAMPARAS</h1>
                <p className='texto-mamparas'>En CONSTRUCAR S.L. contamos con una amplia variedad en mamparas (correderas, cristal fijo, abatibles y plegables). Disponemos de los mejores proveedores del mercado en la actualidad.</p> 
                
            </main>
            <article className='categorias-mamparas'>
                <div className='card-mamparas'>   
                    <img className='imagenes-categoria-mamparas' src= {Mamparas1}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Perla</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 1,60cm x 80cm. <br></br>
                            <b>Material</b>: Aluminio. <br></br>
                            <b>Tipo</b>: Corredera. <br></br>
                            <a href='./Contacto'><button className='boton-mamparas'>Comprar</button></a>
                            </p> 
                            <p className='precio-mamparas'>380€</p>
                        </div> 
                </div> 
                <div className='card-mamparas'>   
                    <img className='imagenes-categoria-mamparas' src= {Mamparas2}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Dora</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 0,90cm x 80cm. <br></br>
                            <b>Material</b>: Aluminio. <br></br>
                            <b>Tipo</b>: Corredera.<br></br>
                            <a href='./Contacto'><button className='boton-mamparas'>Comprar</button></a>
                            </p>
                            <p className='precio-mamparas'>190€</p>
                        </div> 
                </div> 
                <div className='card-mamparas'>   
                    <img className='imagenes-categoria-mamparas' src= {Mamparas3}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Denis</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 1,20cm x 70cm. <br></br>
                            <b>Material</b>: Aluminio. <br></br>
                            <b>Tipo</b>: Corredera.<br></br>
                            <a href='./Contacto'><button className='boton-mamparas'>Comprar</button></a>
                            </p>
                            <p className='precio-mamparas'>240€</p>
                        </div> 
                </div> 
                <div className='card-mamparas'>   
                    <img className='imagenes-categoria-mamparas' src= {Mamparas4}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Luna</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 1,90cm x 80cm. <br></br>
                            <b>Material</b>: Aluminio. <br></br>
                            <b>Tipo</b>: Abatible.<br></br>
                            <a href='./Contacto'><button className='boton-mamparas'>Comprar</button></a>
                            </p> 
                            <p className='precio-mamparas'>105€</p>
                        </div> 
                </div> 
                <div className='card-mamparas'>   
                    <img className='imagenes-categoria-mamparas' src= {Mamparas5}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Europa</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 1,30cm x 70cm. <br></br>
                            <b>Material</b>: Aluminio. <br></br>
                            <b>Tipo</b>: Abatible. <br></br>
                            <a href='./Contacto'><button className='boton-mamparas'>Comprar</button></a>
                            </p>
                            <p className='precio-mamparas'>550€</p>
                        </div> 
                </div> 
                <div className='card-mamparas'>   
                    <img className='imagenes-categoria-mamparas' src= {Mamparas6}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Bali</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 1,70cm x 70cm. <br></br>
                            <b>Material</b>: Aluminio. <br></br>
                            <b>Tipo</b>: Plegable.<br></br>
                            <a href='./Contacto'><button className='boton-mamparas'>Comprar</button></a>
                            </p>
                            <p className='precio-mamparas'>410€</p>
                        </div> 
                </div> 
            </article>
                        <footer>
                            <Footer />
                        </footer>
    </div>
    )


}