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
    <div className='flex flex-col justify-center gap-20 ml-6 mr-6 xl:flex-row place-items-center sm:ml-13 sm:mr-13 mt-20'>
      <div className='w-full flex flex-col items-center h-100'>
        <h1 className='text-4xl font-bold mb-4'>Sobre mí</h1>

        <p className='text-xl font-light text-justify mb-4'>👋 ¡Hola! Soy Jesús Manuel, un apasionado por la tecnología y el desarrollo web.</p>
        <p className='text-xl font-light text-justify mb-4'>💻 Estudiante de Desarrollo Web con pasión por aprender, explorar nuevas tecnologías y crecer profesionalmente en el sector IT.</p>
        

        <p className='text-xl font-light text-justify mb-4'>🎯 Actualmente, estoy buscando una oportunidad para realizar prácticas en este nuevo año académico, donde pueda aprender de la experiencia de mi equipo y desarrollar mis habilidades en áreas como desarrollo front-end, back-end y diseño de experiencias digitales.</p>
        
        <p className='text-xl font-light text-justify mb-4'>🌟 Soy una persona curiosa, comprometida y con iniciativa, siempre dispuesta a trabajar duro y a aprovechar cada oportunidad para mejorar. Mi objetivo es aportar mi entusiasmo y esfuerzo mientras aprendo de los desafíos y proyectos en los que participe.</p>

      </div>
      
        
      <div className='flex flex-col rounded-3xl h-100 w-full items-center mt-77 sm:mt-15 md:mt-0 '>
        <h1 className='text-4xl font-bold mb-4'>Stack</h1>
        <Slider {...settings} className='bg-black h-[400px] w-75 rounded-2xl justify-center sm:w-120 items-center p-10'>
          <div className='flex items-center justify-center h-[200px] w-full'>
            <h2 className='text-xl text-white text-center'>Back-end</h2>
            <div className="flex space-x-4 mt-8 items-center justify-center">
              <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342222/java_hpqww4.webp" width={'80px'}/>
              <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342253/php_ijmipq.webp" width={'80px'}/>
            </div>
            <div className="flex space-x-4 mt-8 items-center justify-center">
              <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342231/laravel_pltrkd.webp" width={'80px'} />
            </div>
          </div>

          <div className='flex items-center justify-center h-[200px] w-full'>
            <h2 className='text-xl  text-white text-center '>Front-end</h2>
            <div className="flex flex-col space-x-4 mt-8 items-center justify-center">
              <div className="flex space-x-4 items-center justify-center">
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342257/bootstrap_nmxccf.webp" width={'60px'} />
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342229/tailwind_hkrzq0.webp" width={'60px'} />
              </div>
              <div className="flex space-x-4 mt-4 items-center justify-center">
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342225/react_j2ut8m.webp" width={'60px'}/>
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342223/javascript_xihpp6.webp" width={'60px'} />
              </div>
              <div className="flex space-x-4 mt-4 items-center justify-center mr-5">
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342221/html5_lqdydh.webp" width={'60px'} />
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342220/css3_w4aajd.webp"  width={'60px'}/>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center h-[200px] w-full'>
            <h2 className='text-xl  text-white text-center '>Data-base</h2>
            <div className="flex flex-col space-x-4 mt-8 items-center justify-center ml-5">
              <div className="flex space-x-4 mt-4 items-center justify-center mr-5">
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342228/sqlite_dqmged.webp" width={'100px'}/>
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342227/sql_r3agjq.webp" width={'100px'}/>
              </div>
              <div className="flex space-x-4 mt-4 items-center justify-center mr-5">
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342231/mongoDB_a6qjym.webp" width={'100px'} className='mt-10'/>
                <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740342233/mysql_qu2ily.webp" width={'100px'}/>
              </div>
            </div>
          </div>
        </Slider>

      </div>
        
          
      
    
    
    </div>
  )
}

export default AboutMe;

