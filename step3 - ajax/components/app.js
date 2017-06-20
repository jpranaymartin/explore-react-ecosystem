import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TaskList from './list.js';
import TaskForm from './form.js';

class TaskApp extends React.Component {
  constructor() {
    super();
    this.state = {tasks: []};
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  componentDidMount() {
    axios.get('/tasks')
      .then((resp) => {
        this.setState({
          tasks: resp.data
        });
      });
  }

  addTask(description) {
    axios.post('/tasks', {task: description})
      .then((resp) => {
        this.setState({
          tasks: resp.data
        });
      });
  }

  removeTask(index){
    axios.delete('/tasks', {
      params: {
        id: index
      }
    })
    .then((resp) => {
      this.setState({
        tasks: resp.data
      });
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
