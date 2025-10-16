import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Formulario.css";

export default function FormularioContacto() {
  const [formValidado, setFormValidado] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [email, setEmail] = useState("");

  const nombreValido = nombre.trim().length > 0;
  const apellidosValido = apellidos.trim().length > 0;
  const telefonoValido = /^\d{9}$/.test(telefono);
  const comentariosValido = comentarios.length > 0 && comentarios.length <= 20;
  const emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email);

  useEffect(() => {
    setFormValidado(
      nombreValido &&
        apellidosValido &&
        telefonoValido &&
        comentariosValido &&
        emailValido
    );
  }, [nombreValido, apellidosValido, telefonoValido, comentariosValido, emailValido]);

  const evtEnviadoExito = (evt) => {
    evt.preventDefault();

    if (formValidado) {
      const templateParams = {
        nombre,
        apellidos,
        telefono,
        email,
        comentarios,
      };

      emailjs
        .send(
          "service_a15ghzq",     
          "template_fxgtj1b",    
          templateParams,
          "dIxjcuTk9ZIAFP_Vr"      
        )
        .then(
          () => {
            alert("✅ Formulario enviado y correo mandado con éxito");
          },
          (error) => {
            alert("❌ Error al enviar el correo: " + error.text);
          }
        );
    } else {
      let errores = [];
      if (!nombreValido) errores.push("El nombre es obligatorio");
      if (!apellidosValido) errores.push("Los apellidos son obligatorios");
      if (!telefonoValido) errores.push("El teléfono debe tener 9 dígitos");
      if (!emailValido) errores.push("El email no es válido");
      if (!comentariosValido)
        errores.push("El comentario es obligatorio y máximo 20 caracteres");

      alert("❌ Corrige los siguientes errores:\n\n" + errores.join("\n"));
    }
  };

  return (
    
      
    <div className="contenedor-formulario">
      
      <div className="conocenos">
        <h1 className="titulo-conocenos">¿Necesitas ponerte en contacto con nosotros?</h1>
        <h2 className="subtitulo-conocenos">
          Rellena el formulario de contacto y en menos de 2 horas, un comercial se pondrá en contacto contigo.
        </h2>
        <p className="texto-conocenos">Atención telefónica 24h 📞</p>
      </div>

      <form className="formulario" onSubmit={evtEnviadoExito}>
        <label>
          Nombre*{" "}
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Apellidos*{" "}
          <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
        </label>
        <label>
          Teléfono*{" "}
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </label>
        <label>
          E-mail*{" "}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Comentarios*{" "}
          <input
            className="comentarios-formulario-grande"
            placeholder="Máximo 20 caracteres"
            type="text"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />
        </label>
        <button className="boton-formulario" type="submit">Enviar</button>
      </form>
    </div>
    
  );
}
