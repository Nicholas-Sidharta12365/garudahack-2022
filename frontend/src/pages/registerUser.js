import React, { useEffect } from 'react'
import Login from '../components/login'
import { gapi } from "gapi-script"

const clientId = "762325933605-iea1fql7vkqmviqnp4q2935muoudinnp.apps.googleusercontent.com"

const LoginPage = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  })
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

export default LoginPage