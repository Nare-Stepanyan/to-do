import React from "react";

const Task = ({ name, value }) => {
  return (
    <div>
      <input type="checkbox" name={name} />
      <label for={name}>{value}</label>
    </div>
  );
};

export default Task;
