import { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
      alert("Empty Data can't be Add. Pls add the Task first");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const updateItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <div className="main-div">
      <div className="child-div">
        <h2>Todo List</h2>

        <div className="add-Items">
          <input
            type="text"
            placeholder="✍️ Add task"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="btn" onClick={addItem}>
            Add
          </button>
        </div>

        <div className="showItems">
          {items.map((elem, ind) => {
            return (
              <ul className="items" key={ind}>
                <li>
                  {elem}
                  <span>
                    <i
                      className="ri-delete-bin-5-line add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(ind)}
                    ></i>
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>

      {/* clear all item */}
      <div className="showItems">
        <button className="clear-btn" onClick={removeAll}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Todo;
