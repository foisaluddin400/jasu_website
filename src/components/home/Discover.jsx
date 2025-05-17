import React from 'react'
import img1 from '../../assets/Home/d1.png'
import img2 from '../../assets/Home/d2.png'
import img3 from '../../assets/Home/d3.png'
const Discover = () => {
    return (
        <div className='pt-20 '>
            <div className='text-center max-w-[1000px] m-auto pb-16'>
                <h1 className='text-4xl font-bold text-[#205D39] pb-2'>Discover What We Do Best</h1>
                <p className='font-semibold'>From freight logistics to financial solutions — explore how our services <br /> empower your business every step of the way.</p>

            </div>
            <div>
                <div className='flex gap-4 items-center'>
                    <img className='w-[500px]' src={img1} alt="" />
                    <div>
                        <h1 className='text-3xl font-semibold'>Customer Service</h1>
                        <p className='font-semibold pt-2'>Our team is dedicated to providing timely follow-up, providing solutions and resolving the questions and doubts of our clients.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex gap-4 justify-between items-center'>

                    <div>
                        <h1 className='text-3xl font-semibold'>Freight forwarding
                        </h1>
                        <p className='font-semibold pt-2'>We are suppliers with global reach. Our agents coordinate the logistics’ service from end to end.
                        </p>
                    </div>
                    <div className=''>
                    <img className='w-[500px]' src={img2} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className='flex gap-4 items-center'>
                    <img className='w-[500px]' src={img3} alt="" />
                    <div>
                        <h1 className='text-3xl font-semibold'>Financial Services
                        </h1>
                        <p className='font-semibold pt-2'>We secure the transaction by covering both parties:
                            Suppliers: Purchase order financing and credit protection.
                            Customers: Supply chain financing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover