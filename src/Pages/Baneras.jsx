import Banera1 from './portada-banera.jpg';
import Banera2 from './Banera2.jpg';
import Banera3 from './banera3.jpg';
import Banera4 from './banera4.jpg';
import Banera5 from './banera5.jpg';
import Banera6 from './banera6.jpg';

import './Baneras.css';
import Header from '../Components/Header';
import Cookies from '../Components/Cookies';
import Footer from '../Components/Footer';




export default function Baneras() {
    return (
    <div>
        <div>
            <Cookies></Cookies>
        </div>
        <header>
            <Header></Header>
        </header>
            <main className="cabecera-baneras">
                <span className='banner-banera'>Envíos gratis España, en compras de +200€</span>
                <h1 className="titulo-baneras">BAÑERAS</h1>
                <p className='texto-baneras'>En CONSTRUCAR S.L. contamos con una amplia variedad en bañeras, platos de ducha y accesorios para el baño. Disponemos de los mejores proveedores del mercado en la actualidad.</p> 
                
            </main>
            <article className='categorias-baneras'>
                <div className='card-banera'>   
                    <img className='imagenes-categoria-baneras' src= {Banera1}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Roma</b></span> <br></br><br></br>                            
                            <b>Color</b>: Blanco <br></br>
                            <b>Medidas</b>: 1,60cm x 80cm. <br></br>
                            <b>Material</b>: Cerámica. <br></br>
                            <b>Tipo</b>: Bañera. <br></br>
                            <a href='./Contacto'><button className='boton-banera'>Comprar</button></a>
                            </p> 
                            <p className='precio-banera'>180€</p>
                        </div> 
                </div> 
                <div className='card-banera'>   
                    <img className='imagenes-categoria-baneras' src= {Banera6}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Madrid</b></span> <br></br><br></br>                            
                            <b>Color</b>: Blanco <br></br>
                            <b>Medidas</b>: 0,90cm x 80cm. <br></br>
                            <b>Material</b>: Resina. <br></br>
                            <b>Tipo</b>: Plato de ducha.<br></br>
                            <a href='./Contacto'><button className='boton-banera'>Comprar</button></a>
                            </p>
                            <p className='precio-banera'>120€</p>
                        </div> 
                </div> 
                <div className='card-banera'>   
                    <img className='imagenes-categoria-baneras' src= {Banera5}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Milán</b></span> <br></br><br></br>                            
                            <b>Color</b>: Blanco <br></br>
                            <b>Medidas</b>: 1,20cm x 70cm. <br></br>
                            <b>Material</b>: Resina. <br></br>
                            <b>Tipo</b>: Plato de ducha.<br></br>
                            <a href='./Contacto'><button className='boton-banera'>Comprar</button></a>
                            </p>
                            <p className='precio-banera'>165€</p>
                        </div> 
                </div> 
                <div className='card-banera'>   
                    <img className='imagenes-categoria-baneras' src= {Banera4}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Huelva</b></span> <br></br><br></br>                            
                            <b>Color</b>: Blanco <br></br>
                            <b>Medidas</b>: 1,90cm x 80cm. <br></br>
                            <b>Material</b>: Cerámica. <br></br>
                            <b>Tipo</b>: Bañera.<br></br>
                            <a href='./Contacto'><button className='boton-banera'>Comprar</button></a>
                            </p> 
                            <p className='precio-banera'>105€</p>
                        </div> 
                </div> 
                <div className='card-banera'>   
                    <img className='imagenes-categoria-baneras' src= {Banera3}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Sevilla</b></span> <br></br><br></br>                            
                            <b>Color</b>: Blanco <br></br>
                            <b>Medidas</b>: 1,30cm x 70cm. <br></br>
                            <b>Material</b>: Cerámica. <br></br>
                            <b>Tipo</b>: Bañera. <br></br>
                            <a href='./Contacto'><button className='boton-banera'>Comprar</button></a>
                            </p>
                            <p className='precio-banera'>150€</p>
                        </div> 
                </div> 
                <div className='card-banera'>   
                    <img className='imagenes-categoria-baneras' src= {Banera2}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Oviedo</b></span> <br></br><br></br>                            
                            <b>Color</b>: Blanco <br></br>
                            <b>Medidas</b>: 1,70cm x 70cm. <br></br>
                            <b>Material</b>: Cerámica. <br></br>
                            <b>Tipo</b>: Bañera.<br></br>
                            <a href='./Contacto'><button className='boton-banera'>Comprar</button></a>
                            </p>
                            <p className='precio-banera'>210€</p>
                        </div> 
                </div> 
            </article>

                        <footer>
                            <Footer />
                        </footer>
    </div>
    )


}