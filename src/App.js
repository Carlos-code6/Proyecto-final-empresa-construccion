import './App.css';
import Contacto from './Pages/Contacto';
import QuienesSomos from './Pages/QuienesSomos';
import Principal from './Pages/Principal';
import NuestrasObras from './Pages/NuestrasObras';
import Servicios from './Pages/Servicios';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Novedades from './Components/Novedades'
import PoliticaCookies from './Pages/PoliticasDeCookies';
import PoliticaPrivacidad from './Pages/PoliticasDePrivacidad';
import AvisoLegal from './Pages/AvisoLegal';
import Baneras from './Pages/Baneras';
import Pavimentos from './Pages/Pavimentos';
import Revestimientos from './Pages/Revestimientos';
import Mamparas from './Pages/Mamparas';



export default function Navbar() {
  return (
  
    <Router>

      <Routes>

        <Route path="*" element={<Principal />} /> {/* Ruta por defecto */}

        <Route path='/' element = {<Principal />}></Route>

        <Route path='/Nuestras-obras' element = {<NuestrasObras />}></Route>

        <Route path='/Servicios' element = {<Servicios />}></Route>
    
        <Route path='/Quienes-somos' element = {<QuienesSomos />}></Route>
          
        <Route path='/Contacto' element = {<Contacto />}></Route>

        <Route path='/Cookies' element = {<PoliticaCookies></PoliticaCookies>}></Route>

        <Route path='/Privacidad' element = {<PoliticaPrivacidad></PoliticaPrivacidad>}></Route>

        <Route path='/Aviso-legal' element = {<AvisoLegal></AvisoLegal>}></Route>

        <Route path='/Revestimientos' element = {<Revestimientos></Revestimientos>}></Route>

        <Route path='/Pavimentos' element = {<Pavimentos></Pavimentos>}></Route>

        <Route path='/Mamparas' element = {<Mamparas></Mamparas>}></Route>

        <Route path='/Baneras' element = {<Baneras></Baneras>}></Route>

      </Routes>
     </Router>
    
  );
}
