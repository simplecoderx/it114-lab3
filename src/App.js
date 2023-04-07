import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App" style={{ justifyContent: "center" }}>
      {/* TASK 1 */}
      <div className="tasks">
        <h1 className="tasktitle">TASK 1</h1>
        <Greeting name="John"></Greeting>
        <Greeting name="Mary"></Greeting>
        <Greeting name="Alex"></Greeting>
        <Greeting name="Sarah"></Greeting>
        <Greeting name="Lynn"></Greeting>
      </div>


      {/* TASK 2 */}
      <div className="tasks">
      <h1 className="tasktitle">TASK 2</h1>
        <Counter />
      </div>

      {/* TASK 3 */}
      <div className="tasks">
      <h1 className="tasktitle">TASK 3</h1>
      <PersonList>
        <Person name="John" age="25" />
        <Person name="Mary" age="30" />
        <Person name="Tom" age="20" />
        <Person name="Tomy" age="201" />
        <Person name="Eric" age="25" />
        <Person name="Josh" age="65" />
      </PersonList>
      </div>
    </div>
  );
}

export default App;
