import React, { useState } from 'react'
import { IoHomeSharp, IoFolderOpen, IoBagHandle, IoCalendarNumberOutline } from "react-icons/io5";
import { RiAppsFill, RiSecurePaymentFill, RiMessage2Fill, RiLogoutCircleLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='h-screen w-[15vw] flex justify-center items-start pt-6 sticky top-0 '>
        <div className="sidebar bg-white h-[95%] w-full rounded-2xl pt-9 shadow-[0.3px_2px_6px_silver] overflow-hidden">
            <img src="/logo.webp" className='h-14 w-full mb-8' alt="CK Logo" />
            <div className="menu px-5">
                <button className='h-10 w-full rounded-sm flex justify-start items-center gap-2 px-3 hover:pl-3 duration-400 bg-[#FF8E29] cursor-pointer'><IoHomeSharp /> Home</button>
                <button className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><IoFolderOpen /> Pages</button>
                <button className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><RiAppsFill /> Applications</button>
                <button className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><IoBagHandle /> Ecommerce</button>
                <button className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><RiSecurePaymentFill /> Authentication</button>
                <button className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><FaBell /> Notification</button>
                <button className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><IoCalendarNumberOutline /> Calendar</button>
                <button className='h-10 w-full rounded-sm flex justify-start items-center gap-2 hover:pl-3 duration-400 hover:bg-zinc-200 cursor-pointer'><RiMessage2Fill /> Message</button>
                <button className="h-10 w-full rounded-sm flex justify-start items-center gap-2 duration-300 mt-5 text-black hover:text-white hover:bg-red-500 hover:pl-3 cursor-pointer"><RiLogoutCircleLine /> Logout</button>            
            </div>
        </div>
    </div>
  )
}

export default Sidebar