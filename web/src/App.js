import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  function Increment(){
    setCounter (counter+1);
  }
  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={Increment}>Increment</button>
    </>
  );
}

export default App;
