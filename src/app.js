import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.state = {
      tasks: ["cookin", "eating", "coding", "learning"],
    };
  }
  handleAddTask(task) {
    if (!task) {
      return "please add something";
    } else if (this.state.tasks.indexOf(task) > -1) {
      return "the task exist";
    }
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(task),
    }));
  }
  render() {
    return (
      <div>
        <Visibility tasks={this.state.tasks} />
        <AddTask addtask={this.handleAddTask} />
      </div>
    );
  }
}
const Visibility = (props) => {
  return (
    <div>
      <h1>Hello React</h1>
      {props.tasks.map((task, index) => {
        return <Tasks key={task} list={task} index={index + 1} />;
      })}
    </div>
  );
};

const Tasks = (props) => {
  return (
    <p>
      {props.index}. {props.list}
    </p>
  );
};

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.state = {
      error: undefined,
    };
  }
  addTask(e) {
    e.preventDefault();
    var task = e.target.task.value.trim();
    var errorData = this.props.addtask(task);
    this.setState(() => ({
      error: errorData,
    }));
  }
  render() {
    return (
      <div>
        {this.state.error}
        <form onSubmit={this.addTask}>
          <input type="text" placeholder="task" name="task" />
          <button>add task</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
