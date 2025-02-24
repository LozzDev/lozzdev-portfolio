import React from 'react';
import Header from './components/Header/Header';
import TextPresentation from './components/TextPresentation/TextPresentation';
import MainSection from './components/MainSection/MainSection';
import AboutMe from './components/AboutMe/AboutMe';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

const Home = () => {
  return (
    <div className=''>
      <Header/>
      <TextPresentation text="Desarrollador Web Full Stack, creando Soluciones digitales Personalizadas y centradas en el Usuario." disabled={false} speed={3} className='ml-13 mr-13 text-2xl sm:text-3xl lg:text-6xl md:text-5xl leading-10 lg:leading-20 md:leading-15 text-center sm:text-justify'/>
      <MainSection/>
      <AboutMe/>
      <Projects/>
      <Footer/>


    </div>
    
  )
}

export default Home