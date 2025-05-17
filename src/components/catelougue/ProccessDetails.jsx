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
import { Select } from 'antd'
const ProccessDetails = () => {
    const fruitsData = [
        { name: 'Mango', image: img1 },
        { name: 'Orange', image: img2 },
        { name: 'Bergamot', image: img3 },
        { name: 'Grapes', image: img3 },
        { name: 'Strawberry', image: img3 },
        { name: 'Grapefruit White', image: img3 },
    ];
    const handleChange = value => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };
    return (
        <div className='container m-auto pt-20'>
            <div className='flex items-center gap-20'>
                <div className=" bg-white  items-center p-4 rounded shadow-xl">
                    <img src={img4} alt='fds' className="w-[800px] mb-2" />

                </div>
                <div>
                    <h1 className='text-[#205D39] text-4xl font-bold pb-5'>CPO - Mandarin Green</h1>
                    <p className='font-bold'>Description</p>
                    <p className='pt-5'>Cold Pressed Oil is a compound extracted from plants. The oils capture the plant’s scent and flavor. Unique aromatic compounds give each essential oil its characteristic essence. They are obtained through distillation (via steam and/or water) or mechanical methods, such as cold pressing.</p>
                    <p>Info</p>

                </div>
            </div>
            <div className='py-16 pt-36'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-semibold pb-16'>Discover the main citrics and fruits we handle</h1>
                    <Select
                        labelInValue
                        defaultValue={{ value: 'lucy', label: 'Sort By' }}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack (100)',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy (101)',
                            },
                        ]}
                    />
                </div>

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



            <DoYouHave></DoYouHave>

        </div>
    )
}

export default ProccessDetails