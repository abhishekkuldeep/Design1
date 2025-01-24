import React from 'react'

function Button({message}) {
  return (
    <div>
        <button className='w-fit h-fit px-5 py-1 bg-white text-blue-400 rounded-3xl'>{message}</button>
    </div>
  )
}

export default Button