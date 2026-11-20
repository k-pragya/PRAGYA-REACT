import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import EmployeeListPage from "./EmployeeListPage"
import EmployeeDetailsPage from "./EmployeeDetailsPage"

function RoutePage(){
    return(
        <BrowserRouter>
           <Routes>
                <Route 
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/employees"
                    element={<EmployeeListPage />}
                />
                <Route
                    path="/employee/:id"
                    element={<EmployeeDetailsPage />}
                />
           </Routes>
        </BrowserRouter>
    );
}
export default RoutePage;