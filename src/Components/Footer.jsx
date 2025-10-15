import "./Footer.css"
import iconoInstagram from './iconoInstagram.png';
import iconoFacebook from './iconoFacebook.png';
import iconoX from './iconoX.png';
import iconoWhatsapp from './iconoWhatsapp.png';

const Footer = () => {
    return (
       <div className="footerComponent">
        <div className="footerContainer">
            <div className="politicas">
                <h3>Políticas</h3>
                <p><a href="/Privacidad" target="/blank">Privacidad</a></p>  
                <p><a href="/Cookies" target="/blank">Cookies</a></p>
                <p><a href="/Aviso-legal" target="/blank">Aviso legal</a></p>
            </div>
            <div className="informacionLegal">
                <h3>legal</h3>
                <p>Hoja de reclamaciones</p>
                <p>Certificaciones</p>
                <p>Apoyo jurídico</p>
            </div>
            <div className="delegaciones">
                <h3>Delegaciones</h3>
                <p>Sevilla</p>
                <p>Córdoba</p>
                <p>Madrid</p>
            </div>
        </div>
            <div className="footer-rrss">
                <span className="titulo-footer-rrss">Nuestras redes sociales</span>
                    <a href="https://www.instagram.com/"><img src={iconoInstagram}></img></a>
                    <a href="https://www.facebook.com/"><img src={iconoFacebook}></img></a>
                    <a href="https://www.x.com/"><img src={iconoX}></img></a>
                    <a href="https://www.whatsapp.com/"><img src={iconoWhatsapp}></img></a>
            </div>
    </div> 
    )
}
export default Footer;