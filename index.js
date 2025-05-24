const express = require('express);
const fs = require('fs').promises;

const app = express();


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the my App!');
});


app.get('/users', async (req, res) => {
  const users = await fs.readFile('./users.json');
  res.json(JSON.parse(users));
});

app.get('/one-user', async (req, res) => {
  const result = await fetchData(); 
  res.send(result);
});

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  res.status(201).json({ task });
});

app.use(express.json());


app.listen(300, () => {
  console.log('Server running on port 3000');
});


function FetchData() {
    return 'good';
}