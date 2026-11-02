const express = require('express');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'CRUD Komik API aktif' });
});

app.get('/komik', async (req, res) => {
  try {
    res.json(await db.Komik.findAll());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

