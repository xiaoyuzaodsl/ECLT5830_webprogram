import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Hello world...");

  const onDemoClick = () => {
    fetch("/.netlify/functions/demo")
      .then((res) => { console.log(res.json);return res.json();})
      .then((json) => {
        console.log(json);
        setMessage(json.value);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <button onClick={onDemoClick} >Demo Button</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
