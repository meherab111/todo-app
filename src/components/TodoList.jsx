import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({ key, currElem, onHandleDeleteBtn }) => {
  return (
    <li key={key} className="todo-item">
      <span>{currElem}</span>
      <button className="check-btn">
        <FaCheckCircle />
      </button>
      <button
        className="delete-btn"
        onClick={() => onHandleDeleteBtn(currElem)}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
