import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {removeTask } from '../actions'

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {task, index, removeTask} = this.props;
    return (
      <li onClick={() => removeTask(index)}>{task}</li>
    )
  }
}

Task.propTypes = {
  task: PropTypes.string,
  removeTask: PropTypes.func.isRequired,
  index: PropTypes.number
}

export default connect(null, { removeTask })(Task);
