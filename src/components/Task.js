import React, { useState } from "react";

const Task = ({ value }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };
  console.log(checked);
  return (
    <div>
      <label className={checked ? `container done` : `container`}>
        {checked ? <del>{value}</del> : value}
        <input type="checkbox" onClick={handleCheck} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Task;
