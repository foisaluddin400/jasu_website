import React from 'react'
import { Navbar } from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer'

export const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-[#F8FAFC] '>
        <div className=''>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
