import axios from 'axios';

export function getTasks() {
console.log(firing);
  return (dispatch) => {
    axios.get('/tasks')
    .then((resp) => {
      dispatch({
        type: 'UPDATE_TASK_LIST',
        payload: resp.data
      });
    });
  }
}

export function addTask(description) {
  return (dispatch) => {
    return axios.post('/tasks', {task: description})
    .then((resp) => {
      dispatch({
        type: 'UPDATE_TASK_LIST',
        payload: resp.data
      });
    });
  }
}

export function removeTask(index) {
  return (dispatch) => {
    axios.delete('/tasks', {params: {id: index}})
    .then((resp) => {
      dispatch({
        type: 'UPDATE_TASK_LIST',
        payload: resp.data
      });
    });
  }
}
