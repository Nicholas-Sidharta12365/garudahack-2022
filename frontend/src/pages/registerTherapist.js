import React from 'react'
import Login from '../components/login'

const loginPage = () => {
  return (
    <>
    <Login 
        leftMessage="Ready to Begin?"
        leftSubmessage="Help people get through mental troubles"
        rightMessage="Sign In or Register"
        leftSign="SIGN IN"
        rightSign="JOIN"
        hide="hidden"
        auth="therapist"
    />
    </>
  )
}

export default loginPage