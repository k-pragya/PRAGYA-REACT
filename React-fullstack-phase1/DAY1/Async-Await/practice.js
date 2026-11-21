// Basic Async Function

async function greet() {
  return "Hello JavaScript";
}

greet().then(
  message => console.log(message)
);


// Using Await

async function getData() {

  const result =
    await Promise.resolve(
      "Data Loaded Successfully"
    );

  console.log(result);
}

getData();


// Error Handling

async function checkUser() {

  try {

    const result =
      await Promise.resolve(
        "User Found"
      );

    console.log(result);

  }
  catch(error) {

    console.log(error);

  }

}

checkUser();


// Simulating API Call

async function fetchEmployees() {

  const employees =
    await Promise.resolve([
      {
        id: 1,
        name: "Pragya"
      },
      {
        id: 2,
        name: "Rohit"
      }
    ]);

  console.log(employees);

}

fetchEmployees();