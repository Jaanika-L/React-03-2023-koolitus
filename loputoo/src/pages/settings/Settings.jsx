import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picutre</label>
            <div className="settingsPP">
                <img src="https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg" alt="" />
                <label htmlFor="fileInput">
                <i classname="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Jaanika" />
            <label>Email</label>
            <input type="email" placeholder="jaanika@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
        </div>
        <Sidebar/>
        </div>
  )
}

export default Settings