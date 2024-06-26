
import React from 'react'
import { CgProfile } from "react-icons/cg";
export const Header = () => {
    return (
        <div>
            <div className='flex flex-row items-center justify-around w-full h-24 bg-gray-300'>
                <h1 className='text-2xl font-bold'>Contact</h1>
                <h1 className='font-bold'>Home</h1>
                <div className='flex flex-row items-center px-4 py-2 space-x-2 rounded-lg bg-lime-500' >
                    <CgProfile /><h1>FILLETTE</h1>
                    {/* <div className='flex flex-col'>
                        <input type="text" className='text-black bg-lime-500'></input>
                        <input type="text" className='text-black bg-lime-500' ></input>
                    </div> */}
                    <button className='px-4 py-2 font-bold text-black bg-gray-400 rounded-lg'>Create Contact</button>
                </div>
            </div>
        </div>
    )
}
