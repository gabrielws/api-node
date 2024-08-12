const express = require('express');
const noteRoutes = require('./routes/noteRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());
app.use('/api', noteRoutes);

const initDb = async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
};

initDb();

module.exports = app;
