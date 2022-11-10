import { useHistory } from "react-router-dom";
import { useState } from "react";
import  { API } from "./global.js";

export function Register( {show, setShow} ) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailId, setEmailId] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [show, setShow] = useState(false);
  // const [navigate, setNavigate] = useState(true);
  const styleFields = {height: "23px", width: "84%", padding: "16.5px 14px", border: "1px solid gray", borderRadius: "5px", font: "inherit"};
  const styleButton = {width: "90%", height: "30px", background: "#1976d2", color: "white", font: "inherit", border: "none", borderRadius: "5px", cursor: "pointer"};
  const styleLink = {cursor: "pointer"};
  const styleErrors = {fontWeight: "bold", color: "red", marginTop: "0px"};
  const [formErrors, setFormErrors] = useState({});
  const [registerError, setRegisterError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const output = validate(name, phone, emailId, createPassword, confirmPassword);
    if (Object.keys(output).length) {
      setFormErrors(output);
      setRegisterError("");
    }
    else{
      setFormErrors({});
      const newUser = {
        name: name,
        phoneNo: phone,
        emailId: emailId,
        password: createPassword
      }
      fetch(`${API}register`, {
        method: "POST",
        headers: {"Content-Type": "application/JSON"},
        body: JSON.stringify(newUser)
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.data === "Already registered!") {
          setRegisterError("Already registered!");
        }
        else{
          history.push("/");
        }
      })
    }
  }

  const validate = (name, phone, emailId, createPassword, confirmPassword) => {
    const errors = {};
    // const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (!name) {
      errors.name = "Name is required!";
    }
    if (!phone) {
      errors.phone = "Phone number is required!";
    } else if (phone.length < 10) {
      errors.phone = "Phone number must contain 10 digits!";
    }
    if (phone.length > 10) {
      errors.phone = "Phone number cannot exceed more than 10 digits!";
    }
    if (!emailId) {
      errors.emailId = "Email ID is required!";
    }
    if (!createPassword) {
      errors.createPassword = "Please create password!";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm password!";
    }
    if (createPassword !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match!";
    }
    return errors;
  }
  
  return (
    <div className="lrPage">
      <h1 className="lrHeading">Register here</h1>
      <form className="registration-content" onSubmit={handleSubmit}>
      {/* <form className="registration-content"> */}
        <h3 className="lrHeading-2">All fields are mandatory to be filled.</h3>
        <label>Full Name</label><br />
        <input
          type="text"
          value={name}
          style={styleFields}
          placeholder="Full Name"
          onChange={(event) => setName(event.target.value)}
        />
        <p style={styleErrors}>{formErrors.name}</p>
        <label>Phone Number</label><br />
        <input
          type="number"
          value={phone}
          style={styleFields}
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          onChange={(event) => setPhone(event.target.value)}
        />
        <p style={styleErrors}>{formErrors.phone}</p>
        <label>Email ID</label><br />
        <input
          type="email"
          value={emailId}
          placeholder="Email ID"
          style={styleFields}
          onChange={(event) => setEmailId(event.target.value)}
        />
        <p style={styleErrors}>{formErrors.emailId}</p>
        <label>Create Password</label><br />
        <input
          type="password"
          value={createPassword}
          style={styleFields}
          placeholder="Enter Password"
          minLength="8"
          onChange={(event) => setCreatePassword(event.target.value)}
        />
        <p style={styleErrors}>{formErrors.createPassword}</p>
        <label>Confirm Password</label><br />
        <input
          type="password"
          value={confirmPassword}
          style={styleFields}
          placeholder="Re-enter Password"
          minLength="8"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <p style={styleErrors}>{formErrors.confirmPassword}</p>
        <p style={styleErrors}>{registerError}</p>
        <button
          style={styleButton}             
          >REGISTER</button>
        <p className="lrLastLine">Already Registered? <span className="lr-switch-words" style={styleLink} onClick={() => history.push("/login")}>Login</span></p>
      </form>
    </div>
  );
}
