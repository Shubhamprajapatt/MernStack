import { useState } from "react";
import "./Form.css";
function Goodform() {
  const [formwaladata, setformwaladata] = useState({
    email: "hey@gmail.com",
    age: 25,
    password1: 12345,
  });
  function changedata(event) {
    setformwaladata((olddata) => {
      return { ...olddata, [event.target.name]: event.target.value };
    });
  }
  function handleformdata(event) {
    event.preventDefault();
    //  console.log("form data",formwaladata);
    const { email, age, password1 } = formwaladata;
    console.log(email, age, password1);
  }
  return (
    <div className="App">

      <form className="form-container" onSubmit={handleformdata}>
        <div className="form-group">
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formwaladata?.email}
            onChange={(event) => {
              changedata(event);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Age">Age:</label>
          <input
            type="number"
            id="Age"
            name="age"
            placeholder="Enter Age"
            value={formwaladata?.age}
            onChange={(event) => {
              changedata(event);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            name="password1"
            placeholder="Enter password"
            value={formwaladata?.password1}
            onChange={(event) => {
              changedata(event);
            }}
          />

        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Goodform;
