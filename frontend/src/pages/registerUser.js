import React from 'react'
import Login from '../components/login'

const loginPage = () => {
  return (
    <>
    <Login
        leftMessage="Welcome Back!"
        leftSubmessage="What could we do for you today?"
        rightMessage="Create an Account"
        leftSign="SIGN IN"
        rightSign="SIGN UP"
    />
    </>
  )
}

export default loginPage