import React from "react";
import axios from "axios";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";



export default function Login() {
  const navigate = useNavigate();
  // Inicializar el estado del formulario en blanco
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Inicializar el estado de error y éxito
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (event) => {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    // Resetear el estado de error
    setError("");

    // Validar el formulario
    if (email.trim() === "" || password.trim() === "") {
      setError("Por favor, rellenar todos los campos.");
      return;
    }

    function NuevoError() {
      if (!success)
        return setError(
          "Correo y/o contraseña inválido, si falla más de 3 veces será bloqueado."
        );
    }
    // Enviar el formulario
    // ...


    // Mostrar el mensaje de éxito

    axios
      .post("https://api-veterinaria-2022.herokuapp.com/users/auth/login/", {
        email,
        password,
      })
      .then((response) => {setSuccess(true)
        const token = response.data.tokens.access;
        window.localStorage.setItem("token", token)
      })
      .catch((error) => {
        setError(
          `Error(${error.status}): ${error.message.setError(NuevoError())}`
        );
      });
  };

  if (success) return navigate(`/Home`);

  return (
    <div className={style.contenedor}>
      <div className={style.rectangulo}>
        <h1>BIENVENIDO</h1>
        <img
          className={style.imagenn}
          src="https://media.discordapp.net/attachments/955627945211342849/978650572511117322/ZOOTOPIA_VET.png?width=497&height=662"
        />
      </div>

      <form className={style.loginStyle} onSubmit={handleSubmit}>
        

        <h1>INGRESA</h1>
        {error && <div className={style.error}>{error}</div>}
        <div className={style.extra}>
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
            Contraseña:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
        </div>
        <button type="submit" className={style.buttonIni}>
          Iniciar sesión
        </button>
      </form>


    </div>
  );
}
