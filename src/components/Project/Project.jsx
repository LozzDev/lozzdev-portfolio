const Project = ({ backgroundColor, introduction, image, title, description, tools = [], githubLink, webLink }) => {
  return (
    <div className="pointer-events-none relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:pointer-events-auto lg:rounded-3xl lg:p-2 min-w-[340px]">
      <div className="group relative flex size-full flex-col items-center justify-between rounded-xl lg:rounded-2xl bg-gradient-to-b from-black/40 to-transparent transition-all duration-300 overflow-hidden">
        {/* Fondo rosa corregido */}
        <div className={`absolute inset-0 -z-1 bg-${backgroundColor}-600 h-full w-full`} />
  
        <div className="w-full flex flex-row items-center justify-between px-12 py-8 opacity-85">
          <h3 className="max-w-[90%] text-xl hidden md:block font-light text-justify lg:text-2xl">
            {introduction}
          </h3>
        </div>
  
        <img 
          src={`${image}`} 
          alt=""
          className="block w-full max-w-[85%] translate-y-6 -rotate-3 rounded-t-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] transition-all duration-300 will-change-transform lg:group-hover:scale-[1.13] lg:group-hover:-rotate-3"
        />
      </div>
      <div className='mt-6 mb-24 flex flex-col px-2 lg:hidden'>
        <h2 className='my-auto line-clamp-1 text-lg font-bold'>{title}</h2>
        <p className='text-muted-foreground mt-2 text-sm'>{description}</p>
        <div className='my-4 flex max-w-fit flex-wrap items-center gap-1'>
          {/* Mapeo de tecnologías */}
          {tools.map((tool, index) => (
            <div key={index} className='inline rounded-sm border-white/[0.34] px-1.5 py-[3px] text-xs fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black'>
              {tool}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full gap-4">
        <a href="" className=" flex h-fit w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]"></a>
        <a href="" className=" flex h-fit w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]"></a>

      </div>
    </div>
  )
}

export default Project
