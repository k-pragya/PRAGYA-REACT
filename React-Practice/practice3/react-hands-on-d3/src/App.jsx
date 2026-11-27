import FetchEmployees from "./components/FetchEmployees";
import AxiosCRUD from "./components/AxiosCRUD";
import LoadingErrorDemo from "./components/LoadingErrorDemo";
import EmployeeCRUD from "./components/EmployeeCRUD"
import EmployeeList from "./components/EmployeeList"
import AppDetails from "./assignment/AppDetails"
function App(){
  return (
    <div>
      <h1>FETCH DATA FROM API</h1>
      <FetchEmployees />
      <hr />
      <br />
      <h1>CRUD OPERATIONS USING AXIOS</h1>
      <AxiosCRUD />
      <hr />
      <br />
      <h1>LOADING AND ERROR DEMO</h1>
      <LoadingErrorDemo />
      <hr />
      <br />
      <h1>CRUD OPERATIONS</h1>
      <EmployeeCRUD />
      <hr />
      <br />
      <h1>SERVICE LAYER PRACTICES</h1>
      <EmployeeList />
      <hr />
      <br />
      <h1> EMPLOYEE DIRECTORY APPLICATION</h1>
      <AppDetails />
      <hr />
      <br />
    </div>
  );
}
export default App;
