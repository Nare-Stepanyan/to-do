import React from "react";
import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function ToDos() {
  return (
    <div>
      <div className="wrapper">
        <div className="todo-header">
          <span>Tasks</span>
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ToDos;
