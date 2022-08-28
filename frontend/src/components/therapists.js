import React from 'react'
import { useNavigate } from 'react-router-dom';

const Therapists = (props) => {
  const navigate = useNavigate()

  let disable = "disabled";

  if(props.status === "active"){
      disable = "";
  }
    
  const handleChatTherapist = () => {
    navigate("/mainvideo")
  }

  return (
    <div className={`border rounded-lg bg-blue-200 grid grid-cols-${props.cols} font-roboto p-4 mt-2`}>
        <div className="text-black place-self-center">{props.name}</div>
        <div className="text-black place-self-center">{props.status}</div>
        <div className={`place-self-center ${props.hide}`}>
            <button className="border-2 bg-black w-[120%] text-white rounded-full py-1 px-2" disabled={disable} onClick={handleChatTherapist}>TALK</button>
        </div>
    </div>
  )
}

export default Therapists