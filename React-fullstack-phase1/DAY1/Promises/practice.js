// Basic Promise

const promise = new Promise(
  (resolve, reject) => {
    resolve("Data Received");
  }
);

promise.then(
  result => console.log(result)
);


// Success and Failure Example

const isLoggedIn = true;

const loginPromise = new Promise(
  (resolve, reject) => {
    if (isLoggedIn) {
      resolve("Login Successful");
    } else {
      reject("Login Failed");
    }
  }
);

loginPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));


// Simulating API Call

const fetchData = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("User Data Loaded");
    }, 2000);
  }
);

fetchData.then(
  result => console.log(result)
);