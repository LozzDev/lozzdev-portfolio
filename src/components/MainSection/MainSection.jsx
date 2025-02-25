import React from 'react';
import './MainSection.css';
import FlowingMenu from '../FlowingMenu/FlowingMenu';

const demoItems = [
    { link: '#qardrobe', text: 'QARDROBE', image: 'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740337071/qardrobe_h1dld0.png' },
    { link: '#color-ease', text: 'COLOR EASE', image: 'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740336543/colorease_sbxw3e.png' },
    { link: '#eye-of-the-doom', text: 'EYE OF THE DOOM', image: 'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740335561/eye-of-the-doom_1_iqorhf.png' },
    { link: '#your-gainz', text: 'Your Gainz🔧', image: 'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740337558/yourgainz_ww4g4p.png' },
    { link: '#magnolia-hotel', text: 'Hotel Magnolia🔧', image: 'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740337698/magnolia_r932se.png' },
    { link: '#mini-projects', text: 'Mini proyectos', image: 'https://res.cloudinary.com/dzecw7i0a/image/upload/v1740337780/miniProjects_p33hrh.png' },
];

const MainSection = () => {
  return (
    <div className='flex flex-col justify-center gap-20 ml-6 mr-6 xl:flex-row place-items-center sm:ml-13 sm:mr-13' >
        <div className='bg-black w-full sm:h-120 mt-12 rounded-3xl flex relative h-70'>
            <img src="https://res.cloudinary.com/dzecw7i0a/image/upload/v1740333253/profile_zixcew.webp" alt="" className='w-full h-full object-contain ' />
        </div>
        <div className='projects bg-white w-full h-120 sm:mt-12 rounded-3xl'>
            <FlowingMenu items={demoItems} />
        </div>
    </div>
  )
}

export default MainSection;
