import React from 'react';
import PropTypes from 'prop-types';
import Task from './task.js';

const TaskList = ({tasks, removeTask}) => (
  <ul>
    {tasks.map((task, index) => (
      <Task
        key={index}
        index={index}
        task={task}
        removeTask={removeTask}
      />
    ))}
  </ul>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeTask: PropTypes.func.isRequired
}

export default TaskList;
