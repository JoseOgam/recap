import React from "react";

const Tasks = (props) => {
  return (
    <p>
      {props.index}. {props.list}
      <button onClick={() => props.deleteTask(props.list)}>delete</button>
    </p>
  );
};

export default Tasks;
