import React from 'react'
import Button from './Components/Button'

function Homepage() {
  return (
    <>
    <div className='w-screen h-screen bg-blue-400 py-10 px-16'>
      <div className='h-fit py-6 px-7 text-white flex justify-between'>
        <div className='w-3/5'>
          <p className='font-medium pl-6'>HOME</p>
        </div>
        <div className='w-2/5 font-medium flex justify-around'>
          <p>ABOUT</p>
          <p>RESOURCES</p>
          <p><Button message="About Us"/></p>
        </div>
      </div>

      <div className='w-full h-5/8 flex flex-row'>
        <div className='w-1/2 h-full bg-blue-400 py-6 pl-10 flex flex-col space-y-10 align-bottom'>
        <h1 className='text-7xl text-white'>Text Box</h1>
        <h1 className='text-5xl text-yellow-400'>Text Box</h1>
        <h1><Button message="About Us"/></h1>
        </div>

        <div className='w-2/5 h-full border-b-2 border-white flex justify-end'>
        <p className='w-75 h-75 bg-gray-800 pl-10'></p>
        </div>
      </div>

      <div className='w-full pt-3 text-white px-8'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga exercitationem magni, eligendi sapiente voluptas maiores nostrum at? Corrupti, vitae neque! Ducimus nemo, voluptatem, esse obcaecati magni laborum reprehenderit aspernatur placeat odio in earum modi eaque alias ea quam voluptatum officiis error quidem quas inventore commodi nesciunt odit. Quos cumque, doloribus nisi autem sit sapiente maiores, voluptatem quod praesentium corporis illum iusto laboriosam quibusdam voluptate blanditiis, saepe qui nesciunt ad voluptatum!</p>

      </div>

      <div className='w-full h-1/4 flex align-bottom justify-center mt-5'>
        <p className='h-10 w-20 bg-zinc-400 rounded-t-full'></p>

      </div>


    </div> 
    </>
   
  )
}

export default Homepage