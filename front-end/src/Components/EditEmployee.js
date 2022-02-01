import React, { useState, useEffect } from 'react';
import { FloatingLabel, Form, Button, Container } from 'react-bootstrap';
import { editEmployee, getEmployeesById } from '../Service/API';
import { useParams } from 'react-router-dom';
import './AddEmployee.css';

const defaultValues = {
    firstName: '',
    lastName: '',
    emailId: ''
}

export default function EditEmployee() {

    const [employee, setEmployee] = useState(defaultValues);
    const { firstName, lastName, emailId } = employee;

    const { id } = useParams();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await getEmployeesById(id);
        setEmployee(res.data);
    }

    const onValueChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const editEmployeeDetails = async () => {
        await editEmployee(id, employee);
    }

    return (
        <div>
            &nbsp;
            <Container>
                <h3 className='center-text'>Edit Employee</h3>
                &nbsp;
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder={employee.firstName} onChange={(e) => onValueChange(e)} name='firstName' value={firstName} required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder={employee.lastName} onChange={(e) => onValueChange(e)} name='lastName' value={lastName} required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email Address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder={employee.emailId} onChange={(e) => onValueChange(e)} name='emailId' value={emailId} required />
                    </FloatingLabel>
                    <div className="btn-wrapper">
                        <Button variant="primary" href="/" onClick={() => editEmployeeDetails()} type="submit">Save</Button>
                        <Button className="btn-style" variant="primary" href="/" type="submit">Cancel</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}
