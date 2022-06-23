import React from 'react';
import style from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={style.navbar}>
     <img
            src='https://media.discordapp.net/attachments/987770782677614624/988768143704993882/Diseno_sin_titulo_21.png'
            />
     <h2 className={style.letra}> ZOOTOPIA VET</h2>

     <button className={style.boton} onClick={() => { navigate(`/login`);}}>
         Iniciar sesión
     </button>

    </div>
  )
}
