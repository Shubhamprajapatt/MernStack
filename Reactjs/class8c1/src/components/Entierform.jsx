import { useState } from "react";
import "./Form.css";
function Entierform() {
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
        <p>Gender</p>
        <div className="form-radio">
            <label htmlFor="mal">Male</label>
            <input type="radio"  id="mal" value="male" name="Gender"/>
             <label htmlFor="Female">Female</label>
            <input type="radio" id="Female" value="Female" name="Gender"/>
             <label htmlFor="other">other</label>
            <input type="radio" id="other" value="other" name="Gender"/>
        </div>
        <p>Electronics</p>
        <div className="form-radio">
            <label htmlFor="Monitor">Monitor</label>
            <input type="checkbox" id="Monitor" value="Monitor" />
             <label htmlFor="CPU">CPU</label>
            <input type="checkbox" id="CPU" value="CPU" />
             <label htmlFor="Keyboard">Keyboard</label>
            <input type="checkbox" id="Keyboard" value="Keyboard" />
        </div><br />
      <div>
        <label htmlFor="file">Select File</label>
      <input type="file"/>
      </div><br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Entierform;
