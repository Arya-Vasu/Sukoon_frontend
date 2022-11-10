import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
// import { Timer } from './Timer';

export function Home( {warehouses} ) {
  const history = useHistory();

  return (
    <div className="homepage-content">
      <h1 className="homepage-heading">Sukoon welcomes you!</h1>
      {/* <Timer /> */}
      <div className="first-div">
        <div className="left">
          <h1>What We Do ?</h1>
          <p>We collaborate with various Orphanages, and we provide books and clothes to the children.</p>
          <br />
          <div className="donate-buttons">
            <Button className="donate-button" variant="contained" onClick={() => history.push("/donor")}>I am a Donor</Button>
            <Button className="donate-button" variant="contained" onClick={() => history.push("/orphanage")}>I am an Orphanage</Button>
          </div>
        </div>
        <div className="right">
          <img
            className="image1"
            // src="https://i0.wp.com/africanquarters.com/wp-content/uploads/2019/09/african-poor-kids.jpg?fit=720%2C480&ssl=1"
            src="https://ilm-live.storage.googleapis.com/upload/img_cache/file-1464-1e1ce03c930c2119b08c3c8647d31c74.jpg"
            alt="children" />
        </div>
      </div>
      <div className="second-div">
        <h1>Our Mission and Vision</h1>
        <p><strong>Mission : </strong>To give books and clothes to all the orphanages of India.</p>
        <p><strong>Vision : </strong>To help orphan kids to get right to education.</p>
      </div>
      <div className="third-div">
        <h1>How it Works ?</h1>
        <div className="third-div-content">
          <div className="content-div">
            <div className="number-image">
              <p className="howWeWorkNumber">1</p>
            </div>
            <h3>Registration</h3>
            <p className="howWeWorkMsg">Register to the Portal.</p>
          </div>
          <div className="arrow">
            <EastIcon className="iconarrow"/>
          </div>
          <div className="content-div">
            <div className="number-image">
              <p className="howWeWorkNumber">2</p>
            </div>
            <h3>Donation</h3>
            <p className="howWeWorkMsg">Post your books/ clothes to our warehouses.</p>
          </div>
          <div className="arrow">
            <EastIcon className="iconarrow"/>
          </div>
          <div className="content-div">
            <div className="number-image">
              <p className="howWeWorkNumber">3</p>
            </div>
            <h3>Distribution</h3>
            <p className="howWeWorkMsg">We will distribute it to various orphanages.</p>
          </div>
          <div className="arrow">
            <EastIcon className="iconarrow"/>
          </div>
          <div className="content-div">
            <div className="number-image">
              <p className="howWeWorkNumber">4</p>
            </div>
            <h3>Notification</h3>
            <p className="howWeWorkMsg">We will notify you once done.</p>
          </div>
        </div>
      </div>
      <div className="forth-div">
        <h1>Warehouses</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
        <ul className="warehouse">
          {warehouses.map(
            (data, index) => {
              return (
                <li key={index}>
                  {data.name}. <a href={data.locationLink} target="new" className="locationLinks">Click here</a> to see the exact location.
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}