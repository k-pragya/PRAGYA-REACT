# Loading & Error States in React

## Topics Covered

- Loading Indicators
- Error Messages
- User-Friendly API Responses

---

## What is a Loading State?

A Loading State is used to inform users that data is currently being fetched from an API.

Instead of displaying a blank screen, the application shows a message such as:

```jsx
Loading...
```

This improves user experience by letting users know that the application is working.

---

## What is an Error State?

An Error State is used when something goes wrong while fetching data from an API.

Common reasons:

- Invalid API URL
- Network Issues
- Server Errors
- API Service Unavailable

Example:

```jsx
Failed to fetch employee data
```

---

## Why Use Loading and Error States?

- Better User Experience
- Prevents Blank Screens
- Provides Meaningful Feedback
- Handles API Failures Gracefully
- Makes Applications More Reliable

---

## React States Used

```jsx
const [employees, setEmployees] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
```

### Purpose

| State | Purpose |
|---------|---------|
| employees | Stores API data |
| loading | Controls loading message |
| error | Stores error message |

---

## Loading State Example

```jsx
if (loading) {
  return <h2>Loading...</h2>;
}
```

Shows a loading message until data is received.

---

## Error State Example

```jsx
if (error) {
  return <h2>{error}</h2>;
}
```

Shows an error message if the API request fails.

---

## User-Friendly API Responses

A user should always receive feedback when:

1. Data is Loading
2. Data is Successfully Loaded
3. An Error Occurs

Flow:

Loading → Success

OR

Loading → Error

---

## Easy Way to Remember

```text
API Request Starts
        ↓
Loading State
        ↓
------------------
|                |
Success      Error
|                |
Show Data   Show Error
```

---

## Conclusion

Loading states help users understand that data is being fetched, while error states provide meaningful messages when API requests fail. Together they improve user experience and application reliability.