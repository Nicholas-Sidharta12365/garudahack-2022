import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom"

const clientId = "762325933605-iea1fql7vkqmviqnp4q2935muoudinnp.apps.googleusercontent.com"

function Logout() {
    const navigate = useNavigate()
    const onSuccess =() => {
        navigate('/login')
    } 
    return (
        <div id="signOutbutton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            theme="dark"
            icon={false}
            />
        </div>
    )
}

export default Logout;