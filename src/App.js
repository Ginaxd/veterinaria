import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import Portada from "./Pages/Portada/portada";
import RegistrationFormUsu from "./Pages/RegistrationFormUsu/RegistrationFormUsu";
import Login from "./Pages/Login/Login";

function App() {
  return (
<BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Portada />} />
        <Route path="/registroForm" element={<RegistrationFormUsu/>} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
