import React from 'react'
import backImg from '../../assets/Home/backImage.png'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
export const ProfilePage = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-36 text-white"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-25"></div>

        <div className="relative z-10 h-full container m-auto">
          <h1 className='text-3xl font-semibold pb-3'>Profile</h1>
          <p className='flex items-center gap-2'>Home <IoIosArrowForward /> Edit Profile</p>
        </div>
      </div>


      <div className='p-10'>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg  p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-purple-100 mb-2">
            <img
              src="/placeholder.svg"
              alt="Profile picture"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-medium text-gray-800">Mojahid islam</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-green-500 font-medium mb-1">Name</h3>
            <p className="text-gray-700">Mojahid islam</p>
            <div className="h-px bg-gray-100 my-3"></div>
          </div>

          <div>
            <h3 className="text-green-500 font-medium mb-1">Email</h3>
            <p className="text-gray-700">Mojahid@email.com</p>
            <div className="h-px bg-gray-100 my-3"></div>
          </div>

          <div>
            <h3 className="text-green-500 font-medium mb-1">Phone Number</h3>
            <p className="text-gray-700">(555) 987-6543</p>
            <div className="h-px bg-gray-100 my-3"></div>
          </div>

          <div>
            <h3 className="text-green-500 font-medium mb-1">Location</h3>
            <p className="text-gray-700">1234 Maple Avenue, Suite 56</p>
            <p className="text-gray-700">San Diego, California, 92103, USA</p>
            <div className="h-px bg-gray-100 my-3"></div>
          </div>

          <div>
            <h3 className="text-green-500 font-medium mb-1">Product Of Interests</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Grapes", "Bergamot", "Orange", "Mango"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-md text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="h-px bg-gray-100 my-3"></div>
          </div>

          <div>
            <h3 className="text-green-500 font-medium mb-1">About Me</h3>
            <p className="text-gray-700 mb-3">
              With over 8 years of experience in the real estate industry, I specialize in residential and commercial
              properties across San Diego and surrounding areas. My focus is on providing top-notch service tailored to
              meet each client's specific needs. Whether you're buying, selling, or renting, I am here to guide you
              through the process with professionalism and a personal touch.
            </p>
            <p className="text-gray-700">
              I take pride in building long-term relationships and making the home buying/selling process as seamless as
              possible for my clients.
            </p>
          </div>
        </div>

        <Link to={'/profilePage/updateProfile'}><button className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white py-3 rounded-md transition-colors">
          Update Profile
        </button></Link>
      </div>
      </div>
    </div>
  )
}
