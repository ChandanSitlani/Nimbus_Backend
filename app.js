const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/admin', adminRoutes);
app.use('/api',userRoutes);

mongoose.connect('mongodb+srv://Sarthak:JHiuWSD74jnQL39g@cluster0-llyzd.mongodb.net/AppTeam?retryWrites=true&w=majority', {useNewUrlParser: true}).then(result => {
    app.listen(8080);
    console.log('Database connected');
    console.log('Server Up and running');
}) 