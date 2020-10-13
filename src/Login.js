import { auth } from './firebase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const login = (event) => {
        event.preventDefault(); // will stop the refresh when clicking the login button
        // Logic for login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                // When logged in redirect to home page
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    

    const register = (event) => {
        event.preventDefault(); // stops refresh on clicking register
        // logic for register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // Redirect to home Page after creating the given e-mail and pasword
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className = 'login'>
            <Link to = '/'>
            <img className = 'login__logo' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt = '' />
            </Link>

            <div className = 'login__container'>
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type = 'email' value = { email } onChange = { event => setEmail(event.target.value) }></input>

                    <h5>Password</h5>
                    <input type = 'password' value = { password } onChange = { event => setPassword(event.target.value) }></input>

                    <button type = 'submit' onClick = { login } className = 'login__signInButton'>Sign In</button>
                    
                </form>

                <p>
                        By signing-in you agree to the Amazon's Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick = { register } className = 'login__registerButton'>Create your Amazon account</button>
               
            </div>
        </div>
    )
}

export default Login
