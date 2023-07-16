import React from 'react'
import food from '../assets/food.jpg'
import blanckProfile from '../assets/blanckprofile.jpg'
import { UserPlus } from 'lucide-react';


const Postitem = () => {
    return (
        <div className='bg-slate-600 flex flex-col items-center text-white my-2 p-4 rounded-lg w-full h-fit'>

            <div className='flex justify-between w-full pb-2'>
                <div className='flex justify-center items-center gap-2'>
                    <img src={blanckProfile} alt="profile" className='rounded-full w-10 h-10' />
                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold'>Baburao Apte</span>
                        <span className='text-sm font-normal'>Borivali, Engineer</span>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <UserPlus className='h-6 w-6 mr-3 cursor-pointer text-blue-300 hover:text-blue-400' />
                </div>
            </div>

            <div className="flex flex-col w-full justify-between items-center border-t border-slate-400 mt-1 pt-1">

                <div className='flex justify-start w-full py-2'>
                    <span>Hello Na Public</span>
                </div>
                <div className=''>
                    <img src={food} alt="demo" className='w-fit h-fit' />
                </div>
            </div>

        </div>
    )
}

export default Postitem