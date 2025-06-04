import React from 'react'

const Overview = () => {
    return (
        <div className='min-h-screen h-fit w-full flex justify-center items-center'>
            <div className='w-1/2 h-screen flex justify-center items-end'>
                <img src="/images/Construction.png" alt="" className='opacity-50'/>
            </div>

            <div className='w-1/2 h-full flex gap-8 flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='title2 w-4/5'>Overview</h1>
                    <p className='subText text-left w-4/5'>Code Matrix Trading and Contracting (CMTC) is a Qatar-based firm established in 2024 to contribute to the Nation&apos;s economic growth by actively investing in small and medium-sized industries. Despite being a young company, CMTC has rapidly positioned itself as a leading player in the contracting and trading sector. Our expertise spans across the construction of commercial buildings, luxury hotels, villas, palaces, and clinics, while also actively trading in high-quality construction materials and fiber optic components. We also provide installation of mechanical gate barriers and general contracting services across Qatar.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='title2 w-4/5'>Mission & Vision</h1>
                    <h2 className='title3 text-left w-4/5'>Mission</h2>
                    <p className='subText text-left w-4/5 mb-4'>To deliver reliable, innovative, and cost-effective trading and contracting solutions that support infrastructure growth and enhance client satisfaction in Qatar and beyond.</p>
                    <h2 className='title3 text-left w-4/5'>Vision</h2>
                    <p className='subText text-left w-4/5 mb-4'>To be a leading catalyst in the development of medium-scale industries in the region through quality execution, trusted partnerships, and sustainable growth.</p>
                </div>
            </div>
        </div>
    )
}

export default Overview
