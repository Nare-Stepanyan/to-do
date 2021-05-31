import React, { useState } from "react";
import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import idGenerator from "./../helpers/idGenerator";

let tasksList = [
  {
    id: idGenerator(),
    item: "Prepare for Session",
  },
  {
    id: idGenerator(),
    item: "Assign Tasks",
  },
  {
    id: idGenerator(),
    item: "Be there on time",
  },
  {
    id: idGenerator(),
    item: "Start Sessions",
  },
];
function ToDos() {
  const [tasks, setTasks] = useState(tasksList);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    tasks.unshift({ id: idGenerator(), item: value });
    setTasks(tasks);
    setValue("");
  };

  let taskList = tasks.map((el) => {
    return (
      <li key={el.id}>
        <Task value={el.item} />
      </li>
    );
  });
  return (
    <div>
      <div className="wrapper">
        <div className="todo-header">
          <span>Tasks</span>
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
        <div className="newTask">
          <input type="text" value={value} onChange={handleChange} />
          <button onClick={handleClick}>Add</button>
        </div>
        <ul>{taskList}</ul>
      </div>
    </div>
  );
}

export default ToDos;
