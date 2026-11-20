import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage"
import EmployeeListPage from "./pages/EmployeeListPage"
import AddEmployeePage from "./pages/AddEmployeePage";

function RoutePages(){
    return(
    <BrowserRouter>
       <Routes>
            <Route 
               path="/"
               element={ <HomePage /> }
            />
            <Route
               path="/employees"
               element={ <EmployeeListPage /> }
            />
            <Route 
               path="/employee/:id"
               element={ <EmployeeDetailsPage /> }
            />
            <Route
               path="/addEmployee"
               element={<AddEmployeePage />}
            />
       </Routes>
    </BrowserRouter>
    );
}
export default RoutePages;