import { useState } from "react"
import profileimage from "./profile.webp"
import ProfilePage from "./ProfilePage";  /// Profile page replaced here
function Profile(){
    const [click, setclick] = useState(false);

return (
    <div>
        {!click && (
        <img src= {profileimage} alt="profilelink" onClick={() => setclick(!click)} style={{ width: '100px', height: 'auto'}}/> )}
        {click && <ProfilePage/>}
    </div> ///     The Profile page replaced here
)
}

export default Profile