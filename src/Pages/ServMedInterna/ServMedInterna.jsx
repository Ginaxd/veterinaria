import React from 'react'
import "./ServMedInterna.css"
import medInterna from "../../Components/Images/medInterna.jpg"
import { useNavigate } from 'react-router-dom'

export default function ServMedInterna() {
    let navigate = useNavigate();

    return (
        <div className='medicinaInterna'>

            <div className='contenidoMed'>
                <h1 className='article'>Medicina interna veterinaria</h1>
                <h2>¿Qué ofrece nuestra medicina interna veterinaria?</h2>
                <p>En Zootopia Vet ofrecemos el servicio de <span>Medicina Interna.</span> Esta es una rama de la medicina veterinaria que se encarga del diagnóstico y tratamiento de enfermedades no quirúrgicas que afectan al sistema respiratorio, gastrointestinal, endócrino, renal, hepático y genitourinario. Nuestro equipo esta formado por <span>Médicos Veterinarios especialistas en Medicina y Cirugía de Pequeñas Especies.</span></p>

                <p>Para lograr un diagnóstico adecuado y seleccionar el mejor tratamiento los médicos de esta área se apoyan en <span>pruebas de laboratorio y de gabinete (rayos X, ultrasonido).</span> El área de medicina interna trabaja en conjunto con otros especialistas como <span>Oncología, Cardiología, Oftalmología, Dermatología, Reproducción, Etología Clínica, Ortopedia, Neurología, Anestesia y Cirugía,</span> para hacer un manejo integral de los pacientes.</p>

                <p>La salud y el bienestar de los pacientes son los principales factores en la toma de cualquier decisión.</p>

                <h2>¿Cómo podemos ayudarte?</h2>
                    <p>En Zootopia Vet somos expertos en <span>Medicina Interna</span>, puedes concertar una cita para el Servicio de Medicina Interna, llamando  al teléfono  <span>957-252-25-25</span> o pulsando el siguiente recuadro “agendar cita”.</p>

                    <button
                    className="btnCita"
                    onClick={() => {
                        navigate("/agendar_cita")
                    }}>
                    Agendar cita
                </button>
                    
            </div>
            <div className='rightBar'>
                    <img className="imgMedInterna" src={medInterna} alt="Medicina Interna" />
            </div>
          


        </div>
    )
}