// import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavigationBar() {
  const [ underline, setUnderline ] = useState(false)

  const location = useLocation()
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(splitLocation)

  return (
    <div className="nav-wrapper">
      <ul className="main-menu">
        <li className={splitLocation[1] === "" ? "link-active": "" }><Link to="/">HOME</Link></li>
        <li className={splitLocation[1] === "services" ? "link-active": "" }><Link to="/">SERVICES</Link></li>
        <li className={splitLocation[1] === "projects" ? "link-active": "" }><Link to="/projects">PROJECTS</Link></li>
        <li className={splitLocation[1] === "testimonials" ? "link-active": "" }><Link to="/">TESTIMONIALS</Link></li>
        <li className={splitLocation[1] === "blog" ? "link-active": "" }><Link to="/">BLOG</Link></li>
      </ul>

      <ul className="contact-menu">
        <li className={splitLocation[1] === "about" ? "link-active": "" }><Link to="/">ABOUT</Link></li>
        <li className={splitLocation[1] === "shop" ? "link-active": "" }><Link to="/">SHOP</Link></li>
        <li className={splitLocation[1] === "contact" ? "link-active": "" }><Link to="/">CONTACT</Link></li>
      </ul>
    </div>
  )
}
