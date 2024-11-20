import React from 'react'
import Image from 'next/image'
import TS from '@/assets/ts-mark 1.png'
import example from '@/assets/Timnas3.jpg'

export default function TopPlayerCard() {
  return (
    <>
        <div className='md:mx-auto mx-0 justify-center grid grid-cols-2'>
            <div className='w-[370px] md:w-[410px] rounded-xl flex justify-between bg-gradient-to-br from-sky-500 to-sky-300'>
                <div className='p-5'>
                    <h1 className='text-lg font-semibold text-white'>MVP 2024</h1>
                    <h5 className='text-sm text-white font-semibold'>Muhammad</h5>
                    <h5 className='text-[20px] text-white font-semibold'>Sarofi Isma</h5>
                    <div className='px-2 py-1 bg-slate-600 w-9 mb-3 text-[8px] text-white rounded-[8px]'>
                        Player
                    </div>
                    <div className='flex'>
                        <Image src={TS} alt='TS' className='md:w-16 w-10 mr-4'/>
                        <p className='uppercase text-white text-[11px] md:text-[12px]'>smk telkom malang</p>
                    </div>
                </div>
                <div>
                <Image src={example} alt='example' className='w-[150px] h-full bg-cover bg-center rounded-r-xl'/>
                </div>
            </div>
            <div>
            </div>
        </div>
    </>
  )
}
