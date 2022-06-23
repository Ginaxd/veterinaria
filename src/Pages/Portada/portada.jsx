import React from "react";
import style from "./Portada.module.css";
import { useNavigate } from "react-router-dom";

export default function Portada() {
  const navigate = useNavigate();
  return (
    <div className={style.contenedor}>
      <div className={style.letritas}>
        <h1>¡¡BIENVENIDOS A ZOOTOPIA!!</h1>
        <h3>LOS MEJORES SERVICIOS PARA </h3>
        <h3>TU MASCOTA</h3>

        <button className={style.boton1} onClick={() => { navigate(`/registroForm`);}}
        >Registrate</button>
      </div>

      <div className={style.barra}>
      <img src="https://media.discordapp.net/attachments/987770782677614624/988787886407176252/1.png" />
        <h3>743-85-732-63</h3>
        <img src="https://media.discordapp.net/attachments/987770782677614624/988787886612705320/2.png" />
        <h3>#SomosZootopiaVet</h3>
        <img src="https://media.discordapp.net/attachments/987770782677614624/988787886830796800/3.png" />
        <h3>#SomosZootopiaVet</h3>
        </div>
    </div>
  );
}
