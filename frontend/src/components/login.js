import React from 'react'
import { GoogleLogin } from 'react-google-login';
const axios = require('axios').default;

const clientId = "762325933605-iea1fql7vkqmviqnp4q2935muoudinnp.apps.googleusercontent.com"


const login = (props) => {
  const onSuccess = (res) => {
    const token = res.tokenId
    const uid = res.googleId
    const name = res.profileObj.name

    axios.post(`http://localhost:5000/login`, {
      uid, name
    }).then((res) => {
      console.log(res)
    })

    axios.post(`http://localhost:5000/auth`).then((res) => {
      console.log(res)
    })
  }
  const onFailure = (res) => {
    console.log("login failed")
  }
  return (
    <>
    <div className="grid grid-cols-2 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen place-items-center font-roboto">
        <div className="grid grid-cols-1">
            <div className="text-6xl font-bold text-center">{props.leftMessage}</div>
            <div className="text-white text-center text-xl mt-4">{props.leftSubmessage}</div>
            {/* <button className="place-self-center border-2 rounded-full py-3 px-12 border-black mt-16" onClick={handleLogin}>{props.leftSign}</button> */}
            <div className={`text-white text-center text-xl mt-16 ${props.hide}`}>Are you a therapist?</div>
            <button className={`place-self-center border-2 rounded-full py-3 px-12 border-black mt-8 ${props.hide}`}>JOIN US</button>
        </div>
        <div className="bg-white h-screen w-full">
            <div className="text-blue-700 font-bold text-5xl text-center mt-48">{props.rightMessage}</div>
            <div className="grid grid-cols-1 text-xl">
                <div id='signInbutton' className="place-self-center rounded-full py-3 px-12 border-black mt-16">
                  <GoogleLogin
                  clientId={clientId} 
                  buttonText="Sign In with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy="single_host_origin"
                  isSignedIn={true}
                  />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default login

// import { GoogleLogin } from 'react-google-login';

// const clientId = "762325933605-iea1fql7vkqmviqnp4q2935muoudinnp.apps.googleusercontent.com"

// function Login() {
//   const onSuccess = (res) => {
//     console.log("Login SUCCESS ! currentuser:")
//   }
//   const onFailure = (res) => {
//     console.log("login failed")
//   }
//   return(
//     <div id='signInbutton'>
//       <GoogleLogin
//       clientId={clientId} 
//       buttonText="Sign In with Google"
//       onSuccess={onSuccess}
//       onFailure={onFailure}
//       cookiePolicy="single_host_origin"
//       isSignedIn={true}
//       />
//     </div>
//   )
// }

// export default Login;