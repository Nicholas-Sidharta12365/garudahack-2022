import React from 'react'
import LoginButton from "../components/login"
import LogoutButton from "../components/logout"
import { useEffect } from 'react'
import { gapi } from "gapi-script"

const clientId = "762325933605-iea1fql7vkqmviqnp4q2935muoudinnp.apps.googleusercontent.com"


function LoginPage() {
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
    <div>
    <LoginButton />
    </div>
  )
}

export default LoginPage