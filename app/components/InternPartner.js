import React from 'react'

const InternPartner = () => {
    return (
        <div className='min-h-screen h-fit w-full py-10 bg3 flex flex-col justify-center items-center gap-6'>
            {/* Internship */}
            <div className='w-[95vw] h-fit flex justify-center px-6 py-10 card bg-white'>
                <div className='flex flex-col w-[50%]'>
                    <h2 className='titleFont font-semibold text-5xl text-[#28292e] mb-4'>Internship Opportunities</h2>
                    <p className='mutedText'>Build, Learn, Grow with CMTC</p>
                </div>

                <div className='px-16'>
                    <h2 className='title3'>Description:</h2>
                    <p className='mutedText pl-4'>At CMTC, we believe in shaping the next generation of engineers, project managers, and business leaders. Our internship programs provide real-world exposure to the construction, trading, and general contracting industries in Qatar.</p>

                    <h2 className='mt-4 title3'>Who Can Apply:</h2>
                    <ul className='mutedText pl-4'>
                        <li>• Final-year students or recent graduates in Civil, Mechanical, Electrical, Architecture, Business, or Supply Chain.</li>
                        <li>• Passionate individuals looking to gain practical experience in fast-paced project environments.</li>
                    </ul>

                    <h2 className='mt-4 title3'>What You’ll Learn:</h2>
                    <ul className='mutedText pl-4'>
                        <li>• Project lifecycle from planning to execution</li>
                        <li>• Site operations and safety standards</li>
                        <li>• Procurement and supplier management</li>
                        <li>• Fiber optic trading and modern gate systems</li>
                        <li>• Team collaboration and documentation processes</li>
                    </ul>

                    <p className='mt-6 mutedText'><strong>Duration: </strong>1-3 months | Flexible with university programs</p>
                    <p className='mutedText'><strong>Stipend: </strong>Offered to exceptional candidates</p>
                </div>
            </div>

            {/* Partnership */}
            <div className='w-[95vw] h-fit flex justify-center px-6 py-10 card bg-white'>
                <div className='flex flex-col w-[50%]'>
                    <h2 className='titleFont font-semibold text-5xl text-[#28292e] mb-4'>Partnership & Joint Ventures</h2>
                    <p className='mutedText'>Partner with CMTC to Shape Qatar&apos;s Future</p>
                </div>

                <div className='px-16'>
                    <h2 className='title3'>Description:</h2>
                    <p className='mutedText pl-4'>CMTC is actively seeking collaboration with investors, contractors, suppliers, and technology providers interested in launching or expanding medium-scale industrial projects in Qatar. Whether you&apos;re a local company or an international enterprise, we offer a platform to grow together.</p>

                    <h2 className='mt-4 title3'>Opportunities Include:</h2>
                    <ul className='mutedText pl-4'>
                        <li>• Joint development of construction and infrastructure projects</li>
                        <li>• Supply and innovation partnerships in fiber optics, mechanical gate systems, and materials</li>
                        <li>• Investment in new projects aligned with Qatar&apos;s 2030 vision</li>
                    </ul>

                    <h2 className='mt-4 title3'>Why Partner with CMTC:</h2>
                    <ul className='mutedText pl-4'>
                        <li>• Strong project portfolio and industry reputation</li>
                        <li>• Agile decision-making and resource capabilities</li>
                        <li>• Access to Qatar&apos;s expanding industrial market</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InternPartner
