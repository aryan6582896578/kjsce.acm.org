import React from 'react'
import events from '../data/events.json'

function Event() {
  return (
    <div className='flex flex-col justify-center items-center p-8 md:mt-8 mt-4'>
      <h1 className='text-4xl uppercase font-black dark:text-white text-black md:px-8 mb-4 pb-4 md:mb-8 border-b-cyan-400 border-b-2'>Our Events</h1>
        {
            events.map((event, index) => (
            <div key={index} className='flex flex-col md:flex-row rounded-2xl w-full mb-8'>
                <img
                    src='https://picsum.photos/400/300'
                    alt='Event'
                    className={`lg:w-1/2 md:w-1/3 w-full h-auto rounded-2xl ${index % 2 !== 0 ? 'md:order-2' : ''}`}
                />
                <div className='flex flex-col justify-center items-start md:w-2/3'>
                    <div className='md:text-6xl sm:text-3xl text-2xl text-center dark:text-white text-black font-bold p-4 pb-1'>
                        {event.title}
                    </div>
                    <p className='text-1xl md:text-2xl text-white text-justify pl-4'>Date: {event.date}</p>
                    <p className='text-1xl md:text-2xl text-white text-justify p-4'>
                        {event.description}
                    </p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Event