// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function notLoggedIn() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login"  element={<Login />} />
          </Routes>
       </Router>
    </>
  );
}



function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}



      </header>
    </div>
  );
}

export default App;
