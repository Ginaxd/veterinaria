import React from 'react'
import { useNavigate } from 'react-router-dom'
import peluqueria from "../../Components/Images/peluqueria.jpg"
import "./ServPeluqueria.css"

export default function ServPeluqueria() {

    let navigate = useNavigate();
    
    return (
        <div className='containerPel'>
            <h1 className='article'>Peluquería canina y felina</h1>
            <img className="imgPeluqueria" src={peluqueria} alt="Peluqueria" />

            <div className='contenido'>
                <h2>¿Qué ofrece nuestra peluquería canina y felina?</h2>
                <p>Nuestra peluquería canina y felina es un centro profesional especializado en higiene y estética que tiene como finalidad la preservación de la salud de nuestras mascotas. Un peluquero canino o felino no sólo se ocupa de los cuidados propiamente estéticos, como pueden ser el peinado o el corte de pelo, sino que también realiza una inspección al detalle de la salud de nuestro perro y/o gato. “Al contrario de lo que mucha gente piensa, en las peluquerías caninas no solamente nos dedicamos a cortar el pelo. También velamos por su salud e higiene de mantenimiento, por lo que no es necesario esperar al siguiente corte para acudir a la peluquería canina, sino que también puede, y más bien debe, acudir de forma rutinaria a darse un baño en profundidad”, relata Georgina Velasco <span>fundadora de Zootopia Vet.</span> </p>
                <p>Y es que con el baño no solo se asea al animal, sino que se realizan una serie de cuidados higiénicos bastante recomendables (¡y necesarios!) como son el <span>rasurado de las zonas genital y anal, el corte de uñas, el vaciado perianal, y la limpieza de oídos.</span> Esta inspección minuciosa puede advertirnos de algún problema de salud, por lo que acudir a una peluquería canina es más que aconsejable. De hecho, es muy habitual que los propios centros veterinarios cuenten con un servicio de peluquería canina en el mismo establecimiento. Esto facilita enormemente la responsabilidad de mantener la higiene de nuestras mascotas en su punto. Más cómodo, imposible.
                </p>
                <h2>¿Qué servicios podrá encontrar tu mascota en ZOOTOPIA VET?</h2>
                <p><ul><li>Corte de pelo según los estándares de raza y gusto del cliente (tanto a tijera como a máquina).</li>
                    <li>Cuidados higiénicos (rasurado de las zonas genital y anal, el corte de uñas, el vaciado perianal, y la limpieza de oídos).</li>
                    <li>Baño.</li>
                    <li>Peinado y desenredado.</li>
                    <li>Corte de pelo para gatos (siempre procurando hacerlo en ambiente tranquilo y con el dueño presente para reducir el estrés y evitar la sedación).</li></ul>
                </p>
                <p>Dejarás a tu mascota en las mejores manos, puedes estar seguro de que recibirás un excelente asesoramiento y que trataremos a tu mejor amigo como un auténtico VIP.</p>
                <p>Ponte en contacto con nosotros y concierta una cita llamando  al teléfono  <span>957-252-25-25</span> o pulsando el siguiente recuadro “agendar cita”. ¡Estaremos encantados de conocerte a ti y a tu peludo muy pronto!
                    </p>
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