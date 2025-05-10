import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [userInput, setUserInput] = useState("");

  const [formData, setFormData] = useState([]);


    const handleInputValue = (value) => {
        setUserInput(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        if(!userInput) return;

        if(formData.includes(userInput)){
            setUserInput("")
            return;
        } 

        setFormData((prev) => [...prev, userInput])
        
        setUserInput("")
        
    }

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input type="text" className="todo-input" autoComplete="off" value={userInput} onChange={(event) => handleInputValue(event.target.value)}/>
            </div>
            <div>
              <button type="submit" className="todo-button">
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section className="myUnOrdList">
        <ul>
            {
                formData.map((currElem, index) => {
                    return(<li key={index}>

                        <span>{currElem}</span>
                        <delete><FaCheckCircle /></delete>
                        <delete><MdDeleteForever /></delete>
                    </li>)
                })
            }
        </ul>
        </section>
      </header>
    </section>
  );
};
