import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex sm:m-13 m-6 mb-10 mt-10 text-xl font-light z-3'>
      <div className='author'>
        <h1 className=''>LozzDev</h1>
      </div>
      <div className='sections ml-auto'>
        <ul className='flex gap-4 sm:gap-8 '>
          <li className='cursor-pointer' onClick={() => scrollToSection('about-me')}>
            Sobre mi
          </li>
          <li className='cursor-pointer' onClick={() => scrollToSection('contacto')}>
          🔧Contacto🔧
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
