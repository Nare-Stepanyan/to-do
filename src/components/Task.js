import React from "react";

const Task = ({ value }) => {
  return (
    <div>
      <label className="container">
        {value}
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Task;
