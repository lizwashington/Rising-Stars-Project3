import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../utils/auth';
import { Navigate, useNavigate, NavLink } from 'react-router-dom';



const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const auth = useAuth();
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

 
    

    const handleSubmit = async (event) => {
        const handleLogin = () => {
            auth.login(user)
            Navigate('/')
        }
        event.preventDefault();
        console.log(user, pwd);
        setSuccess(true);
        //clears fields
        setUser('');
        setPwd('');
                
    }


    
 

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href='/'>Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            ref={userRef} 
                            autoComplete="off" 
                            onChange={(event) => setUser(event.target.value)} 
                            value={user} 
                            required />

                        <label htmlFor='password'>Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            onChange={(event) => setPwd(event.target.value)} 
                            value={pwd} 
                            required />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span>
                            <NavLink to="/Signup">
                                Sign up
                            </NavLink>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
};

export default Login;