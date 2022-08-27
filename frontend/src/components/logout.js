import { GoogleLogout } from "react-google-login";

const clientId = "762325933605-iea1fql7vkqmviqnp4q2935muoudinnp.apps.googleusercontent.com"

function Logout() {
    const onSuccess =() => {
        console.log("Logged out")
    } 
    return (
        <div id="signOutbutton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;