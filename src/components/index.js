import React from "react";
import Visibility from "./visibility";
import AddTask from "./addTask";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      tasks: [],
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
  handlePick() {
    var task = Math.floor(Math.random() * this.state.tasks.length);
    var pick = this.state.tasks[task];
    alert(pick);
  }
  handleDelete(deleteSingleTask) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => deleteSingleTask !== task),
    }));
  }
  componentDidMount() {
    try {
      var taskData = localStorage.getItem("tasks");
      var tasks = JSON.parse(taskData);

      if (tasks) {
        this.setState(() => ({
          tasks: tasks,
        }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      var json = JSON.stringify(this.state.tasks);
      localStorage.setItem("tasks", json);
    }
  }
  render() {
    return (
      <div>
        <Visibility
          tasks={this.state.tasks}
          randomPick={this.handlePick}
          hasTask={this.state.tasks.length > 0}
          taskDelete={this.handleDelete}
        />
        <AddTask addtask={this.handleAddTask} />
      </div>
    );
  }
}

export default Index;
