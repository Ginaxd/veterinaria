import React from "react";
import axios from "axios";
import validator from "validator";
import style from "./RegistrationFormUsu.module.css";

export default function RegistrationForm() {
  // Inicializar el estado del formulario en blanco
  const [nombreC, setNombreC] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [estadoMunicipio,setEstadoMunicipio] = React.useState("");
  const [calle, setCalle] = React.useState("");
  const [numCasa, setNumCasa] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const validate = (password) => {
    if (
      validator.isStrongPassword(password, {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }) &&
      validator.isLength(password, { min: 6, max: 20 })
    ) {
      return true;
    } else {
      return false;
    }
  };

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
      nombreC.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Por favor, completa todos los campos");
      return;
    }

    // Asegurarse que las contraseñas coincidan
    if (!validate(password.trim())) {
      setError(
        "La contraseña no es válida. Su contraseña debe tener de 6 a 20 caracteres, una mayúscula, un caracter especial y un número."
      );
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setError("Las contraseñas no coinciden");
      return;
    }

    //Enviar el formulario con Axios

    axios
      .post("", {
        nombreC,
        email,
        tel,
        estadoMunicipio,
        calle,
        numCasa,
        password,
        password2: password,
      })
      .then((response) => setSuccess(true))
      .catch((error) => {
        setError(`Error(${error.status}): ${error.message}`);
      });
  };

  if (success) return <div>REGISTRO EXITOSO, INICIE SESIÓN</div>;

  return (
    <div className={style.contenedor}>
      <form className={style.formStyle} onSubmit={handleSubmit}>
        <h1>REGISTRO</h1>
        {error && <div className={style.error}>{error}</div>}
        <div className={style.extra}>
          <label>
            Nombre completo:
            <input
              type="text"
              name="nombreC"
              value={nombreC}
              onChange={(e) => setNombreC(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <label>
            Telefono:
            <input
              type="text"
              name="tel"
              value={tel}
              onChange={(e) => setTel(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <label>
            Estado y municipio:
            <input
              type="text"
              name="estadoMunicipio"
              value={estadoMunicipio}
              onChange={(e) => setEstadoMunicipio(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <label>
            Datos de domicilio
            calle:
            <input
              type="text"
              name="calle"
              value={calle}
              onChange={(e) => setCalle(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <label>
            numero de casa:
            <input
              type="text"
              name="numCasa"
              value={numCasa}
              onChange={(e) => setNumCasa(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>

          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <label>
            Confirmar contraseña:
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
        </div>
        <button type="submit" className={style.buttonIni}>
          Registrarse
        </button>
      </form>
      <div>
      <img className={style.imagenn} src="https://media.discordapp.net/attachments/955627945211342849/978645354520137748/icono.png?width=497&height=662" />
      </div>
    </div>
  );
}
