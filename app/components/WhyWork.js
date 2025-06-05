import React from 'react'

const WhyWork = () => {
    return (
        <div className='h-fit w-full flex flex-col justify-start items-center py-20 pb-28 gap-24'>
            <h1 className='title2'>Why Work with CMTC?</h1>
            <div className='w-full flex justify-center items-center gap-14 relative'>
                <div className='w-[20%] h-[225px] flex flex-col justify-center items-start gap-2 card z-10 bg3'>
                    <h2 className='title3'>Dynamic Growth</h2>
                    <p className='mutedText'>Since 2024, CMTC has rapidly expanded across Qatar in multiple industrial sectors.</p>
                </div>

                <img src="/images/UpArrow.png" alt="" className='w-[9%] opacity-50 rotate-[20deg] absolute top-[-25%] left-[22%] z-[8]' />

                <div className='w-[20%] h-[225px] flex flex-col justify-center items-start gap-2 card z-10 bg3'>
                    <h2 className='title3'>Diverse Projects</h2>
                    <p className='mutedText'>Get hands-on experience in commercial buildings, luxury villas, fiber optic trading, and mechanical automation.</p>
                </div>

                <img src="/images/DownArrow.png" alt="" className='w-[9%] opacity-50 rotate-12 absolute bottom-[-40%] z-[8]' />

                <div className='w-[20%] h-[225px] flex flex-col justify-center items-start gap-2 card z-10 bg3'>
                    <h2 className='title3'>Collaboratice Culture</h2>
                    <p className='mutedText'>We value innovation, collaboration, and entrepreneurial spirit.</p>
                </div>

                <img src="/images/UpArrow.png" alt="" className='w-[9%] opacity-50 rotate-[20deg] absolute top-[-25%] right-[22%] z-[8]' />

                <div className='w-[20%] h-[225px] flex flex-col justify-center items-start gap-2 card z-10 bg3'>
                    <h2 className='title3'>Professional Development</h2>
                    <p className='mutedText'>Opportunity to grow within a visionary company contributing to Qatar&apos;s economic growth.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyWork
