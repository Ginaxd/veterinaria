import React from 'react'
import "./Vacunas.css"
import { useNavigate } from 'react-router-dom';

export default function ServMedicinaPrev() {
  let navigate = useNavigate();

  return (
    <div className='container'>
      
      <h1 className='article'>Vacunas:</h1>
      <h1 className='article'>Proteje a tus mascotas de las enfermedades</h1>

      <div className='contenidoPrev'>
      <h2>Vacuna y Protección de la trivalente felina</h2>
      <p>Parvovirus felino responsable del pan leucopenia felina. Se trata de un virus DNA con especial tropismo por el epitelio intestinal, la médula ósea o los tejidos linfoides. Es un virus muy contagioso, con una transmisión vía oral. Clínicamente provoca vómitos, deshidratación grave, fiebre elevada, anorexia y diarrea. También provoca daño neurológico.
      ¿Cuándo la debemos administrar la vacuna trivalente felina?
      Todavía se desconoce actualmente el protocolo de vacunación óptimo para inducir inmunidad en cachorros con anticuerpos maternos. Parece ser que el momento ideal en los gatos para administrar la vacuna trivalente felina es a los 2 meses de edad. No vacunar antes del destete pues los anticuerpos de la leche materna podrían neutralizar la vacuna. Si por el contrario dejamos pasar mucho tiempo el gato estará desprotegido, y el refuerzo pasadas cuatro semanas.
      </p>
      <img className="imgMedPrev" src={'https://media.discordapp.net/attachments/987770782677614624/988775675257307176/Diseno_sin_titulo_22.png'} alt="Medicina Preventiva" />
      <h2>Vacunación y protección contra la rabia: perro y gatos </h2>
      <p>Es una infección causada por el virus de la rabia (Rhabdoviridae), virus del género Lyssavirus que se propaga por saliva infectada a través de una herida, ya que no puede atravesar piel intacta. El virus no sobrevive mucho tiempo fuera del hospedador, ya que se trata de un virus frágil, se inactiva rápidamente con la luz solar y el calor.
        Es una enfermedad zoonosis, es decir, puede transmitirse al ser humano.
       Afecta a un gran número de animales, tanto domésticos como salvajes, aunque por su cercanía al hombre, los más implicados en su transmisión son perros y gatos.
       Aunque parece una enfermedad inexistente en la actualidad, lo cierto es que sigue habiendo algunos casos de rabia en animales y humanos.
      </p>

      <h2>¿Cuándo la debemos administrar la vacuna contra la rabia?</h2>
      <p>Prevención:
        Se trata de una enfermedad de declaración obligatoria. Por su gravedad, es considerada una de las zoonosis más importantes del mundo.
        El principal método de lucha contra ella, es la vacunación periódica de los animales.
        Por lo que es obligatoria la vacunación de perros, gatos y hurones mayores de tres meses, siendo imprescindible para su vacunación que estén correctamente identificados con algún sistema de identificación autorizado. Se estipula el tipo de vacuna a emplear, las pautas de revacunación y la administración por veterinarios autorizados.
      </p>
      <img className="imgMedPrev" src={'https://www.animalfiel.com/wp-content/uploads/2021/03/Tabla-Resumen-Calendario-de-Vacunas-en-Perros.jpg'} alt="Medicina Preventiva" />
      <h2>¿Qué es la vacuna polivalente para perros?</h2>
      <p>La vacuna polivalente para perros es una vacuna que introduce antígenos de diferentes enfermedades en el sistema inmunitario, para que las defensas del perro desarrollen anticuerpos con los que prevenir posibles enfermedades.
      El objetivo de la vacuna polivalente para perros es adquirir inmunidad frente a la parvovirosis canina, la para influenza canina, el moquillo y otras afecciones.
      A grandes rasgos te contamos que son estas enfermedades para que te puedas hacer una idea de porque tu perro necesita prevención frente a ellas. La parvovirosis canina es una hepatitis infecciosa provocada por el adenovirus canino de tipo 1, que en cachorros puede ser mortal. La parainfuenza canina, puede causar traqueo-bronquitis infecciosa canina, una enfermedad grave que es comúnmente conocida como tos de las perreras. 
      La polivalente Rábica es un refuerzo que se le debe de administra al perro en cada cierto periodo de tiempo.
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