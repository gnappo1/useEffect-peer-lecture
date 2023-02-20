// import logo from './logo.svg';
import './App.css';
import JokesContainer from './components/JokesContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">Some jokes to laugh it off... why not?</header>
        {/* Exercise for us to try all together in the end */}
        {/* add a button that on click will toggle the state of a variable */}
        {/* if the state variable is true(hy), render a Timer component (TBCreated) */}
        {/* if the state variable is false(y), render nothing */}
        <JokesContainer />
    </div>
  );
}

export default App;
