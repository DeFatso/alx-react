import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holbertonLogo from './holberton_logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="logo"></img>
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"></input>
        <button>OK</button>
      </div>
      <footer>
        <p>{getFooterCopy(true)} {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
