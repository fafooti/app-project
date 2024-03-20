import Navbar from '/src/components/Navbar/Navbar'
import React from 'react'

function Layout({children}) {
  return (
    <div className=''>
      <Navbar/>
        <div className='pt-20'>
             {children} 
        </div>
    
    </div>
  )
}

export default Layout
