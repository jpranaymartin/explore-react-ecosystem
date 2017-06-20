import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './list.js';
import TaskForm from './form.js';

class TaskApp extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        'Talk about React at Dev Week',
        'Learn me s\'more JavaScript'
      ]
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  addTask(description) {
    const newTasks = this.state.tasks.slice();
    newTasks.push(description);
    this.setState({
      tasks: newTasks
    });
  }
  removeTask(index){
    const newTasks = this.state.tasks.slice();
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks
    });
  }
  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask}/>
        <TaskList removeTask={this.removeTask} tasks={this.state.tasks}/>
      </div>
    );
  }
}

ReactDOM.render(<TaskApp/>, document.getElementById('app'));
