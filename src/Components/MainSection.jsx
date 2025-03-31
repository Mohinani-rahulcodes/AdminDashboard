import Navbar from './Navbar'
import MainCard from './MainCard'
import BottomCard from './BottomCard'

const MainSection = ({openMenuFunc, showMenu}) => {

  return (
    <div className='min-h-screen w-[82vw] bg-[#FFF4EA]'>
        <Navbar openMenuFunc={openMenuFunc} showMenu={showMenu}/>
        <MainCard />
        <BottomCard />

    </div>
  )
}

export default MainSection