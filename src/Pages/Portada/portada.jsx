import React from "react";
import style from "./portada.module.css";
import { useNavigate } from "react-router-dom";

export default function portada() {
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
        <h5> Tel: 957-252-25-25</h5>
        <h5> Faceboook #zootopia</h5>
        </div>
    </div>
  );
}
