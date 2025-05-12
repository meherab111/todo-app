import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { DateTime } from "./DateTime";

export const Todo = () => {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (userInput) => {
    if (!userInput) return;

    if (formData.includes(userInput)) return;

    setFormData((prev) => [...prev, userInput]);
  };

  const handleDeleteBtn = (value) => {
    const filteredValue = formData.filter((currElem) => currElem !== value);

    setFormData(filteredValue);
  };

  const handleClearBtn = () => {
    setFormData([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        {/* child components */}
        <DateTime />
      </header>
      {/* child components */}
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {formData.map((currElem, index) => {
            return (
              // child components
              <TodoList
                key={index}
                currElem={currElem}
                onHandleDeleteBtn={handleDeleteBtn}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearBtn}>
          Clear All
        </button>
      </section>
    </section>
  );
};
