const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const env = require('dotenv');

env.config();

const port = process.env.PORT || 3333;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_Name;

const app = express();

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`App executando na porta ${port}.`));
