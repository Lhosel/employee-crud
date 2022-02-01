import axios from "axios";

const url = 'http://localhost:9090/api/v1/employees';

// for listing all employees
export const getEmployees = async () => {
    return await axios.get(url);
}

// for displaying employee with id
export const getEmployeesById = async (_id) => {
    return await axios.get(`${url}/${_id}`);
}

// for adding an employee
export const addEmployee = async (employee) => {
    return await axios.post(url, employee);
}

// edit employee by id
export const editEmployee = async(id, employee) => {
    return await axios.put(`${url}/${id}`, employee);
}

// delete employee by id
export const deleteEmployee = async(id) => {
    return await axios.delete(`${url}/${id}`);
}