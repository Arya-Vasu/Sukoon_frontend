import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Orphanage() {
  const history = useHistory();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [navigate, setNavigate] = useState(true);
  return (
    <div className="requestPage">
      <h1 className="lrHeading">Raise a Request</h1>
      <div className="login-content">
        <h3 className="lrHeading-2">All fields are mandatory to be filled.</h3>
        <TextField className="lrField" label="Full Name" value={name} onChange={(event) => setName(event.target.value)} type="text" variant="outlined" required /><br /><br />
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
          variant="contained">Raise Request</Button><br />
        {show ? <p className="errorLoginMsg">All fields are mandatory!</p> : ""}
        {!navigate ? history.push("/") : ""}
      </div>
    </div>
  );
}

// pattern="[a-zA-Z0-9][@]"