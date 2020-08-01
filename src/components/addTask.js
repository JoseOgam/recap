import React from "react";

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
    e.target.task.value = "";
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
export default AddTask;
