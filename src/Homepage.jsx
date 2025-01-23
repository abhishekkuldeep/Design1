import React from 'react'

function Homepage() {
  return (
    <div className="bg-sky-400 min-h-screen">
      <div className="flex justify-between px-10 py-5">
        <div>
          <p className="font-bold">HOME</p>
        </div>
        <div className="flex space-x-5">
          <p className="font-bold">ABOUT</p>
          <p className="font-bold">RESOURCES</p>
          <button className="bg-white px-6 py-2 rounded-md font-bold">JOIN US</button>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col space-y-5">
          <h1 className="text-5xl font-bold">Text Box</h1>
          <h1 className="text-5xl font-bold text-yellow-400">text box</h1>
          <button className="bg-white px-6 py-2 rounded-md font-bold">JOIN US</button>
        </div>
        <div className="w-96 h-96 bg-gray-800 ml-10"></div>
      </div>
      <p className="text-center px-10 text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  )
}

export default Homepage