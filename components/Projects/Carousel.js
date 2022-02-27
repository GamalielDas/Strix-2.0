import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '50px',
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    
  }

  const projectCards = [
    {
      imageSrc:
        '/portfolio/dev.svg',
      clientName: 'Dora Infotech',
      description: 'Lorem ipsum dolor sit amet, consectur dolori Lorem ipsum dolor sit amet, consectur dolori Lorem ',
      typeText: 'Website',
      features: ['Dubai', '30 Days'],
    },
    {
      imageSrc:
        '/portfolio/dev.svg',
      clientName: 'Newton Sky5',
      description: 'Lorem ipsum dolor sit amet, consectur dolori Lorem ipsum dolor sit amet, consectur dolori Lorem',
      typeText: 'Website',
      features: ['Dubai', '30 Days'],
    },
    {
      imageSrc:
        '/portfolio/dev.svg',
      clientName: 'Newton Sky5',
      description: 'Lorem ipsum dolor sit amet, consectur dolori Lorem ipsum dolor sit amet, consectur dolori Lorem ',
      typeText: 'Website',
      features: ['Dubai', '30 Days'],
    },
    {
      imageSrc:
      '/portfolio/dev.svg',
    clientName: 'Newton Sky5',
    description: 'Lorem ipsum dolor sit amet, consectur dolori Lorem ipsum dolor sit amet, consectur dolori Lorem ',
    typeText: 'Website',
    features: ['Dubai', '30 Days'],
    },
  ]

  return (

    < div className="grid grid-cols-1  bg-[url('/portfolio/bgcheck.jpg')] bg-cover bg-no-repeat font-['Roboto_Condensed'] " >
       <img src="/portfolio/Top.png" className=' w-full h-10 '/>
          <div className="grid grid-cols-1 drop-shadow-xl  ">
          
          <h1 className="text-2xl text-center mt-10 mb-5 md:mt-20  sm:text-4xl font-extrabold lg:text-[36px]  justify-self-center rounded-full  rounded-b-none p-3 md:p-5 bg-[#00ADB5] border-2 border-white md:border-4 w-5/6 lg:w-4/6 text-white px-10"> PORTFOLIO</h1>
          <h1 className="text-sm md:text-sm text-center  mb-16  lg:text-[20px] mt-6  justify-self-center rounded-full p-1 lg:p-3 md:w-3/5 lg:w-3/6 font-extrabold px-5  text-gray-900 md:px-10"> OUR || Loren Ipsum yuvaraj gypsum on gunaism </h1>
   
     </div>
    <div className=' justify-self-center  w-full md:w-4/5 lg:w-4/6 overflow-x-hidden mx-0 my-auto mb-20 '>
    
            <Slider ref={setSliderRef} {...sliderSettings} className="flex    ">
              {projectCards.map((card, index) => (
                <div key={index} className='flex h-full  justify-between bg-white  rounded-t-[70px] rounded-l-[70px]   rounded-b-[70px] mb-5  p-5 flex-col border-4 border-gray/[0.1] '>
                  <img src={card.imageSrc} alt={card.clientName} className=' w-full h-48 object-cover rounded-t-[50px]  rounded-b-3xl' />
                  <div className='  py-6'>
                    <div className='flex justify-between  items-center mb-5'>
                      <h2 className=' text-xl font-bold'>{card.clientName}</h2>
                      <span className=' text-[#2d3748]   '>{card.typeText}</span>
                    </div>
                    <p className='text-center'>{card.description}</p>
                    <ul className='text-center mt-5'>
                      {card.features.map((feature, index) => (
                        <li className=' ' key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className=' w-4/5  mx-auto'>
                  <button className='   rounded-3xl bg-[#222831] rounded-b-[50px]  text-cyan-50 cursor-pointer px-4 py-3 text-base w-full  transition-shadow mb-5 '>KNOW MORE</button>
                    </div> 
                </div>
              ))}
            </Slider>
            
      <div className=' flex justify-center mt-16  '>
        <button className='  w-10 h-10 lg:w-20 lg:h-16 bg-[#00ADB5]  rounded-full  text-white cursor-pointer justify-center mr-10' onClick={sliderRef?.slickPrev}>
          <FaChevronLeft className=' ml-4 lg:w-10 lg:h-6' />
        </button>
        <button className=' w-10 h-10 lg:w-20 lg:h-16 bg-[#00ADB5] rounded-full  text-white cursor-pointer ' onClick={sliderRef?.slickNext}>
          <FaChevronRight className=' ml-4 lg:w-10 lg:h-6' />
        </button>
      </div>
    </div>
    <img src="/portfolio/bg-project8.png" className=' w-full h-24 '/>
    
    </div>

  )
}
