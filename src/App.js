import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Portadaa from "./Pages/Portada/Portada";
import RegistrationFormUsu from "./Pages/RegistrationFormUsu/RegistrationFormUsu";
import Login from "./Pages/Login/Login";
import RegistrationFormMasc from "./Pages/RegistrationFormMasc/RegistrationFormMasc";
import PaginaPrincipal from "./Pages/PaginaPrincipal/PaginaPrincipal";
import ServMedInterna from "./Pages/ServMedInterna/ServMedInterna";
import ServMedFelina from "./Pages/ServMedFelina/ServMedFelina";
import ServPeluqueria from "./Pages/ServPeluqueria/ServPeluqueria";
import ServMedicinaPrev from "./Pages/ServMedicinaPrev/ServMedicinaPrev";
import VerificaCorreo from "./Pages/VerificaCorreo/VerificaCorreo";
import Vacunas from "./Pages/Vacunas/Vacunas";
import Cita from "./Pages/Cita/Cita";
import RegistroExitosoMas from "./Pages/RegistroExitosoMas/RegistroExitosoMas";




function App() {
  return (
<BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Portadaa/>} />
        <Route path="/registroForm" element={<RegistrationFormUsu/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registroMascota" element={<RegistrationFormMasc  />} />
        <Route path="/MedicinaInterna" element={<ServMedInterna  />} />
        <Route path="/MedicinaFelina" element={<ServMedFelina />} />
        <Route path="/MedicinaPreventiva" element={<ServMedicinaPrev/>} />
        <Route path="/Peluqueria" element={<ServPeluqueria/>} />
        <Route path="/Peluqueria" element={<ServPeluqueria/>} />
        <Route path="/VerificaCorreo" element={<VerificaCorreo/>} />
        <Route path="/Vacunas" element={<Vacunas/>} />
        <Route path="/agendar_cita" element={<Cita/>} />
        <Route path="/registro_mascota_exitoso" element={<RegistroExitosoMas/>} />
        <Route path="/cita" element={<cita/>} />
        <Route path="/Home" element={<PaginaPrincipal />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
