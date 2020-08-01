import React from "react";
import Tasks from "./tasks";
const Visibility = (props) => {
  return (
    <div>
      <h1>Hello React</h1>
      <button onClick={props.randomPick} disabled={!props.hasTask}>
        random pick task
      </button>
      {props.tasks.map((task, index) => {
        return (
          <Tasks
            key={task}
            list={task}
            index={index + 1}
            deleteTask={props.taskDelete}
          />
        );
      })}
    </div>
  );
};
export default Visibility;
