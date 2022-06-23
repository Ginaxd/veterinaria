import React from 'react'
import "./ServMedFelina.css"
import medFelina from "../../Components/Images/medFelina.jpg"
import { useNavigate } from 'react-router-dom'

export default function ServMedFelina() {
    let navigate = useNavigate ();

    return (
        <div className='containerMedFel'>
            <div className='rightBar'>
                <img className="imgMedFelina" src={medFelina} alt="Medicina Felina" />
            </div>

            <div className='contenidoMed'>
                <h1 className='article'>Medicina felina</h1>
                <h2>¿Qué ofrece nuestra medicina felina?</h2>
                <p>La <span>Medicina Felina</span> ha destacado en los últimos años, por el incremento del número de pacientes felinos que llegan a la clínica. Hay un mayor interés por parte del propietario, de que a su mascota le ofrezcan servicios especializados.
                    <p>Por otro lado, cada vez se dan más casos clínicos de pacientes felinos, con varias patologías simultáneas al mismo tiempo, por lo que es necesario un manejo especializado, para obtener un diagnóstico y tratamiento correcto.</p>

                    <p>Por ello, la misión de <span>Zootopia Vet</span> es ofrecer un servicio de Medicina Felina más especializado que englobe:</p>

                    <ul>
                        <li>Enfermedades Infeciosas y Parasitarias</li>
                        <li>Enfermedades Endocrinas</li>
                        <li>Enfermedades Gastrointestinales</li>
                        <li>Enfermedades Nefrourológicas.</li>
                        <li>Enfermedades Cardiorespiratorias.</li>
                        <li>Problemas  Oftalmológicos.</li>
                        <li>Alteraciones Dermatológicas.</li>
                        <li>Patologías Oncológicas.</li>
                        <li>Trastornos Neurológicos.</li>
                        <li>Alteraciones del Comportamiento.</li>
                        <li>Prevención de Enfermedades. </li>
                        <li>Vacunaciones.</li>
                    </ul></p>

                <h2>¿Cómo podemos ayudarte?</h2>
                <p>En Zootopia Vet somos expertos en <span>Medicina Felina</span>, puedes concertar una cita para el Servicio de Medicina Felina, llamando  al teléfono  <span>957-252-25-25</span> o pulsando el siguiente recuadro “agendar cita”.</p>
                <button
                    className="btnCita"
                    onClick={() => {
                        navigate("/agendar_cita")
                    }}>
                    Agendar cita
                </button>
            </div>
        </div>
    )
}