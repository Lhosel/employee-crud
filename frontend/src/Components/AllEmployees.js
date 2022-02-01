import React from 'react';
import { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../Service/API';
import { Table, Container, Button } from 'react-bootstrap';

export default function AllEmployees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = async () => {
        const res = await getEmployees();
        console.log(res.data);
        setEmployees(res.data);
    }

    const deleteEmployeeData = async (_id) => {
        await deleteEmployee(_id);
        getAllEmployees();
    }

    return (
        <div>
            &nbsp;
            <Container>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee => (
                                <tr>
                                    <td>{employee._id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td width="20%">
                                        <Button className="btn-style" variant="primary" href={`/edit/${employee._id}`} onClick={() => setEmployees(employee)}>Edit</Button>
                                        <Button className="btn-style-view" variant="primary" href={`/view/${employee._id}`} onClick={() => setEmployees(employee)}>View</Button>
                                        <Button variant="danger" onClick={() => deleteEmployeeData(employee._id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
