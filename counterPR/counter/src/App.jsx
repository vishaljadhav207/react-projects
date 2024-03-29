import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  // let counter=5;

  const addValue = () => {
    // console.log("value added",Math.random())
    // console.log(counter);
    // counter+=1;
    // setCounter(counter + 1);//so  this is bunch of packages and still counter 1 only 
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter(prevcounter =>prevcounter+1);//this will add 3 in 5 onclick result is 8
    setCounter(prevcounter =>prevcounter+1);//we take prev state and this is not bundled state
    setCounter(prevcounter =>prevcounter+1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("not below 0");
    }
  };

  return (
    <>
      <h1>Learning</h1>
      <h2>counter value {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
