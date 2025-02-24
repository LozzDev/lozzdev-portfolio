import React from 'react'
import Project from '../Project/Project'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center gap-5 ml-6 mr-6 place-items-center sm:ml-6 sm:mr-6 mt-10 '>
        <h1 className='text-3xl mb-4 text-gray-300 text-center'>Proyectos</h1>
        <div className='flex flex-col grid-cols-2 justify-center gap-5 md:flex-row md:gap-5 '>
            <Project backgroundColor={'green'} introduction={'Landing de Startup de moda y blockchain sostenible'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740423008/qardrobe_preview_edplqm.png'} tools={['a','a','a','a','a','a','a','a','a','a','a','a',]} title={'Qardrobe'} description={'aslñikdhasoñlfhsdalñfkhsafp ashlñfohasflñoisahfas fasñofhsañofihasño fhsañofihasñolifh añsolfi hañ sañldhasñolidhaspñodih asñido hñasolidhasñoldhiasñoldih asoñldih ñasolidhñolasi hdñolasidh ñasolih dñolsih dñol hsiañdlihasñldfhiasñol fhsadñfl ihsdañl fihdlñ fidsh'}/>
            <Project backgroundColor={'green'} introduction={'Landing de Startup de moda y blockchain sostenible'} image={'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740423008/qardrobe_preview_edplqm.png'}/>
        </div>
        <div className='flex flex-col grid-cols-2 justify-center gap-5 md:flex-row md:gap-5 '>
            <Project/>
            <Project/>
        </div>
        
    </div>
  )
}

export default Projects