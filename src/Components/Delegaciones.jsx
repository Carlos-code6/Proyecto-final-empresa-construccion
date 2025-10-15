import "./Delegaciones.css";
import MapaCordoba from "./MapaCordoba";
import MapaMadrid from "./MapaMadrid";
import MapaSevilla from "./MapaSevilla";


export default function Delegaciones () {
    return (
        <div>
    <h1 className="titulo-delegaciones">Nuestras delegaciones</h1>
    <div className="delegaciones-contenedor">
        <div className="delegacion-Sevilla">Sevilla
            <MapaSevilla></MapaSevilla>
            <p>     Calle Lázaro, 10 <br />
                    Polígono. Ind. Torque <br />
                    CP 12520 <br />
                    Tlf. 902 512 898
                    </p>
            </div>
            <div className="delegacion-Cordoba">Córdoba
                <MapaCordoba></MapaCordoba>
              <p>   Calle Alcala, 70 <br />
                    Polígono. Ind. Las quemadas <br />
                    CP 14002 <br />
                    Tlf. 957 620 120
                    </p>
            </div>
            <div className="delegacion-Madrid">Madrid
                <MapaMadrid></MapaMadrid>
                <p> Calle Fuentes, 16 <br />
                    Polígono. Ind. Huertos <br />
                    CP 19213 <br />
                    Tlf. 955 255 369
                    </p>
            </div>
        </div>
        </div>
    )
}