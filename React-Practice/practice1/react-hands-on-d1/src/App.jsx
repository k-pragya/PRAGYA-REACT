import React from 'react'
import Counter from "./components/counter";
import UserForm from "./components/UserForm";
import FetchUsers from "./components/FetchUsers";
import UserDirectory from "./components/UserDirectory";
import UserCard from "./comp/UserCard";
import LoginLogout from "./components/LoginLogout";
import ShowHide from "./components/ShowHide";
import EmployeeList from "./components/EmployeeList";
import EmployeeCard from "./comp/EmployeeCard";
import ProductCard from "./comp/ProductCard";
import ProductList from "./components/ProductList";
import EmployeeDirectory from "./assignment/EmployeeDirectory";

function App () {
  return (
    <div>
      <h1> COUNTER APPLICATION </h1>
      <Counter />
      <hr />
      <br />

      <h1> USER FORM </h1>
      <UserForm />
      <hr />
      <br />
      
      <h1> FETCH DATA FROM PUBLIC API </h1>
      <FetchUsers />
      <hr />
      <br />

      <h1> DISPLAY API USERS DATA </h1>
      <UserDirectory />
      <hr />
      <br />

      <h1> LOGIN LOGOUT TOGGLE </h1>
      <LoginLogout />
      <hr />
      <br />

      <h1> SHOW HIDE COMPONENT </h1>
      <ShowHide />
      <hr />
      <br />

      <h1> EMPLOYEE LIST </h1>
      <EmployeeList />
      <hr />
      <br />

      <h1> PRODUCT LIST </h1>
      <ProductList />
      <hr />
      <br />

      <h1> EMPLOYEE DIRECTORY APPLICATION </h1>
      < EmployeeDirectory />
      <hr />
      <br />
      
    </div>
  );
}

export default App; 