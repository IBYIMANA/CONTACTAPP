import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className='bg-blue-50 h-24  flex flex-row justify-around items-center'>
            <p className='text-green-700 text-2xl font-bold'>Logoipsum</p>
            <p><p1>copyright &copy; {new Date().getFullYear()} All rights reserved</p1></p>
        </div>
    </div>
  )
}
