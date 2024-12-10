function AboutUs() {
  return (
    <div className='flex flex-col justify-start items-center dark:bg-black bg-white p-8 mt-28'>
        <h1 className='text-4xl sm:text-6xl uppercase font-black dark:text-white text-black mb-4 md:mb-8 md:text-8xl '>About Us</h1>
        <div className='flex flex-col md:flex-row justify-between md:items-start mb-16 w-full h-1/2'>
            <h2 className='text-2xl text-center md:text-left sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-black mb-4 md:mb-0 md:mr-8 font-bold md:pb-4'>Together we STRIVE,<br />together we ACHIEVE</h2>
            <p className='text-1xl lg:text-2xl text-white md:w-1/2 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies malesuada nisi commodo consectetur. Fusce sed tortor finibus risus efficitur dignissim a nec nisi. Nam consectetur consectetur urna. Nam egestas pulvinar nulla eu finibus. Ut interdum finibus justo eget lacinia. Etiam aliquet fermentum sem sed pellentesque. Sed fermentum convallis elit.
            </p>
        </div>
        <div className='relative flex justify-center'>
            <div className='absolute inset-0 transform  translate-x-1/4 md:translate-x-1/3 -translate-y-4 bg-gradient-to-r from-purple-500 to-pink-500 md:w-2/3 w-4/5 rounded-2xl'></div>
            <img src='https://picsum.photos/1600/900' alt='About Us' className='relative z-10 md:w-2/3 w-4/5 rounded-2xl md:mt-12 mt-0' />
        </div>
    </div>
  )
}

export default AboutUs