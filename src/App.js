import './App.css';
import Counter from './Counter';
import ReduxCounter from './ReduxCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/Trance0id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my Github!
        </a>
        <Counter initialCount={0} />
        <ReduxCounter  />
      </header>
    </div>
  );
}

export default App;
