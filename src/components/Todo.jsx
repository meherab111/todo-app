import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { DateTime } from "./DateTime";
import { getLSTodoData, setLSTodoData } from "./TodoLocalStorage";

export const Todo = () => {
  const [formData, setFormData] = useState(() => 
    getLSTodoData()
  );

  const handleFormSubmit = (userInput) => {
    const { id, content, crossed } = userInput;

    if (!content) return;

    const ifTodoContentMatch = formData.find(
      (currElem) => currElem.content === content
    );

    if (ifTodoContentMatch) return;

    setFormData((prev) => [
      ...prev,
      { id: id, content: content, crossed: crossed },
    ]);
  };

  const handleDeleteBtn = (value) => {
    const filteredValue = formData.filter(
      (currElem) => currElem.content !== value
    );

    setFormData(filteredValue);
  };

  const handleCrossBtn = (value) => {
    const crossedValue = formData.map((currElem) => {
      if (currElem.content === value) {
        return { ...currElem, crossed: !currElem.crossed };
      } else {
        return currElem;
      }
    });

    setFormData(crossedValue);
  };


  setLSTodoData(formData)

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
          {formData.map((currElem) => {
            return (
              // child components
              <TodoList
                key={currElem.id}
                currElem={currElem.content}
                crossed={currElem.crossed}
                onHandleDeleteBtn={handleDeleteBtn}
                onHandleCrossBtn={handleCrossBtn}
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
