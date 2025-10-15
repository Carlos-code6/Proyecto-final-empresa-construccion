import './RRSS.css'
import iconoInstagram from './iconoInstagram.png';
import iconoFacebook from './iconoFacebook.png';
import iconoX from './iconoX.png';
import iconoWhatsapp from './iconoWhatsapp.png';



export default function Rrss () {
    return (
        <div className='rrss-contenedor'>
        <h1 className='titulo-rrss'> Síguenos en redes sociales</h1>
            <span className='rrss-instagram'>
                <a href="https://www.instagram.com/"><img src= {iconoInstagram} alt="icono-instagram" /></a>
            </span>
            <span className='rrss-x'>
                <a href="https://x.com/"><img src= {iconoX} alt="icono-x" /></a>
            </span>
            <span className='rrss-whatsapp'>
                <a href="https://www.whatsapp.com/"><img src= {iconoWhatsapp} alt="icono-whatsapp" /></a>
            </span>
            <span className='rrss-facebook'>
                <a href="https://www.facebook.com/"><img src= {iconoFacebook} alt="icono-facebook" /></a>
            </span>
        </div>
    )
}