import React, { useState } from "react";
import { useEffect } from "react";

function Cookies() {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  useEffect(() => {
    const tokenGuardado = localStorage.getItem("token");
    if (!tokenGuardado) {
      setMostrarPopup(true);
    }
  }, []);

  const aceptar = () => {
    const token = {
        value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        expiry: Date.now() + 60 * 60 * 1000
    }
    
    localStorage.setItem("token", JSON.stringify(token));
    setMostrarPopup(false);
    alert("✅ Cookies ACEPTADAS");
  };

  const rechazar = () => {
    setMostrarPopup(false);
    alert("❌ Cookies RECHAZADAS");
  };

  return (
    <div className="app">

      {mostrarPopup && (
        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <h2>¿Aceptas las COOKIES?</h2>
            <div style={{ marginTop: "15px" }}>
              <button
                onClick={aceptar}
                style={{
                  marginRight: "10px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "none",
                  background: "green",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Aceptar
              </button>
              <button
                onClick={rechazar}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "none",
                  background: "red",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cookies;