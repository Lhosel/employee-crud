const express = require('express');
const mongoose = require('mongoose');
const app = express();
var employeeRoutes = require('./routes/EmployeeRoutes')

const dbUrl = 'mongodb+srv://Kunga:NNja2368@comp3123.roufb.mongodb.net/101266937_assignment2?retryWrites=true&w=majority';

// connecting to database
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit()
});

app.use(express.json());
app.use(employeeRoutes);
app.listen(9090, () => {
    console.log("Server is running on: http://localhost:9090/");
});

