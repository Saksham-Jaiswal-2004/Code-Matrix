import React from 'react'

const Team = () => {
    return (
        <div className='min-h-screen h-fit w-full flex justify-center items-center craneBg relative'>
            <img src="/images/CraneBg.png" alt="" className='absolute w-[21%] opacity-25 bottom-0 left-32'/>
            <img src="/images/CraneHook.png" alt="" className='absolute w-[35%] opacity-25 top-[-50] right-[-180] scale-x-[-1]'/>
            <div className='h-full w-1/2 flex justify-center items-center relative'>
                <h1 className='titleFont text-[#28292e] text-[2.5rem] font-bold text-center absolute bottom-32 z-[3]'>D. K. Naidu</h1>
                <h2 className='titleFont text-[#9a9ca1] text-6xl text-center absolute bottom-0.5 z-[2]'>Founder and Managing Director</h2>
            </div>

            <div className='h-full w-1/2 flex justify-center items-center relative'>
                <h1 className='titleFont text-[#28292e] text-[2.5rem] font-bold text-center absolute top-16 z-[3]'>Jaya Chandra Naidu</h1>
                <h2 className='titleFont text-[#9a9ca1] text-6xl text-center absolute top-32 z-[2]'>Strategic Advisor</h2>
            </div>
        </div>
    )
}

export default Team
