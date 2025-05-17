import React from 'react'
import Hero from '../../components/home/Hero'
import OurProduct from '../../components/home/OurProduct'
import Discover from '../../components/home/Discover'
import HowJasu from '../../components/home/HowJasu'
import DoYouHave from '../../components/home/DoYouHave'

export const HomePage = () => {
  return (
    <div><div className='container m-auto'>
      <Hero></Hero>
      <OurProduct></OurProduct>
    </div>
      <HowJasu></HowJasu>
      <div className='container m-auto'>
        <Discover></Discover>
        <DoYouHave></DoYouHave></div>
        
        
        </div>
  )
}
