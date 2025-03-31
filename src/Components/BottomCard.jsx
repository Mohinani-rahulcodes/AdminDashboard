import React, { useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import {Tooltip, ResponsiveContainer, PieChart, Pie, Cell,} from 'recharts';
import {customer, pieChart1, products} from './data.js'

function BottomCard() {
    const data01 = [
        { name: 'Male', value: 50 },
        { name: 'Female', value: 40 },
        { name: 'Others', value: 10 },
      ];
    const colors = ["#FF8E29", "#F54F5F", "#27D095"];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className='min-h-[90vh] md:w-full w-[100vw] pr-4 md:pl-2 pl-1 pt-6 md:mt-0  bg-[#FFF4EA] '>
        <div className="h-[95%] w-full flex md:flex-row flex-col gap-6 bg-[#FFF4EA]">
            <div className="bg-white rounded-lg shadow-[1px_1px_8px_silver] flex flex-col justify-start items-center md:h-[95%] md:w-[52.8vw] h-[75vh] w-[90vw]">
                <div className="md:h-16 h-20 w-full flex items-center gap-2 px-7 border-b border-zinc-300">
                    <h2 className='md:font-normal font-semibold text-zinc-700'>Top Selling Product</h2>
                    <img src="/star.svg" alt="star" className='h-6 w-6'/>
                </div>
                <div className="heading h-12 w-full flex justify-between items-center px-7 md:text-[0.9rem]">
                    <span>Products</span><span>Orders</span><span>Price</span><span className='md:block hidden'>Ads Spent</span><span className='md:block hidden'>Refunds</span>
                </div>
                <div className="flex flex-col h-[80%] w-full md:px-7 pl-4">
                    {currentItems.map(({name,des,img,orders,price,adsSpent,refund},index)=>(
                        <div key={index} className="parent md:h-17 md:w-full h-20 flex justify-between items-center hover:bg-amber-100 duration-400">
                            <div className="h-13 w-32 flex justify-start items-center gap-1.5 cursor-pointer">
                                <img src={img} alt="products" className='rounded-full md:h-8 md:w-8 h-12 w-12 object-cover'/>
                                <div className="flex flex-col justify-between items-start">
                                    <p className='md:text-[0.8rem] text-[1rem]'>{name}</p>
                                    <p className='md:text-[0.67rem] text-[0.8rem] whitespace-nowrap text-zinc-600'>{des}</p>
                                </div>
                            </div>
                            <div className="h-13 w-20 md:-ml-8 ml-4 flex justify-start items-center text-[0.8rem] text-zinc-500">{orders}</div>
                            <div className="h-13 w-20 flex justify-start items-center md:px-2 pl-4 text-[0.8rem] text-zinc-500">{price}</div>
                            <div className="hidden h-13 w-20 md:flex justify-start items-center text-[0.8rem] text-zinc-500">{adsSpent}</div>
                            <div className="hidden h-13 w-20 md:flex justify-start items-center text-[0.8rem] text-zinc-500 pl-6">{refund}</div>
                        </div>

                    ))}
                </div>    
                <div className="flex justify-between items-center md:h-14 h-20 w-full gap-2 px-2 border-t border-zinc-300">
                    <span className="px-4 py-2 text-[0.8rem] text-zinc-600">Page {currentPage} of {totalPages}</span>
                    <div className="flex justify-center items-center gap-3 ">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="md:h-7 h-10 w-20 md:w-12 px-2 bg-[#FF8E29] text-white rounded disabled:opacity-50 cursor-pointer">
                            Prev
                        </button>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="md:h-7 h-10 w-20 md:w-12 px-2 bg-[#FF8E29] text-white text-[0.9rem] rounded disabled:opacity-50 cursor-pointer">
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-[25.3vw] ">
                <div className="md:h-[50%] md:w-full h-80 w-[89.9vw] rounded-lg shadow-[1px_1px_8px_silver] flex flex-col justify-around px-4 bg-white ">
                    <h1 className='flex justify-between items-center tracking-tight md:text-sm md:font-normal font-semibold '>New Customers
                        <p className='hover:bg-zinc-200 p-2 text-2xl md:text-[1rem] rounded-full duration-300 cursor-pointer text-zinc-500'><HiDotsHorizontal /></p>
                    </h1>
                    <div className="flex flex-col gap-3">
                        {customer.map(({name,img,country,messg},index)=>(
                            <div key={index} className="flex justify-between items-center">
                                <div className="flex justify-start items-center gap-3">
                                    <img src={img} className='md:h-8 md:w-8 h-12 w-12 rounded-full object-cover cursor-pointer' alt="profile" />
                                    <div className="">
                                        <p className='md:text-[0.8rem]'>{name}</p>
                                        <p className='text-[0.8rem] text-zinc-500'>{country}</p>
                                    </div>
                                </div>
                                <img src={messg} className='md:h-8 md:w-8 h-10 w-10 p-2 bg-zinc-100 hover:bg-zinc-200 rounded-full duration-300 cursor-pointer' alt="envelope" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:h-[46%] md:w-full w-[89.9vw] rounded-lg shadow-[1px_1px_8px_silver] bg-white flex flex-col justify-between py-3">
                    <div className="data">
                    <h1 className='flex justify-between items-center tracking-tight md:text-sm text-[1rem] md:font-normal font-semibold px-4'>Buyers Profile
                        <p className='hover:bg-zinc-200 p-2 rounded-full text-2xl md:text-[1rem] duration-300 cursor-pointer text-zinc-500'><HiDotsHorizontal /></p>
                    </h1>
                    </div>
                    <div className="btmcard flex justify-around items-center px-2 ">
                        <div className="md:h-[30vh] md:w-[10vw] h-[40vh] w-[30vw]  piechart pb-3">
                            <ResponsiveContainer width="100%" height="100%" >
                            <PieChart>
                                <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={54}
                                fill="#8884d8"
                                >
                                {data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} /> // Apply custom colors
                            ))}
                            </Pie>
                            <Tooltip formatter={(value) => `${value}%`} contentStyle={{ fontSize: "12px" }}/>
                            </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="dets flex flex-col gap-3 pb-3">
                            {pieChart1.map(({title,color,percent},index)=>(
                                <div key={index} className="flex justify-between items-end cursor-pointer gap-6">
                                    <div className="flex justify-center items-center gap-2">
                                      <div className='md:h-2 md:w-2 h-3 w-3 rounded-full' style={{backgroundColor:color}}/>
                                      <p className='md:text-[0.8rem] md:text-zinc-500 text-zinc-700'>{title}</p>
                                    </div>
                                    <p className='md:text-[0.7rem] te text-zinc-800'>{percent}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-zinc-500 text-[1.1rem] h-[5vh] flex justify-end items-center"><p>All rights reserved</p></div>
    </div>
  )
}

export default BottomCard