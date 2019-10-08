import PropTypes from "prop-types"
import React from "react"
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { Link } from "gatsby"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header>
    <section className="socialIcons">
      <a href="https://twitter.com/reido90">
        <FaTwitterSquare size={40} />
      </a>
      <a href="https://www.facebook.com/DavidReidoNI">
        <FaFacebookSquare size={40} />
      </a>
      <a href="https://www.instagram.com/reido90/">
        <FaInstagram size={40} />
      </a>
    </section>
    <section class="intoSection container">
      <div>
        {" "}
        <Link to="/">
          <h1>David Reid</h1>
          <h2>Web Developer</h2>
        </Link>
      </div>

      <Image />
    </section>
    <nav class="container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Work">Work</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
