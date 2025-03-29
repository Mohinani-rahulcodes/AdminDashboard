import React from 'react'
import Sidebar from './Components/Sidebar'
import MainSection from './Components/MainSection'

const App = () => {
  return (
    <div className='bg-[#FFF4EA] flex justify-center items-start gap-4'>
      <Sidebar />
      <MainSection />
    </div>
  )
}

export default App