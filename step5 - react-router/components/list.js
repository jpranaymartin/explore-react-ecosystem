import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './task.js';
import { getTasks } from '../actions'

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTasks()
  }

  render() {
    const { tasks } = this.props
    return (
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} index={index} task={task}/>
        ))}
      </ul>
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default connect(({tasks}) => ({tasks}), { getTasks })(TaskList);
