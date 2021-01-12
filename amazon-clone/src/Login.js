import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e=> {
        e.preventDefault();

        //some fancy firebase stuff for authentication

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth =>{
                history.push('/');
            })
            .catch(error => alert(error.message));
    }

    const register= e => {
        e.preventDefault();

         //Here do some fancy firebase stuff for registration
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            // It successfully created a new user with email and password
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
        
        
        

       

    }

    return (
        <div className="login">
            <Link to="/">
            <img 
                className="login__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" 
            />
            </Link>

            <div className="login__container">
                <h1>Login</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="login__signInButton" type="submit" onClick={signIn}>Login</button>
                </form>
                <p>
                    By signing-in you agree to AMAZON-FAKE-CLONE
                    Conditions of the Use & Privacy Notice.
                </p>
                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
