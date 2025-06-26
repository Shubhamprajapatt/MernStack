import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [email, setemail] = useState("shubham@gmail.com");
  const [password1, setpassword] = useState("shubham@2001");

  function formdata(event) {
    event.preventDefault()
    console.log(email);
    console.log(password1);

  }
  return (
    <div className="App">
      <form className="form-container" onSubmit={formdata}>
        <div className="form-group">
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter password"
            value={password1}
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
