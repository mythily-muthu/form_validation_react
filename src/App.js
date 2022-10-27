import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {




  let initialValues = {
    username: "",
    email: "",
    password: ""
  };

  let [formValues, setformValues] = useState(initialValues)

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
    })
  }




  return (
    <div className="container">

      <form >

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
