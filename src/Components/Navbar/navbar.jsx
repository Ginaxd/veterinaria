import React from 'react';
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function navbar() {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
     <h2 className='letra'> ZOOTOPIA VET</h2>

     <button className='boton' onClick={() => { navigate(`/login`);}}>
         Iniciar sesión
     </button>

    </div>
  )
}
