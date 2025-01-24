import React from 'react'

function Homepage2() {
  return (
    <>
    <div className='w-full h-screen px-14'>

    <div className='flex justify-center px-16 ml-4'>
        <div className='w-20 h-10 bg-zinc-400 rounded-b-full'></div>

    </div>

    <div className='w-full h-[90%] bg-white flex flex-row mt-12'>
        <div className='w-3/5 h-full text-zinc-400 flex flex-row'>
        <div className='w-1/2 pr-12'>
            <h1>ABOUT US</h1>
            <hr className='border-1 border-zinc-300 my-1 w-[80%]'/>
        </div>
        <div className='w-1/2 px-4 text-zinc-500'>
        <p className='text-4xl italic'>Lorem ipsum dolor sit amet consectetur.</p>

        </div>

        </div>
        <div className='w-2/5 h-full'>
        <p className='text-zinc-600 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam magni blanditiis nesciunt fugiat consequatur laudantium hic architecto facilis dolorem officia saepe nemo, impedit porro qui corporis quaerat soluta ducimus perferendis assumenda voluptate magnam incidunt fuga. Autem quisquam inventore quis.</p>

        <p className='text-zinc-500 py-4 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores consectetur molestias nesciunt accusantium sapiente aut aperiam quasi libero laudantium corrupti reiciendis officia harum consequuntur molestiae sit, ab laborum, eos beatae dolore sed, dicta nobis sint! Totam tempora, excepturi, iure voluptates facere fuga distinctio a dicta sed temporibus voluptas aliquam?</p>

        <p className='text-blue-300 underline'>About Us</p>

        </div>

    </div>
    </div>
    </>


  )
}

export default Homepage2