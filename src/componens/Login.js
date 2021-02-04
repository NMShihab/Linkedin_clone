import React ,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import '../css/Login.css'
import { login } from '../features/userSlice'
import { auth } from '../firebase'


function Login() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const logIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth =>{
            dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                displayName : userAuth.user.displayName,

            }))
            
        }).catch(error => alert(error))


    }
    const signUp = () =>{
        if (!name){
            return alert("Please Enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) =>{
                console.log(userAuth.user)
                userAuth.user.updateProfile({
                    displayName : name,
                })
                .then(() =>{
                    dispatch(login({
                        email : userAuth.user.email,
                        uid : userAuth.user.uid,
                        displayName : name,
                    }))

                })

        }).catch((error) => alert(error))

    }
    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg" alt=""/>

            <div className="login__card">
                <form>
                    <input
                        type="text" 
                        placeholder = "Full name"
                        value = {name}
                        onChange = {(e)=> setName(e.target.value)}
                    />
                    <input
                        type="email" 
                        placeholder = "Email"
                        value = {email}
                        onChange = {(e)=> setEmail(e.target.value)}
                     />
                    <input
                        type="password" 
                        placeholder = "Password"
                        value = {password}
                        onChange = {(e)=> setPassword(e.target.value)}
                    />

                    <button type = 'submit' onClick = {logIn}>Sign In</button>
                </form>

                <p>Already on Linkedin? <span className = 'login__join' onClick = {signUp}>
                                        Register here</span></p>

            </div>
            
            
        </div>
    )
}

export default Login
