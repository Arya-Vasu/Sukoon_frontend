import { useHistory } from "react-router-dom";
import { useState } from "react";
import { API } from "./global.js";

export function LogIn( {show, setShow} ) {
  const history = useHistory();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(true);
  const styleFields = {height: "23px", width: "84%", padding: "16.5px 14px", border: "1px solid gray", borderRadius: "5px", font: "inherit"};
  const styleButton = {width: "90%", height: "30px", background: "#1976d2", color: "white", font: "inherit", border: "none", borderRadius: "5px", cursor: "pointer"};
  const styleLink = {cursor: "pointer"};
  const styleErrors = {fontWeight: "bold", color: "red", marginTop: "0px"};
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(phone,password));
  }

  const validatePhone = (event) => {
    setPhone(event.target.value);
    handleSubmit(event);
  }

  const validatePassword = (event) => {
    setPassword(event.target.value);
    handleSubmit(event);
  }

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
      <form className="login-content">
        <h3 className="lrHeading-2">All fields are mandatory to be filled.</h3>
        <label>Phone Number</label><br />
        <input
          type="number"
          style={styleFields}
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          value={phone}
          onChange={(event) => {validatePhone(event)}}
        />
        <p style={styleErrors}>{formErrors?.phone}</p>
        <label>Password</label><br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          style={styleFields}
          onChange={(event) => validatePassword(event)}
        />
        <p style={styleErrors}>{formErrors?.password}</p>
        <button
          style={styleButton}
          onClick= {() => {handleSubmit}}
          onSubmit={() => {
            const enteredData = {
              phoneNo: phone,
              password: password
            }
            if (Object.keys(formErrors).length === 0) {
              fetch(`${API}login`, {
                method: "POST",
                headers: {"Content-Type": "application/JSON"},
                body: JSON.stringify(enteredData)
              })
              .then((res) => console.log("error", res))
              .catch((error) => console.log("error2", error));
            }
          }}>LOGIN</button>
        
        {show ? <p className="errorLoginMsg">Invalid Credentials. Please try again.</p> : ""}
        {!navigate ? history.push("/") : ""}
        
        <p className="lrLastLine">Don't have an account? <span className="lr-switch-words" style={styleLink} onClick={() => history.push("/register")}>Register</span> now.</p>
      </form>
    </div>
  );
}
