import React, { useState } from 'react';
//import { Navigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import AuthProvider from '../../utils/auth'; 

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  
  const [login, { error }] = useMutation(LOGIN_USER);


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

// submit form
const handleFormSubmit = async event => {
  event.preventDefault();

  try {
    const { data } = await login({
      variables: { ...formState }
    });
  
    AuthProvider.login(data.login.token);
    // return <Navigate to = '/' />
  } catch (e) {
    console.error(e);
  }
};

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;


// import React, { useRef, useState, useEffect } from 'react';
// import { useAuth } from '../../utils/auth';
// import { Navigate, useNavigate, NavLink } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';



// const Login = () => {
//     const userRef = useRef();
//     const errRef = useRef();
//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const auth = useAuth();
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState('');

    

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])

 
    

//     const handleSubmit = async (event) => {
//         const handleLogin = () => {
//             auth.login(user)
//             Navigate('/')
//         }
//         event.preventDefault();
//         console.log(user, pwd);
//         setSuccess(true);
//         //clears fields
//         setUser('');
//         setPwd('');
                
//     }


    
 

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>You are logged in!</h1>
//                     <br />
//                     <p>
//                         <a href='/'>Go to Home</a>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Sign In</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor='username'>Username:</label>
//                         <input 
//                             type="text" 
//                             id="username" 
//                             ref={userRef} 
//                             autoComplete="off" 
//                             onChange={(event) => setUser(event.target.value)} 
//                             value={user} 
//                             required />

//                         <label htmlFor='password'>Password:</label>
//                         <input 
//                             type="password" 
//                             id="password" 
//                             onChange={(event) => setPwd(event.target.value)} 
//                             value={pwd} 
//                             required />
//                         <button>Sign In</button>
//                     </form>
//                     <p>
//                         Need an Account?<br />
//                         <span>
//                             <NavLink to="/Signup">
//                                 Sign up
//                             </NavLink>
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// };

// export default Login;