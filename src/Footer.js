import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
  return (
    <div className="g-footer">
      <ul className="footer-list-1">
        <li>
          <Link className="footer-list" to="/about-us">About Us</Link>
        </li>
        <li>
          <Link className="footer-list" to="/services">Services</Link>
        </li>
        <li>
          <Link className="footer-list" to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link className="footer-list" to="/address">Address</Link>
        </li>
        <li>
          <Link className="footer-list" to="/work">Work</Link>
        </li>
      </ul>
      <ul className="footer-list-2">
        <li><a className="footer-list" href="https://twitter.com/" target="new"><TwitterIcon></TwitterIcon></a></li>
        <li><a className="footer-list" href="https://facebook.com/" target="new"><FacebookIcon></FacebookIcon></a></li>
        <li><a className="footer-list" href="https://www.youtube.com/" target="new"><YouTubeIcon></YouTubeIcon></a></li>
        <li><a className="footer-list" href="https://instagram.com/" target="new"><InstagramIcon></InstagramIcon></a></li>
      </ul>
      <p className="footer-lastLine">© Copyright 2025 Mobirise. All Rights Reserved.</p>
    </div>
  );
}
