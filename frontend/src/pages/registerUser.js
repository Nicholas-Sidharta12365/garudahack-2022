import React from 'react'
import Login from '../components/login'

const loginPage = () => {
  return (
    <>
    <Login
        leftMessage="Welcome Back!"
        leftSubmessage="What could we do for you today?"
        rightMessage="Sign In or Register"
        leftSign="SIGN IN"
        rightSign="NEXT"
        auth="user"
    />
    </>
  )
}

export default loginPage