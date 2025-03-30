import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell,} from 'recharts';
import {pieChart} from './data.js'


function MainCard() {
    const data = [
        {
          name: 'Jan',
          "Facebook Ads": 4000,
          "Google Ads": 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          "Facebook Ads": 3000,
          "Google Ads": 1398,
          amt: 2210,
        },
        {
          name: 'March',
          "Facebook Ads": 2000,
          "Google Ads": 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          "Facebook Ads": 2780,
          "Google Ads": 3908,
          amt: 2000,
        },
        {
          name: 'May',
          "Facebook Ads": 1890,
          "Google Ads": 4800,
          amt: 2181,
        },
        {
          name: 'June',
          "Facebook Ads": 2390,
          "Google Ads": 3800,
          amt: 2500,
        },
        {
          name: 'July',
          "Facebook Ads": 3490,
          "Google Ads": 4300,
          amt: 2100,
        },
      ];
    const data01 = [
      { name: 'Direct', value: 38 },
      { name: 'Organic', value: 22 },
      { name: 'Paid', value: 12 },
      { name: 'Social', value: 28 },
    ];
    const colors = ["#FF8E29", "#27D095", "#67CADF", "#F54F5F"];
  return (
    <div className='h-[82vh] w-full pr-4 pl-2 pt-1'>
        <div className="card grid grid-cols-3 gap-y-5 gap-x-6">
            <div className="bg-white rounded-lg shadow-[1px_1px_8px_silver] h-[15vh] flex justify-between items-center px-4">
                <div className="flex gap-5">
                    <img src="/tag.webp" alt="Tag" className='h-14 w-14'/>
                    <div className="flex flex-col">
                        <h1 className='text-[0.8rem] font-semibold'>Sales</h1>
                        <p className='text-[0.8rem] text-zinc-500'>₹8,02,497</p>
                        <div className="flex justify-start items-center gap-1.5">
                            <img src="risingarrow.svg" className='h-3.5 w-3.5' alt="incrementArrow" />
                            <p className='text-[0.67rem] text-[#FF8E29]'>+55% last month</p>
                        </div>
                    </div>
                </div>
                <p className='h-12 text-zinc-500 text-[0.7rem]'>Apr 2025</p>
            </div>
            <div className="bg-white rounded-lg shadow-[1px_1px_8px_silver] h-[15vh] flex justify-between items-center px-4">
                <div className="flex gap-5">
                    <img src="/customer.webp" alt="Tag" className='h-14 w-14'/>
                    <div className="flex flex-col">
                        <h1 className='text-[0.8rem] font-semibold'>Customer</h1>
                        <p className='text-[0.8rem] text-zinc-500'>₹30,103</p>
                        <div className="flex justify-start items-center gap-1.5">
                            <img src="risingarrow.svg" className='h-3.5 w-3.5' alt="incrementArrow" />
                            <p className='text-[0.67rem] text-[#FF8E29]'>+12% last month</p>
                        </div>
                    </div>
                </div>
                <p className='h-12 text-zinc-500 text-[0.7rem]'>Apr 2025</p>
            </div>
            <div className="bg-white rounded-lg shadow-[1px_1px_8px_silver] h-[15vh] flex justify-between items-center px-4">
                <div className="flex gap-5">
                    <img src="/revenue.webp" alt="Tag" className='h-14 w-14'/>
                    <div className="flex flex-col">
                        <h1 className='text-[0.8rem] font-semibold'>Avg Revenue</h1>
                        <p className='text-[0.8rem] text-zinc-500'>₹28,000</p>
                        <div className="flex justify-start items-center gap-1.5">
                            <img src="risingarrow.svg" className='h-3.5 w-3.5' alt="incrementArrow" />
                            <p className='text-[0.67rem] text-[#FF8E29]'>+210% last month</p>
                        </div>
                    </div>
                </div>
                <p className='h-12 text-zinc-500 text-[0.7rem]'>Apr 2025</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2.5 bg-white rounded-lg shadow-[1px_1px_8px_silver] h-[63vh] col-span-2 pt-4 pr-10 ">
                <p className='pl-7 text-[#121212d7]'>Revenue</p>   
                <ResponsiveContainer width="100%" height="90%" >
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" tick={{ fontSize: "12px" }}/>
                            <YAxis tick={{ fontSize: "10px" }}/>
                            <Tooltip contentStyle={{ fontSize: "12px" }}/>
                            <Legend wrapperStyle={{ fontSize: "12px" }} /> 
                            <Line type="monotone" dataKey="Google Ads" stroke="#FF8E29" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Facebook Ads" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-lg shadow-[1px_1px_8px_silver] h-[63vh] flex flex-col justify-between items-start py-3 px-4">
                <h1 className='tracking-tight text-[0.8rem]'>Website Visitors</h1>
                <ResponsiveContainer width="100%" height="90%">
                    <PieChart width={400} height={400}>
                        <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label={({value }) => `${value}%`}
                        >
                        {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} /> // Apply custom colors
                    ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} contentStyle={{ fontSize: "12px" }}/>
                    </PieChart>
                </ResponsiveContainer>
                <div className="pieDetail h-[25vh] w-full mt-2">
                  {pieChart.map(({title,color,percent},index)=>(
                    <div key={index} className="flex justify-between items-end border-b border-zinc-300 cursor-pointer">
                      <div className="flex justify-center items-center gap-2">
                        <div className='h-2 w-2 rounded-full' style={{backgroundColor:color}}/>
                        <p className='text-[0.8rem] text-zinc-500'>{title}</p>
                      </div>
                      <p className='text-[0.9rem] text-zinc-800'>{percent}%</p>
                    </div>
                  ))}
                </div>
            </div>
        </div>    
    </div>
  )
}

export default MainCard