import React from 'react'
import Project from '../Project/Project'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center gap-5 ml-6 mr-6 place-items-center sm:ml-6 sm:mr-6 mt-10 '>
        <h1 className='text-3xl mb-4 text-gray-300 text-center'>Proyectos</h1>
        <div className='flex flex-col  justify-center place-content-center gap-5 lg:flex-row md:gap-5 '>
            <Project backgroundColor={'bg-green-600'} introduction={'Landing de Startup de moda y blockchain sostenible'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740423008/qardrobe_preview_edplqm.png'} tools={['Figma', 'Framer']} title={'Qardrobe'} description={'Qardrobe es una plataforma que revoluciona la moda sostenible a través de blockchain, permitiendo rastrear el origen, materiales y procesos de fabricación de cada prenda. Con un sistema seguro e inmutable, garantizamos transparencia total para consumidores y marcas, promoviendo decisiones de compra más conscientes.'} hasGithub={'hidden'}/>
            <Project backgroundColor={'bg-gray-500'} introduction={'Aplicación web de contraste de color'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740502941/colorease_gwjzop.png'} title={'ColorEase'} description={'ColorEase es una herramienta diseñada para ayudar a desarrolladores y diseñadores a garantizar la accesibilidad visual en sus proyectos mediante la verificación del contraste de color 🎨. El sitio web permite a los usuarios comprobar paletas de colores personalizadas y verificar si cumplen con los estándares WCAG (Pautas de Accesibilidad para el Contenido Web), asegurando que el contenido sea legible para personas con discapacidades visuales o daltonismo 👀.'} tools={['React', 'JavaScript', 'Bootstrap', 'Figma', 'Git', 'Github', 'Vercel', 'Trello']}/>
        </div>
        <div className='flex flex-col justify-center gap-5 lg:flex-row md:gap-5 '>
            <Project/>
            <Project/>
        </div>
        
    </div>
  )
}

export default Projects