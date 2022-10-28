import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App()

let initialValues = {
  username: "",
  email: "",
  password: ""
};

let [formValues, setformValues] = useState(initialValues);
let [formErrors, setformErrors] = useState({});
let [isSubmit, setisSubmit] = useState(false);

let handleChange = (e) => {

  let { name, value } = e.target; //destructuring
  setformValues({ ...formValues, [e.target.name]: e.target.value })

}

let handleSubmit = (e) => {
  e.preventDefault();
  console.log("output:", formValues);
  setformValues({
    ...formValues,
    username: "",
    email: "",
    password: ""
  };
  setformErrors(validate(formValues));
  setisSubmit(true);

}
useEffect(() => {
  console.log(formErrors)
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues);
  }
}, [formErrors]);


let validate = (values) => {
  let errors = {};
  let regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!value.password) {
    errors.password = "Password is required";
  }
  return errors;
};

return (
  <div className="container">

    <form onSubmit={handleSubmit}>

      <h1>Login Form</h1>

      <div className='ui divider'></div>
      <div className='ui form'>


        <div className='field'>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder='Username'
            value={formValues.username}
            onChange={(e) => {
              setformValues({ ...formValues, username: e.target.value })
            }}
          />
        </div>
        <p>{formErrors.username}</p>
        <div className='field'>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formValues.email}
            onChange={(e) => {
              setformValues({ ...formValues, [e.target.name]: e.target.value })
            }
            }
          />
        </div>
        <p>{formErrors.email}</p>

        <div className='field'>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <button
          onClick={handleSubmit}
          className='fluid ui buttton blue'
        >Submit</button>

      </div>
    </form>
  </div>
);
}

export default App;
