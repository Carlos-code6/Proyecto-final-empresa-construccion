import Cookies from "../Components/Cookies";
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import './Revestimientos.css';

import Revestimientos1 from './revestimientos1.jpg';
import Revestimientos2 from './revestimientos2.jpg';
import Revestimientos3 from './revestimientos3.jpg';
import Revestimientos4 from './revestimientos4.jpg';
import Revestimientos5 from './revestimientos5.jpg';
import Revestimientos6 from './revestimientos6.jpg';


export default function Revestimientos() {
    return (
    <div>
        <div>
            <Cookies></Cookies>
        </div>
        <header>
            <Header></Header>
        </header>
            <main className="cabecera-revestimientos">
                <span className='banner-revestimientos'>Envíos gratis España, en compras de +200€</span>
                <h1 className="titulo-revestimientos">REVESTIMIENTOS</h1>
                <p className='texto-revestimientos'>En CONSTRUCAR S.L. contamos con una amplia variedad en revestimientos, tanto para interior como exterior. Disponemos de los mejores proveedores del mercado en la actualidad.</p> 
                
            </main>
            <article className='categorias-revestimientos'>
                <div className='card-revestimientos'>   
                    <img className='imagenes-categoria-revestimientos' src= {Revestimientos1}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Premiere</b></span> <br></br><br></br>                            
        
                            <b>Medidas</b>: 30cm x 60cm. <br></br>
                            <b>Material</b>: Porcelánico. <br></br>
                            <b>Superficie</b>: Pared. <br></br>
                            <a href='./Contacto'><button className='boton-revestimientos'>Comprar</button></a>
                            </p> 
                            <p className='precio-revestimientos'>15€/m2</p>
                        </div> 
                </div> 
                <div className='card-revestimientos'>   
                    <img className='imagenes-categoria-revestimientos' src= {Revestimientos2}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Aura</b></span> <br></br><br></br>                            
                            
                            <b>Medidas</b>: 25cm x 50cm. <br></br>
                            <b>Material</b>: Gres. <br></br>
                            <b>Superficie</b>: Pared.<br></br>
                            <a href='./Contacto'><button className='boton-revestimientos'>Comprar</button></a>
                            </p>
                            <p className='precio-revestimientos'>9€/m2</p>
                        </div> 
                </div> 
                <div className='card-revestimientos'>   
                    <img className='imagenes-categoria-revestimientos' src= {Revestimientos3}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Tabit</b></span> <br></br><br></br>                            
                            
                            <b>Medidas</b>: 20cm x 40cm. <br></br>
                            <b>Material</b>: Gres. <br></br>
                            <b>Superficie</b>: Pared.<br></br>
                            <a href='./Contacto'><button className='boton-revestimientos'>Comprar</button></a>
                            </p>
                            <p className='precio-revestimientos'>9€/m2</p>
                        </div> 
                </div> 
                <div className='card-revestimientos'>   
                    <img className='imagenes-categoria-revestimientos' src= {Revestimientos4}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Titanio</b></span> <br></br><br></br>                            
                            
                            <b>Medidas</b>: 30cm x 90cm. <br></br>
                            <b>Material</b>: Pasta blanca. <br></br>
                            <b>Superficie</b>: Pared.<br></br>
                            <a href='./Contacto'><button className='boton-revestimientos'>Comprar</button></a>
                            </p> 
                            <p className='precio-revestimientos'>12€/m2</p>
                        </div> 
                </div> 
                <div className='card-revestimientos'>   
                    <img className='imagenes-categoria-revestimientos' src= {Revestimientos5}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Lyon</b></span> <br></br><br></br>                            
                            
                            <b>Medidas</b>: 30cm x 90cm. <br></br>
                            <b>Material</b>: Pasta blanca. <br></br>
                            <b>Superficie</b>: Pared. <br></br>
                            <a href='./Contacto'><button className='boton-revestimientos'>Comprar</button></a>
                            </p>
                            <p className='precio-revestimientos'>14€/m2</p>
                        </div> 
                </div> 
                <div className='card-revestimientos'>   
                    <img className='imagenes-categoria-revestimientos' src= {Revestimientos6}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Purity</b></span> <br></br><br></br>                            
                            
                            <b>Medidas</b>: 30cm x 60cm. <br></br>
                            <b>Material</b>: Gres. <br></br>
                            <b>Superficie</b>: Pared.<br></br>
                            <a href='./Contacto'><button className='boton-revestimientos'>Comprar</button></a>
                            </p>
                            <p className='precio-revestimientos'>10€/m2</p>
                        </div> 
                </div> 
            </article>

                        <footer>
                            <Footer />
                        </footer>
    </div>
    )


}