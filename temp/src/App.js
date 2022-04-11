import logo from './logo.svg';
import './App.css';

function App() {
  // console.clear();
  function getTypes() {

  }

  const testCase = () => {
    getTypes();
    // console.log(solution('39878'));
    // console.log(solution('00900'));
    // console.log(solution('0000'));
    // console.log(solution('54321'));

    // const start= new Date().getTime();
    // for (let index = 0; index < 35000; index++) {
    //   solution('0343534745859890789679578568799999975746464646460988800')
    // }
    // const final = new Date().getTime() - start;
    // console.log('completed in '+final+'ms');
  }
 
  testCase();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={testCase}>Start!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
