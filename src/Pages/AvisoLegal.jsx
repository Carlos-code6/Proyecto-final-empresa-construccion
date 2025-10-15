import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function AvisoLegal() {
  return (
    <div> 
        <header><Header></Header></header>
        
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      <h1>📄 Aviso Legal</h1>

      <section>
        <h2>1. Información del titular</h2>
        <p>
          De acuerdo con la Ley de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI), ponemos a disposición de los usuarios los siguientes datos del titular de este sitio web:
        </p>
        <ul>
          <li><strong>Nombre o razón social:</strong> Nombre de la empresa o titular</li>
          <li><strong>Dirección:</strong> Calle, número, ciudad, código postal, país</li>
          <li><strong>Correo electrónico:</strong> <a href="mailto:tu-email@ejemplo.com">tu-email@ejemplo.com</a></li>
          <li><strong>Teléfono de contacto:</strong> +34 000 000 000</li>
          <li><strong>CIF/NIF:</strong> X0000000X</li>
        </ul>
      </section>

      <section>
        <h2>2. Condiciones de uso</h2>
        <p>
          El acceso y uso de este sitio web implica la aceptación plena de las condiciones de uso que se detallan a continuación:
        </p>
        <ul>
          <li>El usuario se compromete a utilizar la web conforme a la ley, la moral y el orden público.</li>
          <li>No se permite el uso de contenidos con fines ilícitos o lesivos para terceros.</li>
          <li>El titular se reserva el derecho de modificar, actualizar o eliminar cualquier contenido del sitio web sin previo aviso.</li>
        </ul>
      </section>

      <section>
        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, marcas, diseños, software y códigos fuente, son propiedad del titular o de terceros que han autorizado su uso. 
          Queda prohibida la reproducción, distribución o comunicación pública de estos contenidos sin el consentimiento expreso del titular.
        </p>
      </section>

      <section>
        <h2>4. Responsabilidad</h2>
        <p>
          El titular no se hace responsable de posibles daños o perjuicios que puedan derivarse del acceso, uso o interpretación de la información contenida en este sitio web, salvo que medie dolo o negligencia grave.
        </p>
        <p>
          Tampoco garantiza la disponibilidad, continuidad o ausencia de errores del sitio web, así como de los enlaces externos que se proporcionen.
        </p>
      </section>

      <section>
        <h2>5. Protección de datos</h2>
        <p>
          La información personal que proporciones a través de este sitio web será tratada conforme a nuestra <a href="/privacidad">Política de Privacidad</a> y la normativa vigente en materia de protección de datos.
        </p>
      </section>

      <section>
        <h2>6. Legislación aplicable y jurisdicción</h2>
        <p>
          Las presentes condiciones se rigen por la legislación vigente en España. Cualquier disputa que pueda surgir en relación con el uso de este sitio web será sometida a los tribunales competentes del domicilio del titular.
        </p>
      </section>

      <section>
        <h2>7. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con el Aviso Legal de esta página, puedes contactarnos en: <br />
          📧 <a href="mailto:tu-email@ejemplo.com">tu-email@ejemplo.com</a> <br />
          📞 Teléfono: +34 000 000 000
        </p>
      </section>
    </div>
    <footer><Footer></Footer></footer>
    </div>
  );
}