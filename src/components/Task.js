import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ value, id, removeTask }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="task">
      <label className={checked ? `container done` : `container`}>
        {checked ? <del>{value}</del> : value}
        <input type="checkbox" onClick={handleCheck} />
        <span className="checkmark"></span>
      </label>
      <div className="btn-del-edit">
        <span className="edit">
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <span className="delete" onClick={() => removeTask(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </div>
  );
};

export default Task;
