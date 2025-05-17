import React from 'react'
import back1 from '../../assets/Home/back2.png'
const DoYouHave = () => {
    return (
        <div className='mt-20 pb-28'>
            

            <div className='grid grid-cols-2  bg-[#60FF0008] shadow-xl items-center rounded-xl'>
                <div>
                    <img src={back1} alt="" />
                </div>
                <div className='flex justify-center'>
                    <div>
                        <h1 className='text-4xl font-bold'>Do you have any questions? <br />Contact us!</h1>
                        <h2 className='text-3xl pt-4'>Subscribe Now</h2>
                        <div className='flex gap-2 mt-8'>
                            <input className='w-full border border-[#a1a1a1] rounded px-3' type="text" placeholder='Enter Your Name'/>
                            <button className='bg-[#205D39] text-white px-5 py-2 rounded'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoYouHave