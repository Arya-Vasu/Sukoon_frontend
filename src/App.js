import './App.css';
import {Switch, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import { Donor } from './Donor';
import { Orphanage } from './Orphanage';
import { Work } from './Work';
import { Address } from './Address';
import { ContactUs } from './ContactUs';
import { Services } from './Services';
import { AboutUs } from './AboutUs';
import { Register } from './Register';
import { LogIn } from './LogIn';
import { Home } from './Home';
import { Header } from './Header';
import { Footer } from './Footer';
import  { API } from "./global.js";


export default function App() {
  const [show, setShow] = useState(false);
  const [warehouseData, setWarehouseData] = useState([]);
  // const warehouseData = [
  //   {
  //     "id" : "1",
  //     "name" : "Deepashram",
  //     "address" : "Orphanage House No.34, Lt Atul Kataria Marg, Rajiv Nagar Ward 5, Block No. 44, Gurugram, Haryana 122001",
  //     "isWarehouse" : "Y",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "2",
  //     "name" : "Shanti Bhavan Trust Of India, girls House",
  //     "address" : "5, Neki Ram Marg, Sector 9, Gurugram, Haryana 122001",
  //     "isWarehouse" : "Y",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "3",
  //     "name" : "Blind Orphanage (Janta rehabilitation Training Center)",
  //     "address" : "F2P7+95H, Unnamed Road, Block B, Ashok Vihar, Sector 3, Gurugram, Haryana 122006",
  //     "isWarehouse" : "Y",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "4",
  //     "name" : "Salaam balak Trust Gurgaon",
  //     "address" : "",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "5",
  //     "name" : "Shelter Progetto India",
  //     "address" : "Darbaripur, Sector 75, Gurugram, Haryana 122101",
  //     "isWarehouse" : "Y",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "6",
  //     "name" : "Anandashram",
  //     "address" : "Anandashram, Missionaries of charity, Old Berhampur. Near sector 59, on the way from Berhampur to Bandwari, village, Gurugram, Haryana 122022",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "7",
  //     "name" : "Compassion Manipur",
  //     "address" : "Gurgaon One, E -802, Sector 84, Gurugram, Haryana 122004",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "8",
  //     "name" : "Fellow Hands",
  //     "address" : "62, Street 1, Krishna Nagar, Sector 10, Gurugram, Haryana 122001",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "9",
  //     "name" : "Sangharh with Soul NGO",
  //     "address" : "C-45, opp. sector 4, near titanium fitness gym and police chowki, Block C, Surya Vihar, Sector 9, Gurugram, Haryana 122001",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "10",
  //     "name" : "Harmony House India",
  //     "address" : "109, Defence Colony, Sector 17A, Sector 17, Gurugram, Haryana 122007",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "11",
  //     "name" : "Desire Society",
  //     "address" : "1, Arjun Marg, DLF City, Garden Estate, DLF Phase 1, Sector 26, Gurugram, Haryana 122002",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "12",
  //     "name" : "Anuj Kaveerpanthi",
  //     "address" : "002/A, Residency, Ardee City, Sector 52, Gurugram, Haryana 122003",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "13",
  //     "name" : "Save the Children NGO",
  //     "address" : "",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "14",
  //     "name" : "Jeevanrakshak",
  //     "address" : "House No. 1240, Street No. 12, Laxman Vihar Phase 2, Gurugram, Haryana 122001",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "15",
  //     "name" : "The Shelter progetto India Charitable Trust",
  //     "address" : "",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "16",
  //     "name" : "NGO Dream Girl Foundation Gurgaon",
  //     "address" : "Room No. 1, Opposite Sarpanch Anant House, Tigra Rd, behind BPTP Tower & Presedium School, Sector 57, Gurugram, Haryana 122001",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "17",
  //     "name" : "Creates Trust",
  //     "address" : "752, Sector 15 Part 2, Sector 15, Gurugram, Haryana 122001",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "18",
  //     "name" : "Alankaar NGO",
  //     "address" : "1182, Sector 15 Part 2, Sector 15, Gurugram, Haryana 122001",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "19",
  //     "name" : "Donate an Hour",
  //     "address" : "C28C+9X6, Captain Chandan Lal Marg, Sector 71, Gurugram, Haryana 122004",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  //   {
  //     "id" : "20",
  //     "name" : "Dream Girl FOundation CSR NGO",
  //     "address" : " 99H, B-Block Near Eminence Tuition Center, Surya Vihar, Sector 9, Gurugram, Haryana 122001",
  //     "isWarehouse" : "N",
  //     "locationLink" : "https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsas8Omx1Al3UE6XDCyRAfBD35Yo6g:1661313405813&q=orphanage+in+gurgaon&rflfq=1&num=10&sa=X&ved=2ahUKEwjIyafbyt75AhWZRWwGHYfEB9gQjGp6BAgKEAE&biw=1536&bih=714&dpr=1.25#",
  //   },
  // ];

  const getAllOrphanages = (() => {
    fetch(`${API}`, {method: "GET"})
      .then((data) => data.json())
      .then((orphanages) => setWarehouseData(orphanages));
  });

  useEffect(getAllOrphanages, []);
  
  const warehousesWithTrueValue = warehouseData.filter(warehouseData => warehouseData.isWarehouse === "Y");
  // const warehouseNames = (warehousesWithTrueValue.map(warehousesWithTrueValue => warehousesWithTrueValue.name));
  // const warehouseLocations = (warehousesWithTrueValue.map(warehousesWithTrueValue => warehousesWithTrueValue.locationLink));

  return (
    <div className="App">
      <Header show={show} setSHow={setShow} />

      <Switch>
        <Route
         path="/logIn">
          <LogIn show={show} setShow={setShow} />
        </Route>
        <Route path="/register">
          <Register show={show} setShow={setShow} />
        </Route>
        <Route exact path="/">
          {/* <Home warehouses={warehouseNames} location={warehouseLocations}/> */}
          <Home warehouses={warehousesWithTrueValue} />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/donor">
          <Donor />
        </Route>
        <Route path="/orphanage">
          <Orphanage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};
