import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [userInput, setUserInput] = useState("");

  const handleInputValue = (value) => {
    setUserInput(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(userInput);
    setUserInput("");
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={userInput}
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
