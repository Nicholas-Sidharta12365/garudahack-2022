import React from 'react'

const login = (props) => {
  return (
    <>
    <div className="grid grid-cols-2 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen place-items-center font-roboto">
        <div className="grid grid-cols-1">
            <div className="text-6xl font-bold text-center">{props.leftMessage}</div>
            <div className="text-white text-center text-xl mt-4">{props.leftSubmessage}</div>
            <button className="place-self-center border-2 rounded-full py-3 px-12 border-black mt-16">{props.leftSign}</button>
            <div className={`text-white text-center text-xl mt-16 ${props.hide}`}>Are you a therapist?</div>
            <button className={`place-self-center border-2 rounded-full py-3 px-12 border-black mt-8 ${props.hide}`}>JOIN US</button>
        </div>
        <div className="bg-white h-screen w-full">
            <div className="text-blue-700 font-bold text-5xl text-center mt-48">{props.rightMessage}</div>
            <div className="grid grid-cols-1 text-xl">
                <input type="text" className="bg-blue-300 rounded py-2 px-4 w-2/4 text-white mt-16 placeholder-white place-self-center" placeholder='Username' />
                <input type="text" className="bg-blue-300 rounded py-2 px-4 w-2/4 text-white mt-4 placeholder-white place-self-center" placeholder='Email' />
                <input type="password" className="bg-blue-300 rounded py-2 px-4 w-2/4 text-white mt-4 placeholder-white place-self-center" placeholder='Password' />
                <button className="place-self-center border-2 bg-blue-700 text-white rounded-full py-3 px-12 border-black mt-16">{props.rightSign}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default login