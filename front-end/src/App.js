import './App.css';
import AddEmployee from './Components/AddEmployee';
import AllEmployees from './Components/AllEmployees';
import DeleteEmployee from './Components/DeleteEmployee';
import EditEmployee from './Components/EditEmployee';
import ViewEmployee from './Components/ViewEmployee';
import Navigation from './Components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<AllEmployees/>} />
        <Route exact path="/add" element={<AddEmployee/>} />
        <Route exact path="/edit/:id" element={<EditEmployee/>} />
        <Route exact path="/view/:id" element={<ViewEmployee/>} />
        <Route exact path="/delete" element={<DeleteEmployee/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
