import React from 'react'
import Login from '../components/login'

const loginPage = () => {
  return (
    <>
    <Login 
        leftMessage="Ready to Begin?"
        leftSubmessage="Help people get through mental troubles"
        rightMessage="Create an Account"
        leftSign="SIGN IN"
        rightSign="JOIN"
        hide="hidden"
    />
    </>
  )
}

export default loginPage