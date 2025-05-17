import React from 'react'
import hero from '../../assets/Home/hero.png'
const Hero = () => {
    return (
        <div>
            <div className='grid grid-cols-2 h-[80vh] gap-11'>
                <div className='flex items-center'>
                    <div>
                        <h1 className='text-6xl font-bold'>Welcome to
                            <span className='text-[#205D39]'> JASU</span>
                        </h1>

                        <div className=''>
                            <p className='pt-6'>We’re a trusted leader in fruit-based solutions — specializing in citrus <span className='font-semibold'>oils, D-limonene, terpenes, juices, and fruit</span> purees for the food, beverage, fragrance, and chemical industries.</p>
                            <p className='pt-6'>👉 Explore our products and services to see how we can power your next innovation!</p>
                        </div>
                        <button className='bg-[#205D39] mt-9 text-white px-4 py-2 rounded'>Explore Now</button>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero