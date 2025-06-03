import React from 'react'

const Services = () => {
    return (
        <div className='h-fit flex justify-center items-center bg3 py-16'>
            <div className='w-[55%] px-16 flex flex-col gap-3'>
                <h1 className='title2'>Our Services</h1>
                <p className='subText'>From trading to contracting, we offer a comprehensive suite of services designed to meet the diverse needs of our clients. Our team of experts works tirelessly to deliver customized solutions that drive growth and maximize returns</p>
                <button className='button px-4 py-2 w-fit'>Learn More</button>
            </div>

            <div className='w-[45%] flex justify-center items-center'>
                <img src="/images/ServicesSection.png" alt="" className='w-[70%] h-auto'/>
            </div>
        </div>
    )
}

export default Services
