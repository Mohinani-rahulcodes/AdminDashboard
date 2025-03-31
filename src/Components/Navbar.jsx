import React, { useState } from 'react'
import { IoSearchOutline, IoHomeSharp, IoSettingsSharp, IoFolderOpen, IoBagHandle, IoCalendarNumberOutline  } from "react-icons/io5";
import {flags} from './data.js';
import { FaBell } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine,RiAppsFill, RiSecurePaymentFill, RiMessage2Fill} from "react-icons/ri";
import { motion } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({openMenuFunc,showMenu}) => {
    const [selectedFlag, setSelectedFlag] = useState(flags[0]); // Default flag
    const [showOptions, setShowOptions] = useState(false);

    const [open, isOpen] = useState(false);

    return (
    <>
    
    <div className='bg-[#FFF4EA] md:h-[17vh] md:w-full h-32 w-[100vw] flex items-center sticky top-0 z-10'>
        <div className="navbar h-[60%] w-full flex justify-between items-center">
            <div className="pl-2 flex justify-center items-center gap-10">
                <h1 className='hidden md:flex font-[500] '>Dashboard</h1>
                <span className='md:hidden'>{showMenu? <RxCross2 size={32} onClick={openMenuFunc}/>:<GiHamburgerMenu size={25} onClick={openMenuFunc}/>}</span>
                <div className="hidden md:h-8 w-[24vw] bg-white relative pl-2 rounded-3xl md:flex justify-between items-center hover:border hover:border-zinc-500">
                    <input type="text" className=' text-sm w-[16rem] border-none focus:outline-none' placeholder='Search...'/>
                    <button className='absolute right-2 bottom-2 cursor-pointer'><IoSearchOutline size={17} color='#737982'/></button>
                </div>
            </div>
            <div className="pr-6 flex justify-center items-center md:gap-2.5 gap-3">
                <div className="h- flex flex-col items-center gap-4 p-6 -mr-5">
                    {/* Flag Button */}
                    <img src={selectedFlag.img}
                      className="md:h-8 md:w-8 h-9 w-9 object-cover hover:bg-zinc-300 p-1 rounded-full cursor-pointer"
                      onClick={() => setShowOptions(!showOptions)}
                      alt="Selected Flag"
                    />

                    {/* Flag Selection Dropdown */}
                    {showOptions && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} 
                      className="absolute md:right-57 md:top-17 top-20 right-34 md:h-[25vh] md:w-[10vw] w-28 bg-white flex flex-col gap-2 p-2 rounded-lg shadow-[1px_1px_8px_silver] ">
                        {flags.map((flag) => (
                            <div className="flex justify-between items-center px-2 bg-white hover:bg-zinc-300 hover:rounded-2xl py-1 cursor-pointer duration-300" onClick={() => {setSelectedFlag(flag); setShowOptions(false);}}>
                                <img
                                  key={flag.name}
                                  src={flag.img}
                                  alt={flag.name}
                                  className="h-5 w-5 rounded-full cursor-pointer hover:scale-110 transition-all"
                                  />
                                  <p className='text-sm text-[#121212d7]'>{flag.name}</p>

                            </div>
                            ))}
                      </motion.div>
                    )}
                </div>                
                <button className='bellIcon hover:bg-zinc-300 rounded-full h-8 w-8 flex justify-center items-center relative cursor-pointer'>
                    <FaBell size={18}/>
                    <div className="h-4 w-4 absolute top-0 right-0 bg-[#FF8E29] rounded-full flex justify-center items-center text-white text-[10px]">1</div>
                </button>
                <div className="profileButton flex justify-center items-center gap-3 cursor-pointer relative" onClick={()=>isOpen(!open)}>
                    <img src="/boy.webp" alt="Aiden" className='md:h-10 md:w-10 h-12 w-12 rounded-full object-cover'/>
                    <div className="hidden para md:flex justify-between items-center gap-1.5">
                        <p className='text-[#121212d7] text-sm'>Erwin Root</p>
                        <p><BiSolidDownArrow /></p>
                    </div>
                    {open && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} 
                        className="md:h-[18vh] md:w-[10vw] h-40 w-38 shadow-[1px_1px_8px_silver] bg-white rounded-sm absolute md:top-11 md:right-0 top-14 right-0 flex flex-col justify-center items-center md:text-sm text-[#121212d7] px-2 ">
                            <p className='flex justify-start items-center gap-7 hover:bg-zinc-300 duration-500 rounded-xl p-0.5 md:text-[0.9rem] text-[1.2rem]'><IoHomeSharp/> Home</p>
                            <p className='flex justify-start items-center gap-7 hover:bg-zinc-300 duration-500 rounded-xl p-0.5 md:text-[0.9rem] text-[1.2rem]'><CgProfile /> Profile</p>
                            <p className='flex justify-start items-center gap-6 hover:bg-zinc-300 duration-500 rounded-xl p-0.5 md:text-[0.9rem] text-[1.2rem]'><IoSettingsSharp />Setting</p>
                            <p className='border-t border-zinc-300 flex justify-start items-center gap-5 mt-1 hover:bg-zinc-300 duration-500 rounded-xl p-0.5 md:text-[0.9rem] text-[1.2rem]'><RiLogoutCircleLine/> LogOut</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    </div>

    {/* navbar for mobile */}
    {showMenu? (
            <div className='h-[100vh] w-[91.8vw] flex justify-center items-start sticky top-32 left-0 z-10'>
                <div className="sidebar bg-white h-[95%] w-full rounded-2xl pt-9 shadow-[0.3px_2px_6px_silver] overflow-hidden">
                    <img src="/logo.webp" className='h-14 mb-8' alt="CK Logo" />
                    <div className="menu px-5">
                        <motion.button whileTap={{scale:1.4, backgroundColor:'#ff8e29'}} className='h-10 w-full rounded-sm flex justify-start items-center gap-2 px-3 hover:pl-3 duration-400 bg-[#FF8E29] cursor-pointer'><IoHomeSharp /> Home</motion.button>
                        <motion.button whileTap={{scale:1.4, backgroundColor:'#ff8e29'}} className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><IoFolderOpen /> Pages</motion.button>
                        <motion.button whileTap={{scale:1.4, backgroundColor:'#ff8e29'}} className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><RiAppsFill /> Applications</motion.button>
                        <motion.button whileTap={{scale:1.4, backgroundColor:'#ff8e29'}} className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><IoBagHandle /> Ecommerce</motion.button>
                        <motion.button whileTap={{scale:1.4, backgroundColor:'#ff8e29'}} className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><RiSecurePaymentFill /> Authentication</motion.button>
                        <motion.button whileTap={{scale:1.4, backgroundColor:'#ff8e29'}} className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><FaBell /> Notification</motion.button>
                        <motion.button whileTap={{scale:1.4, backgroundColor:'#ff8e29'}} className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><IoCalendarNumberOutline /> Calendar</motion.button>
                        <motion.button whileTap={{scale:1.4, backgroundColor:'#ff8e29'}} className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><RiMessage2Fill /> Message</motion.button>
                        <motion.button whileTap={{scale:1.4, backgroundColor:'#ff8e29'}} className="h-10 w-full rounded-sm flex justify-start items-center gap-2 duration-300 mt-5 text-black hover:text-white hover:bg-red-500 hover:pl-3 cursor-pointer"><RiLogoutCircleLine /> Logout</motion.button>            
                    </div>
                </div>
            </div>
    ):''}
    </>
  )
}

export default Navbar