import React from "react";
import axios from "axios";
import style from "./RegistrationFormMasc.module.css";
import { useNavigate } from "react-router-dom";

export default function RegistrationFormMasc() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [birth_date, setTiBirth_date] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [color, setColor] = React.useState("");

  // Inicializar el estado de error y éxito
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (event) => {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    // Resetear el estado de error
    setError("");

    // Validar el formulario
    if (
      name.trim() === "" ||
      gender.trim() === "" ||
      birth_date.trim() === "" ||
      breed.trim() === "" ||
      color.trim() === ""
    ) {
      setError("Por favor, completa todos los campos");
      return;
    }

    //Enviar el formulario con Axios

    axios
      .post(
        "https://api-veterinaria-2022.herokuapp.com/pets/",
        {
          name,
          birth_date,
          gender,
          color,
          breed,
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
        <h1>REGISTRA A TU MASCOTA</h1>
        {error && <div className={style.error}>{error}</div>}
        <div className={style.extra}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>

          <label>
            Fecha de nacimiento:
            <input
              type="date"
              name="birth_dat"
              value={birth_date}
              onChange={(e) => setTiBirth_date(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>

          <label>
            Género:
            <input
              placeholder="Ej. macho/hembra"
              type="text"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>

          <label>
            Tipo de mascota:
            <input
              placeholder="Ej. Perro/gato/gallo/chivo"
              type="number"
              name="breed"
              value={breed}
              onChange={(e) => setBreed(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>

          <label>
            Color:
            <input
              type="text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
        </div>
        <button type="submit" className={style.buttonIni}>
          Registrar
        </button>
      </form>
      <div className={style.rectangulo}>
        <img
          className={style.imagenn}
          src="https://media.discordapp.net/attachments/955627945211342849/986655622835630110/ima.png?width=468&height=662"
        />
      </div>
    </div>
  );
}
