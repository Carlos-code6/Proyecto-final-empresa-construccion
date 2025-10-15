import Pavimentos1 from './pavimentos1.jpg';
import Pavimentos2 from './pavimentos2.jpg';
import Pavimentos3 from './pavimentos3.jpg';
import Pavimentos4 from './pavimentos4.jpg';
import Pavimentos5 from './pavimentos5.jpg';
import Pavimentos6 from './pavimentos6.jpg';

import Cookies from "../Components/Cookies"
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import './Pavimentos.css';



export default function Pavimentos() {
    return (
    <div>
        <div>
            <Cookies></Cookies>
        </div>
        <header>
            <Header></Header>
        </header>
            <main className="cabecera-pavimentos">
                <span className='banner-pavimentos'>Envíos gratis España, en compras de +200€</span>
                <h1 className="titulo-pavimentos">PAVIMENTOS</h1>
                <p className='texto-pavimentos'>En CONSTRUCAR S.L. contamos con una amplia variedad en pavimentos. Porcelánicos, gres... Disponemos de los mejores proveedores del mercado en la actualidad.</p> 
                
            </main>
            <article className='categorias-pavimentos'>
                <div className='card-pavimentos'>   
                    <img className='imagenes-categoria-pavimentos' src= {Pavimentos1}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Bolton</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 60cm x 60cm. <br></br>
                            <b>Material</b>: Porcelánico. <br></br>
                            <b>Superficie</b>: Suelo. <br></br>
                            <a href='./Contacto'><button className='boton-pavimentos'>Comprar</button></a>
                            </p> 
                            <p className='precio-pavimentos'>18€/m2</p>
                        </div> 
                </div> 
                <div className='card-pavimentos'>   
                    <img className='imagenes-categoria-pavimentos' src= {Pavimentos2}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Tucson</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 45cm x 45cm. <br></br>
                            <b>Material</b>: Gres. <br></br>
                            <b>Superficie</b>: Suelo.<br></br>
                            <a href='./Contacto'><button className='boton-pavimentos'>Comprar</button></a>
                            </p>
                            <p className='precio-pavimentos'>12€/m2</p>
                        </div> 
                </div> 
                <div className='card-pavimentos'>   
                    <img className='imagenes-categoria-pavimentos' src= {Pavimentos3}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Chroma</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 1,20cm x 20cm. <br></br>
                            <b>Material</b>: Porcelánico. <br></br>
                            <b>Superficie</b>: Suelo.<br></br>
                            <a href='./Contacto'><button className='boton-pavimentos'>Comprar</button></a>
                            </p>
                            <p className='precio-pavimentos'>16€/m2</p>
                        </div> 
                </div> 
                <div className='card-pavimentos'>   
                    <img className='imagenes-categoria-pavimentos' src= {Pavimentos4}></img>
                        <div className='texto-cards'>
                            <p><span className='titulo-cards'><b>Modelo Elixir</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 75cm x 75cm. <br></br>
                            <b>Material</b>: Porcelánico. <br></br>
                            <b>Superficie</b>: Suelo.<br></br>
                            <a href='./Contacto'><button className='boton-pavimentos'>Comprar</button></a>
                            </p> 
                            <p className='precio-pavimentos'>24€/m2</p>
                        </div> 
                </div> 
                <div className='card-pavimentos'>   
                    <img className='imagenes-categoria-pavimentos' src= {Pavimentos5}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Moulin</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 45cm x 45cm. <br></br>
                            <b>Material</b>: Gres. <br></br>
                            <b>Superficie</b>: Suelo. <br></br>
                            <a href='./Contacto'><button className='boton-pavimentos'>Comprar</button></a>
                            </p>
                            <p className='precio-pavimentos'>9€/m2</p>
                        </div> 
                </div> 
                <div className='card-pavimentos'>   
                    <img className='imagenes-categoria-pavimentos' src= {Pavimentos6}></img>
                        <div className='texto-cards'>   
                            <p><span className='titulo-cards'><b>Modelo Bierzo</b></span> <br></br><br></br>                            
                            <b>Medidas</b>: 45cm x 45cm. <br></br>
                            <b>Material</b>: Gres. <br></br>
                            <b>Superficie</b>: Suelo.<br></br>
                            <a href='./Contacto'><button className='boton-pavimentos'>Comprar</button></a>
                            </p>
                            <p className='precio-pavimentos'>11€/m2</p>
                        </div> 
                </div> 
            </article>

                        <footer>
                            <Footer />
                        </footer>
    </div>
    )


}