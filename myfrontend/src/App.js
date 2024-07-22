import logo from './logo.svg';
import './App.css';
import DisplayButton from './components/Display';
import AddButton from './components/Add';
import RemoveButton from './components/Remove';
import SearchButton from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Commodity / FX exchange
        </p>
        <DisplayButton />
        <AddButton />
        <RemoveButton />
        <SearchButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          By: Marcos Rivera 
        </a>
      </header>
    </div>
  );
}

export default App;
