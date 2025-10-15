
import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../Components/HeaderStyles.css'
import CarruselImagenes from "../Components/CarruselImagenes";
import SectionProductos from '../Components/SectionProductos';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RRSS from "../Components/RRSS"
import Formulario from "../Components/Formulario"
import Cookies from "../Components/Cookies";
import ServiciosInicio from "../Components/ServiciosInicio.jsx";


export default function NavMenu() {
  
  return (
    
    <div>
      <div>
      <Cookies></Cookies>
    </div>
      <header>
        <Header></Header>
      </header>
      <main>
        <CarruselImagenes></CarruselImagenes>
      </main>
      <section>
          <ServiciosInicio></ServiciosInicio>
        </section>
        <section>
          <SectionProductos></SectionProductos>
        </section>
        <div>
          <RRSS></RRSS>
        </div>    
        <div>
          <Formulario></Formulario>
        </div>
          <footer>
            <Footer />
          </footer>
</div>
      
  );
}