import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Donor() {
  const history = useHistory();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [navigate, setNavigate] = useState(true);
  const styleFields = {height: "23px", width: "80%", padding: "16.5px 14px", border: "1px solid gray", borderRadius: "5px", font: "inherit"};
  const styleDropFields = {height: "55px", width: "90%", padding: "8px 14px", border: "1px solid gray", borderRadius: "5px", font: "inherit"};
  const styleButton = {width: "85%", height: "40px", padding: "6px 16px", font: "inherit", background: "#1976d2", border: "none", borderRadius: "5px", color: "white"};
  return (
    <div className="requestPage">
      <h1 className="lrHeading">Raise a Request</h1>
      <div className="login-content">
        <h3 className="lrHeading-2">All fields are mandatory to be filled.</h3>
        <form>
          <label>Full Name</label><br />
          <input className="lrfield" style={styleFields} placeholder="Full Name" value={name} onChange={(event) => setName(event.target.value)} type="text" required></input><br /><br />
          <label>Phone Number</label><br />
          <input className="lrfield" style={styleFields} placeholder="Phone Number" value={phone} onChange={(event) => setPhone(event.target.value)} type="tel" pattern="[0-9]{10}" minLength="10" maxLength="10" required></input><br /><br />
          {/* <label>What do you want to donate? </label><br />
          <input type="checkbox" name="item" >Books</input>
          <input type="checkbox" name="item" >Clothes</input> */}
          {/* <div className="formDropDown">
            <label>Where do you want to post the items?</label><br />
            <select style={styleDropFields} name="warehouse" required>
              <option value="">--Select--</option>
              <option value="Warehouse-1">Warehouse-1</option>
              <option value="Warehouse-1">Warehouse-2</option>
              <option value="Warehouse-1">Warehouse-3</option>
              <option value="Warehouse-1">Warehouse-4</option>
            </select>
          </div> */}
          {/* <label>Full Name</label><br />
          <input className="lrfield" style={styleFields} placeholder="Full Name" value={name} onChange={(event) => setName(event.target.value)} type="text" required></input><br /><br /> */}
          <label>Remarks - If any</label><br />
          <input className="lrfield" style={styleFields} placeholder="Comment (Optional)" value={comment} onChange={(event) => setComment(event.target.value)} type="text"></input><br /><br />
          <button style={styleButton}>SUBMIT</button><br /><br />
        </form>
        {/* <TextField className="lrField" label="Full Name" value={name} onChange={(event) => setName(event.target.value)} type="text" variant="outlined" required /><br /><br />
        <TextField className="lrField" label="Email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" variant="outlined" required /><br /><br />
        <input className="lrField" label="Phone No." value={phone} onChange={(event) => setPhone(event.target.value)} pattern="/[1-5]{10}-[6-9]/" minlength="10" maxlength="10" variant="outlined" required  /><br /><br />
        <Button className="lrField"
          onClick={
            (event) => {
              setShow(((name.length === 0) || (email.length === 0) || (phone.length === 0))
                ? true
                : false
              )
              setNavigate(((name.length === 0) || (email.length === 0) || (phone.length === 0))
                ? true
                : false
              )
            }
          }
          variant="contained">Raise Request</Button><br /> */}
        {show ? <p className="errorLoginMsg">All fields are mandatory!</p> : ""}
        {!navigate ? history.push("/") : ""}
      </div><br />
    </div>
  );
}

// pattern="[a-zA-Z0-9][@]"