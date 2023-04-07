import React, { useState } from "react";

const Counter = () => {
  //when using a state, it must have a current state which is the count const
  //second value which is the function that is used to update the state

  const [count, setCount] = useState(0);

  function increment() {
  //setCount(prevCount => prevCount+=1);
  setCount(function (prevCount) {
      return (prevCount += 1);
  });
  }

  function decrement() {
  setCount(function (prevCount) {
      if (prevCount > 0) {
      return (prevCount -= 1);
      } else {
      return (prevCount = 0);
      }
  });
  }

  //Uncomment these if you want to display negative integers when decremented
//   const [count, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(count + 1);
//   };
//   const decrement = () => {
//     setCounter(count - 1);
//   };

  return (
    <div>
      <div className="App">
        <h1>{count}</h1>
        <button className="decrement" onClick={decrement}>Decrement</button>
        <button className="increment" onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
