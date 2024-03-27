import Footer from '@/components/Footer/Footer'
import Navbar from '/src/components/Navbar/Navbar'
import React from 'react'

function Layout({children}) {
  return (
    <div className=''>
      <Navbar/>
        <div className=''>
             {children} 
        </div>
        <Footer/>
    
    </div>
  )
}

export default Layout
