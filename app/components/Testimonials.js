import React from 'react'

const Testimonials = () => {
    return (
        <div className='min-h-screen h-fit flex flex-col justify-start py-10 items-center bg3'>
            <h1 className='title2 my-2'>Testimonials</h1>

            <div className='w-full h-fit flex justify-center items-center gap-8 px-6 py-4'>
                <div className='w-[48%] flex flex-col gap-8'>
                    {/* Card 1 */}
                    <div className='flex w-fit gap-2 rounded-xl bg-white overflow-hidden shadow-xl'>
                        <div className='w-[25%]'>
                            <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt="" className='w-[100%] h-auto' />
                        </div>

                        <div className='w-[75%] p-5 flex flex-col gap-1 justify-center'>
                            <h1 className='title3'>Client Name</h1>
                            <p className='subText mb-5'>Job Title</p>
                            <p className='subText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit ducimus minima deleniti ab consequuntur quas beatae a nesciunt vel, aut earum adipisci quaerat deserunt.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='flex w-fit gap-2 rounded-xl bg-white overflow-hidden shadow-xl'>
                        <div className='w-[25%]'>
                            <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt="" className='w-[100%] h-auto' />
                        </div>

                        <div className='w-[75%] p-5 flex flex-col gap-1 justify-center'>
                            <h1 className='title3'>Client Name</h1>
                            <p className='subText mb-5'>Job Title</p>
                            <p className='subText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit ducimus minima deleniti ab consequuntur quas beatae a nesciunt vel, aut earum adipisci quaerat deserunt.</p>
                        </div>
                    </div>
                </div>

                <div className='w-[48%] flex flex-col gap-8'>
                    {/* Card 3 */}
                    <div className='flex w-fit gap-2 rounded-xl bg-white overflow-hidden shadow-xl'>
                        <div className='w-[25%]'>
                            <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt="" className='w-[100%] h-auto' />
                        </div>

                        <div className='w-[75%] p-5 flex flex-col gap-1 justify-center'>
                            <h1 className='title3'>Client Name</h1>
                            <p className='subText mb-5'>Job Title</p>
                            <p className='subText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit ducimus minima deleniti ab consequuntur quas beatae a nesciunt vel, aut earum adipisci quaerat deserunt.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className='flex w-fit gap-2 rounded-xl bg-white overflow-hidden shadow-xl'>
                        <div className='w-[25%]'>
                            <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt="" className='w-[100%] h-auto' />
                        </div>

                        <div className='w-[75%] p-5 flex flex-col gap-1 justify-center'>
                            <h1 className='title3'>Client Name</h1>
                            <p className='subText mb-5'>Job Title</p>
                            <p className='subText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit ducimus minima deleniti ab consequuntur quas beatae a nesciunt vel, aut earum adipisci quaerat deserunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
