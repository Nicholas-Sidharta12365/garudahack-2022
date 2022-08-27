import React from 'react'

const therapists = (props) => {

    var disable = false;

    if(props.status === "active"){
        disable = true;
    }

  return (
    <div className={`border rounded-lg bg-blue-200 grid grid-cols-${props.cols} font-roboto p-4 mt-2`}>
        <div className="text-black place-self-center">{props.name}</div>
        <div className="text-black place-self-center">{props.status}</div>
        <div className={`place-self-center ${props.hide}`}>
            <button className="border-2 bg-blue-700 text-white rounded-full py-1 px-4 border-white" disabled={disable}>TALK</button>
        </div>
    </div>
  )
}

export default therapists