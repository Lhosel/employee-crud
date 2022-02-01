const express = require('express');
const router = express.Router();
const employeeModel = require('../models/Employee');
const cors = require("cors");

router.use(
    cors({
        origin: "*",
    })
)

// creating a new employee
router.post('/api/v1/employees', (req, res) => {
    const createdEmployee = new employeeModel({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId
    });
    try {
        createdEmployee.save();
        res.status(200).send(createdEmployee);
    } catch (err) {
        res.status(500).send(err);
    }
});

// fetching all the employees
router.get('/api/v1/employees', async (req, res) => {
    const employees = await employeeModel.find({});
    try {
        res.status(200).send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
});

// fetching employee with id
router.get('/api/v1/employees/:id', async (req, res) => {
    const employees = await employeeModel.findById(req.params.id);
    try {
        res.status(200).send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
});

// update employee with id
router.put('/api/v1/employees/:id', async (req, res) => {
    const employee = req.body;
    const editEmployee = new employeeModel(employee);
    try {
        await employeeModel.updateOne({ _id : req.params.id }, editEmployee);
        res.status(200).send(editEmployee);
    } catch (err) {
        res.status(500).send(err);
    }
})

// delete employee with id
router.delete('/api/v1/employees/:id', async (req, res) => {
    try {
        await employeeModel.deleteOne({ _id : req.params.id });
        res.status(200).send('employee deleted');
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
