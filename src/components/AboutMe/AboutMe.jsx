import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = () => {

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
  };

  return (
    <div className='flex flex-col justify-center gap-5 ml-6 mr-6 place-items-center sm:ml-50 sm:mr-50 mt-20'>
      <div className='w-full flex flex-col sm:min-w-xl'>
        <h1 className='text-3xl mb-4 text-gray-300 text-center'>Sobre mí</h1>

        <p className='text-xl font-light text-justify mb-4 text-gray-300'>👋 ¡Hola! Soy Jesús Manuel, un apasionado por la tecnología y el desarrollo web. Estudiante de Desarrollo Web con pasión por aprender, explorar nuevas tecnologías y crecer profesionalmente en el sector IT  💻.</p>
        

        <p className='text-xl font-light text-justify mb-4 text-gray-300'>🎯 Actualmente, estoy buscando una oportunidad para realizar prácticas en este nuevo año académico, donde pueda aprender de la experiencia de mi equipo y desarrollar mis habilidades en áreas como desarrollo front-end, back-end y diseño de experiencias digitales.</p>
        
        <p className='text-xl font-light text-justify  text-gray-300'>🌟 Soy una persona curiosa, comprometida y con iniciativa, siempre dispuesta a trabajar duro y a aprovechar cada oportunidad para mejorar. Mi objetivo es aportar mi entusiasmo y esfuerzo mientras aprendo de los desafíos y proyectos en los que participe.</p>

      </div>
      
      <div className='w-full  flex  flex-wrap justify-items-center gap-2 text-lg lg:gap-4 sm:min-w-xl '>
      <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342225/react_j2ut8m.webp" width={'20px'} /> React
      </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342231/laravel_pltrkd.webp" width={'20px'} /> Laravel
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410288/postman_gzdmvl.svg" width={'25px'} /> Postman
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342253/php_ijmipq.webp" width={'20px'} /> PHP
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342222/java_hpqww4.webp" width={'20px'} /> Java
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342233/mysql_qu2ily.webp" width={'35px'} /> 
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342227/sql_r3agjq.webp" width={'35px'} /> 
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342228/sqlite_dqmged.webp" width={'50px'} /> 
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342231/mongoDB_a6qjym.webp" width={'75px'} /> 
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740407582/JavaScript-logo_jzno0x.png" width={'20px'} /> JavaScript
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410229/Typescript_logo_2020.svg_aguig6.png" width={'20px'} />Typescript 
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342221/html5_lqdydh.webp" width={'20px'} /> HTML
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410074/purple-css-logo_uotbut.webp" width={'20px'} /> CSS
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410698/Tailwind_CSS_Logo.svg_slxlus.png" width={'25px'} /> TailWind
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342257/bootstrap_nmxccf.webp" width={'25px'} /> Bootstrap 
        </div>
        
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740407385/git_ubjjvj.png" width={'20px'} /> Git
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740407540/github_egdg3z.png" width={'25px'} /> Github 
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410033/framer-icon-2048x2048-msauaaio_uxqqgm.png" width={'20px'}/> Framer
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410147/vercel_jdekqd.png" width={'20px'} />Vercel 
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410189/Figma-logo.svg_cteqcy.png" width={'13px'} /> Figma
        </div>
        
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410397/Tux.svg_iczxsm.png" width={'20px'} />Linux
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410500/Python-logo-notext.svg_elpuid.png" width={'25px'} /> Python
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410538/trello_fztfez.svg" width={'20px'} /> Trello
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410579/Npm-logo.svg_gvo7o8.png" width={'40px'} /> 
        </div>
        <div className='flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm'>
          <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740410797/jest-logo-png-transparent_ukz9of.png" width={'20px'} /> Jest
        </div>
        
        
      </div>
    </div>
  )
}

export default AboutMe;

