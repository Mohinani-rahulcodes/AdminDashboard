import React from 'react'
import Navbar from './Navbar'
import MainCard from './MainCard'
import BottomCard from './BottomCard'

const MainSection = () => {
  return (
    <div className='min-h-screen w-[82vw]'>
        <Navbar />
        <MainCard />
        <BottomCard />

    </div>
  )
}

export default MainSection