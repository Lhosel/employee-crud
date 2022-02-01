import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Container } from 'react-bootstrap';
import { addEmployee } from '../Service/API';
import './AddEmployee.css';

const defaultValues = {
    firstName: '',
    lastName: '',
    emailId: ''
}

export default function AddEmployee() {

    const [employee, setEmployee] = useState(defaultValues);
    const { firstName, lastName, emailId } = employee;

    const onValueChange = (e) => {
        console.log(e.target.value);
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const addEmployeeDetails = async () => {
        await addEmployee(employee);
    }

    return (
        <div>
            &nbsp;
            <Container>
                <h3 className='center-text'>Add Employee</h3>
                &nbsp;
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="First Name" onChange={(e) => onValueChange(e)} name='firstName' value={firstName} required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Last Name" onChange={(e) => onValueChange(e)} name='lastName' value={lastName} required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email Address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => onValueChange(e)} name='emailId' value={emailId} required />
                    </FloatingLabel>
                    <div className="btn-wrapper">
                        <Button variant="primary" href="/" onClick={() => addEmployeeDetails()} type="submit">Add</Button>
                        <Button className="btn-style" variant="primary" href="/" type="submit">Cancel</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}
