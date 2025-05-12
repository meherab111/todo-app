import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [userInput, setUserInput] = useState({});

  const handleInputValue = (value) => {
    setUserInput({id:value, content:value, crossed:false});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(userInput);
    setUserInput({id:"", content:"", crossed:false});
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={userInput.content}
            onChange={(event) => handleInputValue(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-button">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
