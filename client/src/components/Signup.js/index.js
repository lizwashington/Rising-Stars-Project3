import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [MatchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //set focus on username
    useEffect(() => {
        userRef.current.focus();
    }, [])


    useEffect(() => {

        console.log(pwd);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, pwd, matchPwd)

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (event) => {
        event.preventDefault();
        // send user info to backend
    }

    return (
        <div>
            <p ref={errRef}></p>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(event) => setUser(event.target.value)}
                    required
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(event) => setPwd(event.target.value)}
                    required
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <label htmlFor="confirm_pwd">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(event) => setMatchPwd(event.target.value)}
                    required
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <button>Sign Up</button>
                <p>
                    Already registered?<br />
                    <span>
                    <NavLink to="/Login">
                        Login
                    </NavLink>
                    </span>
                </p>
            </form>  

        </div>
    )
}


export default Register