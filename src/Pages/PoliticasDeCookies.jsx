import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer";

export default function PoliticaCookies() {
  return (
    <div>
    <div>
        <Header></Header>
    </div>
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      
      <h1>🍪 Política de Cookies</h1>

      <section>
        <h2>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo (ordenador, móvil, tablet) al navegar. 
          Sirven para recordar tus preferencias, mejorar la experiencia del usuario y, en algunos casos, recopilar información anónima para estadísticas.
        </p>
      </section>

      <section>
        <h2>Tipos de cookies que utilizamos</h2>

        <h3>1. Cookies técnicas o necesarias</h3>
        <p>
          Son imprescindibles para el funcionamiento correcto de la página. Permiten, por ejemplo, navegar por el sitio y usar sus funciones esenciales.
          <br />
          <strong>Ejemplo:</strong> recordar tu sesión iniciada o tus ajustes de seguridad.
        </p>

        <h3>2. Cookies de preferencias o personalización</h3>
        <p>
          Permiten recordar información para que accedas al servicio con características personalizadas.
          <br />
          <strong>Ejemplo:</strong> idioma, región o tema visual de la página.
        </p>

        <h3>3. Cookies de análisis o rendimiento</h3>
        <p>
          Nos ayudan a entender cómo interactúan los usuarios con la web, recopilando información de forma anónima para mejorar contenidos y funcionalidades.
          <br />
          <strong>Ejemplo:</strong> Google Analytics.
        </p>

        <h3>4. Cookies de marketing o publicidad</h3>
        <p>
          Se utilizan para mostrarte anuncios relevantes en función de tus intereses y medir la eficacia de nuestras campañas publicitarias.
          <br />
          <strong>Ejemplo:</strong> Google Ads o redes sociales.
        </p>
      </section>

      <section>
        <h2>¿Cómo puedes controlar las cookies?</h2>
        <p>
          En cualquier momento puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo configurando las opciones del navegador que utilices:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        </ul>
        <p>
          Ten en cuenta que si desactivas ciertas cookies, es posible que algunas funcionalidades del sitio no estén disponibles o no funcionen correctamente.
        </p>
      </section>

      <section>
        <h2>Cambios en la política de cookies</h2>
        <p>
          Podemos actualizar esta política de cookies en cualquier momento. Te recomendamos revisarla periódicamente para estar informado sobre cómo y para qué utilizamos las cookies.
        </p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>
          Si tienes dudas sobre esta política de cookies, puedes ponerte en contacto con nosotros a través de: <br />
          <u>construcar@gmail.com</u>
        </p>
      </section>
    </div>
    <div>
        <Footer></Footer>
    </div>
    </div>
  );
}