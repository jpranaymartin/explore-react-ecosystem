import React from 'react';
import PropTypes from 'prop-types';

const Task = ({task, removeTask, index}) => (
  <li onClick={() => removeTask(index)}>{task || ''}</li>
)

Task.propTypes = {
  task: PropTypes.string,
  removeTask: PropTypes.func.isRequired,
  index: PropTypes.number
}

export default Task;
