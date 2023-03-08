import React from 'react'

const Hero = ({ darkMode }) => {
  const overlayClass = darkMode ? 'bg-white/40' : 'bg-black/40';
  const textColorClass = darkMode ? 'text-black' : 'text-gray-200';

  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className={`absolute w-full h-full max-h-[500px] flex flex-col justify-center ${overlayClass}`}>
                <h1 className={`px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${textColorClass}`}>The <span className='text-orange-500'>Best</span></h1>
                <h1 className={`px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${textColorClass}`}> <span className='text-orange-500'>Foods</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
    </div>
  )
}
export default Hero
