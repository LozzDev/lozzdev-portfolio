const Project = ({ backgroundColor, introduction, image, title, description, tools = [], githubLink, webLink, hasGithub}) => {
  return (
    <div className=" relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:rounded-3xl lg:p-2 min-w-[340px] w-full">
      <div className="group relative flex  flex-col items-center justify-between rounded-xl lg:rounded-2xl bg-gradient-to-b from-black/40 to-transparent transition-all duration-300 overflow-hidden h-70 sm:h-80 md:h-90 xl:h-120">
        {/* Fondo rosa corregido */}
        <div className={`absolute inset-0 -z-1 ${backgroundColor} h-full w-full`} />
  
        <div className="w-full flex flex-row items-center justify-between px-12 py-8 opacity-85">
          <h3 className="max-w-[90%] text-xl  block font-light text-justify lg:text-2xl">
            {introduction}
          </h3>
        </div>
  
        <img 
          src={`${image}`} 
          alt=""
          className="block w-full max-w-[85%] translate-y-6 -rotate-3 rounded-t-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] transition-all duration-300 will-change-transform lg:group-hover:scale-[1.13] lg:group-hover:-rotate-3"
        />
      </div>
      <div className='flex flex-col px-2 mt-5 '>
        <h2 className='my-auto line-clamp-1 text-lg font-bold'>{title}</h2>
        <p className='text-muted-foreground mt-2 '>{description}</p>
        <div className='my-4 flex max-w-fit flex-wrap items-center gap-1'>
          {/* Mapeo de tecnologías */}
          {tools.map((tool, index) => (
            <div key={index} className='inline rounded-sm border-white/[0.34] px-1.5 py-[3px] text-xs fill-pink-600 text-black-400  bg-black'>
              {tool}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col w-full gap-4">
        <div className="flex flex-row place-content-center">
          <a href={`${githubLink}`} className={` flex h-full  gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f] place-content-center ${hasGithub}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"/></path></g></svg>
          
          </a>
          <a href={`${webLink}`} className=" flex h-full gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f] place-content-center justify-self-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
          
          </a>
        </div>
        

      </div>
    </div>
  )
}

export default Project


