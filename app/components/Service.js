import React from 'react'

const Service = () => {
    return (
        <div className='min-h-screen w-full flex flex-col'>
            {/* Construction Projects */}
            <div className='min-h-screen h-fit px-6 py-8'>
                <h1 className='title2 mt-4 mb-10'>Construction</h1>

                <div className='w-full h-fit flex flex-wrap gap-10 px-8 justify-start items-center'>
                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg3'>
                        <h2 className='title3 w-full'>Commercial Buildings</h2>
                        <p className='mutedText'>Office spaces, business centers, and retail establishments built to international specifications.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg3'>
                        <h2 className='title3 w-full'>Hotels</h2>
                        <p className='mutedText'>Luxury hospitality projects combining elegance with operational efficiency.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg3'>
                        <h2 className='title3 w-full'>Palaces</h2>
                        <p className='mutedText'>High-end, custom-built residences that reflect sophistication and grandeur.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg3'>
                        <h2 className='title3 w-full'>Compound Villas</h2>
                        <p className='mutedText'>Residential villa communities designed for modern family living.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg3'>
                        <h2 className='title3 w-full'>Clinics</h2>
                        <p className='mutedText'>Medical facilities developed with a focus on hygiene, functionality, and healthcare compliance.</p>
                    </div>
                </div>

                <p className='w-full text-center mt-10 designText'>~ From blueprints to handover, we manage every step with precision and care. ~</p>
            </div>

            {/* General Contracting */}
            <div className='bg3 h-fit px-6 py-14'>
                <h1 className="title2 mt-4 mb-10">General Contracting</h1>

                <div className='w-full h-fit flex flex-wrap gap-10 px-8 justify-start items-center'>
                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg-white'>
                        <h2 className='title3 w-full'>Turnkey Construction Execution</h2>
                        <p className='mutedText'>Complete build solutions from planning to delivery, aligned with safety and quality standards.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg-white'>
                        <h2 className='title3 w-full'>Project Management</h2>
                        <p className='mutedText'>Handling labor, procurement, timelines, and supervision with full accountability.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg-white'>
                        <h2 className='title3 w-full'>Coordination & Compliance</h2>
                        <p className='mutedText'>Seamless collaboration with engineers, architects, and authorities for approvals and execution.</p>
                    </div>
                </div>

                <p className='w-full text-center mt-10 designText'>~ We bring efficiency, accountability, and reliability to every build we manage. ~</p>
            </div>

            {/* Trading and Supply */}
            <div className='h-fit px-6 py-14'>
                <h1 className="title2 mt-4 mb-10">Trading and Supply</h1>

                <div className='w-full h-fit flex flex-wrap gap-10 px-8 justify-start items-center'>
                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg3'>
                        <h2 className='title3 w-full'>Construction Materials Supply</h2>
                        <p className='mutedText'>Timely and quality-assured materials sourced for diverse infrastructure needs.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg3'>
                        <h2 className='title3 w-full'>Fiber Optic Components & Accessories</h2>
                        <p className='mutedText'>Trading advanced telecom infrastructure components for smart, connected builds.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg3'>
                        <h2 className='title3 w-full'>Mechanical Gate Barriers</h2>
                        <p className='mutedText'>Supply and installation of automated gate and access control systems.</p>
                    </div>
                </div>

                <p className='w-full text-center mt-10 designText'>~ Built on trust and efficiency, our supply chain fuels successful project execution. ~</p>
            </div>

            {/* Investments and Joint Ventures */}
            <div className='bg3 h-fit px-6 py-14'>
                <h1 className="title2 mt-4 mb-10">Investments and Joint Ventures</h1>

                <div className='w-full h-fit flex flex-wrap gap-10 px-8 justify-start items-center'>
                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg-white'>
                        <h2 className='title3 w-full'>Equity Investment</h2>
                        <p className='mutedText'>Financial support in existing and emerging medium-scale industrial projects.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg-white'>
                        <h2 className='title3 w-full'>Joint Ventures</h2>
                        <p className='mutedText'>Partnerships with local and international firms in construction and infrastructure.</p>
                    </div>

                    <div className='w-[30%] flex flex-col justify-start items-center card cardHeight bg-white'>
                        <h2 className='title3 w-full'>Technology & Innovation Partnerships</h2>
                        <p className='mutedText'>Collaboration with tech providers and innovators to develop sustainable, future-ready projects.</p>
                    </div>
                </div>

                <p className='w-full text-center mt-10 designText'>~ We welcome collaboration that fosters sustainable growth and economic progress. ~</p>
            </div>
        </div>
    )
}

export default Service
