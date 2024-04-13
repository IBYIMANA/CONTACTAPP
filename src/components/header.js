
import React from 'react'
import { CgProfile } from "react-icons/cg";
export const Header = () => {
    return (
        <div>
            <div className='bg-slate-300 w-full h-24 flex flex-row justify-around items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className='text-2xl font-bold'>Contact</h1>
                <h1 className='font-bold'>Home</h1>
                <div className='flex flex-row items-center px-4 py-2 space-x-2 rounded-lg bg-lime-500' >
                    <CgProfile />
                    <div className='flex flex-col'>
                        <input type="text" className='text-black bg-lime-500'></input>
                        <input type="text" className='text-black bg-lime-500' ></input>
                    </div>
                    <button className='bg-black text-white font-bold px-4 py-2 rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]'>Create Contact</button>
                </div>
            </div>
        </div>
    )
}
