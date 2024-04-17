import { useState } from "react";
import "./styles.css";

function App() {
  const [newItem, setNewItem] = useState("");
  //setNewItem("ddd");

  funxct
  return (
    <>
      <h1 className="header">Todo List</h1>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            {newItem}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
