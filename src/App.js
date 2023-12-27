import './App.css';
import Counter from './Counter';

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
          Counter
        </a>
        <Counter initialCount={4} />
      </header>
    </div>
  );
}

export default App;
