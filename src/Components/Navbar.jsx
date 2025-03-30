import React, { useState } from 'react'
import { IoSearchOutline, IoHomeSharp, IoSettingsSharp } from "react-icons/io5";
import {flags} from './data.js';
import { FaBell } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { motion } from "motion/react"

const Navbar = () => {
    const [selectedFlag, setSelectedFlag] = useState(flags[0]); // Default flag
    const [showOptions, setShowOptions] = useState(false);

    const [open, isOpen] = useState(false);

    return (
    <div className='bg-[#FFF4EA] h-[17vh] w-full flex items-center sticky top-0 z-10'>
        <div className="navbar h-[60%] w-full flex justify-between items-center">
            <div className="pl-2 flex justify-center items-center gap-10">
                <h1 className='font-[500]'>Dashboard</h1>
                <div className="h-8 w-[24vw] bg-white relative pl-2 rounded-3xl flex justify-between items-center hover:border hover:border-zinc-500">
                    <input type="text" className=' text-sm w-[16rem] border-none focus:outline-none' placeholder='Search...'/>
                    <button className='absolute right-2 bottom-2 cursor-pointer'><IoSearchOutline size={17} color='#737982'/></button>
                </div>
            </div>
            <div className="pr-6 flex justify-center items-center gap-2.5">
                <div className="h- flex flex-col items-center gap-4 p-6 -mr-5">
                    {/* Flag Button */}
                    <img src={selectedFlag.img}
                      className="h-8 w-8 object-cover hover:bg-zinc-300 p-1 rounded-full cursor-pointer"
                      onClick={() => setShowOptions(!showOptions)}
                      alt="Selected Flag"
                    />

                    {/* Flag Selection Dropdown */}
                    {showOptions && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-57 top-17 h-[25vh] w-[10vw] bg-white flex flex-col gap-2 p-2 rounded-lg shadow-[1px_1px_8px_silver] ">
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
                    <img src="/boy.webp" alt="Aiden" className='h-10 w-10 rounded-full object-cover'/>
                    <div className="para flex justify-between items-center gap-1.5">
                        <p className='text-[#121212d7] text-sm'>Erwin Root</p>
                        <p><BiSolidDownArrow /></p>
                    </div>
                    {open && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="h-[18vh] w-[10vw] shadow-[1px_1px_8px_silver] bg-white rounded-sm absolute top-11 right-0 flex flex-col text-sm text-[#121212d7] px-2">
                            <p className='flex justify-start items-center gap-2 hover:bg-zinc-300 duration-500 rounded-xl p-0.5'><IoHomeSharp/> Home</p>
                            <p className='flex justify-start items-center gap-2 hover:bg-zinc-300 duration-500 rounded-xl p-0.5'><CgProfile /> Profile</p>
                            <p className='flex justify-start items-center gap-2 hover:bg-zinc-300 duration-500 rounded-xl p-0.5'><IoSettingsSharp />Setting</p>
                            <p className='border-t border-zinc-300 flex justify-start items-center gap-2 mt-1 hover:bg-zinc-300 duration-500 rounded-xl p-0.5'><RiLogoutCircleLine/> LogOut</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar