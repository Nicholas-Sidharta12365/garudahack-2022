import React from 'react'
import Login from '../components/login'

const loginPage = () => {
  return (
    <>
    <Login
      leftMessage="Hello There!"
      leftSubmessage="Come join us today!"
      rightMessage="Sign in to AppName"
      leftSign="SIGN UP"
      rightSign="SIGN IN"
    />
    </>
  )
}

export default loginPage