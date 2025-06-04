import React from 'react'

const Certification = () => {
    return (
        <div className='min-h-screen h-fit w-full flex flex-col justify-start py-14 items-center relative bg3'>
            <h1 className='title2'>Our Certifications</h1>

            <div className='flex w-full h-fit justify-center items-center gap-8 mt-16'>
                <div className='bg-white h-[480px] w-1/4 p-4 flex flex-col gap-3 justify-center items-center card'>
                    <div className='h-[240px] w-full flex justify-center items-center overflow-hidden'>
                        <img src="/images/CertLogo1.jpg" alt="" className='w-[200px] h-auto saturate-0'/>
                    </div>

                    <p className='mutedText'>As a Staunchly Management System Certified company, CMTC follows robust, risk-managed, and documented workflows that promote health and safety, sustainable practices, and quality-first execution on all projects — from material supply to full-scale construction.</p>
                </div>

                <div className='bg-white h-[480px] w-1/4 p-4 flex flex-col gap-3 justify-center items-center card'>
                    <div className='h-[240px] w-full flex justify-center items-center overflow-hidden'>
                        <img src="/images/CertLogo2.jpg" alt="" className='w-[200px] h-auto saturate-0'/>
                    </div>

                    <p className='mutedText'>CMTC holds a QMS Certification accredited by EGAC (Egyptian Accreditation Council) under CAB #011804, reinforcing our compliance with internationally recognized quality frameworks and operational excellence in industrial and construction services.</p>
                </div>

                <div className='bg-white h-[480px] w-1/4 p-4 flex flex-col gap-3 justify-center items-center card'>
                    <div className='h-[240px] w-full flex justify-center items-center overflow-hidden'>
                        <img src="/images/CertLogo3.png" alt="" className='w-[200px] h-auto saturate-0'/>
                    </div>

                    <p className='mutedText'>We are ISO 9001:2015 certified, ensuring that our Quality Management System (QMS) aligns with global standards for efficient processes, customer satisfaction, and continuous improvement. This certification guarantees our clients the highest level of professionalism, documentation, and quality assurance.</p>
                </div>
            </div>
        </div>
    )
}

export default Certification
