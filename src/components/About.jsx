import { useEffect, useState } from 'react'
import { SlidePro } from './slide_projects/SlidePro'
import { SlideButton } from './slideButon/SlideButton'

const slideArr = {
  MUSIC: [
    {
      _id: 1,
      title: 'Red Hot Chili Peppers',
      path: '#',
      description: "Red Hot Chili Peppers es una de las mejores bandas de funk, pop y rock alternativo. Tienen grandes canciones como Under the Bridge, Give It Away, Scar Tissue, Californication, By the Way, Dani California, Can't Stop, Soul to Squeeze, Higher Ground y Breaking the Girl.",
      img: 'https://cdn.getcrowder.com/images/f9643150-2bcf-4a87-8e56-c64c8a0b71e9-rhhh.jpg'
    },
    {
      _id: 2,
      title: 'Arctic Monkeys',
      path: '#',
      description: 'Arctic Monkeys es una banda de rock alternativo originaria de Inglaterra. Conocidos por su estilo musical único y letras inteligentes, la banda ha ganado muchos premios y se ha convertido en una de las favoritas de los amantes del rock en todo el mundo.',
      img: 'https://akamai.sscdn.co/uploadfile/letras/fotos/f/6/e/f/f6ef67111b9736b66b7d5b848d6d8612.jpg'
    },
    {
      _id: 3,
      title: 'Parcels',
      path: 'chat',
      description: 'The Parcels es una banda de música electrónica y funk australiana, con un estilo único y emocionante. Algunas de sus mejores canciones incluyen "Tieduprightnow", "Lightenup" y "Withorwithout".',
      img: 'https://www.mondosonoro.com/wp-content/uploads/2021/11/parcels-entrevista-portada.jpg'
    },
    {
      _id: 4,
      title: 'Mr Kitty',
      path: 'game',
      description: 'Mr Kitty es un artista de música electrónica de Texas con un sonido único que combina synth-pop, darkwave y post-punk. Algunas de sus mejores canciones incluyen "After Dark", "Hollow", "Spirit of the Night" y "Cycle of Violence".',
      img: 'https://spillmagazine.com/wp-content/uploads/2019/03/Mr-Kitty.jpg'
    },
    {
      _id: 5,
      title: 'fito y fitipaldis',
      path: '#',
      description: 'Fito y Fitipaldis es una banda española liderada por Fito Cabrales, reconocida por su mezcla de rock, blues, pop y country. Han producido éxitos como "Por la boca vive el pez", "Antes de que cuente diez" y "La casa por el tejado".',
      img: 'https://www.dodmagazine.es/wp-content/uploads/2022/06/fito-fitipaldis.jpg'
    },
    {
      _id: 6,
      title: 'wara',
      path: 'game',
      description: 'La banda boliviana de música folklórica es reconocida por sus destacados maestros y su magnífica interpretación de las canciones más icónicas de este género. Entre sus temas más populares se encuentran "Esperanzas", "Nacimiento de la energía" y "Illimani", entre otros éxitos.',
      img: 'https://boliviaverifica.bo/wp-content/uploads/2020/07/Pie-de-foto-2-agrupaci%C3%B3n-Wara-1024x512.jpg'
    }
  ],
  MOVIES: [
    {
      _id: 1,
      title: 'Lord Of The Rings',
      path: '#',
      description: 'Es una saga épica de fantasía escrita por J.R.R. Tolkien que sigue la aventura de Frodo Bolsón y sus amigos para destruir el Anillo Único y salvar el mundo de la destrucción. La obra es reconocida por su mitología, magia y batallas épicas, y ha sido adaptada al cine con gran éxito.',
      img: 'https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_large/public/blog/lord-of-the-rings-blog-1138x658-min.jpg'
    },
    {
      _id: 2,
      title: 'Everything Everywhere All at Once',
      path: '#',
      description: 'Es una película de ciencia ficción y acción de los hermanos Daniels, protagonizada por Michelle Yeoh. La historia sigue a una mujer mayor en una aventura interdimensional para salvar al mundo de una amenaza cósmica. La película ha sido elogiada por su originalidad y entretenimiento.',
      img: 'https://rialta.org/wp-content/uploads/2022/11/Imagen-promocional-de-%E2%80%98Everything-Everywhere-All-at-Once.jpg'
    },
    {
      _id: 3,
      title: 'Saga Caballo de la noche',
      path: 'chat',
      description: 'La trilogía de Batman de Christopher Nolan cuenta la transformación de Bruce Wayne en Batman y su lucha contra el crimen en Gotham City. Con un tono oscuro y realista, la trilogía es conocida por la actuación de Christian Bale como Batman, y presenta villanos icónicos como el Joker, Catwoman y Bane.',
      img: 'https://i.pinimg.com/originals/3d/f9/ca/3df9caa2aada288f979b2e5fa83ef274.jpg'
    },
    {
      _id: 4,
      title: 'Perfect Blue',
      path: 'game',
      description: 'Es una película de anime psicológica dirigida por Satoshi Kon. La historia sigue a Mima Kirigoe, una ex ídolo pop que busca iniciar una carrera como actriz y se enfrenta a una serie de sucesos perturbadores mientras lidia con su identidad y su cordura. La película es conocida por su compleja trama y su reflexión sobre la fama, la identidad y la percepción. "Perfect Blue" ha sido aclamada por la crítica y considerada una de las mejores películas de anime de todos los tiempos.',
      img: 'https://i.ytimg.com/vi/wpLusWo-it4/maxresdefault.jpg'
    }
  ],
  SERIES: [
    {
      _id: 1,
      title: 'Dr. House',
      path: '#',
      description: 'Dr. House es una serie de televisión que sigue al Dr. Gregory House, un médico especialista en enfermedades inusuales y extrañas. La serie es conocida por su trama intrigante, su humor sarcástico y la interpretación magistral del actor Hugh Laurie en el papel principal.',
      img: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/208798a61b0e82251df8d1d5e200c4dfc2774b31a7d1bded2de56fcdb7badc44._UY500_UX667_RI_V_TTW_.jpg'
    },
    {
      _id: 2,
      title: 'The Wire',
      path: '#',
      description: '"The Wire" es una serie de televisión aclamada por la crítica que se centra en la vida en la ciudad y cómo está relacionada con el crimen organizado, la política y la economía. La serie sigue a diversos personajes, incluyendo policías, traficantes de drogas, políticos y periodistas, mientras exploran los problemas y la complejidad de la vida urbana en una ciudad estadounidense.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifFKgI5vlkN7xKN4hx2aNrXFdzUKoMdXhDQ&usqp=CAU'
    },
    {
      _id: 3,
      title: 'Twin Peaks',
      path: 'chat',
      description: 'Twin Peaks es una serie de televisión de drama y misterio que se emitió en la década de 1990. Creada por David Lynch y Mark Frost, sigue la investigación del agente del FBI Dale Cooper sobre el asesinato de la joven Laura Palmer en el extraño pueblo de Twin Peaks. Con una narrativa única, personajes fascinantes y una banda sonora icónica, Twin Peaks se ha convertido en un clásico de la televisión.',
      img: 'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/S/pv-target-images/7e4118ab787704ff4926a32eb0b7526911a0362a576e70c1b404e3f3251664e6._RI_SX720_FMjpg_.jpg'
    },
    {
      _id: 4,
      title: 'True detective',
      path: 'game',
      description: 'Es una serie de televisión estadounidense aclamada por la crítica. La primera temporada sigue a dos detectives que investigan un caso de asesinato en Louisiana. La serie es conocida por su atmósfera oscura y su guión complejo.',
      img: 'https://www.famousbirthdays.com/group_images/medium/true-detective-show.jpg'
    }
  ]
}

export const About = () => {
  const [slideData, setSlideData] = useState(slideArr.MUSIC)

  const handleSlideButton = (keyName) => {
    // eslint-disable-next-line dot-notation
    setSlideData(slideArr[keyName])
  }
  useEffect(() => {

  }, [slideData])
  return (
    <main>
      <section className='about_container'>
        <div className='abouth_file'>
          <p>Hola, soy Juan Carlos, un desarrollador junior con experiencia en React, MySQL, MongoDB y Express. Me apasiona el desarrollo web y móvil, y disfruto trabajar en equipo para encontrar soluciones efectivas e innovadoras. Siempre estoy buscando nuevos desafíos y oportunidades para crecer profesionalmente y mejorar mis habilidades como desarrollador.</p>

          <img src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='electric info img' />
        </div>
        <hr />
        <h2> SOBRE MI... </h2>
        <SlidePro data={slideData} footer={false} />
        <SlideButton data={slideArr} handleClick={handleSlideButton} />
        <div />
      </section>
    </main>
  )
}
