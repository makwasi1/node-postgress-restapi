const express = require('express');
const studentRoutes = require('./routes/routes');


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/students', studentRoutes);


module.exports = app;