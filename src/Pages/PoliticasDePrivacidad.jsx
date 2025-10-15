import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function PoliticaPrivacidad() {
  return (
    <div> 
        <header><Header></Header></header>
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      <h1>🔒 Política de Privacidad</h1>

      <section>
        <h2>1. Introducción</h2>
        <p>
          En nuestra web nos comprometemos a proteger tu privacidad y garantizar la seguridad de tus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información que nos proporcionas.
        </p>
      </section>

      <section>
        <h2>2. Información que recopilamos</h2>
        <p>Podemos recopilar diferentes tipos de información según tu interacción con nuestra web:</p>
        <ul>
          <li><strong>Información personal:</strong> nombre, correo electrónico, datos de contacto.</li>
          <li><strong>Información técnica:</strong> dirección IP, tipo de navegador, sistema operativo, páginas visitadas.</li>
          <li><strong>Cookies y tecnologías similares:</strong> para mejorar la experiencia de usuario y personalizar contenidos.</li>
        </ul>
      </section>

      <section>
        <h2>3. Cómo usamos la información</h2>
        <ul>
          <li>Para prestarte nuestros servicios y responder a tus solicitudes.</li>
          <li>Para personalizar y mejorar la experiencia en nuestra web.</li>
          <li>Para enviar información relevante y actualizaciones, si nos das tu consentimiento.</li>
          <li>Para fines de análisis y estadísticas internas sobre el uso del sitio.</li>
        </ul>
      </section>

      <section>
        <h2>4. Compartir información con terceros</h2>
        <p>
          No vendemos ni alquilamos tus datos personales a terceros. Podemos compartir información con proveedores de servicios que nos ayudan a operar nuestra web, siempre bajo acuerdos de confidencialidad y cumpliendo la normativa vigente.
        </p>
      </section>

      <section>
        <h2>5. Seguridad de la información</h2>
        <p>
          Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos personales frente a accesos no autorizados, pérdida, modificación o divulgación.
        </p>
      </section>

      <section>
        <h2>6. Derechos del usuario</h2>
        <p>
          Como usuario, tienes derechos sobre tus datos personales:
        </p>
        <ul>
          <li>Acceder a tus datos y recibir una copia.</li>
          <li>Solicitar la rectificación de datos inexactos.</li>
          <li>Solicitar la eliminación de tus datos.</li>
          <li>Limitar u oponerte al tratamiento de tus datos.</li>
          <li>Retirar tu consentimiento en cualquier momento.</li>
        </ul>
        <p>
          Para ejercer estos derechos, puedes contactarnos a través del correo electrónico que aparece al final de esta política.
        </p>
      </section>

      <section>
        <h2>7. Cambios en la política de privacidad</h2>
        <p>
          Podemos actualizar esta política periódicamente. Te recomendamos revisarla regularmente para estar informado sobre cómo protegemos tus datos.
        </p>
      </section>

      <section>
        <h2>8. Contacto</h2>
        <p>
          Si tienes dudas o consultas sobre nuestra Política de Privacidad, puedes ponerte en contacto con nosotros:
          <br />
          📧 <a href="mailto:tu-email@ejemplo.com">tu-email@ejemplo.com</a>
        </p>
      </section>
    </div>
    <footer><Footer></Footer></footer>
    </div>
  );
}