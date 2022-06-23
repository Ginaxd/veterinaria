import React from "react";
import style from "./PaginaPrincipal.module.css";
import { useNavigate } from "react-router-dom";

export default function PaginaPrincipal() {
  const navigate = useNavigate();
  return (
    <div className={style.contenedor}>
      <div className={style.titulo}>
        <h1>ZOOTOPIAVET</h1>
        <img src="https://media.discordapp.net/attachments/987770782677614624/988435122330153040/Diseno_sin_titulo_14.png" />
      </div>
      <div className={style.imagePrinci}>
        <a className={style.cita}            
           onClick={() => {
            navigate(`/agendar_cita`);
          }}>
          <h1>CITA RÁPIDA</h1>
        </a>

        <div className={style.dos}>
          <div
            className={style.vacunas}
            onClick={() => {
              navigate(`/Vacunas`);
            }}
          >
            <h1>VACUNAS</h1>
          </div>

          <a
            className={style.registro}
            onClick={() => {
              navigate(`/registroMascota`);
            }}
          >
            <h1> REGISTRA A TU MASCOTA</h1>
          </a>
        </div>
      </div>
      <div className={style.servicios}>
        <a
          className={style.pelu}
          onClick={() => {
            navigate(`/MedicinaPreventiva`);
          }}
        >
          <img src="https://media.discordapp.net/attachments/987770782677614624/988402903649779782/Diseno_sin_titulo_7.png" />
          <h4>MEDICINA PREVENTIVA</h4>
        </a>

        <a
          className={style.pelu}
          onClick={() => {
            navigate(`/Peluqueria`);
          }}
        >
          <img src="https://media.discordapp.net/attachments/987770782677614624/988402903872053268/Diseno_sin_titulo_8.png" />
          <h3>PELUQUERIA</h3>
        </a>

        <a
          className={style.pelu}
          onClick={() => {
            navigate(`/MedicinaFelina`);
          }}
        >
          <img src="https://media.discordapp.net/attachments/987770782677614624/988400247120216124/Diseno_sin_titulo_5.png" />
          <h4>MEDICINA FELINA</h4>
        </a>

        <a
          className={style.pelu}
          onClick={() => {
            navigate(`/MedicinaInterna`);
          }}
        >
          <img src="https://media.discordapp.net/attachments/987770782677614624/988402148352090182/Diseno_sin_titulo_6.png" />
          <h4>MEDICINA INTERNA</h4>
        </a>
      </div>
      <div className={style.redes}>
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
