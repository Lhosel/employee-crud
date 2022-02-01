import React from 'react';
import { useEffect, useState } from 'react';
import { getEmployeesById } from '../Service/API';
import { Table, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './AddEmployee.css';

const defaultValues = {
    firstName: '',
    lastName: '',
    emailId: ''
}

export default function ViewEmployee() {

    const [employee, setEmployee] = useState(defaultValues);

    const { id } = useParams();

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const res = await getEmployeesById(id);
        console.log(res.data);
        setEmployee(res.data);
    }

    return (
        <div>
            &nbsp;
            <Container>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                        }
                    </tbody>
                </Table>
                <div className="btn-wrapper">
                    <Button className="btn-style" variant="primary" href="/" type="submit">Back</Button>
                </div>
            </Container>
        </div>
    )
}
