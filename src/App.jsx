import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import MainSection from './Components/MainSection'

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const openMenuFunc = ()=>{
    setShowMenu(!showMenu)  
    console.log("working");
    
  }
  return (
    <div className='bg-[#FFF4EA] flex justify-center items-start gap-4'>
      <Sidebar />
      <MainSection openMenuFunc={openMenuFunc} showMenu={showMenu}/>
    </div>
  )
}

export default App