import { useRef, useState, useEffect } from 'react';




const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(''); /*replace with router*/

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setEmail('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href='#'>Go to Home</a>
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
                            onChange={(e) => setUser(e.target.value)} 
                            value={user} 
                            required />

                        <label htmlFor='email'>Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={pwd} 
                            required />

                        <label htmlFor='password'>Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            onChange={(e) => setPwd(e.target.value)} 
                            value={pwd} 
                            required />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className='line'>
                            {/*put router link here*/}
                            <a href='#'>Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
};

export default Login;