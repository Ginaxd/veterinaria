import React from 'react';
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
     <h1 className='letra'> ZOOTOPIA VET</h1>

     <button className='boton' onClick={() => { navigate(`/login`);}}>
         Iniciar sesión
     </button>

    </div>
  )
}
