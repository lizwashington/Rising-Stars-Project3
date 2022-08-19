import './App.css';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <h1>First Name  Last Name</h1>
      <h3>Profile</h3>
      <img src="https://via.placeholder.com/150'" alt='profilePic'></img>
      <Nav/>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
