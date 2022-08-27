import React from 'react'
import Questions from '../components/questions'

const questionaire = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full pb-4 font-roboto">
        <div className="text-5xl text-center py-8 place-self-center">Please fill in some questions before we continue</div>
        <div className="grid grid-cols-1">
          <div className="">
            <div><Questions presets="multiple" question="What is life?" num={2} answer={["yes", "no"]}/></div>
            <div><Questions presets="fill" question="What is life?" /></div>
            <div><Questions question="What is life?" /></div>
            <div><Questions presets="multiple" question="What is life?" num={2} answer={["yes", "no"]}/></div>
            <div><Questions presets="fill" question="What is life?" /></div>
            <div><Questions question="What is life?" /></div>
          </div>
          <div className="pt-6 place-self-center">
            <button className="border-2 bg-white text-black rounded-full py-3 px-12 border-black">FINISH</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default questionaire