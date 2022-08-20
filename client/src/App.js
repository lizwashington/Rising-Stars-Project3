import './App.css';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
    <Login/>

    
      <h1>First Name  Last Name</h1>
      <h3>Profile</h3>
      <img src="https://via.placeholder.com/150'" alt='profilePic'></img>
      <Nav/>
      <Dashboard/>
    </div>
  );
}

export default App;
