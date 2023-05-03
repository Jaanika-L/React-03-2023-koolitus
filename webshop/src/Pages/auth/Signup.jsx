
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtUIK3FmvaKHiECGXZ2ATSxxyzDDEHUTA";
    const [message, setMessage] = useState("");
    const { setLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const signUp = () => {
        // ANDMEBAAS KASUTAJA JAOKS
        const data = {
        "email": emailRef.current.value,
        "password": passwordRef.current.value,
        "returnSecureToken" : true
    };
        fetch(url, {"method":   "POST", "body":JSON.stringify(data)})
        .then(res => res.json())
        .then(json => {

            if (json.error === undefined) {
                setLoggedIn(true);
                navigate("/admin");
                sessionStorage.setItem("token", json.idToken)
            } else {
                setMessage(json.error.message)
            }
            
        })
       

       

    }
 
 
 
    return (
    <div>
         <div>{message}</div>
        <label>Email</label> <br />
        <input ref={emailRef} type="text" /> <br />
        <label>Password</label><br />
        <input ref={passwordRef} type="text" /><br /><br />
        <button onClick={signUp}>Signup</button>
    </div>
  )
}

export default Signup