import logo from "./logo.svg";
import "./App.css";
import { createID, test, foodrecipe, TodaysDate } from "reuseable-component";
import { Button } from "template-react-component-library";

function App() {
  const buttonClick = () => {
    console.log("Message from component:: Button clicked");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        My ID - {createID()}
        {foodrecipe({ name: "Dosa" })}
        <Button label="Hello world!" onClick={() => buttonClick()} />
      </header>
    </div>
  );
}

export default App;
