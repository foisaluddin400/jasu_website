import React from 'react'

import bc from '../../assets/Home/nm.png'
import { FiDownload } from 'react-icons/fi'
import img1 from '../../assets/Home/ss.png'
import img2 from '../../assets/Home/dd.png'
import img3 from '../../assets/Home/gg.png'
import { Link } from 'react-router-dom'
import img4 from '../../assets/Home/zz.png'
import img5 from '../../assets/Home/xx.png'
import img6 from '../../assets/Home/cc.png'
import img7 from '../../assets/Home/vv.png'
import DoYouHave from '../home/DoYouHave'
const CategogueDetails = () => {
    const fruitsData = [
        { name: 'Mango', image: img1 },
        { name: 'Orange', image: img2 },
        { name: 'Bergamot', image: img3 },
        { name: 'Grapes', image: img3 },
        { name: 'Strawberry', image: img3 },
        { name: 'Grapefruit White', image: img3 },
    ];
    const processData = [
  { name: 'CPO', image: img4, description: 'Cold Pressed Oil is a compound extracted from plants.' },
  { name: 'Decanal', image: img5, description: 'Cold Pressed Oil is a compound extracted from plants.' },
  { name: 'Concentrate', image: img6, description: 'Cold Pressed Oil is a compound extracted from plants.' },
  { name: 'Concentrate Clarified', image: img7, description: 'Cold Pressed Oil is a compound extracted from plants.' },
  { name: 'Concentrate', image: img6, description: 'Cold Pressed Oil is a compound extracted from plants.' },
  { name: 'Concentrate Clarified', image: img7, description: 'Cold Pressed Oil is a compound extracted from plants.' },
];
    return (
        <div className='container m-auto pt-20'>
            <div className='flex items-center gap-20'>
                <div className=" bg-white relative items-center object-cover p-4 rounded shadow-xl">
                    <img src={img3} alt='fds' className="w-[800px] mb-2" />
                    <img className='absolute w-full top-0 left-0' src={bc} alt="" />
                </div>
                <div>
                    <h1 className='text-[#205D39] text-4xl font-bold pb-5'>CPO - Mandarin Green</h1>
                    <p className='font-bold'>Description</p>
                    <p className='pt-5'>Cold Pressed Oil is a compound extracted from plants. The oils capture the plant’s scent and flavor. Unique aromatic compounds give each essential oil its characteristic essence. They are obtained through distillation (via steam and/or water) or mechanical methods, such as cold pressing.</p>
                    <p>Info</p>
                    <button className='bg-[#205D39] mt-9 flex items-center gap-7 text-white px-6 py-2 rounded'>CPO Mandarin Green Specs <FiDownload className='text-lg' /></button>
                </div>
            </div>
            <div className='py-28 pt-36'>
                <h1 className='text-center text-[#205D39] text-4xl font-bold pb-16'>Other fruits with same process </h1>

                <div className="grid grid-cols-5 gap-6">
                    {fruitsData.map((fruit, index) => (
                        <Link to={'/categogue/categogueDetails'}><div key={index} className="flex  flex-col bg-white items-center  p-4 rounded-2xl shadow-md">

                            <img src={fruit.image} alt={fruit.name} className="w-24 h-24 mb-2" />
                            <p className="text-center font-semibold text-lg pt-9">{fruit.name}</p>

                            <img className='absolute w-[130px]' src={bc} alt="" />
                        </div></Link>
                    ))}
                </div>
            </div>

            <div className='pt-16 pb-16'>
                <h1 className='text-center text-[#205D39] text-4xl font-bold pb-16'>Other processes with the same fruit</h1>

                <div className="grid grid-cols-3 gap-5">
                    {processData.map((process, index) => (
                        <div key={index} className="flex  items-center bg-white border p-4 rounded-lg shadow-md">
                            <img src={process.image} alt={process.name} className="w-16 h-16 " />
                            <div>
                                <p className=" font-semibold text-lg">{process.name}</p>
                                <p className=" text-sm text-gray-500">{process.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

<DoYouHave></DoYouHave>

        </div>
    )
}

export default CategogueDetails