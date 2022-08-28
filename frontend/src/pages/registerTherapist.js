import React, { useEffect } from 'react'
import Login from '../components/login'
import { gapi } from "gapi-script"

const clientId = "762325933605-iea1fql7vkqmviqnp4q2935muoudinnp.apps.googleusercontent.com"

const TherapistLoginPage = () => {
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

export default TherapistLoginPage