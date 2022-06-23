import React from "react";
import style from "./Cita.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from 'react-select';

export default function Cita() {
  const navigate = useNavigate();
  const [date, setDate] = React.useState("");
  const [hour, setHour] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [type_service, setTypeService] = React.useState("");
  // Inicializar el estado de error y éxito
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (event) => {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    // Resetear el estado de error
    setError("");

    // Validar el formulario
    if (date.trim() === "" || description.trim() === "" || hour.trim() === "") {
      setError("Por favor, completa todos los campos");
      return;
    }

    //Enviar el formulario con Axios

    axios
      .post(
        "https://api-veterinaria-2022.herokuapp.com/pets/",
        {
          date,
          hour,
          description,
          type_service
        },
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => setSuccess(true))
      .catch((error) => {
        setError(`Error(${error.status}): ${error.message}`);
      });
  };
  if (success) return navigate(`/registro_mascota_exitoso`);

  return (
    <div className={style.contenedor}>
      <form className={style.formu} onSubmit={handleSubmit}>
        <div className={style.extra}>
        <h1>AGENDA TU CITA</h1>
        {error && <div className={style.error}>{error}</div>}
          <label>
            Fecha de la cita:
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          Selecciona la hora de la cita:
          <Select
            className="selectores"
            isOptionDisabled={(option) => option.disabled}
            options={[
              {
                value: "Selecciona...",
                label: "Selecciona...",
                disabled: true,
              },
              { value: "9:00hrs", label: "9:00hrs" },
              { value: "9:30hrs", label: "9:30hrs" },
              { value: "10:00hrs", label: "10:00hrs" },
              { value: "10:30hrs", label: "10:30hrs" },
              { value: "11:00hrs", label: "11:00hrs" },
              { value: "11:30hrs", label: "11:30hrs" },
              { value: "12:00hrs", label: "12:00hrs" },
              { value: "12:30hrs", label: "12:30hrs" },
              { value: "1:00hrs", label: "1:00hrs" },
              { value: "1:30hrs", label: "1:30hrs" },
              { value: "2:00hrs", label: "2:00hrs" },
              { value: "2:30hrs", label: "2:30hrs" },
              { value: "3:00hrs", label: "3:00hrs" },
              { value: "6:00hrs", label: "6:00hrs" },
              { value: "6:30hrs", label: "6:30hrs" },
              { value: "7:00hrs", label: "7:00hrs" },
            ]}
            value={hour}
            onChange={(hour) => {
              setHour(hour);
            }}
          />
           Selecciona el tipo de servicio:
          <Select
            className="selectores"
            isOptionDisabled={(option) => option.disabled}
            options={[
              {
                value: "Selecciona...",
                label: "Selecciona...",
                disabled: true,
              },
              { value: "Vacunas", label: "Vacunas" },
              { value: "Peluquería", label: "Peluquería" },
              { value: "Medicina preventiva", label: "Medicina preventiva" },
              { value: "Medicina interna", label: "Medicina interna" },
              { value: "Medicina felina", label: "Medicina felina" },
              { value: "otro", label: "otro" }
            ]}
            value={type_service}
            onChange={(type_service) => {
              setTypeService(type_service);
            }}
          />
          <label>
           Razón de su cita:
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <button type="submit" className={style.buttonIni}          
           onClick={() => {
            navigate(`/registroMascota`);
          }}>
           Siguiente
        </button>
        </div>
        
      </form>
      <div className={style.rectangulo}>
      <img
          className={style.imagenn}
          src="https://cdn.discordapp.com/attachments/987770782677614624/989361679890530354/Diseno_sin_titulo_29.png"
        />
      </div>
    </div>
  );
}
