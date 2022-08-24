import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'; 


const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
    
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Sign Up</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
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
            {error && <div>Sign up failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;


// import { useRef, useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// const Register = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [userFocus, setUserFocus] = useState(false);

//     const [pwd, setPwd] = useState('');
//     const [pwdFocus, setPwdFocus] = useState(false);

//     const [matchPwd, setMatchPwd] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [MatchFocus, setMatchFocus] = useState(false);

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     //set focus on username
//     useEffect(() => {
//         userRef.current.focus();
//     }, [])


//     useEffect(() => {

//         console.log(pwd);
//         const match = pwd === matchPwd;
//         setValidMatch(match);
//     }, pwd, matchPwd)

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd, matchPwd])

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         // send user info to backend
//     }

//     return (
//         <div>
//             <p ref={errRef}></p>
//             <h1>Sign up</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(event) => setUser(event.target.value)}
//                     required
//                     onFocus={() => setUserFocus(true)}
//                     onBlur={() => setUserFocus(false)}
//                 />
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     onChange={(event) => setPwd(event.target.value)}
//                     required
//                     onFocus={() => setPwdFocus(true)}
//                     onBlur={() => setPwdFocus(false)}
//                 />
//                 <label htmlFor="confirm_pwd">Confirm Password:</label>
//                 <input
//                     type="password"
//                     id="confirm_pwd"
//                     onChange={(event) => setMatchPwd(event.target.value)}
//                     required
//                     onFocus={() => setMatchFocus(true)}
//                     onBlur={() => setMatchFocus(false)}
//                 />
//                 <button>Sign Up</button>
//                 <p>
//                     Already registered?<br />
//                     <span>
//                     <NavLink to="/Login">
//                         Login
//                     </NavLink>
//                     </span>
//                 </p>
//             </form>  

//         </div>
//     )
// }


// export default Register