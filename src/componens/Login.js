import React from 'react'
import '../css/Login.css'

function Login() {
    const logIn = () =>{

    }
    const signUp = () =>{

    }
    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg" alt=""/>

            <div className="login__card">
                <form>
                    <input type="text" placeholder = "Full name"/>
                    <input type="email" placeholder = "Email"/>
                    <input type="password" placeholder = "Password"/>

                    <button type = 'submit' onClick = {signUp}>Agree & join</button>
                </form>

                <p>Already on Linkedin? <span className = 'login__join' onClick = {logIn}>
                                        Sign in</span></p>

            </div>
            
            
        </div>
    )
}

export default Login
