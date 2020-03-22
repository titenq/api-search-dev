const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_Name;

const app = express();

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`App executando na porta ${port}.`));
