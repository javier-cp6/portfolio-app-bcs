// import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom"

export default function NavigationBar() {
  return (
    <div className="nav-wrapper">
      <ul className="main-menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/">SERVICES</Link></li>
        <li><Link to="/">PROJECTS</Link></li>
        <li><Link to="/">TESTIMONIALS</Link></li>
        <li><Link to="/">BLOG</Link></li>
      </ul>

      <ul className="contact-menu">
        <li><Link to="/">ABOUT</Link></li>
        <li><Link to="/">SHOP</Link></li>
        <li><Link to="/">CONTACT</Link></li>
      </ul>
    </div>
  )
}
