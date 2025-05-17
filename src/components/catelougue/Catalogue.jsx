import React, { useState } from 'react';
import img1 from '../../assets/Home/ss.png'
import img2 from '../../assets/Home/dd.png'
import img3 from '../../assets/Home/gg.png'
import bc from '../../assets/Home/nm.png'
import img4 from '../../assets/Home/zz.png'
import img5 from '../../assets/Home/xx.png'
import img6 from '../../assets/Home/cc.png'
import img7 from '../../assets/Home/vv.png'
import { Link } from 'react-router-dom';
// Example Data (You can replace these arrays with your actual data)
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

const Catalogue = () => {
  const [activeTab, setActiveTab] = useState('fruits');

  // Function to switch between tabs
  const switchTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="pt-16">
      <div className="  mb-9">
        <div className="flex space-x-4 ">
          {/* Tabs to switch between Fruits and Processes */}
          <div className='border p-[2px] border-black rounded flex'>
            <button
              onClick={() => switchTab('fruits')}
              className={`px-16 py-2 rounded font-semibold ${activeTab === 'fruits' ? 'bg-[#022C22] text-white' : 'bg-transparent  text-black'}`}
            >
              By Fruits
            </button>
            <button
              onClick={() => switchTab('processes')}
              className={`px-16 py-2 rounded font-semibold ${activeTab === 'processes' ? 'bg-[#022C22] text-white' : 'bg-transparent  text-black'}`}
            >
              By Process
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-8">
          <div className='w-full flex'>
            <input
              type="text"
              placeholder="Search Your Catalogue"
              className="p-2 border w-full border-gray-300 rounded-l focus:outline-none"
            />
            <button className='bg-[#205D39] text-white px-4 py-2 rounded-r'>Search</button>
          </div>
          <button className=" text-black bg-white shadow text-center px-3 pr-4 py-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6h12M10 12h12M10 18h12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Display content based on the active tab */}
      {activeTab === 'fruits' ? (
        <div>

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
      ) : (
        <div>

          <div className="grid grid-cols-3 gap-5">
            {processData.map((process, index) => (
              <Link to={'/categogue/proccessDetails'}><div key={index} className="flex  items-center bg-white border p-4 rounded-lg shadow-md">
                <img src={process.image} alt={process.name} className="w-16 h-16 " />
                <div>
                  <p className=" font-semibold text-lg">{process.name}</p>
                  <p className=" text-sm text-gray-500">{process.description}</p>
                </div>
              </div></Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogue;
