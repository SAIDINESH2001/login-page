const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const routes = require('./routes/routes.js');
const dbConnection = require('./config/mongo.js');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


dbConnection();

app.use('/api', routes);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})










app.listen(process.env.PORT, () => {
    console.log(`Server is connected to http://localhost: ${process.env.PORT}`);
})