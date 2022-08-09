import { useReducer, useState } from "react";
import "./App.css";
import { reducer } from "./Reducers";



const defaultState = {
  people: [],
};

function App() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name };
      dispatch({ type: "SUBMIT", payload: newPeople });
      setName("");
    } else {
      dispatch({ type: "NOSUBMIT" });
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">ADD</button>
        <button type="button" onClick={() => dispatch({ type: "CLEAR" })}>
          Clear all
        </button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: person.id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
