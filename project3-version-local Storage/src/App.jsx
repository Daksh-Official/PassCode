import React from 'react'
import Navbar from '../components/Navbar'
import Manager from '../components/Manager'
import Footer from '../components/Footer'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
       <div  className="relative h-full w-full bg-orange-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Manager/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
