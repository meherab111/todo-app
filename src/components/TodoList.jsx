import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({ currElem, crossed, onHandleCrossBtn, onHandleDeleteBtn }) => {
  return (
    <li className="todo-item">
      <span className={crossed ? "crossList" : "notCrossList"}>{currElem}</span>
      <button className="check-btn" onClick={() => onHandleCrossBtn(currElem)}>
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
