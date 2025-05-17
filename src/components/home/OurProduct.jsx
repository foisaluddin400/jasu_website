import React from 'react'
import img1 from '../../assets/Home/img1.png'
import img2 from '../../assets/Home/img2.png'
import img3 from '../../assets/Home/img3.png'
import img4 from '../../assets/Home/img4.png'
const OurProduct = () => {
  return (
    <div className='pt-16'>
        <div className='text-center max-w-[1000px] m-auto pb-11'>
            <h1 className='text-4xl font-bold text-[#205D39] pb-2'>Our Products</h1>
            <p className='font-semibold'>Pure, Natural, and Full of Flavor</p>
            <p className='text-[#686868]'>Explore our wide range of premium fruit-based products — from citrus oils and juices to purees and terpene extracts, crafted for food, beverage, fragrance, and chemical industries.</p>
        </div>
        <div className='flex justify-between'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
    </div>
  )
}

export default OurProduct