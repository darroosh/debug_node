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

app.get('/async-error', async (req, res) => {
  const result = await fetchData(); // fetchData is undefined
  res.send(result);
});

// Route 4: Middleware ordering issue
app.post('/tasks', (req, res) => {
  const task = req.body.task;
  res.status(201).json({ task });
});

app.use(express.json());


app.listen(300, () => {
  console.log('Server running on port 3000');
});


function fetchdata() {
    return 'good';
}