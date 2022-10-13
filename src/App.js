import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [test, setTest] = useState("Not loaded");
  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch("http://3.16.23.82:8080/test");
      setTest(response.data);
      console.log(response.body);
    };
    fetchFn();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {test}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>Test variable: {process.env.REACT_APP_TEST_VARIABLE}</div>
      </header>
    </div>
  );
}

export default App;
