import React from "react";
import axios from "axios";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import style from "./RegistrationFormUsu.module.css";

export default function RegistrationForm() {
  const navigate = useNavigate();
  // Inicializar el estado del formulario en blanco
  const [name, setName] = React.useState("");
  const [paternal_surname, setPaternal_surname] = React.useState("");
  const [mothers_maiden_name, setMothers_maiden_name] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [town,setTown] = React.useState("");
  const [cp, setCp] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [txt, setTxt] = React.useState('');
 
  const onInputChange = e => {
    const { value } = e.target;
    console.log('Input value: ', value);
 
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  }

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
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      town.trim() === ""||
      paternal_surname.trim() === ""||
      mothers_maiden_name.trim() === "" ||
      cp.trim() === "" ||
      street.trim()==="" ||
      number.trim()===""||
      password.trim() === "" 
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


    //Enviar el formulario con Axios
    axios
      .post("https://api-veterinaria-2022.herokuapp.com/users/auth/signup/", {
        "user":{name,
        paternal_surname,
        mothers_maiden_name,
        email,
        password,
        phone,
        role:2
        },
        "address":{
        number,
        street
        },
        "town":{
          cp,
          town
        }
      })
      .then((response) => setSuccess(true))
      .catch((error) => {
        setError(`Error(${error.status}): ${error.message}`);
      });
  };

  if (success) return navigate(`/VerificaCorreo`);

  return (
    <div className={style.contenedor}>
      <div className={style.titulo}>
      <h1 >REGISTRO</h1>
      {error && <div className={style.error}>{error}</div>}
      </div>
      <div className={style.otro}>
      <form className={style.formStyle} onSubmit={handleSubmit}>
        
        <div className={style.extra}>
          <label>
            Nombre 
            <input
              type="text"
              name="name"
              onkeypress="return /[az]/i.test(e.key)"
              value={name}
              
              onChange={(e) => setName(e.currentTarget.value)}

              className={style.estilo}
            />
          </label>
          <label>
            Apellido paterno:
            <input
              type="text"
              name="paternal_surname"
              value={paternal_surname}
              onChange={(e) => setPaternal_surname(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <label>
            Apellido materno:
            <input
              type="text"
              name="mothers_maiden_name"
              value={mothers_maiden_name}
              onChange={(e) => setMothers_maiden_name(e.currentTarget.value)}
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
            Número telefonico
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <label>
           Municipio:
            <input
              type="text"
              name="town"
              value={town}
              onChange={(e) => setTown(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          </div>
          <div className={style.extra2}>
          <label>
            Código Postal:
            <input
              type="number"
              name="cp"
              value={cp}
              onChange={(e) => setCp(e.currentTarget.value)}
              className={style.estilo}
              
            />
          </label>
          <label>
           Nombre de la calle:
            <input
              type="text"
              name="street"
              value={street}
              onChange={(e) => setStreet(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <label>
            número de casa:
            <input
              type="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>

          <label>
            Ingrese su Contraseña:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              className={style.estilo}
            />
          </label>
          <button type="submit">
          Registrarse
        </button>
          </div>
      </form>
       <div>
       <img className={style.imagenn} src="https://media.discordapp.net/attachments/955627945211342849/978645354520137748/icono.png?width=497&height=662" />
       </div>
       </div>
    </div>
  );
}
