import { useState } from "react";
import "../components/Myform.css"

function MyForm() {
  const [datainfo, setdatainfo] = useState({
    username: "xyz",
    email: "xyz@gmail.com",
    age: 26,
    pass: "xyz2334",
    date: "2005-02-25",
    city: "",
    gender: "",
  });
  const [program, setprogram] = useState([]);

  function changedata(event) {
    setdatainfo((initialvalue) => {
      return { ...initialvalue, [event.target.name]: event.target.value };
    });
  }

  function setcheckvalue(event) {
    if (event.target.checked) {
      setprogram([...program, event.target.value]);
    } else {
      let skiil = program.filter((item) => {
        return item !== event.target.value;
      });
      setprogram(skiil);
    }
  }

  function hnadledata(event) {
    event.preventDefault();
    console.log(datainfo);
    console.log(program);
  }

  return (
    <form onSubmit={hnadledata}>
      <div>
        <label htmlFor="username">User Name: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
          value={datainfo?.username}
          onChange={(event) => {
            changedata(event);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter email"
          value={datainfo?.email}
          onChange={(event) => {
            changedata(event);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter Age"
          value={datainfo?.age}
          onChange={(event) => {
            changedata(event);
          }}
        />
      </div>
      <br />

      <div>
        <label htmlFor="pass">Password: </label>
        <input
          type="text"
          name="pass"
          id="pass"
          placeholder="Enter Password"
          value={datainfo?.pass}
          onChange={(event) => {
            changedata(event);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="date">Date: </label>
        <input
          type="date"
          name="date"
          id="date"
          value={datainfo?.date}
          onChange={(event) => {
            changedata(event);
          }}
        />
      </div>
      <br />
      <div>
        <span>Gender : </span>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={(event) => {
            changedata(event);
          }}
        />
        <label htmlFor="female">FeMale</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={(event) => {
            changedata(event);
          }}
        />
        <label htmlFor="other">Others</label>
        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          onChange={(event) => {
            changedata(event);
          }}
        />
      </div>
      <br />
      <div>
        <span>Programing : </span>
        <label htmlFor="java">java</label>
        <input
          type="checkbox"
          id="java"
          name="program"
          value="java"
          onChange={(event) => {
            setcheckvalue(event);
          }}
        />
        <label htmlFor="mern">Mern</label>
        <input
          type="checkbox"
          id="mern"
          name="program"
          value="mern"
          onChange={(event) => {
            setcheckvalue(event);
          }}
        />
        <label htmlFor="python">python</label>
        <input
          type="checkbox"
          id="python"
          name="program"
          value="python"
          onChange={(event) => {
            setcheckvalue(event);
          }}
        />
      </div>
      <div>
        <p>Select city</p>
        <select
          name="city"
          onChange={(event) => {
            changedata(event);
          }}
        >
          <option value="indore">Indore</option>
          <option value="dewas">Dewas</option>
          <option value="ujjain">Ujjain</option>
          <option value="bhopal">Bhopal</option>
        </select>
      </div>
      <br />

      <button>Submit</button>
    </form>
  );
}
export default MyForm;
