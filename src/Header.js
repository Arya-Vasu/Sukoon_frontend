import { Link } from "react-router-dom";

export function Header( {show, setShow}) {
    const styleButton = {width: "75px", height: "38px", background: "#1976d2", color: "white", fontSize: "14px", border: "none", borderRadius: "5px", cursor: "pointer"};

  return (
    <ul className="g-header">
      <li>
        <Link className="header-list" to="/"><img src="sukoon.png" alt="sukoon" className="main-logo"></img></Link>
      </li> 
      <li>
        {show
          ? <Link className="header-list" to="/"><button style={styleButton} onClick={(event) => (setShow = true)}>LOGOUT</button></Link>
          : <Link className="header-list" to="/logIn"><button style={styleButton}>LOGIN</button></Link>
        }
      </li>
    </ul>
  );
}
