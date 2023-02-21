// import logo from './logo.svg';
import './App.css';
import JokesContainer from './components/JokesContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">Some jokes to laugh it off... why not?</header>
        {/* create a state variable called showTimer set to false by default */}
        {/* add a button that on click will toggle the state of a variable */}
        {/* if the state variable is true(hy), render the Timer component */}
        {/* if the state variable is false(y), render nothing */}
        {/* What you're doing is called conditional rendering!!! */}
        <JokesContainer />
    </div>
  );
}

export default App;
