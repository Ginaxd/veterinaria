import React from 'react'
import "./ServMedicinaPrev.css"
import { useNavigate } from 'react-router-dom';
import medicinaPrev from "../../Components/Images/medicinaPrev.jpg"

export default function ServMedicinaPrev() {
  let navigate = useNavigate();

  return (
    <div className='container'>
      
      <h1 className='article'>Medicina Preventiva Veterinaria:</h1>
      <h1 className='article'>La clave para EVITAR que tus animales enfermen</h1>

      <div className='contenidoPrev'>
      <h2>¿Qué es la medicina preventiva veterinaria?</h2>
      <p>Se trata de una especialidad dentro de la medicina veterinaria, que trata de evitar que los animales lleguen a enfermar. Sería lo contrario a lo que llamamos medicina reactiva, en la cual las personas traen a sus animales cuando ya tienen síntomas de enfermedad.
      En muchas ocasiones estas enfermedades son graves y generan un gran costo económico para el propietario, además del sufrimiento que supone ver a nuestros animales enfermos. Una serie de contratiempos que pueden evitarse con una correcta revisión periódica de nuestros perros y gatos. Sin duda, una decisión que mejorará la vida de nuestros animales.
      </p>
      <img className="imgMedPrev" src={medicinaPrev} alt="Medicina Preventiva" />
      <h2>¿Cuáles son los pilares básicos de la medicina preventiva veterinaria?</h2>
      <p><ul><li><span>Nutrición:</span> la valoración del peso del animal y su condición corporal, la cantidad de alimento y de ejercicio son fundamentales como base de la buena salud. Se trata de identificar las necesidades de cada paciente. Además, le proporcionamos de manera personalizada las pautas que precisa. De este modo, nos aseguramos de que la dieta que sigue cada animal sea exactamente aquella que necesita.</li>
      <li><span>Vacunación y desparasitación:</span> La vacunación es una de las actuaciones más importantes en la medicina preventiva. Cada protocolo vacunal dependerá de la edad, hábitos y zona geográfica del paciente. Todo ello determinará el calendario vacunal para tu perro o tu gato.</li></ul></p>
      <h2>La importancia de un buen programa de detección</h2>
      <p>La desparasitación interna y externa es fundamental para prevenir enfermedades tanto a los animales como a las personas, dado que hay enfermedades que son contagiosas a los humanos. Para ello, contamos con diferentes <span>programas de detección:</span>
      <ol><li><span>Específicos de prevención:</span> son muy importantes para detectar precozmente enfermedades inicialmente silenciosas, partiendo de un paquete de pruebas diagnósticas que nos permite investigar más profundamente.</li>
      <li><span>Detección precoz de Leishmaniosis canina.</span> Se trata de una enfermedad infecciosa, que está causada por el parásito Leishmania Infantum. Es un mosquito especialmente activo en la cuenca mediterránea.</li>
      <li><span>Enfermedad periodontal.</span> Es una de las enfermedades más comunes en animales y les suele afectar a partir de los dos años. El mal aliento es uno de los principales síntomas de esta afección.</li>
      <li><span>Enfermedades cardiovasculares.</span> La detección precoz en este tipo de casos se convierte en una cuestión esencial. Podemos evitar una gran cantidad de problemas y mejorar la calidad de vida de nuestros animales en el caso de que sufran algún tipo de dolencia cardiaca.</li>
      <li><span>Chequeos de salud</span> de, por ejemplo, el paciente geriátrico. Así, podemos concentrarnos en las características y situaciones concretas de cada tipo de paciente.</li>
      </ol>
      En conclusión, la medicina preventiva tiene multitud de ventajas frente a la medicina reactiva. Nuestros perros y gatos enferman menos o no llegan a enfermar, además de que el costo económico de la medicina preventiva es mucho menor. De este modo, podemos disfrutar mucho más de nuestros animales y brindar los cuidados adecuados cuando más lo necesitan. ¡Apostar por este tipo de medicina es una decisión de lo más sensata!</p>
      <h2>¿Cómo podemos ayudarte?</h2>
      <p>En <span>Zootopia Vet</span> somos expertos en Medicina Preventiva, por eso hemos diseñado con especial cuidado nuestro <span>ZOOPLAN CANINO</span> y nuestro <span>ZOOPLAN FELINO.</span> Están, por cierto, adaptados a la etapa de vida de cada paciente. ¿Te apetece conocer más sobre ellos? Ponte en contacto con nosotros y concierta una cita llamando  al teléfono  <span>957-252-25-25</span> o pulsando el siguiente recuadro “agendar cita”.</p>
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

