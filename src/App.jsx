import { useReducer, useState } from "react";
import "./App.css";

const reducer = (state, action) => {
  if (action.type === "SUBMIT") {
    const newPeople = [...state.people, action.payload];
    return { ...state, people: newPeople };
  }

  if (action.type === "CLEAR") {
    return { people: [] };
  }

  throw new Error("No matching action type");
};

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

  const clearModal = () => {
    dispatch({ type: "CLEAR" });
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
        <button type="button" onClick={clearModal}>
          Clear
        </button>
      </form>

      {state.people.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </div>
  );
}

export default App;
