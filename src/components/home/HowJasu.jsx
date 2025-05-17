import React from 'react'
import back from '../../assets/Home/back1.png'
import video from '../../assets/Home/videos.mp4'
const HowJasu = () => {
    return (
        <div className='mt-28'>
            <div>
                <div
                    className=" bg-cover bg-center py-16 text-white"
                    style={{ backgroundImage: `url(${back})` }}
                >
                    <div className='text-center pb-11'>
                        <h1 className='text-4xl font-bold text-[#205D39] pb-2'>How Jasu works?
                        </h1>
                       
                        <p className='text-[#686868] max-w-[900px] m-auto'>Our years of experience in the market have allowed us to create a wide network of citrics producers and their derivatives all around the world, from producers to manufacturers.In addition we have the contacts and the transportation network to freight forward from the producer to your company’s facilities.</p>
                    </div>

                    {/* video  */}
                    <div className='flex justify-center'>
                        <video
                            src={video}
                            controls
                            autoPlay
                            loop
                            muted
                            className='w-full max-w-3xl rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowJasu