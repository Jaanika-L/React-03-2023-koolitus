import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom';

function Login() {
    const url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtUIK3FmvaKHiECGXZ2ATSxxyzDDEHUTA"
   
    const { setLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [message, setMessage] = useState("");
    const login = () => {
        // ANDMEBAAS KASUTAJA JAOKS 
        //Läbi harjutamine, kas password on 123
        // if (passwordRef.current.value ==="123") {
        //     setLoggedIn(true);
        //     navigate("/admin");
        //     sessionStorage.setItem("token", "SUVALISED_TÄHED_JA_NUMBRID")
        // } else {
        //     setMessage("Wrong password!")
        // }


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
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login