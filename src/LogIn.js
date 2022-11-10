import { useHistory } from "react-router-dom";
import { useState } from "react";
import { API } from "./global.js";

export function LogIn( {show, setShow} ) {
  const history = useHistory();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // const [show, setShow] = useState(false);
  // const [navigate, setNavigate] = useState(true);
  // const testPhone = "9876543210";
  // const testPassword = "sukoon@123";
  const styleFields = {height: "23px", width: "84%", padding: "16.5px 14px", border: "1px solid gray", borderRadius: "5px", font: "inherit"};
  const styleButton = {width: "90%", height: "30px", background: "#1976d2", color: "white", font: "inherit", border: "none", borderRadius: "5px", cursor: "pointer"};
  const styleLink = {cursor: "pointer"};
  const styleErrors = {fontWeight: "bold", color: "red", marginTop: "0px"};
  const [formErrors, setFormErrors] = useState({});
  const [logInError, setLogInError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const output = validate(phone,password);
    if (Object.keys(output).length) {
      setFormErrors(output);
      setLogInError("");
    }
    else{
      setFormErrors({});
      const enteredData = {
        phoneNo: phone,
        password: password
      }
      fetch(`${API}login`, {
        method: "POST",
        headers: {"Content-Type": "application/JSON"},
        body: JSON.stringify(enteredData)
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.data === "Invalid Credentials!") {
          setLogInError("Invalid Credentials!");
        }
        else {
          history.push("/");
        }
      })
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setFormErrors(validate(phone,password));
  // }

  const validate = (phone, password) => {
    const errors = {};
    if (!phone) {
      errors.phone = "Phone number is required!";
    }
    if (!password) {
      errors.password = "Password is required!";
    }
    return errors;
  }

  return (
    <div className="lrPage">
      <h1 className="lrHeading">Please login to Donate.</h1>
      <form className="login-content" onSubmit={handleSubmit}>
        <h3 className="lrHeading-2">All fields are mandatory to be filled.</h3>
        <label>Phone Number</label><br />
        <input
          type="number"
          style={styleFields}
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <p style={styleErrors}>{formErrors?.phone}</p>
        <label>Password</label><br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          style={styleFields}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p style={styleErrors}>{formErrors?.password}</p>
        <p style={styleErrors}>{logInError}</p>
        <button
          style={styleButton}
          // onClick = {() => {
          //   const enteredData = {
          //     phoneNo: phone,
          //     password: password
          //   }
          //   if (Object.keys(formErrors).length === 0) {
          //     fetch(`${API}login`, {
          //       method: "POST",
          //       headers: {"Content-Type": "application/JSON"},
          //       body: JSON.stringify(enteredData)
          //     })
          //     .then((res) => console.log("error", res))
          //     .catch((error) => console.log("error2", error));
          //     //   setShow(((phone === testPhone) && (password === testPassword)) ? false : true),
          //     //   setNavigate(((phone === testPhone) && (password === testPassword)) ? false : true);
          //   }}}
        >LOGIN</button>        
        <p className="lrLastLine">Don't have an account? <span className="lr-switch-words" style={styleLink} onClick={() => history.push("/register")}>Register</span> now.</p>
      </form>
    </div>
  );
}
