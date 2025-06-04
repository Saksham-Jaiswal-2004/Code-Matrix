import React from 'react'

const Values = () => {
    return (
        <div className='min-h-screen h-fit w-full flex justify-center items-center bg3 overflow-hidden'>
            <div className='h-full w-1/2 flex flex-col gap-14 justify-start items-center'>
                <h1 className='title2 w-[85%] mb-4'>Our Values</h1>

                <div className='w-[85%] flex flex-wrap gap-10'>
                    <div className='w-[46%]'>
                        <h1 className='title2'>1.</h1>
                        <h2 className='title3'>Integrity</h2>
                        <p className='mutedText'>We uphold honesty and transparency in all dealings.</p>
                    </div>

                    <div className='w-[46%]'>
                        <h1 className='title2'>2.</h1>
                        <h2 className='title3'>Safety</h2>
                        <p className='mutedText'>We adhere to strict safety standards to protect our workers and clients.</p>
                    </div>
                </div>

                <div className='w-[85%] flex flex-wrap gap-10'>
                    <div className='w-[46%]'>
                        <h1 className='title2'>3.</h1>
                        <h2 className='title3'>Client Satisfaction</h2>
                        <p className='mutedText'>We prioritize customer needs with quality and timeliness.</p>
                    </div>

                    <div className='w-[46%]'>
                        <h1 className='title2'>4.</h1>
                        <h2 className='title3'>Innovation</h2>
                        <p className='mutedText'>We embrace technology and modern techniques to drive efficiency.</p>
                    </div>
                </div>
            </div>

            <div className='min-h-screen h-fit w-1/2 gap-6 flex justify-center items-start pt-9'>
                <div className='w-[40%] h-full flex flex-col gap-8'>
                    <img src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img src="https://images.unsplash.com/photo-1551711974-faf378be34b2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

                <div className='w-[40%] h-full flex flex-col gap-8'>
                    <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Values
