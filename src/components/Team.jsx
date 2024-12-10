import React from 'react'

function Team() {
  return (
    <div id = "our-team" className='flex flex-col justify-start items-center dark:bg-black bg-white p-8'>
      <div className='text-4xl sm:text-6xl uppercase font-black dark:text-white text-black mb-4 md:mb-8 md:text-8xl '>Our Team</div>
      <div className='grid grid-cols-3 gap-4'>
        <img src='https://picsum.photos/300/400' alt='Team' className='w-full h-auto' />
        <img src='https://picsum.photos/300/400' alt='Team' className='w-full h-auto' />
        <img src='https://picsum.photos/300/400' alt='Team' className='relative w-full h-auto top-4' />
        <img src='https://picsum.photos/300/400' alt='Team' className='w-full h-auto' />
        <img src='https://picsum.photos/300/400' alt='Team' className='w-full h-auto' />
      </div>
    </div>
  )
}

export default Team