import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import Portada from "./Pages/Portada/portada";
import RegistrationFormUsu from "./Pages/RegistrationFormUsu/RegistrationFormUsu";
import Login from "./Pages/Login/Login";
import ServMedicinaPrev from "./Pages/ServMedicinaPrev/ServMedicinaPrev";
import ServPeluqueria from "./Pages/ServPeluqueria/ServPeluqueria";
import ServMedFelina from "./Pages/ServMedFelina/ServMedFelina";
import ServMedInterna from "./Pages/ServMedInterna/ServMedInterna";

function App() {
  return (
<BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Portada />} />
        <Route path="/registroForm" element={<RegistrationFormUsu/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/medicina_preventiva" element={<ServMedicinaPrev/>} />
        <Route path="/peluqueria" element={<ServPeluqueria/>} />
        <Route path="/medicina_felina" element={<ServMedFelina/>} />
        <Route path="/medicina_interna" element={<ServMedInterna/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
