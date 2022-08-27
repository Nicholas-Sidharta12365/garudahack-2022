import React from 'react'

const image = (props) => {
  return (
    <>
    <div class="mx-auto w-64 text-center ">
        <div class="relative w-64">
            <img class="w-64 h-64 rounded-full" src={props.source} alt="profile" />
        </div>
    </div>
    </>
  )
}

export default image