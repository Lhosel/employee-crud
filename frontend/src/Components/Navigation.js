import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Employees</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">List</Nav.Link>
                    <Nav.Link href="/add">Add</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation;