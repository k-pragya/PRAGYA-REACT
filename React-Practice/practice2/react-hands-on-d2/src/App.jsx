import EmployeeList from "./components/EmployeeList"
import EmployeeAddDelete from "./components/EmployeeAddDelete"
import EmployeeListSearch from "./components/EmployeeListSearch"
import EmployeeForm from "./components/EmployeeForm"
import RoutePage from "./components/RoutePage"
import RoutePages from "./assignment/RoutePages"

function App(){
  return(
    <div>
      <h1> EMPLOYEE LIST </h1>
      <EmployeeList />
      <hr />
      <br />

      <h1> EMPLOYEE ADD DELETE APPLICATION</h1>
      <EmployeeAddDelete />
      <hr />
      <br />

      <h1> SEARCH IN EMPLOYEE LIST </h1>
      <EmployeeListSearch />
      <hr />
      <br />

      <h1> EMPLOYEE FORM </h1>
      <EmployeeForm />
      <hr />
      <br />

      <h1> ROUTING IN REACT </h1>
      <RoutePage />
      <hr />
      <br />

      <h1> EMPLOYEE MANAGEMENT SYSTEM  </h1>
      <RoutePages />
      <hr />
      <br />
    
    </div>
  );
}
export default App;