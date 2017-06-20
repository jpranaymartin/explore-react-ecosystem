const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');

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

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
})

app.listen(3005);
console.log('Listening on port 3005');
