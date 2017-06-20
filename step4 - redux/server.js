const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(parser.json());
app.use(cors());
app.use(express.static(__dirname));

const tasks = [
  'Talk about React at Dev Week',
  'Learn me s\'more JavaScript'
];

app.get('/tasks', (req, res) => {
  res.send(tasks);
});

app.post('/tasks', (req, res) => {
  tasks.push(req.body.task);
  res.send(tasks);
});

app.delete('/tasks/', (req, res) => {
  tasks.splice(req.query.id, 1);
  res.send(tasks);
});

app.listen(3004);
console.log('Listening on port 3004');
